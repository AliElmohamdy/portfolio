import React from "react";
import { servicesData } from "@/data/services";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-3">
            <span className="w-2 h-2 rounded-full bg-electric-blue" />
            <span>Service Matrix</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white">
            WHAT I BUILD.
          </h2>
          <p className="mt-4 text-canvas-muted text-base sm:text-lg font-sans">
            Tailored engineering solutions designed for production scalability, reliability,
            and intuitive user interaction.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-navy-border/60 bg-navy-surface/30 backdrop-blur-md p-7 flex flex-col justify-between hover:border-electric-blue/40 hover:bg-navy-surface/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-electric-blue tracking-wider">
                    {service.number}
                  </span>
                  <div className="w-8 h-[1px] bg-navy-border/60 group-hover:w-12 group-hover:bg-electric-blue/60 transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-canvas-white group-hover:text-electric-cyan transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-canvas-muted text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-navy-border/30">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-canvas-muted"
                    >
                      <Check className="w-3.5 h-3.5 text-electric-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono text-electric-blue group-hover:text-electric-cyan font-semibold transition-colors"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

