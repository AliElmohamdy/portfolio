"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { Star, GitFork, ExternalLink, AlertCircle } from "lucide-react";

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
    <section className="py-20 sm:py-28 relative border-t border-navy-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-navy-border/60 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
              Open Source
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white mt-1">
              GitHub Repositories
            </h2>
          </div>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-navy-border bg-navy-surface text-xs font-mono tracking-wider text-canvas-white hover:border-canvas-muted transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue"
          >
            <span>View @{siteConfig.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-40 rounded-xl border border-navy-border bg-navy-surface animate-pulse p-6"
              />
            ))}
          </div>
        )}

        {/* Error Fallback */}
        {error && !loading && (
          <div className="rounded-xl border border-navy-border bg-navy-surface p-8 text-center max-w-xl mx-auto">
            <AlertCircle className="w-6 h-6 text-canvas-subtle mx-auto mb-3" />
            <h3 className="font-display text-base font-bold text-canvas-white mb-2">
              GitHub Activity
            </h3>
            <p className="text-canvas-muted text-xs leading-relaxed mb-4">
              Real-time API rate limits reached or offline. You can view the full repository list directly on GitHub.
            </p>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-blue text-obsidian text-xs font-mono font-bold"
            >
              <span>Open GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Active Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-navy-border bg-navy-surface p-6 flex flex-col justify-between hover:border-canvas-subtle transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mono text-sm font-semibold text-canvas-white group-hover:text-electric-blue transition-colors truncate">
                      {repo.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-canvas-subtle group-hover:text-canvas-white transition-colors shrink-0 ml-2" />
                  </div>
                  <p className="text-canvas-muted text-xs leading-relaxed line-clamp-3 mb-4 font-sans">
                    {repo.description || "Active software repository maintained by Aly Elmohamdy."}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-canvas-subtle pt-3 border-t border-navy-border/60">
                  <span>{repo.language || "TypeScript"}</span>
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
      </div>
    </section>
  );
}
