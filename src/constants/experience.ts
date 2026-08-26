import { Code2, Monitor, ShieldCheck, Blocks } from "lucide-react";

type ExperienceItem = {
  period: string;
  type: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2025 — Present",
    type: "Professional Experience",
    title: "Software Development Engineer - 1",
    company: "miniOrange",
    location: "Pune, India",
    description:
      "Building and maintaining software products across web, browser and desktop environments. My work spans frontend engineering, backend integration, authentication workflows, browser extension development and desktop applications.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Electron",
      "Chrome Extensions",
      "OAuth 2.0",
      // "PKCE",
      "REST APIs",
      // "Git",
    ],
    responsibilities: [
      "Develop and maintain React-based web applications",
      "Build Chrome extensions using Manifest V3 and Chrome APIs",
      "Implement authentication and authorization workflows",
      "Develop Electron desktop applications",
      "Integrate frontend applications with REST APIs",
      "Work on security-focused application functionality",
    ],
  },
];

export const experienceAreas = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Building component-driven interfaces and application workflows.",
  },
  {
    icon: Blocks,
    title: "Browser Extensions",
    description: "Developing browser-native functionality using Manifest V3.",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    description: "Building cross-platform applications with Electron.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Working with authentication, authorization and secure workflows.",
  },
];
