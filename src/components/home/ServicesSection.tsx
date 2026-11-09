import React from "react";
import { servicesData } from "@/data/services";
import { Check } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 relative border-t border-navy-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-navy-border/60 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
              Offerings &amp; Focus
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white mt-1">
              Engineering Services
            </h2>
          </div>
          <p className="text-canvas-muted text-sm sm:text-base max-w-md font-sans">
            Tailored engineering solutions designed for production scalability, reliability, and intuitive user interaction.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-navy-border bg-navy-surface p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-electric-blue tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-xs font-mono text-canvas-subtle">Core Offering</span>
                </div>
                <h3 className="font-display text-xl font-bold text-canvas-white mb-2">
                  {service.title}
                </h3>
                <p className="text-canvas-muted text-sm leading-relaxed mb-6 font-sans">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 pt-4 border-t border-navy-border/60">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-canvas-muted font-sans"
                    >
                      <Check className="w-3.5 h-3.5 text-electric-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
