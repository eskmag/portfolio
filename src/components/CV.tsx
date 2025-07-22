// src/components/CV.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export const CV: React.FC = () => (
  <section className="text-center">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      CV
    </motion.h2>
    <motion.p 
      className="text-lg md:text-xl text-gray-500 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Download my CV to learn more about my education, experience, and technical skills.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <a href="/cv/Eskil_Magnussen_CV.pdf" download="Eskil_Magnussen_CV.pdf">
        <Button 
          variant="outline" 
          className="text-lg px-6 py-3 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20 transition-all duration-300 group"
        >
          <FileText className="w-5 h-5 mr-2 group-hover:animate-pulse" /> 
          Download CV
        </Button>
      </a>
    </motion.div>
  </section>
);