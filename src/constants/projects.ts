import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Dev Portfolio",
    description: "React.js, TypeScript, Tailwind CSS, Framer Motion",
    live: "https://n4ryn.com/",
    github: "https://github.com/n4ryn/portfolio-v1",
    image: ["/project-1-light.png", "/project-1-dark.png"],
    gradient: "from-neutral-200 to-neutral-100",
  },
  {
    id: 2,
    title: "PairPro",
    description: "React.js, Redux, Tailwind CSS, DaisyUI",
    live: "https://pairpro.site",
    github: "https://github.com/n4ryn/fe-pair-pro",
    image: ["/project-2-light.png", "/project-2-dark.png"],
    gradient: "from-neutral-200 to-neutral-100",
  },
  {
    id: 3,
    title: "PairPro Backend",
    description: "Node.js, Express.js, MongoDB, Swagger",
    live: "https://pairpro.site/api/api-docs/#",
    github: "https://github.com/n4ryn/be-pair-pro",
    image: ["/project-3.png"],
    gradient: "from-neutral-200 to-neutral-100",
  },
];
