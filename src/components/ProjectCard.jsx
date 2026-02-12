import React from 'react';

export default function ProjectCard({ project }) {
  const href = project.link && project.link !== '#' ? project.link : undefined;
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-400 dark:hover:border-stone-500 hover:-translate-y-2 transition-all duration-400 cursor-pointer shadow-sm dark:shadow-none block"
    >
      <div className="h-48 sm:h-56 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="font-sans text-2xl sm:text-3xl text-slate-400 dark:text-stone-500">Design</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>
      <div className="p-4 sm:p-6">
        <div className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
          {project.type}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-stone-100 mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-stone-700 border border-slate-200 dark:border-stone-600 rounded-full text-xs font-medium text-slate-700 dark:text-stone-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
