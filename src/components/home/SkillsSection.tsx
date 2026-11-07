"use client";

import React, { useState } from "react";
import { skillCategoriesData } from "@/data/skills";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillCategoriesData.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === "All"
      ? skillCategoriesData
      : skillCategoriesData.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-navy-deep/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-3">
              <span className="w-2 h-2 rounded-full bg-electric-blue" />
              <span>Verified Tech Stack</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white">
              CORE CAPABILITIES.
            </h2>
          </div>
          <p className="text-canvas-muted text-sm sm:text-base max-w-md font-sans">
            Directly mapped from verified development projects and production builds.
            Zero arbitrary skill percentages.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-navy-border/40">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-electric-blue text-obsidian font-bold shadow-[0_0_15px_rgba(87,200,255,0.3)]"
                  : "bg-navy-surface/60 text-canvas-muted hover:text-canvas-white hover:bg-navy-surface border border-navy-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-navy-border/60 bg-navy-surface/30 backdrop-blur-md p-6 hover:border-electric-blue/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-base font-bold text-canvas-white">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[11px] text-electric-blue">
                    {group.skills.length} techs
                  </span>
                </div>
                <p className="text-canvas-muted text-xs leading-relaxed mb-5 font-sans">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-border/30">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-navy-deep/80 border border-navy-border/70 text-canvas-white hover:border-electric-blue/50 hover:text-electric-cyan transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue/70" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

