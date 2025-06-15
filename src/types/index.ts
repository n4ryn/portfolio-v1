import { IconType } from "react-icons";

export interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

export interface SocialLinkType {
  id: number;
  name: string;
  url: string;
  icon: IconType;
  isEmail?: boolean;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  live: string;
  github: string;
  image: string[];
  projectStart: string;
  projectEnd: string;
  techStack: string;
}

export interface ExperienceType {
  id: number;
  company: string;
  companyUrl: string;
  designation: string;
  startDate: string;
  endDate: string;
  description: string;
}
