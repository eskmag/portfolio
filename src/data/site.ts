export interface SocialLink {
  label: string;
  href: string;
  display: string;
}

export interface SectionRef {
  id: string;
  index: string;
  label: string;
}

export const site = {
  name: "Eskil Magnussen",
  monogram: "EM",
  location: "Bergen, Norway",
  tagline: "Informatics student in Bergen. Interested in data, programming languages, and the craft of small, well-built software.",
  availability: "Software / data internship · Summer 2026 · Bergen or remote in EU",
  email: "eskil.magnussen@gmail.com",
  cvHref: "/cv/eskil_magnussen_cv.pdf",
  socials: [
    { label: "Email", href: "mailto:eskil.magnussen@gmail.com", display: "eskil.magnussen@gmail.com" },
    { label: "GitHub", href: "https://github.com/eskmag", display: "@eskmag" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/eskilmagnussen/", display: "in/eskilmagnussen" },
  ] satisfies SocialLink[],
};

export const sections: SectionRef[] = [
  { id: "intro", index: "01", label: "Intro" },
  { id: "work", index: "02", label: "Work" },
  { id: "about", index: "03", label: "About" },
  { id: "experience", index: "04", label: "Experience" },
  { id: "now", index: "05", label: "Now" },
  { id: "contact", index: "06", label: "Contact" },
];
