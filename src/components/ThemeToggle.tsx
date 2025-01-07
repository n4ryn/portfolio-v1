import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "../context/theme.context.tsx";
import { motion, AnimatePresence } from "motion/react";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
  };

  // Animation variants
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  // For different rise/set directions based on icon
  const sunVariants = {
    initial: { opacity: 0, y: 20, scale: 0.5 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: [0.36, 0, 0.66, -0.56],
      },
    },
  };

  const moonVariants = {
    initial: { opacity: 0, y: -20, scale: 0.5 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: [0.36, 0, 0.66, -0.56],
      },
    },
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-background-primary/10 text-text-primary"
      aria-label="Toggle theme"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <div className="relative w-6 h-6">
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.div
              key="sun"
              className="absolute inset-0"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={sunVariants}
            >
              <RxSun className="w-6 h-6 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              className="absolute inset-0"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={moonVariants}
            >
              <RxMoon className="w-6 h-6 text-gray-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
