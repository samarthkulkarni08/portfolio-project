import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { designProjects } from '../data/portfolioData';

export default function DesignProjects() {
  return (
    <section id="design" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-stone-900 transition-colors border-t border-slate-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader 
          label="Design Work"
          title="UI/UX Design Projects"
          subtitle="A selection of design projects showcasing user research, wireframing, prototyping, and visual design."
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
