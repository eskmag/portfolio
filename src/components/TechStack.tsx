// src/components/TechStack.tsx
import React from "react";

export const TechStack: React.FC = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
    <div className="flex flex-wrap gap-2">
      {['Python', 'PowerShell', 'Julia', 'Java', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQLite'].map((tech) => (
        <span
          key={tech}
          className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-gray-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </section>
);
