"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { socialsData } from "@/data/socials";
import { siteConfig } from "@/data/site";
import {
  DiscordIcon,
  WhatsAppIcon,
  InstagramIcon,
  GitHubIcon,
} from "@/components/icons/SocialIcons";
import {
  Send,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Mail,
} from "lucide-react";

const ContactBackground3D = dynamic(
  () =>
    import("@/components/three/ContactBackground3D").then(
      (mod) => mod.ContactBackground3D
    ),
  { ssr: false }
);

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Return official authentic brand SVG icon
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "discord":
        return <DiscordIcon className="w-5 h-5 text-[#5865F2]" />;
      case "whatsapp":
        return <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />;
      case "instagram":
        return <InstagramIcon className="w-5 h-5 text-[#E1306C]" />;
      case "github":
        return <GitHubIcon className="w-5 h-5 text-canvas-white" />;
      case "email":
        return <Mail className="w-5 h-5 text-electric-blue" />;
      default:
        return <Mail className="w-5 h-5 text-electric-blue" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setServerError(data.message || "Something went wrong.");
        }
      } else {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setServerError("Network failure. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* 3D Wireframe Orbit Atmosphere */}
      <ContactBackground3D />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Vision & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-electric-blue uppercase tracking-[0.25em] mb-4">
                <span className="w-2 h-2 rounded-full bg-electric-blue" />
                <span>Direct Dispatch & Connect</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-canvas-white leading-tight">
                HAVE AN IDEA? <br />
                <span className="text-electric-blue">LET&apos;S BUILD IT.</span>
              </h2>
              <p className="mt-5 text-canvas-muted text-base leading-relaxed font-sans">
                Whether you need a high-performance web platform, an automated Discord
                bot system, or custom backend services, I am ready to collaborate.
              </p>

              {/* Direct Quick Contact Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-xs font-mono tracking-wider transition-all shadow-[0_0_15px_rgba(37,211,102,0.15)]"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp: {siteConfig.whatsapp}</span>
                </a>
                <a
                  href={siteConfig.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 text-[#7983F5] hover:bg-[#5865F2]/20 text-xs font-mono tracking-wider transition-all shadow-[0_0_15px_rgba(88,101,242,0.15)]"
                >
                  <DiscordIcon className="w-4 h-4" />
                  <span>Discord Chat</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-cyan hover:bg-electric-blue/20 text-xs font-mono tracking-wider transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>

            {/* Social Channels List with Official Icons */}
            <div className="mt-12 pt-8 border-t border-navy-border/50">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-canvas-subtle block mb-4">
                Official Channels & Direct Chat
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialsData.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3.5 rounded-2xl border border-navy-border/60 bg-navy-surface/30 hover:border-electric-blue/40 hover:bg-navy-surface/60 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-navy-deep border border-navy-border/70 group-hover:border-electric-blue/40 transition-colors flex items-center justify-center">
                        {getPlatformIcon(social.platform)}
                      </div>
                      <div>
                        <span className="font-display text-sm font-semibold text-canvas-white group-hover:text-electric-cyan block transition-colors">
                          {social.platform}
                        </span>
                        <span className="font-mono text-[11px] text-canvas-subtle truncate block max-w-[120px]">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-canvas-subtle group-hover:text-electric-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Secure Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-navy-border/80 bg-navy-deep/80 backdrop-blur-xl p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-canvas-white">
                    Message Transmitted
                  </h3>
                  <p className="text-canvas-muted text-sm max-w-md mx-auto">
                    Thank you for reaching out. Your transmission has been recorded, and
                    I will review your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-navy-border font-mono text-xs text-canvas-white hover:border-electric-blue"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {serverError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-navy-surface/80 border border-navy-border text-canvas-white placeholder:text-canvas-subtle/50 text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.name[0]}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-navy-surface/80 border border-navy-border text-canvas-white placeholder:text-canvas-subtle/50 text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.email[0]}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / Bot Development / Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-navy-surface/80 border border-navy-border text-canvas-white placeholder:text-canvas-subtle/50 text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors"
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.subject[0]}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-canvas-muted mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your project, objectives, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-surface/80 border border-navy-border text-canvas-white placeholder:text-canvas-subtle/50 text-sm focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.message[0]}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-electric-blue hover:bg-electric-cyan text-obsidian font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(87,200,255,0.3)] disabled:opacity-50"
                  >
                    <span>
                      {submitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                    </span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
