import { forwardRef } from 'react';
import { ProjectsData } from '@/data';
import ProjectCard from './project-card';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="p-8 md:p-12 lg:p-16 border-b border-zinc-300 dark:border-zinc-900 bg-white dark:bg-[#060608] transition-colors">
      <div className="flex items-center gap-4 mb-8">
        <span className="w-8 h-[1px] bg-lime-400"></span>
        <p className="text-zinc-600 dark:text-zinc-300 font-primary text-sm uppercase tracking-[0.25em]">Projects</p>
      </div>

      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-900 transition-colors">
        {ProjectsData.map((projectItem, index) => {
          return <ProjectCard key={index} project={projectItem} index={index} />;
        })}
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
