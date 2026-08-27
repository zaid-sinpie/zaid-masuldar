import {
  Globe,
  Monitor,
  SearchCode,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  description: string;
  category: string;
  type: string;
  icon: LucideIcon;
  technologies: string[];
  featured?: boolean;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "DLP Chrome Extension",
    description:
      "A browser-based Data Loss Prevention extension that monitors network requests and user input to detect and prevent sensitive data from leaving protected environments.",
    category: "Browser Security",
    type: "Chrome Extension",
    icon: ShieldCheck,
    technologies: [
      "JavaScript",
      "Chrome APIs",
      "Manifest V3",
      "XHR / Fetch",
      "chrome.storage",
    ],
    featured: true,
  },
  // {
  //   number: "02",
  //   title: "Password Vault",
  //   description:
  //     "A secure browser extension for managing credentials with OAuth 2.0 authentication, PKCE authorization flows and automatic token lifecycle handling.",
  //   category: "Security",
  //   type: "Chrome Extension",
  //   icon: LockKeyhole,
  //   technologies: [
  //     "React",
  //     "Chrome Extensions",
  //     "OAuth 2.0",
  //     "PKCE",
  //     "REST APIs",
  //   ],
  // },
  {
    number: "02",
    title: "Otaku Tab",
    description:
      "A highly customized new-tab experience with wallpapers, bookmarks, music controls, animated particles, color customization and canvas-based visual effects.",
    category: "Browser Experience",
    type: "Chrome Extension",
    icon: Globe,
    technologies: [
      "JavaScript",
      "Chrome APIs",
      "Canvas",
      "Animations",
      "YouTube API",
    ],
  },
  {
    number: "03",
    title: "Desktop Image Gallery",
    description:
      "A cross-platform desktop image gallery built with Electron and React, with a secure renderer-to-main process architecture and native desktop capabilities.",
    category: "Desktop",
    type: "Electron Application",
    icon: Monitor,
    technologies: ["Electron", "React", "Vite", "Context Bridge", "IPC"],
  },
  {
    number: "04",
    title: "Security Scanner",
    description:
      "A developer-focused security scanning application that integrates Semgrep to analyze source code and surface potential security issues through a web interface.",
    category: "Developer Tools",
    type: "Security Platform",
    icon: SearchCode,
    technologies: ["React", "Node.js", "Semgrep", "REST APIs", "Docker"],
  },
  {
    number: "05",
    title: "Rent a Friend",
    description:
      "A full-stack social marketplace concept connecting people through configurable profiles and interaction workflows with a modern responsive interface.",
    category: "Full Stack",
    type: "Web Application",
    icon: Sparkles,
    technologies: [
      "React",
      "ShadCN",
      "Tailwind CSS",
      "Express.js",
      "REST APIs",
    ],
    featured: true,
  },
];

export const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Electron",
  "Chrome Extensions",
  "Manifest V3",
  "OAuth 2.0",
  "PKCE",
  "REST APIs",
  "Tailwind CSS",
  "shadcn/ui",
  // "Vite",
  // "Docker",
  // "Semgrep",
];
