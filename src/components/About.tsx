import { RxDownload } from "react-icons/rx";

import SocialButtons from "./SocialButtons";

import { socialsInfo } from "../constants/socials";
import { DESCRIPTION_TEXT, INTRO_TEXT } from "../constants/about";

const HighlightedText = ({ text }: { text: string }) => (
  <span className="text-text-primary font-medium">{text}</span>
);

const About = () => {
  const handleResumeClick = () => {
    // Handle resume download logic
    alert("Resume download clicked");
  };

  return (
    <section className="mb-12">
      <h1 className="text-3xl font-light text-text-primary mb-4">
        {INTRO_TEXT}
      </h1>

      <p className="text-text-secondary font-light text-sm mb-4 leading-6">
        {DESCRIPTION_TEXT.parts.map((part, index) =>
          part.highlight ? (
            <HighlightedText key={index} text={part.text} />
          ) : (
            <span key={index}>{part.text}</span>
          )
        )}
      </p>

      <div className="flex justify-start items-center gap-4">
        <button
          onClick={handleResumeClick}
          className="btn-primary text-sm flex items-center gap-2"
        >
          Resume <RxDownload className="h-4 w-4" />
        </button>

        {socialsInfo.map((social) => (
          <SocialButtons key={social.id} social={social} />
        ))}
      </div>
    </section>
  );
};

export default About;
