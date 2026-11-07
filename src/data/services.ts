export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack-websites",
    number: "01",
    title: "Full-Stack Websites",
    shortDesc: "End-to-end bespoke digital presences pairing responsive frontends with secure backend infrastructure.",
    deliverables: [
      "Custom responsive interface architecture",
      "Server-side rendering & dynamic routing",
      "Search engine and accessibility optimization",
      "High Core Web Vitals performance benchmarks"
    ]
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    shortDesc: "Interactive software tools, dashboards, and internal web applications built for fluid user workflows.",
    deliverables: [
      "Dynamic state management & reactive UI",
      "Secure authentication & authorization flows",
      "Database schema modeling and persistence",
      "Cross-platform browser responsiveness"
    ]
  },
  {
    id: "discord-bots",
    number: "03",
    title: "Discord Bots",
    shortDesc: "Automated community assistants, server moderation guardians, and custom utility bots.",
    deliverables: [
      "Event-driven command architectures",
      "Slash commands and rich interactive components",
      "Audit logging and automated moderation guards",
      "24/7 background runtime reliability"
    ]
  },
  {
    id: "automation-systems",
    number: "04",
    title: "Automation Systems",
    shortDesc: "Targeted scripts, data ingestion routines, and background jobs that eradicate manual administrative tasks.",
    deliverables: [
      "Repetitive workflow elimination",
      "Scheduled cron scripts and background processors",
      "Data validation and transformation pipelines",
      "Error handling and failure alert notifications"
    ]
  },
  {
    id: "api-integration",
    number: "05",
    title: "API Integration",
    shortDesc: "Robust connectivity connecting external third-party services, webhooks, and REST/WebSocket APIs.",
    deliverables: [
      "Secure third-party API orchestration",
      "Real-time WebSocket bidirectional streams",
      "Rate-limit mitigation and retry logic",
      "Payload contract validation and error mapping"
    ]
  }
];

