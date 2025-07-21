// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  link: string;
  deployed_link: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Cookbook Archive",
    description: "A cookbook and recipe storage app built with modern web technologies. Features recipe management, search functionality, and responsive design.",
    link: "https://github.com/eskmag/cookbook-archive",
    deployed_link: "https://cookbookarchive.vercel.app",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills. Built with modern React and styled with Tailwind CSS.",
    link: "https://github.com/eskmag/portfolio",
    deployed_link: "#",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Coming Soon Project",
    description: "An exciting new project currently in development. Stay tuned for updates!",
    link: "https://github.com/eskmag",
    deployed_link: "#",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];