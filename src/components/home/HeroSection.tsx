"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-24 flex flex-col justify-center border-b border-navy-border/60 overflow-hidden">
      {/* Ambient background atmosphere effects */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #38BDF8 0%, rgba(56, 189, 248, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-10 blur-[110px]"
        style={{
          background: "radial-gradient(circle, #60A5FA 0%, rgba(96, 165, 250, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle geometric dot grid pattern in the background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(248, 250, 252, 0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="max-w-3xl flex flex-col items-start gap-8">
          {/* Status Line */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-navy-surface border border-navy-border text-xs font-mono text-canvas-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-canvas-white font-medium">Available for projects</span>
            <span className="text-canvas-subtle">/</span>
            <span>{siteConfig.role}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-canvas-white leading-[1.06]">
              Full-Stack Developer &amp; Systems Builder.
            </h1>
            <p className="text-canvas-muted text-lg sm:text-xl max-w-2xl leading-relaxed font-sans">
              I build production-grade web applications, custom Discord automation engines,
              and targeted internal tools that solve operational bottlenecks.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-navy-border bg-navy-surface text-canvas-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors hover:border-canvas-muted hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue"
            >
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Meta specs metrics row */}
          <div className="pt-8 mt-2 grid grid-cols-3 gap-8 sm:gap-12 border-t border-navy-border/60 w-full max-w-xl">
            <div>
              <div className="font-mono text-2xl font-bold text-canvas-white">4+</div>
              <div className="text-xs text-canvas-muted mt-0.5">Production Systems</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-canvas-white">Next.js &amp; React</div>
              <div className="text-xs text-canvas-muted mt-0.5">Primary Core Stack</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-canvas-white">Discord &amp; API</div>
              <div className="text-xs text-canvas-muted mt-0.5">Automation &amp; Bots</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
