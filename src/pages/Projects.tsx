import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Globe,
  Monitor,
  SearchCode,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
// import { SiGithub } from "react-icons/si";

import { Card } from "../../components/ui/card";

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

const Projects = () => {
  const projects: Project[] = [
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
      title: "Chrome New Tab",
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

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/6 bg-[#07080c] py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[10%] h-105 w-105 rounded-full bg-violet-700/5.5 blur-[150px]" />

        <div className="absolute bottom-[20%] left-[5%] h-80 w-[320px] rounded-full bg-purple-700/4 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-7 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] text-violet-400">
                02
              </span>

              <span className="h-px w-8 bg-violet-500/60" />

              <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                Projects
              </span>
            </div>

            <h2 className="mt-6 max-w-lg text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Things I&apos;ve
              <span className="block text-white/35">built.</span>
            </h2>
          </div>

          <div className="flex items-end lg:pb-2">
            <p className="max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              A collection of applications, browser extensions and developer
              tools I&apos;ve designed and built across the frontend, backend,
              browser and desktop ecosystems.
            </p>
          </div>
        </div>

        <div className="mt-20 mb-5 flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            Selected work
          </p>

          <p className="font-mono text-[10px] text-white/15">
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <FeaturedProjectCard key={project.number} project={project} />
            ))}
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/6" />

            <span className="font-mono text-[9px] tracking-[0.25em] text-white/15">
              MORE BUILDS
            </span>

            <span className="h-px flex-1 bg-white/6" />
          </div>

          <div className="divide-y divide-white/6 border-y border-white/6">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <ProjectRow key={project.number} project={project} />
              ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Across these projects
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
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
            ].map((technology, index) => (
              <span
                key={technology}
                className={`
                  group relative overflow-hidden rounded-full
                  border border-white/[0.07]
                  bg-white/2
                  px-4 py-2
                  text-[11px]
                  text-white/35
                  transition-all duration-300
                  hover:border-violet-400/25
                  hover:bg-violet-400/5
                  hover:text-violet-300
                  ${index % 6 === 0 ? "border-violet-400/12" : ""}
                `}
              >
                <span className="relative z-10">{technology}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0b0c11] px-7 py-10 sm:px-10">
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 top-1/2 h-70 w-70 -translate-y-1/2 rounded-full bg-violet-600/8 blur-[110px]" />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-violet-400">
                  Built to learn
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  Every project started with a problem.
                  <span className="text-white/35">
                    {" "}
                    The technology came second.
                  </span>
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/5">
                  <Code2 className="h-4 w-4 text-violet-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                    Focus
                  </p>

                  <p className="mt-1 text-xs text-white/45">
                    Build · Learn · Iterate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/8 to-transparent" />

          <span className="font-mono text-[9px] tracking-[0.25em] text-white/15">
            END OF PROJECTS
          </span>

          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/8 to-transparent" />
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;

  return (
    <Card className="group relative overflow-hidden rounded-2xl border-white/[0.07] bg-[#0b0c11] p-0 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-70 w-70 rounded-full bg-violet-600/5 blur-[100px] transition-all duration-500 group-hover:bg-violet-600/10" />

      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative p-7 sm:p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-violet-400/70">
              {project.number}
            </span>

            <span className="h-px w-6 bg-white/10" />

            <span className="text-[10px] uppercase tracking-[0.18em] text-white/25">
              {project.category}
            </span>
          </div>

          <ArrowUpRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
        </div>

        <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.07] bg-white/2.5 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.07]">
          <Icon className="h-5 w-5 text-white/45 transition-colors duration-300 group-hover:text-violet-400" />
        </div>

        <div className="mt-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-violet-400/60">
            {project.type}
          </p>

          <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/35">
            {project.description}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/6 bg-white/2 px-3 py-1.5 text-[9px] text-white/30"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/6 pt-5">
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/15">
            Case study
          </span>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/6 text-white/25 transition-colors hover:border-violet-400/20 hover:text-violet-400"
              >
                {/* <SiGithub className="h-3.5 w-3.5" /> */}
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/6 text-white/25 transition-colors hover:border-violet-400/20 hover:text-violet-400"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

const ProjectRow = ({ project }: { project: Project }) => {
  const Icon = project.icon;

  return (
    <div className="group relative grid gap-5 py-7 transition-colors duration-300 hover:bg-white/1 md:grid-cols-[80px_1fr_auto] md:items-center">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] text-violet-400/50">
          {project.number}
        </span>
      </div>

      <div className="flex items-start gap-5">
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-white/2 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/5 sm:flex">
          <Icon className="h-4 w-4 text-white/30 transition-colors group-hover:text-violet-400" />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-base font-medium text-white/75 transition-colors group-hover:text-white">
              {project.title}
            </h3>

            <span className="rounded-full border border-white/5 px-2 py-0.5 text-[8px] uppercase tracking-[0.12em] text-white/20">
              {project.category}
            </span>
          </div>

          <p className="mt-2 max-w-2xl text-xs leading-6 text-white/25">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <span key={technology} className="text-[9px] text-white/15">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <ArrowUpRight className="h-4 w-4 text-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
      </div>
    </div>
  );
};

export default Projects;
