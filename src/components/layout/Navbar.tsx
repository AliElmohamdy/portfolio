"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AeLogo } from "@/components/brand/AeLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        scrolled
          ? "bg-obsidian/95 border-navy-border backdrop-blur-sm py-3"
          : "bg-obsidian/60 border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-canvas-white hover:text-electric-blue transition-colors"
          aria-label="Aly Elmohamdy Home"
        >
          <AeLogo variant="primary" size={28} />
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-wider text-sm">
              ALY ELMOHAMDY
            </span>
            <span className="font-mono text-[10px] text-canvas-subtle">
              DEVELOPER &amp; BUILDER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-md ${
                  isActive
                    ? "text-canvas-white bg-navy-surface font-semibold"
                    : "text-canvas-muted hover:text-canvas-white hover:bg-navy-surface/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-canvas-white hover:bg-navy-surface transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian border-b border-navy-border px-6 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-sm font-mono text-canvas-muted hover:text-canvas-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
