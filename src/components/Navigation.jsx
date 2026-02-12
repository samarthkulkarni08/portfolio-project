import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation({ isScrolled, activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection, isDark, onToggleTheme }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'design', label: 'Design Projects' },
    { id: 'dev', label: 'Dev Projects' },
    { id: 'blogs', label: 'Blogs & Case Studies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-stone-200 dark:border-stone-700 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 sm:h-20 gap-4">
          {/* Left: empty so center is visually centered */}
          <div className="hidden md:block" />

          {/* Center: pill with nav links (no logo) */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className={`flex items-center gap-1 sm:gap-2 lg:gap-4 px-4 sm:px-5 lg:px-6 py-2.5 rounded-full border transition-colors ${
                isDark
                  ? 'bg-stone-800 border-stone-700'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 sm:px-3 py-1 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? isDark
                        ? 'text-stone-100 bg-stone-700'
                        : 'text-slate-900 bg-white shadow-sm'
                      : isDark
                        ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-700/50'
                        : 'text-stone-600 hover:text-slate-900 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: theme toggle + mobile menu */}
          <div className="flex items-center justify-end gap-1">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-slate-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-900 dark:text-stone-100 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 dark:border-stone-700">
            <div className="rounded-2xl bg-stone-200/90 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
