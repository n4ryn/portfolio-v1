import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="font-bold text-md text-text-primary mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
