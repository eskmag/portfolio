export interface RepoItem {
  name: string;
  description: string;
  language: string;
  href: string;
  demo?: string;
  tag?: string;
}

export const repos: RepoItem[] = [
  {
    name: "coobook-archive",
    description: "A place to store your favorite recipes and cookbooks.",
    language: "Typescript, React, Tailwind CSS, Vite",
    href: "https://github.com/eskmag/cookbook-archive",
    demo: "https://cookbookarchive.vercel.app",
    tag: "Cooking",
  },
  {
    name: "climate-dashboard",
    description: "Local-climate dashboard tracking long-run weather and emissions trends.",
    language: "Python",
    href: "https://github.com/eskmag/climate-dashboard",
    tag: "Climate",
  },
];
