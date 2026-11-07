import React from "react";
import Link from "next/link";
import { AeLogo } from "@/components/brand/AeLogo";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <AeLogo variant="primary" size={64} className="mx-auto" />
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric-blue">
            404 — Void Exception
          </span>
          <h1 className="font-display text-4xl font-extrabold text-canvas-white">
            PAGE NOT FOUND
          </h1>
          <p className="text-canvas-muted text-sm leading-relaxed">
            The requested digital coordinate does not exist or has been shifted in the
            matrix.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase tracking-wider hover:bg-electric-cyan transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>RETURN HOME</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy-border bg-navy-surface text-canvas-white font-mono text-xs uppercase hover:border-electric-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PROJECTS</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

