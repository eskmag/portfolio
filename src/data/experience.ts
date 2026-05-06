export interface ExperienceItem {
  start: string;
  end: string | "present";
  title: string;
  org: string;
  note?: string;
}

export const experience: ExperienceItem[] = [
  {
    start: "2024",
    end: "present",
    title: "BSc in Informatics — Computer Technology specialization",
    org: "University of Bergen",
    note: "Coursework in algorithms, databases, programming languages, and statistics.",
  },
];
