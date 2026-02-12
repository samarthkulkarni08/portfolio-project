import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const SOCIAL_LINKS = [
  { label: 'Behance', href: 'https://www.behance.net/samarthkulkarni2', iconSlug: 'behance', LucideIcon: ExternalLink },
  { label: 'GitHub', href: 'https://github.com/samarthkulkarni08', iconSlug: 'github', LucideIcon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samarth-kulkarni08', iconSlug: 'linkedin', LucideIcon: Linkedin },
  { label: 'X', href: 'https://x.com/_Samarth_08_', iconSlug: 'x', LucideIcon: ExternalLink },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-stone-950 text-slate-900 dark:text-white transition-colors border-t border-slate-200 dark:border-stone-800">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-slate-200 dark:bg-stone-800 border border-slate-300 dark:border-stone-700 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-stone-400 mb-8">
          Get In Touch
        </span>
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-slate-900 dark:text-stone-100">
          Let's work together
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed mb-12">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-semibold hover:bg-slate-700 dark:hover:bg-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            <span>{personalInfo.email}</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {SOCIAL_LINKS.map(({ label, href, iconSlug, LucideIcon }) => (
            <a
              key={iconSlug}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-200 dark:bg-stone-800 rounded-full hover:bg-slate-300 dark:hover:bg-stone-700 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-stone-500 text-slate-700 dark:text-stone-300 hover:text-slate-900 dark:hover:text-stone-100"
              aria-label={label}
            >
              <LucideIcon className="w-6 h-6" strokeWidth={2} aria-hidden />
            </a>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-slate-300 dark:border-stone-800">
          <p className="text-slate-500 dark:text-stone-500 text-sm">
            © {new Date().getFullYear()} Samarth Kulkarni. Designed & Developed with passion.
          </p>
        </div>
      </div>
    </section>
  );
}
