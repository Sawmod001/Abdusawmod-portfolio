'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, XIcon } from '@/components/icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'sawmodabolaji@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const socials = [
    {
      name: 'GitHub',
      username: 'Sawmod001',
      href: 'https://github.com/Sawmod001',
      icon: <GithubIcon className="h-6 w-6 text-slate-800 dark:text-gray-200" />,
      color: 'hover:border-black/50 dark:hover:border-white/50',
    },
    {
      name: 'LinkedIn',
      username: 'Abdusawmod Abolaji',
      href: 'https://www.linkedin.com/in/abdusawmod-abolaji-b25604245/',
      icon: <LinkedinIcon className="h-6 w-6 text-[#0077b5]" />,
      color: 'hover:border-[#0077b5]/50',
    },
    {
      name: 'X',
      username: '@Abolajisawmod',
      href: 'https://x.com/Abolajisawmod',
      icon: <XIcon className="h-6 w-6 text-slate-800 dark:text-gray-200" />,
      color: 'hover:border-black/50 dark:hover:border-white/50',
    },
    {
      name: 'Facebook',
      username: 'Sawmod Abolaji',
      href: 'https://web.facebook.com/sawmodabolaji',
      icon: <FacebookIcon className="h-6 w-6 text-[#1877f2]" />,
      color: 'hover:border-[#1877f2]/50',
    },
    {
      name: 'Instagram',
      username: '@abdusawmod_abolaji',
      href: 'https://www.instagram.com/abdusawmod_abolaji/',
      icon: <InstagramIcon className="h-6 w-6 text-[#e1306c]" />,
      color: 'hover:border-[#e1306c]/50',
    },
  ];


  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
            Let&apos;s build
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white mt-2">
            Have a product, system, or technical problem worth building?
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-gray-400">
            Reach out directly via email or connect with me on social media. I&apos;m always open to discussing engineering challenges and new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Direct Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl glass-panel p-8 relative overflow-hidden"
          >
            {/* Visual background gradient circle */}
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />

            <div>
              <span className="inline-flex items-center rounded-md bg-badge-bg px-2.5 py-0.5 text-xs font-semibold text-badge-text mb-6">
                Direct Communication
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let&apos;s Build Something Scalable
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                I&apos;m always open to discussing web application architectures, secure full-stack implementations, REST API designs, and complex data models.
              </p>
            </div>

            <div className="space-y-6">
              {/* Explicit Email Box */}
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-gray-900/80 border border-slate-200/50 dark:border-gray-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 dark:text-gray-100 truncate">
                    {emailAddress}
                  </span>
                </div>
                
                {/* Copy Button */}
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 border border-slate-200 dark:border-gray-800 text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all cursor-pointer shadow-sm flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="h-4.5 w-4.5 text-green-500" />
                  ) : (
                    <Copy className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>

              {/* Direct Mailto Button */}
              <a
                href={`mailto:${emailAddress}`}
                className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow hover:bg-opacity-95 transition-all cursor-pointer"
              >
                Send Email Directly
                <Send className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Social Links Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between rounded-xl glass-panel p-5 ${social.color} transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-gray-900 border border-slate-200/50 dark:border-gray-800/80 shadow-sm group-hover:scale-105 transition-transform">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {social.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      {social.username}
                    </p>
                  </div>
                </div>
                
                {/* Arrow indicator */}
                <div className="h-8 w-8 rounded-full border border-slate-200 dark:border-gray-800 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-all">
                  <span className="text-xs font-bold font-mono">→</span>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
