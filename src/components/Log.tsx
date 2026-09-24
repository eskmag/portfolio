import React from "react";
import { log } from "@/data/experience";
import { SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

/** §3 — experience as a `git log`, with a small commit graph on the left. */
export const Log: React.FC = () => {
  const commits = log.filter((c) => !c.draft);

  return (
    <section id="log" aria-labelledby="log-title" className="py-24 md:py-40">
      <SectionTitle id="log" title="The log" kicker="§3 · git log --author=eskil --oneline" />

      <ol className="border-t border-ink dark:border-ink-dark">
        {commits.map((c, i) => {
          const first = i === 0;
          const last = i === commits.length - 1;
          return (
            <li
              key={c.hash}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b border-rule dark:border-rule-dark md:grid-cols-[3.5rem_7.5rem_11rem_minmax(0,1fr)]"
            >
              <span aria-hidden="true" className="relative">
                <span
                  className={cn(
                    "absolute left-[19px] w-0.5 bg-accent dark:bg-accent-dark",
                    first ? "top-9" : "top-0",
                    last ? "h-9" : "bottom-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-[14px] top-[30px] h-3 w-3 rounded-full border-2",
                    c.head
                      ? "border-mark bg-mark dark:border-mark-dark dark:bg-mark-dark"
                      : "border-accent bg-paper dark:border-accent-dark dark:bg-paper-dark"
                  )}
                />
              </span>

              <div className="flex flex-col gap-2 py-6 md:contents">
                <span className="flex gap-4 font-mono text-[13px] md:contents">
                  <span className="text-mark-text dark:text-mark-dark md:py-7">{c.hash}</span>
                  <span className="text-muted dark:text-muted-dark md:py-7">{c.date}</span>
                </span>
                <span className="flex flex-col gap-2 md:py-6">
                  <span className="flex flex-wrap items-center gap-3">
                    {c.head && (
                      <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs text-paper dark:bg-accent-dark dark:text-paper-dark">
                        HEAD → main
                      </span>
                    )}
                    <span className="font-serif text-2xl leading-tight text-ink dark:text-ink-dark md:text-[1.875rem]">
                      {c.message}
                    </span>
                  </span>
                  {c.detail && (
                    <span className="font-mono text-[13px] leading-relaxed text-soft dark:text-soft-dark">
                      {c.detail}
                    </span>
                  )}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
