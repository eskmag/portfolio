// src/pages/Portfolio.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { CV } from "@/components/CV";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Contact } from "@/components/Contact";
import { Stats } from "@/components/Stats";

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Animation variants for section fade-ins
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"} scroll-smooth`}>
      <ScrollProgress />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4">
        <motion.section 
          id="about" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>

        {/* Stats Section - Full width background */}
      </main>
      
      <Stats />
      
      <main className="max-w-4xl mx-auto px-4">
        <motion.section 
          id="tech-stack" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <TechStack />
        </motion.section>
        
        <motion.section 
          id="projects" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.section>
        
        <motion.section 
          id="contact" 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.section>
        
        <motion.section 
          id="cv" 
          className="py-20 pb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <CV />
        </motion.section>
      </main>
      <BackToTop />
    </div>
  );
};

export default Portfolio;
