import { IconType } from "react-icons";

export interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: IconType;
  isEmail?: boolean;
}
