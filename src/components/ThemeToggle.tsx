import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "../context/theme.context.tsx";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-background-primary/10 text-text-primary transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute inset-0 transform transition-transform duration-500 rotate-0 
              ${isDarkMode ? "rotate-0 scale-100" : "-rotate-180 scale-0"}`}
        >
          <RxSun className="w-6 h-6 text-yellow-500" />
        </div>
        <div
          className={`absolute inset-0 transform transition-transform duration-500
              ${isDarkMode ? "rotate-180 scale-0" : "rotate-0 scale-100"}`}
        >
          <RxMoon className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
