import React from "react";
import Link from "next/link";
import { AeLogo } from "@/components/brand/AeLogo";
import { siteConfig } from "@/data/site";
import { socialsData } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-navy-border bg-obsidian pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-navy-border/60">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col items-start gap-3">
            <Link href="/" className="inline-block">
              <AeLogo variant="horizontal" size={32} />
            </Link>
            <p className="text-canvas-muted text-sm max-w-sm leading-relaxed">
              Full-Stack Developer and Systems Builder. Turning project requirements into reliable software, discord bots, and web interfaces.
            </p>
            <div className="text-xs font-mono text-canvas-subtle mt-1">
              Role: <span className="text-canvas-muted">{siteConfig.role}</span>
            </div>
          </div>

          {/* Quick Routes */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle mb-1">
              Navigation
            </span>
            <Link
              href="/"
              className="text-sm text-canvas-muted hover:text-canvas-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm text-canvas-muted hover:text-canvas-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm text-canvas-muted hover:text-canvas-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-canvas-muted hover:text-canvas-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Connect / Socials */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle mb-1">
              Direct Channels
            </span>
            {socialsData.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between text-sm text-canvas-muted hover:text-canvas-white transition-colors"
              >
                <span>{social.platform}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-canvas-subtle group-hover:text-canvas-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-canvas-subtle">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div>
            Egypt (UTC+2) &bull; Built with Next.js &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
