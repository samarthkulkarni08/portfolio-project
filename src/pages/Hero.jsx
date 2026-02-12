import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden bg-white dark:bg-stone-900 transition-colors">
      <div className="absolute top-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-sky-100/50 dark:from-sky-900/20 to-transparent rounded-full blur-3xl animate-float -z-0" />
      <div className="max-w-7xl w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Profile picture + Available for work pill side by side */}
          <div className="flex flex-row items-center justify-center gap-2 mb-2.5 animate-fade-up delay-100">
            <div className="relative shrink-0">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-white dark:bg-white/95 ring-2 ring-white/80 dark:ring-stone-700/50 shadow-xl">
                <img
                  src="/assets/profile.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 w-[140px] h-[30px] rounded-full bg-slate-800/90 dark:bg-stone-800/95 border border-slate-700/50 dark:border-stone-700/50 animate-fade-up delay-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" aria-hidden />
            <span className="font-sans text-xs font-semibold text-white">
              Available for work
            </span>
          </div>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-[56px] lg:text-7xl xl:text-8xl font-semibold leading-[1.1] mb-6 animate-fade-up delay-300 text-slate-900 dark:text-stone-100">
            I design and build modern experiences
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up delay-400">
            {personalInfo.description}
          </p>
          <div className="animate-fade-up delay-500 text-center">
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-semibold text-sm sm:text-base hover:bg-slate-700 dark:hover:bg-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg group"
              download
            >
              <Download size={20} />
              <span>Download Resume</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
