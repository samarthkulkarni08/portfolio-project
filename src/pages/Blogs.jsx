import React from 'react';
import SectionHeader from '../components/SectionHeader';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/portfolioData';

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-stone-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader 
          label="Insights & Stories"
          title="Blogs & Case Studies"
          subtitle="Deep dives into my design process, lessons learned, and thoughts on UI/UX design."
        />

        {/* Blog/Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
