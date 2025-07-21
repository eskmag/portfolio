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
    title: "Climate Change Dashboard",
    description: "A data visualization dashboard for climate change metrics.",
    link: "https://github.com/eskmag/climate-dashboard",
    deployed_link: "#",
    technologies: ["Python", "Streamlit", "Pandas"],
  },
  {
    title: "Coming Soon Project",
    description: "An exciting new project currently in development. Stay tuned for updates!",
    link: "https://github.com/eskmag",
    deployed_link: "#",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];