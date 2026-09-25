/**
 * §3 The log — experience rendered as `git log`, newest first.
 * Entries with `draft: true` are kept here but not shown on the site,
 * so you can fill them in and flip the flag when ready.
 */
export interface Commit {
  hash: string;
  date: string;
  message: string;
  detail?: string;
  head?: boolean;
  draft?: boolean;
}

export const log: Commit[] = [
  {
    hash: "a1f4e09",
    date: "now",
    message: "open to internships, summer 2027",
    detail: "software or data roles · on-site or remote",
    head: true,
  },
  {
    hash: "3e91a6f",
    date: "2024 — now",
    message: "feat: start bsc informatics",
    detail: "university of bergen · computer technology · algorithms, databases, programming languages, statistics",
  },
  {
    hash: "7c2d3b8",
    date: "2023 — now", 
    message: "work: customer proposal rep",
    detail: "creating proposals for heat pump- and hydronic heating solutions · Energiverket AS",
  },
  {
    hash: "0000001",
    date: "2023",
    message: "initial commit",
    detail: "norwegian university of life sciences · programming and dataanalysis course · julia",
  },
];
