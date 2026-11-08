"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AeLogo } from "@/components/brand/AeLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/85 backdrop-blur-md border-b border-navy-border/60 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram + Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Aly Elmohamdy Home"
        >
          <AeLogo variant="primary" size={32} />
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-[0.22em] text-sm text-canvas-white group-hover:text-electric-blue transition-colors">
              ALY ELMOHAMDY
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-canvas-muted uppercase">
              BEYOND CODE
            </span>
          </div>
        </Link>

        {/* Center / Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-navy-surface/50 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-electric-blue font-semibold bg-electric-blue/15 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    : "text-canvas-muted hover:text-canvas-white hover:bg-white/[0.05]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase bg-gradient-to-r from-electric-blue to-electric-cyan text-obsidian font-extrabold overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:scale-[1.03]"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-canvas-white hover:text-electric-blue hover:bg-navy-surface transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-deep/95 backdrop-blur-xl border-b border-navy-border/80 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-mono tracking-wider text-canvas-white hover:text-electric-blue hover:bg-navy-surface/60 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-mono tracking-wider uppercase bg-electric-blue text-obsidian font-bold"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

