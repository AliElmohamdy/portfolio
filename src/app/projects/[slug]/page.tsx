import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <article className="pt-28 pb-20 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-canvas-muted hover:text-electric-blue transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Hero Header */}
        <header className="border-b border-navy-border/60 pb-12 mb-12">
          <div className="flex items-center gap-3 font-mono text-xs text-electric-blue mb-4">
            <span className="font-bold">PROJECT {project.number}</span>
            <span>•</span>
            <span className="uppercase text-canvas-muted">{project.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-canvas-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-electric-cyan font-sans font-light leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Conditional Action Buttons */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-4 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase hover:bg-electric-cyan transition-colors"
                >
                  <span>LIVE DEMO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy-border bg-navy-surface text-canvas-white font-mono text-xs uppercase hover:border-electric-blue transition-colors"
                >
                  <span>SOURCE CODE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </header>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Main Editorial Body */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue mb-4">
                01. Overview
              </h2>
              <p className="text-canvas-muted text-base sm:text-lg leading-relaxed font-sans">
                {project.overview}
              </p>
            </section>

            {/* Purpose */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue mb-4">
                02. Purpose & Mission
              </h2>
              <p className="text-canvas-muted text-base leading-relaxed font-sans">
                {project.purpose}
              </p>
            </section>

            {/* Development Approach */}
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue mb-4">
                03. Architectural Approach
              </h2>
              <p className="text-canvas-muted text-base leading-relaxed font-sans">
                {project.developmentApproach}
              </p>
            </section>

            {/* Features (if present) */}
            {project.features && (
              <section>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue mb-4">
                  04. Key Capabilities
                </h2>
                <div className="space-y-3">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-navy-surface/30 border border-navy-border/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                      <span className="text-canvas-white text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Metadata */}
          <aside className="space-y-8">
            {/* Technologies */}
            {project.technologies && (
              <div className="p-6 rounded-2xl bg-navy-surface/40 border border-navy-border/60">
                <span className="font-mono text-xs uppercase tracking-wider text-canvas-subtle block mb-4">
                  Confirmed Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-navy-deep border border-navy-border/80 text-electric-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div className="p-6 rounded-2xl bg-navy-surface/40 border border-navy-border/60">
              <span className="font-mono text-xs uppercase tracking-wider text-canvas-subtle block mb-4">
                Architectural Highlights
              </span>
              <ul className="space-y-2.5">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="text-xs text-canvas-muted font-sans flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Related Projects Section */}
        <section className="pt-16 border-t border-navy-border/60">
          <h2 className="font-display text-2xl font-bold text-canvas-white mb-8">
            RELATED PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                className="group p-6 rounded-2xl border border-navy-border/60 bg-navy-surface/30 hover:border-electric-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-electric-blue">
                    PROJECT {rel.number}
                  </span>
                  <h3 className="font-display text-base font-bold text-canvas-white group-hover:text-electric-cyan transition-colors mt-2 mb-1">
                    {rel.title}
                  </h3>
                  <p className="text-canvas-muted text-xs line-clamp-2">
                    {rel.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-navy-border/30 flex items-center justify-between text-xs font-mono text-canvas-subtle group-hover:text-electric-blue">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

