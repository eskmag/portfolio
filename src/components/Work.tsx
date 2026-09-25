import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectDrawing } from "@/components/work/Visuals";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

const linkClass =
  "link-underline inline-flex items-center gap-1 text-accent dark:text-accent-dark";

/**
 * §1 — an index of projects on the left and a "viewer" window on the right.
 * Hovering, focusing or clicking a row opens that project in the viewer.
 */
export const Work: React.FC = () => {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const project = projects[active];

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-40">
      <SectionTitle id="work" title="Things I've made" kicker="§1 · select one to open it" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-8">
        <ol className="border-t border-ink dark:border-ink-dark lg:col-span-5">
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-controls="project-viewer"
                  className="grid w-full grid-cols-[2.75rem_minmax(0,1fr)_auto] items-baseline gap-x-2 border-b border-rule py-6 text-left dark:border-rule-dark md:py-7"
                >
                  <span
                    className={cn(
                      "font-mono text-[13px] transition-colors",
                      isActive ? "text-mark dark:text-mark-dark" : "text-muted dark:text-muted-dark"
                    )}
                  >
                    {pad(i + 1)}
                  </span>
                  <span className="flex flex-col gap-2">
                    <span
                      className={cn(
                        "font-serif text-3xl leading-none transition-colors md:text-[2.5rem]",
                        isActive ? "text-accent dark:text-accent-dark" : "text-ink dark:text-ink-dark"
                      )}
                    >
                      {p.title}
                    </span>
                    <span className="label">{p.kind}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "font-mono text-lg text-accent transition-all duration-300 dark:text-accent-dark",
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                    )}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div
          id="project-viewer"
          aria-live="polite"
          className="overflow-hidden rounded-[10px] border border-ink bg-card text-ink shadow-block dark:border-ink-dark dark:bg-card-dark dark:text-ink-dark lg:col-span-7"
        >
          <div className="flex h-11 items-center justify-between gap-4 border-b border-ink px-4 font-mono text-xs dark:border-ink-dark md:px-5">
            <span className="truncate">~/work/{project.slug}</span>
            <span className="text-muted dark:text-muted-dark">
              {pad(active + 1)} / {pad(projects.length)}
            </span>
          </div>

          <div className="flex aspect-[16/10] items-center justify-center border-b border-ink bg-accent-tint px-6 dark:border-ink-dark dark:bg-accent-tint-dark md:aspect-auto md:h-[25rem] md:px-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={project.slug}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex w-full justify-center"
              >
                <ProjectDrawing visual={project.visual} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-5 p-6 md:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-serif text-3xl leading-none md:text-[2.5rem]">{project.title}</h3>
              <span className="label">{project.status}</span>
            </div>
            <p className="max-w-prose text-lg leading-relaxed text-soft dark:text-soft-dark">
              {project.description}
            </p>
            <div className="flex flex-col gap-4 border-t border-rule pt-4 dark:border-rule-dark sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-xs lowercase text-soft dark:text-soft-dark">
                {project.technologies.join(" · ")}
              </span>
              <span className="flex flex-wrap gap-5 font-mono text-[13px]">
                {project.caseStudy && (
                  <Link to={project.caseStudy} className={linkClass}>
                    case study <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    live <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    code <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/eskmag"
        target="_blank"
        rel="noopener noreferrer"
        className="label link-underline mt-10 inline-block hover:text-ink dark:hover:text-ink-dark"
      >
        more on github ↗
      </a>
    </section>
  );
};
