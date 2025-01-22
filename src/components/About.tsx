import { RxDownload } from "react-icons/rx";
import { motion } from "motion/react";

import SocialButtons from "./SocialButtons";

import { socialsInfo } from "../constants/socials";
import { DESCRIPTION_TEXT, INTRO_TEXT } from "../constants/about";

const HighlightedText = ({ text }: { text: string }) => (
  <motion.span
    className="text-text-primary font-medium"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {text}
  </motion.span>
);

const About = () => {
  const handleResumeClick = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1DkH8NYsnjGSvPtMbOcidmrq1viGpPi3l/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Child animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="mb-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl font-light text-text-primary mb-4"
        variants={itemVariants}
      >
        {INTRO_TEXT}
      </motion.h1>

      <motion.p
        className="text-text-secondary font-light text-sm mb-4 leading-6"
        variants={itemVariants}
      >
        {DESCRIPTION_TEXT.parts.map((part, index) =>
          part.highlight ? (
            <HighlightedText key={index} text={part.text} />
          ) : (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {part.text}
            </motion.span>
          )
        )}
      </motion.p>

      <motion.div
        className="flex justify-start items-center gap-4"
        variants={itemVariants}
      >
        <motion.button
          onClick={handleResumeClick}
          className="btn-primary text-sm flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
          <RxDownload className="h-4 w-4" />
        </motion.button>

        {socialsInfo.map((social, index) => (
          <motion.div
            key={social.id}
            variants={itemVariants}
            custom={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SocialButtons social={social} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
