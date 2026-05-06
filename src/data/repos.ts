export interface RepoItem {
  name: string;
  description: string;
  language: string;
  href: string;
  tag?: string;
}

export const repos: RepoItem[] = [
  {
    name: "hydronic-heating-proposal-system",
    description: "Profitability analyzer for hydronic heating and heat-pump systems.",
    language: "Python",
    href: "https://github.com/eskmag/hydronic-heating-proposal-system",
    tag: "Climate",
  },
  {
    name: "climate-dashboard",
    description: "Local-climate dashboard tracking long-run weather and emissions trends.",
    language: "Python",
    href: "https://github.com/eskmag/climate-dashboard",
    tag: "Climate",
  },
];
