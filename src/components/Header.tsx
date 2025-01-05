import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src="/vinay.webp" alt="Logo" className="h-14 w-14 rounded-full" />
      <ThemeToggle />
    </div>
  );
};

export default Header;
