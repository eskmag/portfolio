export interface SocialLink {
  label: string;
  href: string;
  display: string;
}

export interface NavLink {
  id: string;
  index: string;
  label: string;
}

/**
 * One phrase of the hero sentence. Phrases with `role` get a bracket and an
 * annotation underneath; phrases without are plain connecting words.
 * `emphasis` sets a single word in italic vermilion.
 */
export interface ParsedPhrase {
  text: string;
  role?: string;
  note?: string;
  italic?: boolean;
  quiet?: boolean;
  emphasis?: { before: string; word: string; after: string };
}

export const site = {
  name: "Eskil Magnussen",
  email: "eskil.magnussen@gmail.com",
  availability: "Open to software & data internships — summer 2027",
  // Must match the file name in /public/cv exactly: Vercel paths are case-sensitive.
  cvHref: "/cv/eskil-magnussen-cv.pdf",
  portrait: "/images/profile-720.jpg",
  socials: [
    { label: "GitHub", href: "https://github.com/eskmag", display: "github/eskmag" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/eskilmagnussen/", display: "linkedin/eskilmagnussen" },
  ] satisfies SocialLink[],
};

/** fig. 1 — the author, parsed. */
export const parsed: ParsedPhrase[] = [
  { text: "Eskil Magnussen", role: "noun", note: "informatics student, UiB" },
  { text: "builds", role: "verb", note: "python · java · typescript", italic: true },
  { text: "software that ships", role: "object", note: "deployed, tested, and used by real people" },
];

export const nav: NavLink[] = [
  { id: "work", index: "§1", label: "work" },
  { id: "desk", index: "§2", label: "desk" },
  { id: "log", index: "§3", label: "log" },
];
