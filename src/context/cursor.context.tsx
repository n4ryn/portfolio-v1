import { createContext, useContext, useState, useEffect } from "react";

type CursorContextType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  cursorSize: number;
  setCursorSize: React.Dispatch<React.SetStateAction<number>>;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [cursorSize, setCursorSize] = useState(30);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverTarget = target.closest(
        "button, a, input, textarea, select, label, [data-cursor='true']"
      );

      if (hoverTarget) {
        setIsActive(true);

        const rect = hoverTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const clampedSize = Math.min(Math.max(size, 60), 100);

        setCursorSize(clampedSize);
      } else {
        setIsActive(false);
        setCursorSize(30);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CursorContext.Provider
      value={{ isActive, setIsActive, cursorSize, setCursorSize }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
