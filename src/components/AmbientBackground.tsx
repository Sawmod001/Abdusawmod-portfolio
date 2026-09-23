'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * AmbientBackground, hero-only cinematic generative tree
 * Adapted from generative-tree.html, tuned for #0c0a09 + amber identity.
 * - Canvas branching tree + particles, low opacity, 30fps throttle
 * - Desktop only, respects prefers-reduced-motion, pointer-events-none
 * - Hero-contained: mask fades at section edge
 */
export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }) as CanvasRenderingContext2D;
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let raf = 0;
    let lastFrame = 0;
    const FRAME_INTERVAL = isMobile ? 70 : 42;
    let running = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let allBranches: any[] = [];
    let treeAlpha = 1;
    let treeState: 'growing' | 'holding' | 'fading' | 'waiting' = 'growing';
    let holdTimer = 0;
    let fadeTimer = 0;
    let waitTimer = 0;
    const HOLD_DURATION = isMobile ? 140 : 180;
    const FADE_DURATION = 90;
    const WAIT_DURATION = 70;
    const MAX_DEPTH = isMobile ? 6 : 7;
    const GROWTH_SPEED_BASE = 0.016;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let particles: any[] = [];
    let particleSprite: HTMLCanvasElement | null = null;
    let windForce = 0;
    let mouseActive = false;
    let shakeAmount = 0;

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
    function rand(lo: number, hi: number) { return Math.random() * (hi - lo) + lo; }
    function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }
    function smoothstep(a: number, b: number, t: number) {
      t = Math.max(0, Math.min(1, (t - a) / (b - a)));
      return t * t * (3 - 2 * t);
    }

    function initParticleSprite() {
      particleSprite = document.createElement('canvas');
      particleSprite.width = 32;
      particleSprite.height = 32;
      const pctx = particleSprite.getContext('2d')!;
      const g = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, 'rgba(251,191,36,0.9)');
      g.addColorStop(0.3, 'rgba(251,146,60,0.35)');
      g.addColorStop(1, 'rgba(200,120,40,0)');
      pctx.fillStyle = g;
      pctx.fillRect(0, 0, 32, 32);
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticleSprite();
    }

    type Branch = {
      x0: number; y0: number; angle: number; length: number; thickness: number;
      depth: number; growthProgress: number; growthSpeed: number;
      children: Branch[]; spawned: boolean; swayPhase: number; swayAmp: number;
      curvature: number; colorShift: number; hueShift: number; parent: Branch | null;
      strokeSeeds: number[]; tipDots: { ox: number; oy: number; size: number; alpha: number }[];
    };

    const PALETTE = [
      { r: 62, g: 36, b: 12 },
      { r: 110, g: 68, b: 22 },
      { r: 172, g: 118, b: 50 },
      { r: 205, g: 158, b: 72 },
      { r: 218, g: 182, b: 108 },
      { r: 228, g: 205, b: 150 },
    ];

    function colorForDepth(depth: number, hueShift: number) {
      const t = depth / MAX_DEPTH;
      const idx = t * (PALETTE.length - 1);
      const i0 = Math.floor(idx);
      const i1 = Math.min(PALETTE.length - 1, i0 + 1);
      const f = idx - i0;
      let r = lerp(PALETTE[i0].r, PALETTE[i1].r, f);
      let g = lerp(PALETTE[i0].g, PALETTE[i1].g, f);
      let b = lerp(PALETTE[i0].b, PALETTE[i1].b, f);
      if (hueShift !== undefined) {
        const strength = t * t * 18;
        r += hueShift * strength;
        g += hueShift * strength * -0.45;
        b += hueShift * strength * -0.12;
      }
      return { r, g, b };
    }

    function createParticle(fullRandom: boolean) {
      return {
        x: rand(W * 0.18, W * 0.82),
        y: fullRandom ? rand(H * 0.15, H * 0.85) : rand(H * 0.55, H),
        vx: rand(-0.1, 0.1),
        vy: rand(-0.28, -0.05),
        size: rand(0.5, 1.8),
        alpha: rand(0.04, 0.16),
        phase: rand(0, Math.PI * 2),
        freq: rand(0.0004, 0.0012),
        life: fullRandom ? rand(0, 1) : 0,
        lifeSpeed: rand(0.0008, 0.0022),
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 10; i++) particles.push(createParticle(true));
    }

    function getSwayAngle(branch: Branch, time: number) {
      let total = 0;
      let b: Branch | null = branch;
      let depth = 0;
      while (b) {
        const a = b.swayAmp;
        total += Math.sin(time * 0.0005 + b.swayPhase) * a;
        total += Math.sin(time * 0.00028 + b.swayPhase * 1.7) * a * 0.55;
        total += Math.sin(time * 0.00011 + b.swayPhase * 0.4) * a * 0.32;
        depth++;
        b = b.parent;
      }
      if (mouseActive) total += windForce * 0.035 * depth;
      if (shakeAmount > 0.01) total += Math.sin(time * 0.014 + branch.swayPhase * 3) * shakeAmount * 0.05 * depth;
      return total;
    }

    function getBranchEnd(branch: Branch, progress: number, time: number) {
      const sway = getSwayAngle(branch, time);
      const angle = branch.angle + sway;
      const len = branch.length * progress;
      const perpX = -Math.sin(angle);
      const perpY = Math.cos(angle);
      const curveOff = branch.curvature * len;
      return { x: branch.x0 + Math.cos(angle) * len + perpX * curveOff, y: branch.y0 + Math.sin(angle) * len + perpY * curveOff };
    }

    function recalcPositions(time: number) {
      for (const b of allBranches) {
        if (b.parent) {
          const pe = getBranchEnd(b.parent, 1, time);
          b.x0 = pe.x; b.y0 = pe.y;
        }
      }
    }

    function createTree() {
      allBranches = [];
      const trunkLen = H * rand(0.20, 0.26);
      const trunkThick = Math.max(7, W * 0.012);
      const trunkAngle = -Math.PI / 2 + rand(-0.06, 0.06);
      const approxTreeH = trunkLen * 3.2;
      const baseY = H * 0.98 + approxTreeH * 0.05;
      allBranches.push({
        x0: W / 2 + rand(-W * 0.04, W * 0.04),
        y0: baseY,
        angle: trunkAngle,
        length: trunkLen,
        thickness: trunkThick,
        depth: 0,
        growthProgress: 0,
        growthSpeed: GROWTH_SPEED_BASE * rand(0.9, 1.1),
        children: [], spawned: false,
        swayPhase: rand(0, Math.PI * 2), swayAmp: 0.0007,
        curvature: rand(-0.012, 0.012), colorShift: rand(-6, 6), hueShift: 0, parent: null,
        strokeSeeds: [rand(-1, 1), rand(-1, 1), rand(-1, 1), rand(-1, 1)],
        tipDots: [],
      });
      treeState = 'growing'; holdTimer = 0; fadeTimer = 0; waitTimer = 0; treeAlpha = 1;
      initParticles();
    }

    function spawnChildren(parent: Branch) {
      if (parent.depth >= MAX_DEPTH) return;
      let numChildren: number;
      if (parent.depth < 1) numChildren = 2 + (Math.random() < 0.3 ? 1 : 0);
      else if (parent.depth < 3) numChildren = 2 + (Math.random() < 0.35 ? 1 : 0);
      else numChildren = Math.random() < 0.22 ? 3 : 2;
      const pruneChance = parent.depth <= 3 ? 0 : parent.depth <= 5 ? 0.1 : parent.depth <= 7 ? 0.2 : 0.33;
      if (Math.random() < pruneChance) numChildren = Math.max(1, numChildren - 1);
      const spread = parent.depth < 2 ? rand(0.30, 0.45) : rand(0.36, 0.58);
      for (let i = 0; i < numChildren; i++) {
        let angleOffset: number;
        if (numChildren === 1) angleOffset = rand(-0.22, 0.22);
        else if (numChildren === 2) angleOffset = (i === 0 ? -1 : 1) * rand(0.16, spread);
        else angleOffset = (i - 1) * spread + rand(-0.09, 0.09);
        const childAngle = parent.angle + angleOffset;
        const lengthFactor = rand(0.58, 0.75);
        const thickFactor = rand(0.5, 0.66);
        const ep = getBranchEnd(parent, 1, 0);
        const tipDots: Branch['tipDots'] = [];
        const childDepth = parent.depth + 1;
        if (childDepth >= MAX_DEPTH) {
          const count = Math.random() < 0.35 ? 2 : 1;
          for (let d = 0; d < count; d++) tipDots.push({ ox: rand(-1.5, 1.5), oy: rand(-1.5, 1.5), size: rand(0.7, 1.3), alpha: rand(0.07, 0.16) });
        }
        const child: Branch = {
          x0: ep.x, y0: ep.y, angle: childAngle,
          length: parent.length * lengthFactor,
          thickness: Math.max(0.4, parent.thickness * thickFactor),
          depth: childDepth, growthProgress: 0,
          growthSpeed: GROWTH_SPEED_BASE * rand(1.0, 1.45) * (1 + parent.depth * 0.1),
          children: [], spawned: false,
          swayPhase: rand(0, Math.PI * 2), swayAmp: 0.0016 * (parent.depth + 1) * rand(0.7, 1.25),
          curvature: rand(-0.035, 0.035) * (1 + parent.depth * 0.1),
          colorShift: rand(-10, 10), hueShift: Math.max(-1, Math.min(1, parent.hueShift + rand(-0.32, 0.32))),
          parent, strokeSeeds: [rand(-1, 1), rand(-1, 1), rand(-1, 1)], tipDots,
        };
        parent.children.push(child);
        allBranches.push(child);
      }
    }

    function updateBranches() {
      let allDone = true;
      for (const b of allBranches) {
        if (b.growthProgress < 1) { b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed); allDone = false; }
        if (b.growthProgress >= 0.65 && !b.spawned) { b.spawned = true; spawnChildren(b); }
      }
      return allDone;
    }

    function drawBranch(b: Branch, time: number) {
      if (b.growthProgress <= 0) return;
      const sway = getSwayAngle(b, time);
      const angle = b.angle + sway;
      const progress = easeOutCubic(b.growthProgress);
      const len = b.length * progress;
      const x1 = b.x0, y1 = b.y0;
      const perpX = -Math.sin(angle), perpY = Math.cos(angle);
      const curveOff = b.curvature * len * 1.35;
      const cpx1 = x1 + Math.cos(angle) * len * 0.33 + perpX * curveOff * 0.4;
      const cpy1 = y1 + Math.sin(angle) * len * 0.33 + perpY * curveOff * 0.4;
      const cpx2 = x1 + Math.cos(angle) * len * 0.66 + perpX * curveOff * 0.82;
      const cpy2 = y1 + Math.sin(angle) * len * 0.66 + perpY * curveOff * 0.82;
      const x2 = x1 + Math.cos(angle) * len + perpX * curveOff * 0.65;
      const y2 = y1 + Math.sin(angle) * len + perpY * curveOff * 0.65;
      const col = colorForDepth(b.depth, b.hueShift);
      const depthT = b.depth / MAX_DEPTH;
      const baseAlpha = b.depth <= 1 ? 0.88 : b.depth <= 5 ? lerp(0.84, 0.62, depthT) : lerp(0.62, 0.3, (depthT - 0.5) * 2);
      const strokeCount = b.depth < 3 ? 4 : b.depth < 6 ? 3 : 2;
      const thickBase = b.thickness;
      const thickTaper = lerp(thickBase, thickBase * 0.32, progress);
      for (let s = 0; s < strokeCount; s++) {
        const seed = b.strokeSeeds[s] || 0;
        const normalizedS = strokeCount > 1 ? (s / (strokeCount - 1) - 0.5) : 0;
        const offsetAmt = normalizedS * thickBase * 0.32 + seed * thickBase * 0.07;
        const ox = perpX * offsetAmt, oy = perpY * offsetAmt;
        const shift = normalizedS * 20 + b.colorShift * 0.28;
        const r = Math.max(0, Math.min(255, col.r + shift));
        const g = Math.max(0, Math.min(255, col.g + shift * 0.62));
        const bb = Math.max(0, Math.min(255, col.b + shift * 0.38));
        const isCore = s === Math.floor(strokeCount / 2);
        const alpha = baseAlpha * (isCore ? 1 : 0.48) * treeAlpha;
        const thick = thickTaper * (isCore ? 1 : lerp(0.62, 0.42, Math.abs(normalizedS)));
        ctx.beginPath();
        ctx.moveTo(x1 + ox, y1 + oy);
        ctx.bezierCurveTo(cpx1 + ox, cpy1 + oy, cpx2 + ox, cpy2 + oy, x2 + ox, y2 + oy);
        ctx.strokeStyle = `rgba(${r | 0},${g | 0},${bb | 0},${alpha})`;
        ctx.lineWidth = thick;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      if (b.depth >= 4 && b.depth < MAX_DEPTH - 1 && b.growthProgress > 0.82) {
        const glowAlpha = smoothstep(0.82, 1, b.growthProgress) * 0.05 * (b.depth / MAX_DEPTH) * treeAlpha;
        const glowR = Math.max(3, thickBase * 1.8);
        const grd = ctx.createRadialGradient(x2, y2, 0, x2, y2, glowR);
        grd.addColorStop(0, `rgba(${Math.min(255, col.r + 28) | 0},${Math.min(255, col.g + 18) | 0},${Math.min(255, col.b + 12) | 0},${glowAlpha})`);
        grd.addColorStop(0.5, `rgba(${col.r | 0},${col.g | 0},${col.b | 0},${glowAlpha * 0.22})`);
        grd.addColorStop(1, `rgba(${col.r | 0},${col.g | 0},${col.b | 0},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(x2, y2, glowR, 0, Math.PI * 2); ctx.fill();
      }
      if (b.tipDots.length > 0 && b.growthProgress > 0.92) {
        const tipFade = smoothstep(0.92, 1, b.growthProgress) * treeAlpha;
        const tr = Math.min(255, col.r * 1.28 + 28);
        const tg2 = Math.min(255, col.g * 1.28 + 22);
        const tb = Math.min(255, col.b * 1.18 + 18);
        for (const dot of b.tipDots) {
          const dx = x2 + dot.ox, dy = y2 + dot.oy;
          const da = tipFade * dot.alpha;
          const ds = dot.size;
          const tg = ctx.createRadialGradient(dx, dy, 0, dx, dy, ds * 2.2);
          tg.addColorStop(0, `rgba(${tr | 0},${tg2 | 0},${tb | 0},${da * 0.55})`);
          tg.addColorStop(0.5, `rgba(${col.r | 0},${col.g | 0},${col.b | 0},${da * 0.14})`);
          tg.addColorStop(1, `rgba(${col.r | 0},${col.g | 0},${col.b | 0},0)`);
          ctx.fillStyle = tg;
          ctx.beginPath(); ctx.arc(dx, dy, ds * 2.2, 0, Math.PI * 2); ctx.fill();
        }
      }
    }

    function updateParticles(time: number) {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time * p.freq + p.phase) * 0.22;
        p.y += p.vy;
        p.life += p.lifeSpeed;
        if (p.life > 1 || p.y < -10 || p.x < -10 || p.x > W + 10) particles[i] = createParticle(false);
      }
    }

    function drawParticles(globalAlpha: number) {
      if (!particleSprite) return;
      for (const p of particles) {
        const lifeFade = p.life < 0.15 ? p.life / 0.15 : p.life > 0.82 ? (1 - p.life) / 0.18 : 1;
        const a = p.alpha * lifeFade * globalAlpha * 0.55;
        if (a < 0.005) continue;
        const s = p.size * 2.6;
        ctx.globalAlpha = a;
        ctx.drawImage(particleSprite, p.x - s, p.y - s, s * 2, s * 2);
      }
      ctx.globalAlpha = 1;
    }

    function drawScene(time: number) {
      ctx.fillStyle = '#0c0a09';
      ctx.fillRect(0, 0, W, H);
      if (treeAlpha > 0.04) {
        const cx = W / 2, cy = H * 0.4;
        const canopyGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, H * 0.42);
        canopyGlow.addColorStop(0, `rgba(60,32,10,${0.16 * treeAlpha})`);
        canopyGlow.addColorStop(0.5, `rgba(35,18,6,${0.07 * treeAlpha})`);
        canopyGlow.addColorStop(1, 'rgba(12,10,9,0)');
        ctx.fillStyle = canopyGlow;
        ctx.fillRect(0, 0, W, H);
        const groundGrad = ctx.createRadialGradient(W / 2, H, 0, W / 2, H, H * 0.32);
        groundGrad.addColorStop(0, `rgba(70,38,10,${0.09 * treeAlpha})`);
        groundGrad.addColorStop(1, 'rgba(12,10,9,0)');
        ctx.fillStyle = groundGrad;
        ctx.fillRect(0, H * 0.55, W, H * 0.45);
      }
      recalcPositions(time);
      for (const b of allBranches) drawBranch(b, time);
      updateParticles(time);
      drawParticles(treeAlpha);
      const vig = ctx.createRadialGradient(W / 2, H / 2, W * 0.32, W / 2, H / 2, W * 0.78);
      vig.addColorStop(0, 'rgba(12,10,9,0)');
      vig.addColorStop(1, 'rgba(4,3,2,0.42)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);
    }

    function frame(time: number) {
      if (!running) return;
      // @ts-ignore heroVisible may be undefined on first tick
      if (typeof heroVisible !== 'undefined' && !heroVisible) { raf = requestAnimationFrame(frame); return; }
      if (time - lastFrame < FRAME_INTERVAL) { raf = requestAnimationFrame(frame); return; }
      lastFrame = time;
      if (shakeAmount > 0.01) shakeAmount *= 0.94; else shakeAmount = 0;
      switch (treeState) {
        case 'growing': {
          const done = updateBranches();
          drawScene(time);
          if (done) { treeState = 'holding'; holdTimer = 0; }
          break;
        }
        case 'holding': {
          drawScene(time);
          holdTimer++;
          if (holdTimer >= HOLD_DURATION) { treeState = 'fading'; fadeTimer = 0; }
          break;
        }
        case 'fading': {
          fadeTimer++;
          treeAlpha = Math.max(0, 1 - fadeTimer / FADE_DURATION);
          drawScene(time);
          if (fadeTimer >= FADE_DURATION) { treeState = 'waiting'; waitTimer = 0; }
          break;
        }
        case 'waiting': {
          ctx.fillStyle = '#0c0a09';
          ctx.fillRect(0, 0, W, H);
          waitTimer++;
          if (waitTimer >= WAIT_DURATION) createTree();
          break;
        }
      }
      raf = requestAnimationFrame(frame);
    }

    // init - pause when hero offscreen
    resize();
    createTree();
    const heroEl = canvas.parentElement?.parentElement as HTMLElement | null;
    let heroVisible = true;
    if (heroEl && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => { heroVisible = entries[0].isIntersecting; if (heroVisible && running) { lastFrame = performance.now(); raf = requestAnimationFrame(frame); } }, { threshold: 0 });
      io.observe(heroEl);
    }
    raf = requestAnimationFrame(frame);

    const onResize = () => { resize(); createTree(); };
    window.addEventListener('resize', onResize);

    const handleMove = (e: MouseEvent) => {
      mouseActive = true;
      windForce = (e.clientX - W / 2) / (W / 2);
    };
    const handleLeave = () => { mouseActive = false; windForce = 0; };
    const handleClick = () => { shakeAmount = 0.9; };

    // bind to parent section for contained wind
    const section = canvas.parentElement;
    section?.addEventListener('mousemove', handleMove as EventListener);
    section?.addEventListener('mouseleave', handleLeave);
    section?.addEventListener('click', handleClick);

    const vis = () => {
      if (document.hidden) { running = false; cancelAnimationFrame(raf); }
      else { running = true; lastFrame = performance.now(); raf = requestAnimationFrame(frame); }
    };
    document.addEventListener('visibilitychange', vis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      section?.removeEventListener('mousemove', handleMove as EventListener);
      section?.removeEventListener('mouseleave', handleLeave);
      section?.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', vis);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden block"
      style={{
        maskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
      }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-[0.22] sm:opacity-[0.28] lg:opacity-[0.32]"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
      {/* extra vignette + warm wash to tie to page palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0a09]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(251,146,60,0.06),transparent_55%)]" />
    </div>
  );
}

