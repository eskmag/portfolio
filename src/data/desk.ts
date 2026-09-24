/**
 * §2 On my desk — the pinboard.
 * `x` / `y` place a card on wide screens (x as a % of the board width, y in px);
 * `tilt` is its rotation in degrees. On smaller screens the cards fall into a grid.
 */
export type DeskCardStyle = "note" | "ink" | "photo" | "sticky";

export interface DeskCard {
  label: string;
  text: string;
  style: DeskCardStyle;
  x: number;
  y: number;
  width: number;
  tilt: number;
  tape?: number;
  draft?: boolean;
}

export const deskIntro = {
  lead: "I'm a second-year informatics student on the data science track. I like working across the stack — from data pipelines to web apps to the occasional embedded project.",
  aside: "Mostly Python, Java, TypeScript and C#. Mostly small tools. Mostly the unglamorous parts.",
};

export const desk: DeskCard[] = [
  {
    label: "01 · the data layer",
    text: "Where most bugs actually live. I like making it boring, in the good way.",
    style: "note",
    x: 40, y: 30, width: 250, tilt: -3, tape: 4,
  },
  {
    label: "02 · homelab",
    text: "A refurbished mini PC running a handful of self-hosted services.",
    style: "note",
    x: 64, y: 0, width: 240, tilt: 2.5, tape: -3,
  },
  {
    label: "03 · learning",
    text: "How languages get built: parsers, ASTs, type systems. (See fig. 1.)",
    style: "ink",
    x: 80, y: 150, width: 220, tilt: -1.5,
  },
  {
    label: "the author, unparsed",
    text: "",
    style: "photo",
    x: 42, y: 330, width: 230, tilt: 4,
  },
  {
    label: "04 · the build",
    text: "Fast feedback loops are a feature, not a luxury.",
    style: "note",
    x: 62, y: 330, width: 240, tilt: -2, tape: -6,
  },
  {
    label: "05 · cooking",
    text: "Recipes, versioned. See project 02.",
    style: "note",
    x: 81, y: 450, width: 200, tilt: 3, tape: 5,
  },
  {
    label: "06 · off the clock",
    text: "[a hobby or two — your call]", // TODO
    style: "sticky",
    x: 60, y: 590, width: 230, tilt: 1,
    draft: true,
  },
];
