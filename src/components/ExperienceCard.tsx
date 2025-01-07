import { ExperienceType } from "../types";
import { motion } from "motion/react";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: experience.id * 0.1,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: experience.id * 0.1 + 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative border-l border-border-primary pl-4 pb-8"
    >
      {/* Animated dot on timeline */}
      <motion.div
        className="absolute -left-[5px] top-[6px] h-2 w-2 rounded-full bg-background-tertiary"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: experience.id * 0.1, duration: 0.3 }}
      />

      <motion.div variants={contentVariants}>
        <motion.p
          className="text-sm text-text-secondary mb-1"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {experience.startDate} - {experience.endDate}
        </motion.p>

        <motion.div
          className="flex items-center gap-2 mb-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary font-medium hover:underline"
          >
            {experience.company}
          </a>
          <span className="text-text-secondary">|</span>
          <span className="text-text-primary">{experience.designation}</span>
        </motion.div>

        <motion.p
          className="text-text-secondary text-sm leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: experience.id * 0.1 + 0.3,
              },
            },
          }}
        >
          {experience.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
