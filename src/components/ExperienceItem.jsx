import React from 'react';

export default function ExperienceItem({ experience }) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-12 border-l-2 border-slate-200 dark:border-stone-700 last:pb-0 group">
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 bg-slate-800 dark:bg-stone-100 rounded-full border-4 border-slate-50 dark:border-stone-800 group-hover:bg-sky-500 dark:group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-300" />
      <div className="bg-white dark:bg-stone-800 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-stone-700 hover:border-slate-400 dark:hover:border-stone-500 hover:shadow-lg transition-all duration-300 shadow-sm dark:shadow-none">
        <div className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
          {experience.period}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-stone-100 mb-1">
          {experience.role}
        </h3>
        <div className="text-base text-slate-600 dark:text-stone-400 font-medium mb-3">
          {experience.company}
        </div>
        <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-sm sm:text-base">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
