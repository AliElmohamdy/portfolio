import React from "react";
import { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore featured projects and systems developed by Aly Elmohamdy.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-4">
        <div className="max-w-3xl border-b border-navy-border/60 pb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
            Archive
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-canvas-white mt-1">
            Selected Works
          </h1>
          <p className="mt-3 text-canvas-muted text-base sm:text-lg font-sans">
            A breakdown of completed platforms, automation systems, and applications with technical context and source details.
          </p>
        </div>
      </div>

      <ProjectsSection />
    </div>
  );
}
