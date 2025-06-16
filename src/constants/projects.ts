import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Dev Portfolio",
    projectStart: "Jan 2025",
    projectEnd: "Jan 2025",
    description:
      "A minimal, responsive developer portfolio built with React.js, TypeScript, and Tailwind CSS. It features smooth animations using Framer Motion, clean UI.",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "React Animated Cursor",
    ],
    live: "https://n4ryn.com/",
    github: "https://github.com/n4ryn/portfolio-v1",
    image: ["/project-1-light.png", "/project-1-dark.png"],
  },
  {
    id: 2,
    title: "PairPro",
    description:
      "PairPro is a networking app built for developers, helping you connect with others who share your interests and goals to collaborate on exciting projects.",
    techStack: [
      "React.js",
      "Redux",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "AWS",
      "Socket.io",
      "Cloudinary",
    ],
    live: "https://pairpro.site",
    github: "https://github.com/n4ryn/fe-pair-pro",
    image: ["/project-2-light.png", "/project-2-dark.png"],
    projectStart: "May 2025",
    projectEnd: "Jun 2025",
  },
];
