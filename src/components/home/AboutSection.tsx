"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import {
  Code2,
  Bot,
  Layers,
  Cpu,
  Sparkles,
  GraduationCap,
  Briefcase,
  Terminal,
} from "lucide-react";

export function AboutSection() {
  const iconsMap: Record<string, React.ReactNode> = {
    fullstack: <Code2 className="w-5 h-5 text-electric-blue" />,
    discord: <Bot className="w-5 h-5 text-electric-cyan" />,
    apps: <Layers className="w-5 h-5 text-accent-purple" />,
    automation: <Cpu className="w-5 h-5 text-electric-blue" />,
    "problem-solving": <Sparkles className="w-5 h-5 text-electric-cyan" />,
    "continuous-learning": <GraduationCap className="w-5 h-5 text-accent-purple" />,
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-3">
            <span className="w-2 h-2 rounded-full bg-electric-blue" />
            <span>Identity & Philosophy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white">
            THE MIND BEHIND THE CODE.
          </h2>
          <p className="mt-5 text-canvas-muted text-base sm:text-lg leading-relaxed font-sans">
            &ldquo;{siteConfig.biography}&rdquo;
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.bentoHighlights.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl border border-navy-border/60 bg-navy-surface/40 backdrop-blur-md p-7 flex flex-col justify-between hover:border-electric-blue/40 hover:bg-navy-surface/70 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-navy-deep border border-navy-border/80 group-hover:border-electric-blue/50 transition-colors">
                    {iconsMap[item.id] || <Terminal className="w-5 h-5 text-electric-blue" />}
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-canvas-subtle px-2 py-0.5 rounded bg-navy-deep/80 border border-navy-border/40">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-canvas-white group-hover:text-electric-cyan transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-canvas-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-border/30 flex items-center justify-between text-xs font-mono text-canvas-subtle">
                <span>Domain Focus</span>
                <span className="text-electric-blue font-semibold">{item.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Role Callout */}
        <div className="mt-12 rounded-2xl border border-navy-border/70 bg-gradient-to-r from-navy-deep via-navy-surface to-navy-deep p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-electric-blue/10 border border-electric-blue/20 text-electric-blue">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-bold text-canvas-white text-base sm:text-lg">
                Human Resources @ Amrix
              </div>
              <div className="text-canvas-muted text-xs sm:text-sm">
                Bridging organizational dynamics, talent empathy, and technical systems.
              </div>
            </div>
          </div>
          <div className="font-mono text-xs text-electric-cyan px-3.5 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/5">
            ORGANIZATIONAL LEADERSHIP
          </div>
        </div>
      </div>
    </section>
  );
}

