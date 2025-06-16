import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AnimatedCursor from "react-animated-cursor";

import { ThemeProvider } from "./provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-96px)] flex flex-col">
        <main className="mx-auto p-6 w-full">
          <Header />
          <About />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>

      {/* Custom cursor */}
      <AnimatedCursor
        innerScale={0.6}
        innerSize={10}
        outerScale={2}
        outerSize={30}
        color="20, 235, 163"
        innerStyle={{}}
        outerStyle={{}}
        outerAlpha={0.3}
        showSystemCursor={true}
      />
    </ThemeProvider>
  );
}

export default App;
