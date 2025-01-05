import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen grid grid-rows-[1fr_auto]">
        <main className="mx-auto p-6 w-full">
          <Header />
          <About />
          <p className="text-text-primary">Portfolio In Progress</p>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
