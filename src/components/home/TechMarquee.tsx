"use client";

import React from "react";
import { skillCategoriesData } from "@/data/skills";

export function TechMarquee() {
  // Flatten all verified technologies into a distinct ordered list
  const allSkills = Array.from(
    new Set(skillCategoriesData.flatMap((cat) => cat.skills))
  );

  return (
    <section className="relative py-10 overflow-hidden border-y border-navy-border/60 bg-gradient-to-r from-obsidian via-navy-deep/80 to-obsidian select-none">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-full bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-full bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric-blue font-bold">
            VERIFIED TECH STACK STREAM
          </span>
        </div>
        <span className="font-mono text-[11px] text-canvas-subtle tracking-wider uppercase hidden sm:inline-block">
          CONTINUOUS EXPERTISE PIPELINE
        </span>
      </div>

      {/* Edge gradient masks for seamless fade out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-obsidian to-transparent z-10" />

      {/* Continuous Marquee Track 1 (Left to Right / Continuous) */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex gap-4 animate-marquee py-2">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-navy-surface/60 border border-navy-border/80 hover:border-electric-blue/60 hover:bg-navy-surface/90 hover:shadow-[0_0_20px_rgba(87,200,255,0.25)] transition-all duration-300 group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue group-hover:scale-125 transition-transform" />
              <span className="font-mono text-xs sm:text-sm font-semibold text-canvas-white group-hover:text-electric-cyan tracking-wider">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Track (Opposite direction / Slower offset for rich texture) */}
      <div className="flex whitespace-nowrap overflow-hidden mt-3">
        <div className="flex gap-4 animate-marquee-reverse py-1">
          {[...allSkills.reverse(), ...allSkills].map((skill, index) => (
            <div
              key={`rev-${skill}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-deep/60 border border-navy-border/50 text-canvas-muted text-xs font-mono tracking-wider hover:border-accent-purple/50 hover:text-canvas-white transition-colors cursor-default"
            >
              <span className="text-electric-blue/50 text-[10px]">#</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

