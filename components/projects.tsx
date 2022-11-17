import { ProjectsData } from '../data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <section id="projects">
      <p className="typo-subheadline text-secondary-3">Projects</p>

      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        {ProjectsData.map((projectItem, index) => {
          return <ProjectCard key={index} project={projectItem} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
