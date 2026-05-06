import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { repos } from "@/data/repos";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const isInternal = (href: string) => href.startsWith("/");

export const SelectedWork: React.FC = () => (
  <section id="work" className="py-32">
    <SectionHeading index="02" title="Selected Work" kicker="2023 — 2026" />

    <ul className="divide-y divide-rule dark:divide-rule-dark">
      {projects.map((project) => (
        <li key={project.title} className="group grid grid-cols-12 gap-4 py-10 md:gap-8">
          <div className="col-span-2 font-sans text-sm tabular-nums text-muted dark:text-muted-dark">
            2025
          </div>
          <div className="col-span-10 md:col-span-7">
            {project.tag && (
              <p className="mb-2 font-sans text-xs uppercase tracking-widest text-accent dark:text-accent-dark">
                {project.tag}
              </p>
            )}
            <h3 className="font-serif text-2xl font-normal tracking-tight text-ink dark:text-ink-dark md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted dark:text-muted-dark">
              {project.description}
            </p>
            <p className="mt-4 font-sans text-xs uppercase tracking-widest text-muted dark:text-muted-dark">
              {project.technologies.join(" · ")}
            </p>
          </div>
          <div className="col-span-12 flex items-start gap-6 md:col-span-3 md:justify-end">
            {project.deployed_link && project.deployed_link !== "#" &&
              (isInternal(project.deployed_link) ? (
                <Link
                  to={project.deployed_link}
                  className="link-underline inline-flex items-center gap-1 text-sm text-ink hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
                >
                  Case <ArrowUpRight className="h-3 w-3" />
                </Link>
              ) : (
                <a
                  href={project.deployed_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-sm text-ink hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
                >
                  Case <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1 text-sm text-ink hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
            >
              Code <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </li>
      ))}
    </ul>

    <div className="mt-24">
      <h3 className="mb-8 font-sans text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
        Also on GitHub
      </h3>
      <ul className="divide-y divide-rule dark:divide-rule-dark">
        {repos.map((repo) => (
          <li key={repo.name} className="grid grid-cols-12 gap-4 py-6 md:gap-8">
            <div className="col-span-12 md:col-span-7">
              {repo.tag && (
                <p className="mb-1 font-sans text-xs uppercase tracking-widest text-accent dark:text-accent-dark">
                  {repo.tag}
                </p>
              )}
              <h4 className="font-serif text-base font-normal text-ink dark:text-ink-dark md:text-lg">
                {repo.name}
              </h4>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted dark:text-muted-dark">
                {repo.description}
              </p>
            </div>
            <div className="col-span-6 font-sans text-xs uppercase tracking-widest text-muted dark:text-muted-dark md:col-span-2 md:self-center">
              {repo.language}
            </div>
            <div className="col-span-6 flex items-start md:col-span-3 md:justify-end md:self-center">
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-sm text-ink hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
              >
                Code <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-xl font-sans text-sm text-muted dark:text-muted-dark">
        More on{" "}
        <a
          href="https://github.com/eskmag"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-ink hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  </section>
);
