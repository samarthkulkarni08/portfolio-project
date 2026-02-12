import React, { useState, useEffect, useLayoutEffect } from 'react';

import Navigation from './components/Navigation';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import DesignProjects from './pages/DesignProjects';
import DevProjects from './pages/DevProjects';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

const THEME_KEY = 'portfolio-theme';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem(THEME_KEY);
    if (saved !== null) return saved === 'dark';
    return true; // default to dark theme
  });

  // Apply theme to <html> so the entire site (all Tailwind dark: styles) switches
  useLayoutEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light');
    }
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'experience', 'design', 'dev', 'blogs', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors ${isDark ? 'dark bg-stone-900 text-stone-100' : 'bg-white text-slate-900'}`}>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.05);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out both;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass {
          background: rgba(250, 250, 249, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .dark .glass {
          background: rgba(28, 25, 23, 0.85);
        }
      `}</style>

      <Navigation
        isScrolled={isScrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
      />

      <Hero />
      <About />
      <Services />
      <Experience />
      <DesignProjects />
      <DevProjects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
