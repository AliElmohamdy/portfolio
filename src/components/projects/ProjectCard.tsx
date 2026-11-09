"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-xl border border-navy-border bg-navy-surface p-7 sm:p-8 flex flex-col justify-between transition-colors hover:border-canvas-subtle">
      <div className="flex flex-col gap-5">
        {/* Meta Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-canvas-white font-semibold">{project.number}</span>
            <span className="text-canvas-subtle">/</span>
            <span className="text-canvas-muted uppercase tracking-wider">{project.category}</span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-canvas-muted group-hover:text-canvas-white transition-colors p-1"
            aria-label={`View case study: ${project.title}`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <Link href={`/projects/${project.slug}`} className="block">
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-canvas-white group-hover:text-electric-blue transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-canvas-muted text-sm leading-relaxed font-sans">
            {project.overview || project.description}
          </p>
        </div>
      </div>

      {/* Footer Details */}
      <div className="pt-6 mt-6 border-t border-navy-border/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-navy-deep border border-navy-border text-canvas-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 font-mono text-xs text-canvas-white font-medium hover:text-electric-blue transition-colors"
        >
          <span>Case study</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
