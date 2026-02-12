import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ExperienceItem from '../components/ExperienceItem';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-stone-800/50 transition-colors">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Work Experience"
          title="Professional Journey"
          bgColor="bg-white dark:bg-stone-800"
        />

        {/* Timeline */}
        <div className="space-y-0">
          {experience.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
