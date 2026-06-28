'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, XIcon } from '@/components/icons';

export default function Hero() {
  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/Sawmod001',
      icon: <GithubIcon className="h-5 w-5" />,
      color: 'hover:text-black dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdusawmod-abolaji-b25604245/',
      icon: <LinkedinIcon className="h-5 w-5" />,
      color: 'hover:text-[#0077b5]',
    },
    {
      name: 'X',
      href: 'https://x.com/Abolajisawmod',
      icon: <XIcon className="h-5 w-5" />,
      color: 'hover:text-black dark:hover:text-gray-300',
    },
    {
      name: 'Facebook',
      href: 'https://web.facebook.com/sawmodabolaji',
      icon: <FacebookIcon className="h-5 w-5" />,
      color: 'hover:text-[#1877f2]',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/abdusawmod_abolaji/',
      icon: <InstagramIcon className="h-5 w-5" />,
      color: 'hover:text-[#e1306c]',
    },
  ];


  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 sm:py-28 bg-grid-pattern"
    >
      {/* Radial Background Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 dark:via-gray-950/50 dark:to-gray-950" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary-glow px-3 py-1 text-xs font-semibold text-primary dark:text-indigo-300 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Available for Freelance & Full-time Roles</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Abdusawmod Akande
              </span>
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-800 dark:text-gray-200">
              Backend Developer
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Building secure, highly-scalable, and performant APIs. I specialize in crafting elegant server-side architecture and data schemas utilizing Node.js, Express, PostgreSQL, and MongoDB.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-opacity-90 hover:shadow-primary/25 hover:translate-y-[-1px] active:translate-y-0 transition-all cursor-pointer"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/cv.pdf"
                download="Abdusawmod_Akande_CV.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-gray-800/80 hover:translate-y-[-1px] active:translate-y-0 transition-all cursor-pointer"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                Connect With Me
              </p>
              <div className="mt-4 flex justify-center lg:justify-start gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 dark:text-gray-500 ${social.color} transition-colors duration-200`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Spinning / Glowing Outer Rings */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-tilt" />
              
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-slate-100 dark:border-gray-900 bg-slate-200 dark:bg-gray-850">
                <Image
                  src="/photo.jpg"
                  alt="Abdusawmod Abolaji Akande"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
