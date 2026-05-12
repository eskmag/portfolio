import React from "react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";

export const Experience: React.FC = () => (
  <section id="experience" className="py-32">
    <SectionHeading index="04" title="Experience" />

    <ul className="divide-y divide-rule dark:divide-rule-dark">
      {experience.map((item) => (
        <li key={`${item.start}-${item.title}`} className="grid grid-cols-12 gap-4 py-8 md:gap-8">
          <div className="col-span-4 font-sans text-sm tabular-nums text-muted dark:text-muted-dark md:col-span-3">
            {item.start} — {item.end}
          </div>
          <div className="col-span-8 md:col-span-9">
            <h3 className="font-serif text-xl font-normal tracking-tight text-ink dark:text-ink-dark">
              {item.title}
            </h3>
            <p className="mt-1 font-sans text-sm text-muted dark:text-muted-dark">{item.org}</p>
            {item.note && (
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted dark:text-muted-dark">
                {item.note}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  </section>
);
