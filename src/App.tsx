import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

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
    </ThemeProvider>
  );
}

export default App;
