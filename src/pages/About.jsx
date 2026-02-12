import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillCard from '../components/SkillCard';
import { about, skills } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-stone-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="About Me"
          title={about.heading}
          subtitle={about.description}
        />

        {/* Skills - centered, compact */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-slate-800 dark:text-stone-100 mb-6">Skills & Tools</h3>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
            <div className="inline-block">
              <h4 className="text-xs font-bold text-slate-600 dark:text-stone-400 uppercase tracking-wider mb-2">Design</h4>
              <div className="flex flex-wrap justify-center gap-1">
                {skills.design.map((skill, index) => (
                  <SkillCard key={index} skill={skill} compact />
                ))}
              </div>
            </div>

            <div className="inline-block">
              <h4 className="text-xs font-bold text-slate-600 dark:text-stone-400 uppercase tracking-wider mb-2">Frontend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.frontend.map((skill, index) => (
                  <SkillCard key={index} skill={skill} compact />
                ))}
              </div>
            </div>

            <div className="inline-block">
              <h4 className="text-xs font-bold text-slate-600 dark:text-stone-400 uppercase tracking-wider mb-2">Database & authentication</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.database.map((skill, index) => (
                  <SkillCard key={index} skill={skill} compact />
                ))}
              </div>
            </div>

            <div className="inline-block">
              <h4 className="text-xs font-bold text-slate-600 dark:text-stone-400 uppercase tracking-wider mb-2">Tools</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.tools.map((skill, index) => (
                  <SkillCard key={index} skill={skill} compact />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
