"use client";

import React from "react";
import { Briefcase } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      id: "fullstack",
      title: "Full-Stack Web Engineering",
      role: "Architecture & Implementation",
      description:
        "Building responsive web applications using Next.js, React, and TypeScript with clean server-side rendering and structured API routes.",
      points: ["Next.js (App Router) & React 18", "REST & Serverless Endpoints", "Tailwind CSS & Responsive Layouts"],
    },
    {
      id: "discord",
      title: "Discord & Realtime Automation",
      role: "System Development",
      description:
        "Developing scalable event-driven bots, moderation workflows, and study productivity systems supporting active communities.",
      points: ["Discord.js & Python Bot Engines", "Stateful timers & Pomodoro routines", "Persistent SQLite / Database logging"],
    },
    {
      id: "workflow",
      title: "Operations & HR Coordination",
      role: "Context @ Amrix",
      description:
        "Bridging software development with team operations and communication as HR at Amrix, ensuring tools serve real human workflows.",
      points: ["Cross-functional communication", "Process documentation & automation", "Internal operations support"],
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-navy-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-navy-border/60 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
              Background &amp; Focus
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white mt-1">
              Engineering with Purpose
            </h2>
          </div>
          <p className="text-canvas-muted text-sm sm:text-base max-w-md font-sans">
            A developer who pairs technical implementation with operational discipline and clear communication.
          </p>
        </div>

        {/* Structured 3-column capability grid shaped by real roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-navy-border bg-navy-surface p-7 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-electric-blue uppercase tracking-wider mb-2">
                  {item.role}
                </div>
                <h3 className="font-display text-xl font-bold text-canvas-white mb-3">
                  {item.title}
                </h3>
                <p className="text-canvas-muted text-sm leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-navy-border/60">
                {item.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-canvas-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue/60" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Role Callout */}
        <div className="mt-8 rounded-xl border border-navy-border bg-navy-surface/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-navy-deep border border-navy-border text-electric-blue">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-semibold text-canvas-white text-base">
                Human Resources @ Amrix
              </div>
              <div className="text-canvas-muted text-xs sm:text-sm">
                Active operational role bridging team coordination, operations, and technical workflow building.
              </div>
            </div>
          </div>
          <span className="font-mono text-xs text-canvas-subtle">Current Position</span>
        </div>
      </div>
    </section>
  );
}
