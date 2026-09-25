import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { parsed, site, type ParsedPhrase } from "@/data/site";

const EASE = [0.2, 0.7, 0.2, 1] as const;

const PhraseText: React.FC<{ phrase: ParsedPhrase }> = ({ phrase }) => {
  if (phrase.emphasis) {
    return (
      <>
        {phrase.emphasis.before}
        <em className="italic text-mark dark:text-mark-dark">{phrase.emphasis.word}</em>
        {phrase.emphasis.after}
      </>
    );
  }
  return <>{phrase.text}</>;
};

/**
 * fig. 1 — the author, parsed.
 * The intro sentence is typeset as a small syntax tree: each phrase gets a
 * bracket and an annotation. On load the words arrive first, then the
 * brackets draw in, as if the sentence were being parsed.
 */
export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const wordDelay = (i: number) => (reduce ? 0 : 0.15 + i * 0.12);
  const bracketDelay = (i: number) => (reduce ? 0 : 0.9 + i * 0.14);

  return (
    <section id="top" aria-labelledby="hero-title" className="pb-24 pt-24 md:pb-32 md:pt-36">
      <p className="label mb-10 md:mb-16">fig. 1 — the author, parsed</p>

      <h1 id="hero-title" className="sr-only">
        {parsed.map((p) => p.text).join(" ")}
      </h1>

      <div
        aria-hidden="true"
        className="flex flex-wrap items-start gap-x-5 gap-y-10 font-serif text-[3.25rem] leading-none tracking-tightest text-ink dark:text-ink-dark sm:text-7xl md:gap-x-8 md:gap-y-12 lg:text-8xl xl:text-[8rem]"
      >
        {parsed.map((phrase, i) => (
          <div key={phrase.text} className="flex flex-col gap-3 md:gap-3.5">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: wordDelay(i) }}
              className={[
                phrase.italic ? "italic" : "",
                phrase.quiet ? "text-muted dark:text-muted-dark" : "",
              ].join(" ")}
            >
              <PhraseText phrase={phrase} />
            </motion.span>

            {phrase.role && (
              <>
                <motion.span
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: EASE, delay: bracketDelay(i) }}
                  className="block h-3 origin-left border-[1.5px] border-t-0 border-accent dark:border-accent-dark"
                />
                <motion.span
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: bracketDelay(i) + 0.25 }}
                  className="max-w-[22rem] font-mono text-xs leading-normal tracking-normal text-accent dark:text-accent-dark md:text-[13px]"
                >
                  <span className="text-muted dark:text-muted-dark">{phrase.role}</span>
                  <br />
                  {phrase.note}
                </motion.span>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-6 border-t border-rule pt-7 dark:border-rule-dark md:mt-24 md:flex-row md:items-center md:gap-8">
        <p className="flex items-center gap-2.5 font-mono text-[13px] text-ink dark:text-ink-dark">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mark dark:bg-mark-dark" />
          {site.availability}
        </p>
        <div className="flex items-center gap-6 md:ml-auto">
          <a
            href="#work"
            className="link-underline text-base text-soft hover:text-ink dark:text-soft-dark dark:hover:text-ink-dark"
          >
            See the work ↓
          </a>
          <a
            href="#hello"
            className="inline-flex h-[3.25rem] items-center rounded-full bg-accent px-6 text-base font-medium text-paper transition-colors hover:bg-ink dark:bg-accent-dark dark:text-paper-dark dark:hover:bg-ink-dark"
          >
            Say hello ↗
          </a>
        </div>
      </div>
    </section>
  );
};
