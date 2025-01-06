import { experience } from "../constants/experience";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="mb-12">
      <h2 className="font-bold text-md text-text-primary mb-4">Experience</h2>

      <div className="space-y-2">
        {experience.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
