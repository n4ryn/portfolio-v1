import { RxArrowTopRight, RxGithubLogo } from "react-icons/rx";
import { motion } from "motion/react";

import { useTheme } from "../context/theme.context.tsx";

import { ProjectType } from "../types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { isDarkMode } = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: project.id * 0.1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: project.id * 0.1 + 0.2,
      },
    },
  };

  const imageToUse =
    project.image.length > 1
      ? isDarkMode
        ? project.image[1]
        : project.image[0]
      : project.image[0];

  return (
    <motion.div
      className="rounded-xl shadow-lg shadow-[#14eba3]/20 hover:shadow-[#14eba3]/40 border-b-2 border-r-2 border-[#14eba3]/30"
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="overflow-hidden rounded-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <motion.img
          src={imageToUse}
          alt={project.title}
          className="aspect-[16/10] h-full w-full"
          loading="lazy"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <motion.div className="p-3 flex flex-col gap-2" variants={cardVariants}>
        <div>
          <motion.h3
            className="text-md font-semibold text-text-primary"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="mt-0 text-xs font-normal text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: project.id * 0.1 + 0.4 }}
          >
            {project.projectStart} - {project.projectEnd}
          </motion.p>
          <motion.p
            className="mt-4 text-xs font-light text-text-primary line line-clamp-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: project.id * 0.1 + 0.4 }}
          >
            {project.description}
          </motion.p>
          <motion.div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((item, index) => (
              <p
                className="text-[10px] px-1.5 py-1 rounded-md text-border-primary hover:text-border-primary-hover hover:bg-[#14eba3]/20 transition duration-500 ease-in-out border border-border-primary cursor-pointer"
                key={index}
              >
                {item}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="mt-4 flex justify-around items-center gap-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs flex justify-center items-center gap-2 w-1/2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Github
            <RxGithubLogo className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs flex justify-center items-center gap-2 w-1/2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Website
            <RxArrowTopRight className="h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
