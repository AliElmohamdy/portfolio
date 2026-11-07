"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth responsive tilt
    const rotX = -((y - centerY) / centerY) * 5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotateX(rotX);
    setRotateY(rotY);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s ease-out",
      }}
      className="relative group rounded-3xl border border-navy-border/60 bg-gradient-to-b from-navy-surface/50 via-navy-deep/60 to-obsidian/80 backdrop-blur-xl p-8 lg:p-10 transition-all duration-300 hover:border-electric-blue/50 hover:shadow-[0_10px_40px_-10px_rgba(87,200,255,0.2)] overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Following Pointer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(87, 200, 255, 0.12), transparent 70%)`,
        }}
      />

      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-navy-border/40">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-electric-blue/10 border border-electric-blue/20 text-electric-blue tracking-wider">
              PROJECT {project.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-navy-border" />
            <span className="font-mono text-xs text-canvas-muted uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="w-11 h-11 rounded-full border border-navy-border/80 bg-navy-surface/40 flex items-center justify-center text-canvas-muted group-hover:text-electric-blue group-hover:border-electric-blue/60 group-hover:bg-electric-blue/10 group-hover:scale-105 transition-all duration-300"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Center Title & Tagline & Description */}
        <div className="space-y-4 my-2">
          <Link href={`/projects/${project.slug}`} className="block">
            <h3 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-canvas-white group-hover:text-electric-cyan transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-canvas-muted text-sm sm:text-base leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Bottom Technical Overview & Action */}
        <div className="pt-6 border-t border-navy-border/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies?.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-navy-deep/80 border border-navy-border/60 text-canvas-subtle group-hover:border-electric-blue/30 group-hover:text-canvas-muted transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-electric-blue font-semibold hover:text-electric-cyan transition-colors"
          >
            <span>View Case Study</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
