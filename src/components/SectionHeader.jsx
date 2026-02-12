import React from 'react';

export default function SectionHeader({ label, title, subtitle, bgColor = 'bg-stone-100' }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <span className={`inline-block px-4 py-2 bg-slate-100 dark:bg-stone-800 border border-slate-300 dark:border-stone-700 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-stone-400 mb-6`}>
        {label}
      </span>
      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-stone-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed px-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
