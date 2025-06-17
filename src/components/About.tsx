import { useEffect, useState } from "react";
import { RxDownload } from "react-icons/rx";
import { motion } from "motion/react";
import { RoughNotation } from "react-rough-notation";

import SocialButtons from "./SocialButtons";

import { socialsInfo } from "../constants/socials";
import { DESCRIPTION_TEXT } from "../constants/about";

const HighlightedText = ({ text }: { text: string }) => (
  <motion.span
    className="text-text-primary font-medium bg-background-secondary px-2 rounded-md hover:cursor-pointer hover:bg-[#14eba3]/30"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {text}
  </motion.span>
);

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.section
      className="mb-14"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl font-light text-text-primary mb-4 leading-[1.4]"
        variants={itemVariants}
      >
        Crafting{" "}
        <span className="italic font-medium font-serif" data-cursor="true">
          digital experiences
        </span>{" "}
        that{" "}
        <span id="myElement" className="text-md font-medium">
          <RoughNotation
            type="underline"
            color="#14eba3"
            iterations={4}
            show={show}
          >
            matter.
          </RoughNotation>
        </span>
      </motion.h1>

      <motion.p
        className="text-text-secondary font-light text-md mt-6 mb-8 leading-6 text-justify"
        variants={itemVariants}
      >
        {DESCRIPTION_TEXT.parts.map((part, index) =>
          part.highlight ? (
            <HighlightedText key={index} text={part.text} />
          ) : (
            <motion.span
              key={index}
              custom={index}
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
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
