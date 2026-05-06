import React from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Now } from "@/components/Now";
import { Colophon } from "@/components/Colophon";
import { SideIndex } from "@/components/SideIndex";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { useDarkMode } from "@/hooks/useDarkMode";

const sectionMotion = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15% 0px -15% 0px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Portfolio: React.FC = () => {
  const [dark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-paper-dark dark:text-ink-dark">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper dark:focus:bg-ink-dark dark:focus:text-paper-dark"
      >
        Skip to content
      </a>

      <div className="fixed right-6 top-6 z-40 lg:hidden">
        <DarkModeToggle dark={dark} toggle={toggleDark} />
      </div>

      <SideIndex dark={dark} toggleDark={toggleDark} />

      <main id="main" className="mx-auto max-w-5xl px-6 md:px-16">
        <Hero />

        <motion.div {...sectionMotion}>
          <SelectedWork />
        </motion.div>
        <motion.div {...sectionMotion}>
          <About />
        </motion.div>
        <motion.div {...sectionMotion}>
          <Experience />
        </motion.div>
        <motion.div {...sectionMotion}>
          <Now />
        </motion.div>
        <motion.div {...sectionMotion}>
          <Colophon />
        </motion.div>
      </main>
    </div>
  );
};

export default Portfolio;
