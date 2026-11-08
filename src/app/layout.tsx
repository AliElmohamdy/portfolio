import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MatrixStreamBackground } from "@/components/effects/MatrixStreamBackground";
import { MouseFollower } from "@/components/effects/MouseFollower";

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.concept}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.profession} • ${siteConfig.role}. ${siteConfig.primaryTagline} Turning ambitious ideas into websites, applications, bots, and digital experiences.`,
  keywords: [
    "Aly Elmohamdy",
    "Full-Stack Developer",
    "Creative Builder",
    "Beyond Code",
    "Next.js Developer",
    "Discord Bot Developer",
    "Amrix",
    "React Developer",
    "Web Development",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.githubUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} — ${siteConfig.primaryTagline}`,
    description: siteConfig.summary,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.concept}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.primaryTagline}`,
    description: siteConfig.summary,
    creator: "@AliElmohamdy",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-obsidian text-canvas-white min-h-screen selection:bg-electric-blue/30 selection:text-white flex flex-col antialiased relative">
        {/* Ambient Moving Matrix & Binary 01 Code Background */}
        <MatrixStreamBackground />
        {/* Dynamic Interactive Mouse Atmosphere Glow */}
        <MouseFollower />

        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
