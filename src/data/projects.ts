export interface Project {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  purpose: string;
  developmentApproach: string;
  highlights: string[];
  features?: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-01",
    number: "01",
    slug: "womens-health-physiotherapy",
    title: "Women's Health Physiotherapy Website",
    category: "Healthcare Website",
    tagline: "Dedicated digital platform elevating specialized physical therapy and care.",
    description: "A specialized website focused on physiotherapy in women's healthcare.",
    overview: "A dedicated digital experience architected to present clinical physiotherapy services tailored specifically to women's pelvic health, prenatal, and postpartum rehabilitation.",
    purpose: "Provide accessible, empathetic, and scientifically grounded information on specialized therapy, guiding clients through consultation booking, care pathways, and clinical guidance with clear visual hierarchy.",
    developmentApproach: "Focused on an approachable yet clinical aesthetic with pristine typography, structured content layouts, seamless client intake paths, and high accessibility compliance across desktop and mobile devices.",
    highlights: [
      "Intuitive healthcare service discovery",
      "Tailored patient information architecture",
      "Mobile-first responsive consultation flow",
      "Zero-clutter typographic presentation"
    ],
    features: [
      "Comprehensive clinical service breakdowns",
      "Patient education and treatment guide sections",
      "Direct consultation inquiry system",
      "Structured FAQ and appointment readiness information"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: "project-02",
    number: "02",
    slug: "discord-system-bot",
    title: "Discord System Bot",
    category: "Discord Automation",
    tagline: "Infrastructure and moderation automation engine for communities.",
    description: "A Discord system bot created to support server management and automation.",
    overview: "An automated system bot engineered to orchestrate large Discord server operations, execute automated permissions auditing, streamline administrative routines, and enforce moderation guidelines.",
    purpose: "Eliminate repetitive server administration overhead, protect communities from raid vectors and spam, and provide reliable automated infrastructure with low latency.",
    developmentApproach: "Architected around event-driven command handlers, resilient webhook logging, fine-grained role state synchronizations, and defensive error boundaries preventing event loop lockups.",
    highlights: [
      "Modular command & event dispatch architecture",
      "Granular role and access permission guards",
      "Automated logging and audit trail streaming",
      "Resilient background process uptime"
    ],
    features: [
      "Automated rule verification and onboarding",
      "Administrative system commands",
      "Real-time event logging channels",
      "Automated role assignment workflows"
    ],
    technologies: ["Node.js", "JavaScript", "Python", "Socket.io", "SQLite"]
  },
  {
    id: "project-03",
    number: "03",
    slug: "study-bot",
    title: "Study Bot",
    category: "Discord Productivity",
    tagline: "Focus session timer and study accountability assistant for Discord.",
    description: "A Discord bot focused on study sessions and productivity.",
    overview: "A focused productivity assistant built for study communities, peer groups, and academic servers designed to orchestrate structured Pomodoro intervals, track session streaks, and maintain group accountability.",
    purpose: "Empower students and self-learners to organize dedicated study sprints, reduce distractions in collaborative environments, and cultivate disciplined daily study habits.",
    developmentApproach: "Constructed with precision interval scheduling, stateful session memory per user and channel, dynamic voice channel status updates, and interactive Discord buttons for friction-free session control.",
    highlights: [
      "Synchronous Pomodoro study timers",
      "Voice channel active study status indicator",
      "Streak tracking and study milestone counters",
      "Lightweight non-intrusive reminder alerts"
    ],
    features: [
      "Customizable work / break duration intervals",
      "Group study room timer coordination",
      "Session statistics and personal streak log",
      "Focus mode ping muting routines"
    ],
    technologies: ["Python", "Node.js", "JavaScript", "SQLite"]
  },
  {
    id: "project-04",
    number: "04",
    slug: "study-website",
    title: "Study Website",
    category: "Web Application",
    tagline: "Minimalist web platform fostering distraction-free deep work and studying.",
    description: "A web platform focused on studying and productivity.",
    overview: "A web application engineered around cognitive flow states, enabling learners to plan structured study blocks, manage task priorities, monitor revision progress, and sustain high productivity.",
    purpose: "Provide a clean, ad-free, dark-themed web environment that consolidates session tracking, subject notes, and daily objectives without algorithmic clutter or cognitive fatigue.",
    developmentApproach: "Engineered with client-side state caching, ultra-fast route transitions, distraction-free typography, and responsive touch controls for tablets and desktops alike.",
    highlights: [
      "Distraction-free minimalist interface",
      "Persistent session task priorities",
      "Responsive workspace adaptivity",
      "Instant loading and offline-ready storage"
    ],
    features: [
      "Subject-based study agenda organizer",
      "Deep-focus session stopwatch and timer",
      "Task completion checklist with local persistence",
      "Dark-mode ambient workspace theme"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
  }
];

