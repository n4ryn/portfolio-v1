import ThemeToggle from "./ThemeToggle";
import { motion } from "motion/react";

const Header = () => {
  const leftContentVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const rightContentVariants = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="flex justify-between items-center mb-16">
      <motion.div
        className="flex items-center gap-4"
        initial="hidden"
        animate="visible"
        variants={leftContentVariants}
      >
        <motion.a
          href="/"
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/vinay.jpeg"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
        </motion.a>
        <div className="flex flex-col">
          <p className="text-text-primary font-bold text-md">Vinay Kumar</p>
          <p className="text-text-secondary font-normal text-sm">
            Fullstack Developer
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightContentVariants}
      >
        <ThemeToggle />
      </motion.div>
    </div>
  );
};

export default Header;
