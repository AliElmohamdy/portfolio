import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Aly Elmohamdy, Full-Stack Developer and HR @ Amrix.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="max-w-3xl border-b border-navy-border/60 pb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
            Developer Profile
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-canvas-white mt-1">
            Aly Elmohamdy
          </h1>
          <p className="mt-3 text-canvas-muted font-mono text-sm">
            {siteConfig.profession} &bull; {siteConfig.role}
          </p>
          <div className="mt-6 p-6 rounded-xl bg-navy-surface border border-navy-border">
            <p className="text-canvas-white text-base leading-relaxed font-sans">
              {siteConfig.biography}
            </p>
          </div>
        </div>
      </section>

      {/* Main Capability Highlights */}
      <AboutSection />

      {/* Skills Showcase */}
      <SkillsSection />

      {/* Direct CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-16 text-center">
        <div className="p-10 rounded-xl border border-navy-border bg-navy-surface">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-canvas-white mb-3">
            Have a project or collaboration in mind?
          </h2>
          <p className="text-canvas-muted text-sm max-w-md mx-auto mb-6 font-sans">
            Whether you need a web platform, Discord automation engine, or custom integration, let&apos;s discuss the scope.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
