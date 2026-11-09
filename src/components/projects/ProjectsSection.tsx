import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-navy-border/60 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
              Selected Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white mt-1">
              Featured Systems &amp; Builds
            </h2>
          </div>
          <p className="text-canvas-muted text-sm sm:text-base max-w-md font-sans">
            Real production applications, discord systems, and client platforms built with Next.js, Node.js, and Python.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom CTA for full gallery if limited */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-navy-border bg-navy-surface text-xs font-mono tracking-wider uppercase text-canvas-white hover:border-canvas-muted transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue"
            >
              <span>View All 4 Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

