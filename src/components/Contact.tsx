// src/components/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "eskil.magnussen@gmail.com",
      href: "mailto:eskil.magnussen@gmail.com",
      color: "blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@eskmag",
      href: "https://github.com/eskmag",
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Eskil Magnussen",
      href: "https://www.linkedin.com/in/eskilmagnussen/",
      color: "blue"
    }
  ];

  return (
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
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-${method.color}-100 dark:bg-${method.color}-900/30`}>
                      <IconComponent className={`w-6 h-6 text-${method.color}-600 dark:text-${method.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{method.label}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{method.value}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="mailto:eskil.magnussen@gmail.com">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              <MessageSquare className="w-5 h-5 mr-2" />
              Send me a message
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
