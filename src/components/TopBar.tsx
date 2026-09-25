import React from "react";
import { nav, site } from "@/data/site";
import { DarkModeToggle } from "@/components/DarkModeToggle";

interface Props {
  dark: boolean;
  toggleDark: () => void;
}

export const TopBar: React.FC<Props> = ({ dark, toggleDark }) => (
  <nav
    aria-label="Main"
    className="flex items-center justify-between gap-4 pt-6 font-mono text-[13px] md:pt-9"
  >
    <a href="#top" className="flex items-center gap-3 text-ink dark:text-ink-dark">
      <span aria-hidden="true" className="h-2.5 w-2.5 bg-accent dark:bg-accent-dark" />
      <span>
        {site.name.toLowerCase()}
        <span className="hidden text-muted dark:text-muted-dark sm:inline"> / portfolio, rev. 2026</span>
      </span>
    </a>

    <div className="flex items-center gap-1 md:gap-2">
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="hidden h-11 items-center px-3 text-ink transition-colors hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark md:flex"
        >
          {item.index} {item.label}
        </a>
      ))}
      <a
        href="#hello"
        className="flex h-11 items-center rounded-full bg-ink px-5 text-paper transition-colors hover:bg-accent dark:bg-ink-dark dark:text-paper-dark dark:hover:bg-accent-dark"
      >
        say hello ↗
      </a>
      <DarkModeToggle dark={dark} toggle={toggleDark} className="ml-1" />
    </div>
  </nav>
);
