import React from 'react';
import { Palette, Code } from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services() {
  const icons = { 'UI/UX Design Freelancing': Palette, 'UI Development Freelancing': Code };
  return (
    <section id="services" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-stone-800/50 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-slate-200 dark:bg-stone-700 border border-slate-300 dark:border-stone-600 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-stone-300 mb-6">
          Services
        </span>
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 dark:text-stone-100 mb-4">
          What I Offer
        </h2>
        <p className="text-slate-600 dark:text-stone-400 max-w-2xl mx-auto mb-12">
          Freelance design and development for products that need clear UX and solid UI.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.title];
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 text-left hover:border-slate-400 dark:hover:border-stone-500 transition-colors"
              >
                {Icon && (
                  <div className="mb-4 text-sky-600 dark:text-sky-400">
                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 dark:text-stone-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-stone-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
