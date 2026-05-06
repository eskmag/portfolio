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
        "A 2D game in Java with LibGDX — mostly an excuse to learn software architecture from the inside.",
        "Occasional ESP32 and Raspberry Pi automations when something in the house needs fixing.",
      ],
    },
    {
      label: "School projects",
      items: [
        "Coursework in data science and information systems at UiB.",
      ],
    },
    {
      label: "Learning",
      items: [
        "How programming languages get built — parsers, ASTs, type systems.",
        "Data pipelines for climate and energy problems.",
      ],
    },
  ],
};
