import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TechMarquee } from "@/components/home/TechMarquee";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { GithubSection } from "@/components/home/GithubSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Continuous Horizontal Tech Stack Stream right below Hero */}
      <TechMarquee />
      <AboutSection />
      <ProjectsSection limit={4} />
      <SkillsSection />
      <ServicesSection />
      <GithubSection />
      <ContactSection />
    </>
  );
}
