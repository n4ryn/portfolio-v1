import { ExperienceType } from "../types";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <div className="group border-l border-gray-200 dark:border-gray-800 pl-4 pb-8">
      <p className="text-sm text-text-secondary mb-1">
        {experience.startDate} - {experience.endDate}
      </p>

      <div className="flex items-center gap-2 mb-2">
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
      </div>

      <p className="text-text-secondary text-sm leading-relaxed">
        {experience.description}
      </p>
    </div>
  );
};

export default ExperienceCard;
