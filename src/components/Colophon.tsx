import React from "react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export const Colophon: React.FC = () => (
  <section id="contact" className="py-32">
    <SectionHeading index="06" title="Contact" />

    <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
      <div className="md:col-span-7">
        <p className="max-w-prose font-serif text-2xl leading-relaxed text-ink dark:text-ink-dark md:text-3xl">
          Open to summer internships and part-time roles through 2026. Happy to
          chat about data, languages, or anything worth building — the easiest
          way to reach me is{" "}
          <a
            href={`mailto:${site.email}`}
            className="link-underline text-accent dark:text-accent-dark"
          >
            email
          </a>
          .
        </p>
      </div>

      <ul className="space-y-4 md:col-span-5">
        {site.socials.map((social) => (
          <li
            key={social.label}
            className="flex items-baseline justify-between gap-4 border-b border-rule pb-3 dark:border-rule-dark"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-muted dark:text-muted-dark">
              {social.label}
            </span>
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="link-underline inline-flex items-center gap-1 text-sm text-ink dark:text-ink-dark"
            >
              {social.display}
              {social.href.startsWith("http") && <ArrowUpRight className="h-3 w-3" />}
            </a>
          </li>
        ))}
        <li className="flex items-baseline justify-between gap-4 border-b border-rule pb-3 dark:border-rule-dark">
          <span className="font-sans text-xs uppercase tracking-widest text-muted dark:text-muted-dark">
            CV
          </span>
          <a
            href={site.cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1 text-sm text-ink dark:text-ink-dark"
          >
            Download PDF <ArrowUpRight className="h-3 w-3" />
          </a>
        </li>
      </ul>
    </div>

    <footer className="mt-24 grid grid-cols-1 gap-2 border-t border-rule pt-6 font-sans text-xs text-muted dark:border-rule-dark dark:text-muted-dark md:grid-cols-3 md:items-baseline">
      <span>© {new Date().getFullYear()} Eskil Magnussen</span>
      <span className="md:text-center">Built with Vite, React &amp; Tailwind</span>
      <span className="md:text-right">Set in Fraunces &amp; Inter</span>
    </footer>
  </section>
);
