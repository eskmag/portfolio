// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => (
  <header className="mb-12 text-center">
    <div className="flex justify-end mb-4">
      <Button variant="ghost" onClick={toggleDarkMode}>
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </div>
    
    {/* Navigation Menu */}
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      <ul className="flex justify-center gap-8 text-sm font-medium">
        <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
        <li><a href="#tech-stack" className="hover:text-blue-500 transition-colors">Tech Stack</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
        <li><a href="#cv" className="hover:text-blue-500 transition-colors">CV</a></li>
      </ul>
    </motion.nav>

    {/* Profile Picture */}
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
      className="mb-6 flex justify-center"
    >
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-lg">
          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
            {/* Profile image with fallback */}
            <img 
              src="public/images/profile.jpg"
              alt="Eskil Magnussen" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Hide image and show initials fallback if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback initials (hidden by default, shown if image fails) */}
            <div 
              className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-500 dark:text-gray-400" 
              style={{ display: 'none' }}
            >
              EM
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-4xl font-bold"
    >
      Hi, I'm Eskil Magnussen 👋
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-lg text-gray-600 dark:text-gray-300 mt-2"
    >
      Informatics student | Web developer | Tech enthusiast
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-4 flex flex-wrap justify-center gap-4"
    >
      <a href="mailto:eskil.magnussen@gmail.com">
        <Button variant="outline"><Mail className="w-4 h-4 mr-2" /> Email</Button>
      </a>
      <a href="https://github.com/eskmag" target="_blank">
        <Button variant="outline"><Github className="w-4 h-4 mr-2" /> GitHub</Button>
      </a>
      <a href="https://www.linkedin.com/in/eskilmagnussen/" target="_blank">
        <Button variant="outline"><FileText className="w-4 h-4 mr-2" /> LinkedIn</Button>
      </a>
    </motion.div>
  </header>
);
