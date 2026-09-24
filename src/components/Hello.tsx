import React, { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "@/data/site";

/** The closing section: one very large invitation, then the practical links. */
export const Hello: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="hello" aria-labelledby="hello-title" className="flex flex-col gap-10 pb-16 pt-24 md:pt-40">
      <p className="label">an internship, a project, or just a good question —</p>

      <h2 id="hello-title" className="m-0 font-normal">
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex flex-wrap items-baseline gap-x-6 font-serif text-[5.5rem] leading-[0.9] tracking-tightest text-ink dark:text-ink-dark sm:text-9xl lg:text-[12.5rem]"
        >
          <span>
            Say <em className="italic text-accent dark:text-accent-dark">hello</em>.
          </span>
          <span
            aria-hidden="true"
            className="text-6xl text-mark transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 dark:text-mark-dark sm:text-8xl lg:text-[7.5rem]"
          >
            ↗
          </span>
        </a>
      </h2>

      <div className="flex flex-col gap-5 border-t border-ink pt-7 font-mono text-sm dark:border-ink-dark md:flex-row md:flex-wrap md:items-center md:gap-10">
        <span className="flex items-center gap-2">
          <a href={`mailto:${site.email}`} className="link-underline text-ink dark:text-ink-dark">
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? "Email address copied" : "Copy email address"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
          >
            {copied ? <Check className="h-4 w-4 text-accent dark:text-accent-dark" /> : <Copy className="h-4 w-4" />}
          </button>
          <span role="status" className="text-xs text-accent dark:text-accent-dark">
            {copied ? "copied" : ""}
          </span>
        </span>

        {site.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1 text-soft hover:text-ink dark:text-soft-dark dark:hover:text-ink-dark"
          >
            {s.display} <ArrowUpRight className="h-3 w-3" />
          </a>
        ))}

        <a
          href={site.cvHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center self-start rounded-full border border-ink px-5 text-ink transition-colors hover:bg-ink hover:text-paper dark:border-ink-dark dark:text-ink-dark dark:hover:bg-ink-dark dark:hover:text-paper-dark md:ml-auto md:self-auto"
        >
          cv.pdf ↓
        </a>
      </div>

      <footer className="mt-16 flex flex-col gap-2 font-mono text-xs text-muted dark:text-muted-dark md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>set in Instrument Serif &amp; IBM Plex Mono · built with Vite, React &amp; Tailwind · fig. 1 parsed by hand</span>
      </footer>
    </section>
  );
};
