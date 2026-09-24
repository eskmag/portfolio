import React from "react";
import { motion } from "framer-motion";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Desk } from "@/components/Desk";
import { Log } from "@/components/Log";
import { Hello } from "@/components/Hello";
import { useDarkMode } from "@/hooks/useDarkMode";

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px -10% 0px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Portfolio: React.FC = () => {
  const [dark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink transition-colors duration-300 dark:bg-paper-dark dark:text-ink-dark">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper dark:focus:bg-ink-dark dark:focus:text-paper-dark"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12 xl:px-20">
        <TopBar dark={dark} toggleDark={toggleDark} />

        <main id="main">
          <Hero />
          <motion.div {...reveal}>
            <Work />
          </motion.div>
          <motion.div {...reveal}>
            <Desk />
          </motion.div>
          <motion.div {...reveal}>
            <Log />
          </motion.div>
          <motion.div {...reveal}>
            <Hello />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
