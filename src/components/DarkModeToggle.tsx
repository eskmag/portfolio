import React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

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
    className={cn(
      "inline-flex h-11 w-11 items-center justify-center rounded-full border border-rule text-muted transition-colors hover:border-ink hover:text-ink dark:border-rule-dark dark:text-muted-dark dark:hover:border-ink-dark dark:hover:text-ink-dark",
      className
    )}
  >
    {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
  </button>
);
