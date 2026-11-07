import React from "react";
import { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aly Elmohamdy — Full-Stack Developer & Creative Builder, HR @ Amrix. Available for collaboration.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}

