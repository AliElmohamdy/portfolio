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
    "Learn about Aly Elmohamdy — Full-Stack Developer & Creative Builder, HR @ Amrix.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-electric-blue" />
            <span>Profile & Mindset</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-canvas-white">
            ALY ELMOHAMDY
          </h1>
          <p className="mt-4 text-electric-cyan font-mono text-sm tracking-wider">
            {siteConfig.profession} • {siteConfig.role}
          </p>
          <div className="mt-8 p-6 rounded-2xl bg-navy-surface/40 border border-navy-border/60">
            <p className="text-canvas-muted text-base sm:text-lg leading-relaxed font-sans">
              &ldquo;{siteConfig.biography}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Main Bento Highlights */}
      <AboutSection />

      {/* Skills Showcase */}
      <SkillsSection />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-16 text-center">
        <div className="p-12 rounded-3xl border border-navy-border/80 bg-navy-surface/30 backdrop-blur-md">
          <h2 className="font-display text-3xl font-bold text-canvas-white mb-4">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="text-canvas-muted text-sm max-w-md mx-auto mb-8 font-sans">
            Ready to turn your ambitious engineering ideas into reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase tracking-wider hover:bg-electric-cyan transition-colors"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

