import { RxArrowTopRight } from "react-icons/rx";
import { ProjectType } from "../types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-all duration-300 hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-3 flex items-end justify-between">
        <div>
          <h3 className="text-sm font-normal text-text-primary">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs font-extralight text-text-secondary">
            {project.description}
          </p>
        </div>

        <RxArrowTopRight className="h-5 w-5 text-text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
};

export default ProjectCard;
