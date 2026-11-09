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
    <section id="skills" className="py-20 sm:py-28 relative border-t border-navy-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-navy-border/60 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
              Tooling &amp; Stack
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white mt-1">
              Technical Capabilities
            </h2>
          </div>
          <p className="text-canvas-muted text-sm sm:text-base max-w-md font-sans">
            Languages, libraries, and frameworks applied across verified production repositories and builds.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors ${
                selectedCategory === cat
                  ? "bg-electric-blue text-obsidian font-bold"
                  : "bg-navy-surface text-canvas-muted hover:text-canvas-white border border-navy-border"
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
              className="rounded-xl border border-navy-border bg-navy-surface p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-canvas-white">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-canvas-subtle">
                    {group.skills.length} tools
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-navy-deep border border-navy-border text-canvas-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
