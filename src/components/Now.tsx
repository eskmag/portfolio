import React from "react";
import { now } from "@/data/now";
import { SectionHeading } from "@/components/SectionHeading";

export const Now: React.FC = () => (
  <section id="now" className="py-32">
    <SectionHeading index="05" title="Now" kicker={now.updated} />

    <p className="max-w-prose font-serif text-xl leading-relaxed text-ink dark:text-ink-dark md:text-2xl">
      {now.intro}
    </p>

    <div className="mt-12 divide-y divide-rule dark:divide-rule-dark">
      {now.groups.map((group) => (
        <div key={group.label} className="grid grid-cols-12 gap-4 py-8 md:gap-8">
          <h3 className="col-span-12 font-sans text-xs uppercase tracking-widest text-muted dark:text-muted-dark md:col-span-3">
            {group.label}
          </h3>
          <ul className="col-span-12 space-y-2 text-base leading-relaxed text-ink dark:text-ink-dark md:col-span-9">
            {group.items.map((item) => (
              <li key={item} className="max-w-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
