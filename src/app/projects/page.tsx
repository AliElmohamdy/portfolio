import React from "react";
import { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the four featured projects of Aly Elmohamdy — crafted through typography, geometry, and real-time motion.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-3">
            <span className="w-2 h-2 rounded-full bg-electric-blue" />
            <span>Complete Archive</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-canvas-white">
            PROJECT PORTFOLIO.
          </h1>
          <p className="mt-4 text-canvas-muted text-base sm:text-lg font-sans">
            A pure typographic and architectural project exhibition. No mockups, no
            stock imagery — only pure technical clarity and structure.
          </p>
        </div>
      </div>

      <ProjectsSection />
    </div>
  );
}

