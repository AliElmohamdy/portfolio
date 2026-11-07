"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import { AnimatedLogo } from "@/components/brand/AnimatedLogo";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Dynamically import Three.js Energy Core to maintain snappy SSR
const EnergyCore = dynamic(
  () => import("@/components/three/EnergyCore").then((mod) => mod.EnergyCore),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-electric-blue/20 flex items-center justify-center animate-pulse">
          <div className="w-24 h-24 rounded-full bg-electric-blue/10 blur-xl" />
        </div>
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden tech-grid">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Editorial Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-surface/80 border border-navy-border/80 text-[11px] font-mono tracking-wider text-canvas-white shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            <span className="text-electric-cyan font-semibold">{siteConfig.status}</span>
            <span className="text-canvas-subtle">•</span>
            <span className="text-canvas-muted">{siteConfig.role}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-1"
          >
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-canvas-white leading-[1.08]">
              BUILDING THE <br />
              <span className="text-electric-blue drop-shadow-[0_0_25px_rgba(87,200,255,0.45)]">
                IMPOSSIBLE.
              </span>
            </h1>
          </motion.div>

          {/* Verified Developer Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-canvas-muted text-base sm:text-lg max-w-xl leading-relaxed font-sans"
          >
            {siteConfig.summary}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-electric-blue text-obsidian font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-electric-cyan hover:shadow-[0_0_25px_rgba(87,200,255,0.5)]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-navy-border/80 bg-navy-surface/40 hover:bg-navy-surface hover:border-electric-blue/50 text-canvas-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300"
            >
              <span>GET IN TOUCH</span>
            </Link>
          </motion.div>

          {/* Logo Reveal Preview Mini Lockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-6 flex items-center gap-4 border-t border-navy-border/30 w-full max-w-lg"
          >
            <AnimatedLogo size={36} />
            <div className="flex flex-col text-xs font-mono text-canvas-subtle">
              <span className="text-canvas-muted font-bold tracking-wider">
                {siteConfig.name}
              </span>
              <span>{siteConfig.secondaryTagline}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Energy Core Sculpture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="w-full aspect-square max-w-[500px] relative">
            <EnergyCore />
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex flex-col items-center justify-center gap-2 text-canvas-subtle"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-electric-blue animate-bounce" />
      </motion.div>
    </section>
  );
}

