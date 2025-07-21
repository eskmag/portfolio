// src/components/Projects.tsx
import React from "react";
import { projects, Project } from "@/data/projects";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-gray-600 dark:text-gray-300">Featured</h3>
          <div className="grid gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={`featured-${project.title}-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
      
      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-600 dark:text-gray-300">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={`other-${project.title}-${index}`} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.deployed_link && project.deployed_link !== "#" ? (
            <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">Live</Badge>
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
