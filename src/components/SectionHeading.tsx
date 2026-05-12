import React from "react";

interface Props {
  index: string;
  title: string;
  kicker?: string;
}

export const SectionHeading: React.FC<Props> = ({ index, title, kicker }) => (
  <header className="mb-16 flex items-baseline justify-between border-b border-rule pb-4 dark:border-rule-dark">
    <div className="flex items-baseline gap-6">
      <span className="font-sans text-xs uppercase tracking-[0.25em] tabular-nums text-muted dark:text-muted-dark">
        {index}
      </span>
      <h2 className="font-serif text-3xl font-light tracking-tight text-ink dark:text-ink-dark md:text-4xl">
        {title}
      </h2>
    </div>
    {kicker && (
      <span className="hidden font-sans text-xs uppercase tracking-widest text-muted dark:text-muted-dark md:inline">
        {kicker}
      </span>
    )}
  </header>
);
