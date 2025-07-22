// src/components/StickyNav.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

interface StickyNavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({ darkMode, toggleDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero section (roughly 80vh)
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        >
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo/Name */}
              <motion.div 
                className="font-bold text-lg text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                Eskil Magnussen
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div 
                className="hidden md:flex items-center gap-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ul className="flex gap-6 text-sm font-medium">
                  <li>
                    <a 
                      href="#about" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#tech-stack" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#projects" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#cv" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      CV
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Controls */}
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Mobile menu button */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="md:hidden"
                  onClick={toggleMobileMenu}
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
                
                {/* Dark mode toggle */}
                <Button variant="ghost" size="sm" onClick={toggleDarkMode}>
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <ul className="flex flex-col gap-3 pt-4">
                    <li>
                      <a 
                        href="#about" 
                        onClick={toggleMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#tech-stack" 
                        onClick={toggleMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      >
                        Tech Stack
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#projects" 
                        onClick={toggleMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#contact" 
                        onClick={toggleMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#cv" 
                        onClick={toggleMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      >
                        CV
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
