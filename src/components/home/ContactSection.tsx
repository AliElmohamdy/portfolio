"use client";

import React, { useState } from "react";
import { socialsData } from "@/data/socials";

import {
  DiscordIcon,
  WhatsAppIcon,
  InstagramIcon,
  GitHubIcon,
} from "@/components/icons/SocialIcons";
import { Send, ArrowUpRight, CheckCircle2, AlertCircle, Mail } from "lucide-react";

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

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "discord":
        return <DiscordIcon className="w-4 h-4 text-[#5865F2]" />;
      case "whatsapp":
        return <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />;
      case "instagram":
        return <InstagramIcon className="w-4 h-4 text-[#E1306C]" />;
      case "github":
        return <GitHubIcon className="w-4 h-4 text-canvas-white" />;
      default:
        return <Mail className="w-4 h-4 text-electric-blue" />;
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
      setServerError("Network connection error. Please try direct email or WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-navy-border/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-navy-border/60 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-canvas-subtle">
              Inquiries
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-canvas-white mt-1">
              Start a Conversation
            </h2>
          </div>
          <p className="text-canvas-muted text-sm sm:text-base max-w-md font-sans">
            Have a project, custom automation, or engineering inquiry? Reach out directly via message or form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-canvas-white">
                  Direct Channels
                </h3>
                <p className="text-canvas-muted text-sm leading-relaxed font-sans">
                  Fastest response times via WhatsApp or Discord for real-time discussion.
                </p>
              </div>

              <div className="space-y-3">
                {socialsData.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-navy-border bg-navy-surface hover:border-canvas-subtle transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-navy-deep border border-navy-border">
                        {getPlatformIcon(social.platform)}
                      </div>
                      <div>
                        <div className="font-display font-semibold text-sm text-canvas-white">
                          {social.platform}
                        </div>
                        <div className="text-xs text-canvas-muted font-mono">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-canvas-subtle group-hover:text-canvas-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>


          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-navy-border bg-navy-surface p-7 sm:p-9">
              {success ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="font-display text-xl font-bold text-canvas-white">
                    Message Received
                  </h3>
                  <p className="text-canvas-muted text-sm max-w-md mx-auto font-sans">
                    Thank you for reaching out. I will review your message and reply via email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-5 py-2 rounded-lg border border-navy-border text-xs font-mono text-canvas-white hover:border-canvas-muted transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {serverError && (
                    <div className="p-3.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-canvas-subtle">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-deep border border-navy-border text-sm text-canvas-white placeholder:text-canvas-subtle focus:border-electric-blue focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400">{errors.name[0]}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase text-canvas-subtle">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-deep border border-navy-border text-sm text-canvas-white placeholder:text-canvas-subtle focus:border-electric-blue focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400">{errors.email[0]}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-canvas-subtle">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project inquiry / Bot development / Consultation"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-deep border border-navy-border text-sm text-canvas-white placeholder:text-canvas-subtle focus:border-electric-blue focus:outline-none transition-colors"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400">{errors.subject[0]}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-canvas-subtle">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your requirements, timeline, or what you want to build."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-deep border border-navy-border text-sm text-canvas-white placeholder:text-canvas-subtle focus:border-electric-blue focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400">{errors.message[0]}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-electric-blue text-obsidian font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white disabled:opacity-50"
                  >
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
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
