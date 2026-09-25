import React from "react";
import { desk, deskIntro, type DeskCard } from "@/data/desk";
import { site } from "@/data/site";
import { SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

const cardBase =
  "relative flex flex-col gap-2.5 rotate-[var(--tilt)] transition-transform duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:rotate-0 xl:absolute xl:left-[var(--x)] xl:top-[var(--y)] xl:w-[var(--w)]";

const styles: Record<DeskCard["style"], string> = {
  note: "border border-rule bg-card px-6 pb-6 pt-8 shadow-pin dark:border-rule-dark dark:bg-card-dark",
  ink: "bg-accent px-6 pb-6 pt-8 text-paper shadow-pin dark:bg-accent-dark dark:text-paper-dark",
  sticky: "bg-mark-tint p-6 dark:bg-mark-tint-dark",
  photo: "border border-rule bg-card p-3.5 pb-4 shadow-pin dark:border-rule-dark dark:bg-card-dark",
};

const labelColor: Record<DeskCard["style"], string> = {
  note: "text-accent dark:text-accent-dark",
  ink: "text-paper/80 dark:text-paper-dark/80",
  sticky: "text-mark-text dark:text-mark-dark",
  photo: "",
};

const Card: React.FC<{ card: DeskCard }> = ({ card }) => {
  const vars = {
    "--x": `${card.x}%`,
    "--y": `${card.y}px`,
    "--w": `${card.width}px`,
    "--tilt": `${card.tilt}deg`,
  } as React.CSSProperties;

  if (card.style === "photo") {
    return (
      <figure style={vars} className={cn(cardBase, styles.photo, "m-0")}>
        <img
          src={site.portrait}
          alt={`Portrait of ${site.name}`}
          loading="lazy"
          className="h-56 w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
        />
        <figcaption className="text-center font-serif text-xl italic">{card.label}</figcaption>
      </figure>
    );
  }

  return (
    <div style={vars} className={cn(cardBase, styles[card.style])}>
      {card.tape !== undefined && (
        <span
          aria-hidden="true"
          style={{ transform: `rotate(${card.tape}deg)` }}
          className="absolute -top-2.5 left-1/3 h-5 w-16 bg-accent/20 dark:bg-accent-dark/25"
        />
      )}
      <span className={cn("font-mono text-[11px] uppercase tracking-widest", labelColor[card.style])}>
        {card.label}
      </span>
      <p className="m-0 font-serif text-2xl leading-tight">{card.text}</p>
    </div>
  );
};

/** §2 — a pinboard of things I care about. Scattered on wide screens, a grid elsewhere. */
export const Desk: React.FC = () => (
  <section id="desk" aria-labelledby="desk-title" className="py-24 md:py-40">
    <SectionTitle id="desk" title="On my desk" kicker="§2 · things I care about, roughly sorted" />

    <div className="flex flex-col gap-14 xl:relative xl:block xl:h-[760px]">
      <div className="flex max-w-2xl flex-col gap-6 xl:absolute xl:left-0 xl:top-5 xl:w-[36%]">
        <p className="font-serif text-3xl leading-snug text-ink dark:text-ink-dark md:text-4xl xl:text-[2.125rem]">
          {deskIntro.lead}
        </p>
        <p className="text-lg leading-relaxed text-soft dark:text-soft-dark">{deskIntro.aside}</p>
      </div>

      <div className="grid grid-cols-1 gap-10 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:absolute xl:inset-0 xl:block xl:px-0">
        {desk
          .filter((card) => !card.draft)
          .map((card) => (
            <Card key={card.label} card={card} />
          ))}
      </div>
    </div>
  </section>
);
