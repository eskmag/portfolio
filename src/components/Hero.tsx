import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export const Hero: React.FC = () => (
  <section
    id="intro"
    className="relative flex min-h-screen flex-col justify-between py-16"
  >
    <div className="relative z-10 flex items-center justify-between text-xs uppercase tracking-widest text-muted dark:text-muted-dark">
      <span className="font-serif text-base font-medium normal-case tracking-normal text-ink dark:text-ink-dark">
        {site.monogram}
      </span>
      <span className="tabular-nums">{site.location}</span>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 max-w-3xl"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
        Portfolio — 2026 · Building toward climate-conscious software
      </p>
      <h1 className="font-serif text-6xl font-light leading-[0.95] tracking-tightest text-ink dark:text-ink-dark md:text-8xl">
        {site.name}.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted dark:text-muted-dark md:text-xl">
        {site.tagline}
      </p>

      <p className="mt-6 max-w-xl font-sans text-xs uppercase tracking-widest text-muted dark:text-muted-dark">
        {site.availability}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex items-center gap-2 border border-ink px-5 py-3 font-sans text-sm tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper dark:border-ink-dark dark:text-ink-dark dark:hover:bg-ink-dark dark:hover:text-paper-dark"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href="#work"
          className="link-underline inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
        >
          See selected work
        </a>
      </div>
    </motion.div>

    <div className="relative z-10 flex items-end justify-between text-xs uppercase tracking-widest text-muted dark:text-muted-dark">
      <a
        href="#work"
        className="link-underline inline-flex items-center gap-2 text-ink hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
      >
        <span aria-hidden="true">↓</span>
        <span>Selected Work</span>
      </a>
      <span className="tabular-nums">01 / 06</span>
    </div>
  </section>
);
