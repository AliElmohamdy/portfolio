export interface SkillItem {
  name: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming and markup languages forming the foundation of every build.",
    skills: ["JavaScript", "Python", "HTML5", "CSS3"]
  },
  {
    title: "Frontend Engineering",
    description: "Reactive component architectures, dynamic routing, and high-performance client state.",
    skills: ["React", "React Native", "React Query", "React Router", "React Hook Form"]
  },
  {
    title: "Backend & Realtime Services",
    description: "Scalable server environments, API endpoints, microservices, and live socket streams.",
    skills: ["Next.js", "Node.js", "Socket.io", "Firebase"]
  },
  {
    title: "Databases & Storage",
    description: "Relational, document, and embedded data persistence layers optimized for consistency.",
    skills: ["MongoDB", "MySQL", "SQLite"]
  },
  {
    title: "Cloud, CDN & Containers",
    description: "High-availability deployment pipelines, serverless functions, and containerized runtimes.",
    skills: ["Google Cloud", "Alibaba Cloud", "Cloudflare", "Vercel", "Netlify", "Docker"]
  },
  {
    title: "Development Environment",
    description: "Scripted automation, command-line tooling, and modern developer workflow shells.",
    skills: ["PowerShell", "Windows Terminal"]
  },
  {
    title: "Game & Graphics Engines",
    description: "Interactive 3D environments, low-level graphics pipelines, and spatial simulations.",
    skills: ["Unity", "Unreal Engine", "OpenGL"]
  }
];

