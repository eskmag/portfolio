import React from "react";

interface Props {
  id: string;
  title: string;
  kicker: string;
}

/** Big serif section title with a small mono kicker on the right. */
export const SectionTitle: React.FC<Props> = ({ id, title, kicker }) => (
  <header className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-baseline md:justify-between">
    <h2
      id={`${id}-title`}
      className="font-serif text-5xl font-normal leading-none tracking-tight text-ink dark:text-ink-dark md:text-7xl"
    >
      {title}
    </h2>
    <span className="label">{kicker}</span>
  </header>
);
