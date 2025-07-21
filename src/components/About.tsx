// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => (
  <section>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8">
          I'm an informatics student at the University of Bergen, currently specializing in Data Science. I enjoy working on web development
          projects, creating clean and accessible user interfaces, and exploring technologies that contribute to sustainable digital
          solutions. I also share content on workstations and productivity tech.
        </p>
        
        {/* Current Focus */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🎓 Currently Learning</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Data science, data visualization and computer technology focusing on operating systems and algorithms.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">💡 Interests</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Data visualization, UI/UX design, productivity optimization, and creating content about tech workstations.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);