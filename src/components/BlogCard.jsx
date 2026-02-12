import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function BlogCard({ blog }) {
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  const isPdf = blog.isPdf || (blog.link && blog.link.toLowerCase().endsWith('.pdf'));
  const hasLink = blog.link && blog.link !== '#';

  const handleClick = () => {
    if (!hasLink) return;
    if (isPdf) {
      setPdfModalOpen(true);
    } else {
      window.open(blog.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <article
        role={hasLink ? 'button' : undefined}
        tabIndex={hasLink ? 0 : undefined}
        onClick={hasLink ? handleClick : undefined}
        onKeyDown={hasLink ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } } : undefined}
        className="group w-full min-h-[200px] bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:border-slate-400 dark:hover:border-stone-500 hover:-translate-y-1 transition-all duration-400 cursor-pointer shadow-sm dark:shadow-none"
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            blog.type === 'Case Study'
              ? 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300'
              : 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
          }`}>
            {blog.type}
          </span>
          <span className="text-xs text-slate-600 dark:text-stone-400 font-medium">{blog.date}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-stone-100 mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-stone-700 gap-2 flex-wrap">
          <span className="text-xs text-slate-600 dark:text-stone-400 font-medium">{blog.readTime}</span>
          <div className="flex items-center gap-2">
            {blog.linkedInUrl && (
              <a
                href={blog.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline"
              >
                Read on LinkedIn
              </a>
            )}
            <ArrowRight size={16} className="text-slate-500 dark:text-stone-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-1 transition-all shrink-0" />
          </div>
        </div>
      </article>

      {/* PDF reader modal */}
      {pdfModalOpen && isPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setPdfModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="PDF viewer"
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800">
              <span className="text-sm font-medium text-slate-700 dark:text-stone-300 truncate pr-4">
                {blog.title}
              </span>
              <button
                type="button"
                onClick={() => setPdfModalOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-stone-600 transition-colors text-slate-600 dark:text-stone-400"
                aria-label="Close PDF viewer"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={`${blog.link}#toolbar=1`}
              title={blog.title}
              className="flex-1 w-full min-h-0 border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
