"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { GitFork, Star, ExternalLink, Code, AlertCircle } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export function GithubSection() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (!res.ok) {
          throw new Error("Unable to fetch repositories from GitHub");
        }
        const data = await res.json();
        setRepos(data);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to load GitHub activity";
        setError(msg);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="py-24 sm:py-32 relative bg-navy-deep/20 border-t border-navy-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-3">
              <span className="w-2 h-2 rounded-full bg-electric-blue" />
              <span>Public Activity</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white">
              GITHUB ECOSYSTEM.
            </h2>
          </div>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-navy-border/80 bg-navy-surface/50 text-xs font-mono tracking-wider text-canvas-white hover:text-electric-blue hover:border-electric-blue/50 transition-all"
          >
            <span>VIEW @{siteConfig.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-44 rounded-2xl border border-navy-border/40 bg-navy-surface/20 animate-pulse p-6"
              />
            ))}
          </div>
        )}

        {/* Error / Rate Limit Graceful Fallback */}
        {error && !loading && (
          <div className="rounded-2xl border border-navy-border/60 bg-navy-surface/40 p-8 text-center max-w-xl mx-auto">
            <AlertCircle className="w-8 h-8 text-electric-blue mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-canvas-white mb-2">
              GitHub Rate Limit / Offline State
            </h3>
            <p className="text-canvas-muted text-xs leading-relaxed mb-4">
              Real-time API rate limits or network limits reached. You can visit the
              verified public profile directly on GitHub.
            </p>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-blue text-obsidian text-xs font-mono font-bold"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Repositories Grid */}
        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-navy-border/60 bg-navy-surface/30 backdrop-blur-md p-6 hover:border-electric-blue/40 hover:bg-navy-surface/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-electric-blue">REPO</span>
                    <ExternalLink className="w-3.5 h-3.5 text-canvas-subtle group-hover:text-electric-blue transition-colors" />
                  </div>
                  <h3 className="font-display text-base font-bold text-canvas-white group-hover:text-electric-cyan transition-colors mb-2 break-all">
                    {repo.name}
                  </h3>
                  <p className="text-canvas-muted text-xs leading-relaxed line-clamp-2">
                    {repo.description || "Public repository repository code."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-border/30 flex items-center justify-between text-xs font-mono text-canvas-subtle">
                  <div className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-electric-blue" />
                    <span>{repo.language || "Code"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-canvas-subtle" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-canvas-subtle" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Empty state if user has no public repos */}
        {!loading && !error && repos.length === 0 && (
          <div className="rounded-2xl border border-navy-border/60 bg-navy-surface/30 p-8 text-center text-canvas-muted text-sm font-mono">
            No public repositories found for @{siteConfig.githubUsername}.
          </div>
        )}
      </div>
    </section>
  );
}

