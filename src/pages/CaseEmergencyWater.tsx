import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { useDarkMode } from "@/hooks/useDarkMode";

const CaseEmergencyWater: React.FC = () => {
  const [dark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-paper-dark dark:text-ink-dark">
      <a
        href="#case-main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper dark:focus:bg-ink-dark dark:focus:text-paper-dark"
      >
        Skip to content
      </a>

      <div className="fixed right-6 top-6 z-40">
        <DarkModeToggle dark={dark} toggle={toggleDark} />
      </div>

      <main id="case-main" className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
          Back to portfolio
        </Link>

        <article className="mt-16 space-y-16">
          <header className="space-y-6">
            <p className="font-sans text-xs uppercase tracking-widest text-accent dark:text-accent-dark">
              Climate · 2025
            </p>
            <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tightest text-ink dark:text-ink-dark md:text-6xl">
              Emergency Water Supply.
            </h1>
            <p className="max-w-prose font-serif text-xl leading-relaxed text-muted dark:text-muted-dark md:text-2xl">
              A small Streamlit tool that models how much of Bergen's annual
              rainfall could be captured and held as emergency drinking-water
              supply during an outage of the municipal system.
            </p>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-rule pt-6 font-sans text-sm dark:border-rule-dark md:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted dark:text-muted-dark">Role</dt>
                <dd className="mt-1 text-ink dark:text-ink-dark">Solo build</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted dark:text-muted-dark">Year</dt>
                <dd className="mt-1 text-ink dark:text-ink-dark">2025</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted dark:text-muted-dark">Stack</dt>
                <dd className="mt-1 text-ink dark:text-ink-dark">Python · Streamlit</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted dark:text-muted-dark">Status</dt>
                <dd className="mt-1 text-ink dark:text-ink-dark">Prototype</dd>
              </div>
            </dl>
          </header>

          <section className="space-y-4">
            <h2 className="font-sans text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              The problem
            </h2>
            <div className="max-w-prose space-y-4 text-lg leading-relaxed text-ink dark:text-ink-dark">
              <p>
                Bergen averages around 240 days of precipitation a year — among
                the wettest cities in Europe — yet the municipal water system
                has limited redundancy if its main intake is disrupted. A
                landslide, contamination event, or extended outage would leave
                large parts of the city without drinking water within days.
              </p>
              <p>
                I wanted to see how much of that abundant rainfall could
                realistically be captured and stored as a backup supply, and at
                what scale the numbers start to look meaningful.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              Approach
            </h2>
            <div className="max-w-prose space-y-4 text-lg leading-relaxed text-ink dark:text-ink-dark">
              <p>
                I pulled historical precipitation data for Bergen, joined it
                with rough estimates of available rooftop area, and modeled
                capture under different runoff coefficients and storage
                capacities. The output is an interactive Streamlit dashboard
                that lets you tune those parameters and see the resulting daily
                supply against a per-capita baseline.
              </p>
              <p>
                The goal wasn't a production system — it was to make a
                quantitative case readable to a non-technical reader, and to
                practice end-to-end data work: ingestion, modeling, persistence
                in SQLite, and a UI thin enough that the data does the talking.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              Decisions worth noting
            </h2>
            <ul className="max-w-prose space-y-4 text-lg leading-relaxed text-ink dark:text-ink-dark">
              <li>
                <span className="font-medium">Streamlit over a custom frontend.</span>{" "}
                The tool is exploratory; pinning effort on a polished UI would
                have starved the modeling work that actually matters.
              </li>
              <li>
                <span className="font-medium">SQLite as the persistence layer.</span>{" "}
                A single-file database keeps the project portable and removes
                the friction of standing up infrastructure for a prototype.
              </li>
              <li>
                <span className="font-medium">Conservative runoff defaults.</span>{" "}
                The defaults err on the pessimistic side so the headline numbers
                aren't artificially flattering.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-sans text-xs uppercase tracking-[0.25em] text-muted dark:text-muted-dark">
              What's next
            </h2>
            <div className="max-w-prose space-y-4 text-lg leading-relaxed text-ink dark:text-ink-dark">
              <p>
                Better rooftop-area data (a real GIS layer rather than
                estimates), a sharper storage-cost model, and a
                neighborhood-level breakdown so individual districts can see
                their own supply curve.
              </p>
            </div>
          </section>

          <footer className="flex flex-wrap items-center gap-6 border-t border-rule pt-10 dark:border-rule-dark">
            <a
              href="https://github.com/eskmag/bergen-smart-rain-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1 font-sans text-sm text-ink hover:text-accent dark:text-ink-dark dark:hover:text-accent-dark"
            >
              View code on GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <Link
              to="/"
              className="link-underline inline-flex items-center gap-1 font-sans text-sm text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
            >
              <ArrowLeft className="h-3 w-3" /> Back to portfolio
            </Link>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default CaseEmergencyWater;
