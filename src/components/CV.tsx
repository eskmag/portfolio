// src/components/CV.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const CV: React.FC = () => (
  <section className="text-center">
    <h2 className="text-2xl font-semibold mb-4">CV</h2>
    <p className="text-gray-500 dark:text-gray-300 mb-4">
      You can view or download my CV using the button below.
    </p>
    <a href="/cv.pdf" target="_blank">
      <Button variant="outline">
        <FileText className="w-4 h-4 mr-2" /> View My CV
      </Button>
    </a>
  </section>
);