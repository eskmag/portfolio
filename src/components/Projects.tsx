// src/components/Projects.tsx
import React from "react";
import { projects, Project } from "@/data/projects";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-lg font-medium mb-6 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured
          </motion.h3>
          <div className="grid gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={`featured-${project.title}-${index}`} project={project} />
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-lg font-medium mb-6 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={`other-${project.title}-${index}`} project={project} />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.deployed_link && project.deployed_link !== "#" ? (
              <Badge variant="default" className="bg-green-300 text-green-800">Live</Badge>
            ) : (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Coming Soon</Badge>
            )}
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
          
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            {project.deployed_link && project.deployed_link !== "#" && (
              <a
                href={project.deployed_link}
                className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
