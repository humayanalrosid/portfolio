import React from 'react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-6 lg:p-12 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}