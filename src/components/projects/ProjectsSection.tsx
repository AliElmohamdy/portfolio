import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-navy-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-3">
              <span className="w-2 h-2 rounded-full bg-electric-blue" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white">
              ENGINEERED ARTIFACTS.
            </h2>
          </div>
          <p className="text-canvas-muted text-sm sm:text-base max-w-md font-sans">
            Text-first, architectural project exhibits crafted through clean typography,
            geometry, and technical precision.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom CTA for full gallery if limited */}
        {limit && (
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy-border bg-navy-surface/50 text-xs font-mono tracking-wider uppercase text-canvas-white hover:border-electric-blue hover:text-electric-blue transition-all"
            >
              <span>EXPLORE ALL ARCHITECTURES</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

