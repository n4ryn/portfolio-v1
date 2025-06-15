import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Dev Portfolio",
    projectStart: "Jan 2025",
    projectEnd: "Jan 2025",
    description: "",
    techStack: "React.js, TypeScript, Tailwind CSS, Framer Motion",
    live: "https://n4ryn.com/",
    github: "https://github.com/n4ryn/portfolio-v1",
    image: ["/project-1-light.png", "/project-1-dark.png"],
  },
  {
    id: 2,
    title: "PairPro",
    description:
      "PairPro is a social platform designed specifically for developers to discover and connect with like-minded peers, making it easy to find collaborators for coding projects, hackathons, or learning together.",
    techStack: "React.js, Redux, Tailwind CSS, DaisyUI",
    live: "https://pairpro.site",
    github: "https://github.com/n4ryn/fe-pair-pro",
    image: ["/project-2-light.png", "/project-2-dark.png"],
    projectStart: "May 2025",
    projectEnd: "Jun 2025",
  },
];
