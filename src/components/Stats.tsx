// src/components/Stats.tsx
import React from "react";
import { motion } from "framer-motion";
import { useGitHubStats } from "@/hooks/useGitHubStats";

export const Stats: React.FC = () => {
  const { publicRepos, loading, error } = useGitHubStats("eskmag");

  // Static stats that don't change often
  const staticStats = [
    { 
      number: "9+", 
      label: "Technologies",
      description: "Programming languages & tools"
    },
    { 
      number: "3+", 
      label: "Years Learning",
      description: "Continuous development journey"
    },
    { 
      number: "100%", 
      label: "Passion for Code",
      description: "Dedicated to clean, efficient solutions"
    }
  ];

  // Dynamic stats from GitHub
  const dynamicStats = [
    { 
      number: loading ? "..." : error ? "20+" : `${publicRepos}+`, 
      label: "Repositories",
      description: "Open source projects on GitHub"
    },
  ];

  // Combine all stats
  const allStats = [...dynamicStats, ...staticStats];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          By The Numbers
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A snapshot of my journey in technology and continuous learning.
          {loading && " (Fetching live GitHub data...)"}
          {error && " (Showing cached data - GitHub API temporarily unavailable)"}
        </motion.p>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                  {/* Live data indicator for GitHub stats */}
                  {index < 1 && !loading && !error && (
                    <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" title="Live GitHub data" />
                  )}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {stat.label}
                </h3>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievement Highlights */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl mb-2">🎓</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Informatics student at University of Bergen, specializing in Data Science
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Focus Areas</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Web Development, Data Visualization, and Sustainable Tech Solutions
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creating clean, accessible interfaces and productivity content
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
