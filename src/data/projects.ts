// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  link: string;
  deployed_link: string;
  technologies: string[];
  tag?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Emergency Water Supply",
    description: "A web-app showcasing the potential for emergency water supply from rainwater collection in Bergen.",
    link: "https://github.com/eskmag/bergen-smart-rain-hub",
    deployed_link: "https://bergen-smart-rain-hub.onrender.com",
    technologies: ["Python", "Pandas", "SQLite", "Streamlit"],
    tag: "Climate",
    featured: true,
  },
];