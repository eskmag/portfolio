import React from "react";
import { Moon, Sun } from "lucide-react";

interface Props {
  dark: boolean;
  toggle: () => void;
  className?: string;
}

export const DarkModeToggle: React.FC<Props> = ({ dark, toggle, className }) => (
  <button
    type="button"
    onClick={toggle}
    aria-pressed={dark}
    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark transition-colors ${className ?? ""}`}
  >
    {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
  </button>
);
