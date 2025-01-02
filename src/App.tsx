import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`bg-white dark:bg-black py-8 ${isDarkMode ? "dark" : ""}`}>
      <div className="m-auto h-screen max-w-[600px] p-6 flex flex-col gap-4 items-left">
        <div className="w-full flex justify-between items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <p className="dark:text-white font-bold">n4ryn</p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
            </label>
          </div>

          <div className="flex items-center gap-2 text-sm text-geist-1000">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00AC3A]"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#00CA50]"></span>
            </span>
            <p className="text-black dark:text-white">Open to Work</p>
          </div>
        </div>

        <p className="text-xl font-bold text text-black dark:text-white">
          Hi, I'm Vinay Kumar 👋
        </p>

        <p className="text-black dark:text-white">
          As a software engineer, I craft captivating digital experiences that
          seamlessly blend technical expertise and UI design
        </p>
        <p className="text-black dark:text-white">Portfolio In Progress</p>

        <div></div>
      </div>
    </div>
  );
}

export default App;
