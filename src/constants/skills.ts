import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Monitor,
  Palette,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const frontendSkills: Skill[] = [
  {
    name: "React",
    description: "Component-driven interfaces",
    icon: Code2,
  },
  {
    name: "TypeScript",
    description: "Typed application development",
    icon: Braces,
  },
  {
    name: "Next.js",
    description: "Modern React applications",
    icon: Layers3,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first UI development",
    icon: Palette,
  },
];

const backendSkills: Skill[] = [
  {
    name: "Node.js",
    description: "Server-side JavaScript",
    icon: Server,
  },
  {
    name: "Express.js",
    description: "REST API development",
    icon: Terminal,
  },
  {
    name: "PostgreSQL",
    description: "Relational data systems",
    icon: Database,
  },
  {
    name: "REST APIs",
    description: "Application integrations",
    icon: Braces,
  },
];

const platformSkills: Skill[] = [
  {
    name: "Chrome Extensions",
    description: "Manifest V3 & Chrome APIs",
    icon: Monitor,
  },
  {
    name: "Electron",
    description: "Cross-platform desktop apps",
    icon: Monitor,
  },
  {
    name: "OAuth 2.0",
    description: "Authentication workflows",
    icon: ShieldCheck,
  },
  {
    name: "PKCE",
    description: "Secure authorization flows",
    icon: ShieldCheck,
  },
];

const tools: Skill[] = [
  {
    name: "Git",
    description: "Version control",
    icon: GitBranch,
  },
  {
    name: "GitHub",
    description: "Code collaboration",
    icon: GitBranch,
  },
  {
    name: "Vite",
    description: "Modern build tooling",
    icon: Wrench,
  },
  {
    name: "Figma",
    description: "Interface design",
    icon: Palette,
  },
];

export const skillCategories = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Interfaces & experiences",
    skills: frontendSkills,
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "Services & data",
    skills: backendSkills,
  },
  {
    number: "03",
    title: "Browser & Desktop",
    subtitle: "Beyond the browser",
    skills: platformSkills,
  },
  {
    number: "04",
    title: "Tools & Workflow",
    subtitle: "Building efficiently",
    skills: tools,
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  // "Prisma",
  "Electron",
  "Chrome Extensions",
  "Manifest V3",
  "OAuth 2.0",
  // "PKCE",
  "REST APIs",
  "Tailwind CSS",
  "shadcn/ui",
  "Vite",
  "Git",
  "GitHub",
  // "Docker",
  "Figma",
];
