import Link from 'next/link';
import type { Project } from '~types';
import Image from 'next/image';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div className="bg-white dark:bg-zinc-950 p-8 flex flex-col group hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-all border-b border-zinc-200 dark:border-zinc-900 lg:border-none relative">
      <div className="w-full h-[240px] relative overflow-hidden mb-8 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
        <Image
          alt={project.title}
          src={project.image}
          style={{ objectFit: 'cover' }}
          fill
          priority
          className="transition-all duration-700 scale-100 group-hover:scale-105 opacity-100 dark:opacity-90 brightness-100 dark:brightness-110 group-hover:brightness-110"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        {/* Title Group */}
        <div className="mb-8">
          <p className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] font-bold uppercase tracking-[0.25em] mb-2 scale-y-90 origin-left">
            {project.title.split(' // ')[0]}
          </p>
          <h3 className="font-primary text-2xl font-black text-zinc-950 dark:text-zinc-100 tracking-tight leading-none uppercase">
            {project.title.split(' // ')[1]}
          </h3>
        </div>

        {/* Tech Stack - Improved Badge Design */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((item, i) => (
            <span 
              key={i} 
              className="font-mono text-[9px] px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 uppercase tracking-widest group-hover:border-lime-500/30 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Content Group */}
        <div className="flex-1 flex flex-col">
          <p className="font-primary text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 border-l border-zinc-200 dark:border-zinc-800 pl-6 py-1">
            {project.summary}
          </p>

          <Link 
            href={project.url} 
            target="_blank"
            className="mt-auto group/btn w-full flex items-center justify-center border border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 py-4 px-6 hover:bg-zinc-950 dark:hover:bg-zinc-100 transition-all duration-500 relative"
          >
            <span className="text-[10px] font-primary font-black tracking-[0.3em] text-zinc-950 dark:text-zinc-100 group-hover/btn:text-white dark:group-hover/btn:text-zinc-950 uppercase relative z-10">
              Visit Website
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
