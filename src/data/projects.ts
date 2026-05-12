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
    description: "A Streamlit app showcasing the potantial for emergency water supply by utilizing rainfall-patterns in Bergen.",
    link: "https://github.com/eskmag/bergen-smart-rain-hub",
    deployed_link: "/case/emergency-water",
    technologies: ["Python", "Pandas", "SQLite", "Streamlit"],
    tag: "Climate",
    featured: true,
  },
];