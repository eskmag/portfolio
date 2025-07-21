// src/components/TechStack.tsx
import React from "react";
import { motion } from "framer-motion";

export const TechStack: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>
      <motion.div 
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {['Python', 'PowerShell', 'Julia', 'Java', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQLite'].map((tech) => (
          <motion.span
            key={tech}
            variants={itemVariants}
            className="bg-gray-100 dark:bg-gray-800 text-sm md:text-base px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};
