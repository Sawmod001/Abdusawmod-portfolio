'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[#0c0a09] border-t border-stone-900 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand/Name */}
          <div>
            <p className="text-sm font-semibold text-gray-200">
              Abolaji Abdusawmod Akande
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Software Engineer | Full Stack Developer
            </p>
          </div>

          {/* Copyright text & Resume */}
          <div className="text-center sm:text-right flex flex-col items-center sm:items-end">
            <p className="text-xs text-gray-500 mb-2">
              &copy; {new Date().getFullYear()} Abolaji Abdusawmod Akande. All rights reserved.
            </p>
            <a 
              href="/resume.pdf" 
              download="Abolaji_Abdusawmod_Akande_CV.pdf"
              className="text-xs text-primary hover:underline underline-offset-4 transition-all"
            >
              Download Resume (PDF)
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/30 text-gray-400 hover:text-primary transition-all cursor-pointer shadow-sm hover:shadow"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
