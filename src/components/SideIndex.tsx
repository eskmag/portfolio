import React from "react";
import { sections } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { DarkModeToggle } from "@/components/DarkModeToggle";

interface Props {
  dark: boolean;
  toggleDark: () => void;
}

export const SideIndex: React.FC<Props> = ({ dark, toggleDark }) => {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Sections"
      className="pointer-events-none fixed left-8 top-1/2 hidden -translate-y-1/2 lg:block"
    >
      <ol className="pointer-events-auto space-y-3 font-sans text-xs tracking-wide">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-3 transition-colors ${
                  isActive
                    ? "text-accent dark:text-accent-dark"
                    : "text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark"
                }`}
              >
                <span className="tabular-nums">{s.index}</span>
                <span
                  className={`h-px bg-current transition-all duration-200 ${
                    isActive ? "w-6" : "w-3 group-hover:w-5"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`uppercase transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
        <li className="pt-2">
          <DarkModeToggle dark={dark} toggle={toggleDark} className="-ml-2" />
        </li>
      </ol>
    </nav>
  );
};
