export interface NowGroup {
  label: string;
  items: string[];
}

export interface NowEntry {
  updated: string;
  intro: string;
  groups: NowGroup[];
}

export const now: NowEntry = {
  updated: "April 2026",
  intro: "Finishing the semester in Bergen. Coursework during the day, small side projects at night.",
  groups: [
    {
      label: "Hobby projects",
      items: [
        "A small homelab on a refurbished mini PC running a handful of self-hosted services.",
      ],
    },
    {
      label: "School projects",
      items: [
        "Coursework in data science and information systems at UiB.",
        "Game development in Java, building a 2D top-down tower-defense game using LibGDX.",
      ],
    },
    {
      label: "Learning",
      items: [
        "How programming languages get built — parsers, ASTs, type systems.",
        "System design and architecture, through game development.",
      ],
    },
  ],
};
