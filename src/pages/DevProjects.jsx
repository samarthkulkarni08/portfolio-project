import React from 'react';
import SectionHeader from '../components/SectionHeader';
import DevProjectCard from '../components/DevProjectCard';
import { devProjects } from '../data/portfolioData';

export default function DevProjects() {
  return (
    <section id="dev" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-stone-800/50 transition-colors">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Development Work"
          title="Frontend Development Projects"
          subtitle="React applications and web projects built with modern technologies and best practices."
          bgColor="bg-white dark:bg-stone-800"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devProjects.map((project, index) => (
            <DevProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
