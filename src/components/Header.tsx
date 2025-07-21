// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="text-center">
      <div className="flex justify-between items-center mb-8">
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
        
        {/* Dark mode toggle */}
        <Button variant="ghost" onClick={toggleDarkMode} className="ml-auto">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>
      
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 hidden md:block"
      >
        <ul className="flex justify-center gap-8 text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a></li>
          <li><a href="#tech-stack" className="hover:text-blue-500 transition-colors duration-300">Tech Stack</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
          <li><a href="#cv" className="hover:text-blue-500 transition-colors duration-300">CV</a></li>
        </ul>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 md:hidden bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
          >
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a href="#about" onClick={toggleMobileMenu} className="block py-2 hover:text-blue-500 transition-colors duration-300">About</a></li>
              <li><a href="#tech-stack" onClick={toggleMobileMenu} className="block py-2 hover:text-blue-500 transition-colors duration-300">Tech Stack</a></li>
              <li><a href="#projects" onClick={toggleMobileMenu} className="block py-2 hover:text-blue-500 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" onClick={toggleMobileMenu} className="block py-2 hover:text-blue-500 transition-colors duration-300">Contact</a></li>
              <li><a href="#cv" onClick={toggleMobileMenu} className="block py-2 hover:text-blue-500 transition-colors duration-300">CV</a></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

    {/* Profile Picture */}
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
      className="mb-8 flex justify-center"
    >
      <div className="relative group">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
            {/* Profile image with fallback */}
            <img 
              src="/images/profile.jpg"
              alt="Eskil Magnussen" 
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Hide image and show initials fallback if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback initials (hidden by default, shown if image fails) */}
            <div 
              className="w-full h-full flex items-center justify-center text-5xl font-bold text-gray-500 dark:text-gray-400" 
              style={{ display: 'none' }}
            >
              EM
            </div>
          </div>
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      </div>
    </motion.div>

    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-5xl md:text-6xl font-bold mb-4"
    >
      Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Eskil Magnussen</span> 👋
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
    >
      Informatics Student | Web Developer | Tech Enthusiast
    </motion.p>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
    >
      Passionate about creating digital solutions that make a difference. Currently exploring the intersection of data science and web development.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap justify-center gap-4"
    >
      <a href="mailto:eskil.magnussen@gmail.com">
        <Button variant="outline" className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20 transition-all duration-300">
          <Mail className="w-4 h-4 mr-2" /> Email
        </Button>
      </a>
      <a href="https://github.com/eskmag" target="_blank">
        <Button variant="outline" className="hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-800 transition-all duration-300">
          <Github className="w-4 h-4 mr-2" /> GitHub
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/eskilmagnussen/" target="_blank">
        <Button variant="outline" className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-900/20 transition-all duration-300">
          <FileText className="w-4 h-4 mr-2" /> LinkedIn
        </Button>
      </a>
    </motion.div>
  </header>
);
};
