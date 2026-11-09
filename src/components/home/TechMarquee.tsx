"use client";

import React from "react";
import { skillCategoriesData } from "@/data/skills";

export function TechMarquee() {
  const allSkills = Array.from(
    new Set(skillCategoriesData.flatMap((cat) => cat.skills))
  );

  return (
    <section className="relative py-8 overflow-hidden border-b border-navy-border/60 bg-navy-deep/40 select-none">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex gap-3 animate-marquee py-1">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-navy-surface border border-navy-border text-xs font-mono text-canvas-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue/80" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
