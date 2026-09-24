// src/data/projects.ts

/** Which drawing the project viewer shows. See components/work/Visuals.tsx. */
export type ProjectVisual = "rain" | "recipes" | "trend" | "towers";

export interface Project {
  slug: string;
  title: string;
  kind: string;
  status: string;
  description: string;
  technologies: string[];
  visual: ProjectVisual;
  code?: string;
  live?: string;
  /** Internal route to a case study, e.g. "/case/emergency-water". */
  caseStudy?: string;
}

export const projects: Project[] = [
  {
    slug: "emergency-water-supply",
    title: "Emergency Water Supply",
    kind: "climate · data app",
    status: "prototype · case study",
    description:
      "How much drinking water could rooftop rain collection supply if a city's water system failed? A data app that models decades of rainfall and makes the answer readable.",
    technologies: ["Python", "Pandas", "SQLite", "Tailwind CSS", "Typescript"],
    visual: "rain",
    code: "https://github.com/eskmag/bergen-smart-rain-hub",
    live: "https://bergen-smart-rain-hub.onrender.com",
    caseStudy: "/case/emergency-water",
  },
  {
    slug: "cookbook-archive",
    title: "cookbook-archive",
    kind: "cooking · web app",
    status: "live",
    description:
      "A home for favourite recipes and the cookbooks they came from — because recipes deserve version control too.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    visual: "recipes",
    code: "https://github.com/eskmag/cookbook-archive",
    live: "https://cookbookarchive.vercel.app",
  },
  {
    slug: "climate-dashboard",
    title: "climate-dashboard",
    kind: "climate · dashboard",
    status: "ongoing",
    description: "A local-climate dashboard tracking long-run weather and emissions trends.",
    technologies: ["Python"],
    visual: "trend",
    code: "https://github.com/eskmag/climate-dashboard",
  },
  {
    slug: "tower-defense",
    title: "Tower defense",
    kind: "game · school project",
    status: "in progress",
    description:
      "A 2D top-down tower-defense game in Java and LibGDX — mostly an excuse to learn system design the fun way.",
    technologies: ["Java", "LibGDX"],
    visual: "towers",
  },
];
