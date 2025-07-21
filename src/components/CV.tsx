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
      My CV will be available for download soon. In the meantime, feel free to explore my projects and contact me directly.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Button 
        variant="outline" 
        className="text-lg px-6 py-3 opacity-50 cursor-not-allowed" 
        disabled
      >
        <FileText className="w-5 h-5 mr-2" /> CV Coming Soon
      </Button>
    </motion.div>
  </section>
);