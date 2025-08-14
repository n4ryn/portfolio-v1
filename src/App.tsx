import About from "./components/About";
import Blogs from "./components/Blogs.tsx";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

import { ThemeProvider } from "./provider/ThemeProvider";
import { CursorProvider } from "./context/cursor.context.tsx";

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <div className="min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-96px)] flex flex-col">
          <Cursor />
          <main className="mx-auto p-6 w-full">
            <Header />
            <About />
            <Projects />
            <Blogs />
            <Experience />
          </main>
          <Footer />
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
