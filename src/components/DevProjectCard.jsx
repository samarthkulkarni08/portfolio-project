import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function DevProjectCard({ project }) {
  const hasValidLink = project.link && project.link !== '#';

  return (
    <div className="group bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-400 dark:hover:border-stone-500 hover:-translate-y-1 transition-all duration-400 shadow-sm dark:shadow-none">
      {/* Cover image */}
      <div className="h-48 sm:h-56 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="font-sans text-2xl sm:text-3xl text-slate-400 dark:text-stone-500">Dev</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-stone-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
        {hasValidLink && (
          <a
            href={project.link}
            className="p-2 bg-slate-100 dark:bg-stone-700 rounded-full hover:bg-slate-800 dark:hover:bg-stone-100 hover:text-white dark:hover:text-stone-900 transition-colors flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open project"
          >
            <ExternalLink size={18} />
          </a>
        )}
        </div>
        <p className="text-slate-600 dark:text-stone-400 leading-relaxed mb-6 text-sm sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-stone-700 border border-slate-200 dark:border-stone-600 rounded-full text-xs font-medium text-slate-700 dark:text-stone-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
