import React from "react";
import { SectionHeading } from "@/components/SectionHeading";

export const About: React.FC = () => (
  <section id="about" className="py-32">
    <SectionHeading index="03" title="About" />

    <div className="max-w-prose space-y-6 font-serif text-xl leading-relaxed text-ink dark:text-ink-dark md:text-2xl">
      <p>
        I'm an informatics student at the University of Bergen, on the data
        science track. I like working across the stack — from data pipelines
        to web apps to the occasional embedded project.
      </p>
      <p>
        I work mostly in Python, Java, and TypeScript. I'm drawn to small
        tools that do one thing well, and to spending time on the parts of a
        system most people skip — the data layer, the build, the seam between
        components.
      </p>
    </div>
  </section>
);
