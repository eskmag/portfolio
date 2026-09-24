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
    hash: "7c2d3b8",
    date: "[year] — now", // TODO: start year
    message: "work: heating-system quotation software",
    detail: "modernising and automating a c#/.net desktop app · [company]", // TODO: company
    draft: true,
  },
  {
    hash: "3e91a6f",
    date: "2024 — now",
    message: "feat: start bsc informatics",
    detail: "university of bergen · computer technology · algorithms, databases, programming languages, statistics",
  },
  {
    hash: "0000001",
    date: "[year]", // TODO
    message: "initial commit",
    detail: "[the first thing you ever built]", // TODO
    draft: true,
  },
];
