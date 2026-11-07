import React from "react";
import Link from "next/link";
import { AeLogo } from "@/components/brand/AeLogo";
import { siteConfig } from "@/data/site";
import { socialsData } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-navy-border/60 bg-navy-deep/80 backdrop-blur-md pt-16 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-navy-border/40">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <Link href="/" className="inline-block">
              <AeLogo variant="horizontal" size={36} />
            </Link>
            <p className="text-canvas-muted text-sm max-w-md leading-relaxed mt-1">
              {siteConfig.primaryTagline} {siteConfig.secondaryTagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-surface/80 border border-navy-border text-xs font-mono text-electric-cyan">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
              <span>{siteConfig.role}</span>
            </div>
          </div>

          {/* Quick Routes */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-canvas-subtle">
              Navigation
            </span>
            <Link
              href="/"
              className="text-sm text-canvas-muted hover:text-electric-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-canvas-muted hover:text-electric-blue transition-colors"
            >
              About Aly
            </Link>
            <Link
              href="/projects"
              className="text-sm text-canvas-muted hover:text-electric-blue transition-colors"
            >
              Project Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm text-canvas-muted hover:text-electric-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Connect / Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-canvas-subtle">
              Official Profiles
            </span>
            {socialsData.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between text-sm text-canvas-muted hover:text-electric-blue transition-colors"
              >
                <span>{social.platform}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-canvas-subtle group-hover:text-electric-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-canvas-subtle">
          <p>© {new Date().getFullYear()} ALY ELMOHAMDY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span>BEYOND CODE</span>
            <span>•</span>
            <span>ENGINEERED FOR PRODUCTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

