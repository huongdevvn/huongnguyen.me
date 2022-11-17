import Link from 'next/link';
import ShareIcon from '../public/ic-share.svg';
import { Project } from '../types';
import ExportedImage from 'next-image-export-optimizer';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border-2 border-line rounded-lg overflow-hidden">
      <div className="w-full h-[200px] relative">
        <ExportedImage
          alt="Cover Image"
          src={project.image}
          style={{ objectFit: 'cover' }}
          useWebp={true}
          fill
          priority
        ></ExportedImage>
      </div>
      <div className="p-4">
        <p className="typo-body font-bold text-secondary-4">{project.title}</p>
        <div className="flex flex-wrap gap-x-4 mt-2">
          {project.stack.map((item, index) => {
            return (
              <p key={index} className="typo-label-2 text-secondary-1">
                {item}
              </p>
            );
          })}
        </div>
        <p className="typo-label-2 text-secondary-2 mt-4 line-clamp-6 lg:line-clamp-3">
          {project.summary}
        </p>

        <div className="flex mt-2">
          <Link href={project.url} target="_blank">
            <span className="fill-secondary-4 hover:fill-secondary-3">
              <ShareIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
