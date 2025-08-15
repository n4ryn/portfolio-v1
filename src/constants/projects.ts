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
      "GSAP",
      "Rough Notation",
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
  {
    id: 3,
    title: "GenAi Tokenizer",
    description:
      "GenAi Tokenizer is an interactive tokenizer playground to explore how text breaks into tokens, how unique token IDs are assigned, and how decoding works - all powered by a custom tokenizer.",
    techStack: [
      "React.js",
      "TypeScript",
      "Github Gist API",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Vercel",
    ],
    live: "https://genai-tokenizer.vercel.app",
    github: "https://github.com/n4ryn/genai-tokenizer",
    image: ["/project-3.png"],
    projectStart: "Aug 2025",
    projectEnd: "Aug 2025",
  },
  {
    id: 4,
    title: "ChatWiz",
    description:
      "ChatWiz is a multi-persona AI chat app with Markdown responses, code highlighting, and per-room chat history.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Vercel",
      "OpenAI",
      "Zustand",
    ],
    live: "https://chatwiz-eight.vercel.app",
    github: "https://github.com/n4ryn/chatwiz",
    image: ["/project-4.png"],
    projectStart: "Aug 2025",
    projectEnd: "Aug 2025",
  },
];
