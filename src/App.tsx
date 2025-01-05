import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background-primary min-h-screen py-8">
        <div className="m-auto max-w-[600px] p-6 flex flex-col gap-4 items-left">
          <Header />

          <p className="text-xl font-bold text-text-primary">
            Hi, I'm Vinay Kumar 👋
          </p>

          <p className="text-text-primary">
            As a Full Stack Developer, I craft captivating digital experiences
            that seamlessly blend technical expertise and UI design
          </p>
          <p className="text-text-primary">Portfolio In Progress</p>

          <div></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
