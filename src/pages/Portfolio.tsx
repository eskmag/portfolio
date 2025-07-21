// src/pages/Portfolio.tsx
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { CV } from "@/components/CV";
import { BackToTop } from "@/components/BackToTop";

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"} scroll-smooth`}>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section id="about">
          <About />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="cv">
          <CV />
        </section>
      </main>
      <BackToTop />
    </div>
  );
};

export default Portfolio;
