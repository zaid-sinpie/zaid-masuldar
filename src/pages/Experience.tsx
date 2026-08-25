import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Monitor,
  Server,
  ShieldCheck,
  type LucideIcon,
  Blocks,
} from "lucide-react";

import { Card } from "../../components/ui/card";

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

const experience: ExperienceItem[] = [
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
      "PKCE",
      "REST APIs",
      "Git",
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

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/6 bg-[#06070b] py-32"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Purple glow */}

        <div className="absolute -left-37.5 top-[20%] h-112.5 w-112.5 rounded-full bg-violet-700/5.5 blur-[150px]" />

        <div className="absolute bottom-[5%] -right-25 h-100 w-100 rounded-full bg-purple-700/5 blur-[140px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-350 px-7 lg:px-12">
        {/* ==========================================================
            HEADER
        ========================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}

          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] text-violet-400">
                03
              </span>

              <span className="h-px w-8 bg-violet-500/60" />

              <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                Experience
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Building software
              <span className="block text-white/35">
                professionally.
              </span>
            </h2>
          </div>

          {/* Right */}

          <div className="flex items-end lg:pb-2">
            <p className="max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              My experience has taken me across frontend development,
              backend integration, browser extensions and desktop
              applications. I enjoy working close to both the product
              and the underlying technology.
            </p>
          </div>
        </div>

        {/* ==========================================================
            EXPERIENCE TIMELINE
        ========================================================== */}

        <div className="relative mt-20">
          {/* Vertical timeline */}

          <div className="absolute bottom-10 left-2.75 top-4 hidden w-px bg-linear-to-b from-violet-500/50 via-white/8 to-transparent md:block" />

          {experience.map((item) => (
            <ExperienceCard
              key={item.company}
              item={item}
            />
          ))}

          {/* ========================================================
              EDUCATION TIMELINE
          ======================================================== */}

          <EducationItem />
        </div>

        {/* ==========================================================
            ENGINEERING AREAS
        ========================================================== */}

        <div className="mt-28">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Areas of experience
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Where I've spent my time.
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ExperienceArea
              icon={Code2}
              title="Frontend"
              description="Building component-driven interfaces and application workflows."
            />

            <ExperienceArea
              icon={Blocks}
              title="Browser Extensions"
              description="Developing browser-native functionality using Manifest V3."
            />

            <ExperienceArea
              icon={Monitor}
              title="Desktop Apps"
              description="Building cross-platform applications with Electron."
            />

            <ExperienceArea
              icon={ShieldCheck}
              title="Security"
              description="Working with authentication, authorization and secure workflows."
            />
          </div>
        </div>

        {/* ==========================================================
            EXPERIENCE SUMMARY
        ========================================================== */}

        <div className="mt-20 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Main */}

          <Card className="relative overflow-hidden rounded-3xl border-white/[0.07] bg-[#0b0c11] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full bg-violet-600/[0.07] blur-[100px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/6">
                  <Layers3 className="h-4 w-4 text-violet-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                    My experience
                  </p>

                  <h3 className="mt-1 text-lg font-medium text-white">
                    Full-stack mindset
                  </h3>
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40">
                Although my current work has a strong focus on
                frontend and browser-based development, I like
                understanding the entire system behind a feature —
                from the interface and API layer to authentication,
                data flow and deployment.
              </p>

              {/* Skill flow */}

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <ExperienceTag icon={Code2} label="UI" />

                <Arrow />

                <ExperienceTag icon={Server} label="API" />

                <Arrow />

                <ExperienceTag icon={Database} label="Data" />

                <Arrow />

                <ExperienceTag
                  icon={LockKeyhole}
                  label="Security"
                />

                <Arrow />

                <ExperienceTag
                  icon={Monitor}
                  label="Desktop"
                />
              </div>
            </div>
          </Card>

          {/* Stats */}

          <Card className="rounded-3xl border-white/[0.07] bg-[#0b0c11] p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              Snapshot
            </p>

            <div className="mt-7 space-y-6">
              <Stat
                value="1.8+"
                label="Years building software"
              />

              <div className="h-px bg-white/6" />

              <Stat
                value="4+"
                label="Engineering domains"
              />

              <div className="h-px bg-white/6" />

              <Stat
                value="∞"
                label="Things left to learn"
              />
            </div>
          </Card>
        </div>

        {/* ==========================================================
            FOOTER LINE
        ========================================================== */}

        <div className="mt-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/8 to-transparent" />

          <span className="font-mono text-[9px] tracking-[0.25em] text-white/15">
            EXPERIENCE / 03
          </span>

          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/8 to-transparent" />
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   EXPERIENCE CARD
   ================================================================ */

const ExperienceCard = ({
  item,
}: {
  item: ExperienceItem;
}) => {
  return (
    <div className="relative grid gap-8 md:grid-cols-[180px_1fr]">
      {/* ==========================================================
          TIMELINE DATE
      ========================================================== */}

      <div className="relative">
        {/* Timeline dot */}

        <div className="absolute -left-px top-3 hidden h-6 w-6 items-center justify-center rounded-full border border-violet-400/30 bg-[#06070b] md:flex">
          <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
        </div>

        <div className="md:pl-10">
          <p className="font-mono text-[11px] text-violet-400/70">
            {item.period}
          </p>

          <div className="mt-2 flex items-center gap-2">
            <CalendarDays className="h-3 w-3 text-white/20" />

            <span className="text-[10px] text-white/20">
              {item.location}
            </span>
          </div>
        </div>
      </div>

      {/* ==========================================================
          MAIN CARD
      ========================================================== */}

      <Card className="group relative overflow-hidden rounded-3xl border-white/[0.07] bg-[#0b0c11] p-7 transition-all duration-500 hover:border-violet-400/20 sm:p-9">
        {/* Background glow */}

        <div className="pointer-events-none absolute -right-25 -top-25 h-75 w-75 rounded-full bg-violet-600/4.5 blur-[110px] transition-all duration-700 group-hover:bg-violet-600/8" />

        {/* Top */}

        <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-violet-400/15 bg-violet-400/6 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-violet-300">
                Current role
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-white/40">
              {item.company}
            </p>
          </div>

          {/* Icon */}

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/2.5">
            <BriefcaseBusiness className="h-5 w-5 text-white/35 transition-colors duration-300 group-hover:text-violet-400" />
          </div>
        </div>

        {/* Description */}

        <p className="relative mt-8 max-w-3xl text-sm leading-7 text-white/40">
          {item.description}
        </p>

        {/* ========================================================
            RESPONSIBILITIES
        ======================================================== */}

        <div className="relative mt-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              What I work on
            </span>

            <span className="h-px w-10 bg-white/8" />
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {item.responsibilities.map((responsibility) => (
              <div
                key={responsibility}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/1.5 p-3.5 transition-colors hover:border-violet-400/10 hover:bg-violet-400/2"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />

                <span className="text-xs leading-5 text-white/35">
                  {responsibility}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            TECHNOLOGIES
        ======================================================== */}

        <div className="relative mt-9 border-t border-white/6 pt-6">
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/6 bg-white/2 px-3 py-1.5 text-[10px] text-white/30 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/4 hover:text-violet-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom number */}

        <span className="pointer-events-none absolute bottom-6 right-8 font-mono text-[70px] font-semibold leading-none text-white/1.5">
          01
        </span>
      </Card>
    </div>
  );
};

/* ================================================================
   EDUCATION
   ================================================================ */

const EducationItem = () => {
  return (
    <div className="relative mt-16 grid gap-8 md:grid-cols-[180px_1fr]">
      {/* Timeline */}

      <div className="relative">
        <div className="absolute -left-px top-3 hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#06070b] md:flex">
          <div className="h-2 w-2 rounded-full bg-white/30" />
        </div>

        <div className="md:pl-10">
          <p className="font-mono text-[11px] text-white/25">
            Education
          </p>

          <p className="mt-2 text-[10px] text-white/15">
            Undergraduate
          </p>
        </div>
      </div>

      {/* Card */}

      <Card className="rounded-3xl border-white/6 bg-[#0a0b10] p-7 sm:p-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div className="flex gap-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/6 bg-white/2.5">
              <GraduationCap className="h-5 w-5 text-white/30" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                B.Tech
              </p>

              <h3 className="mt-2 text-lg font-medium text-white/70">
                Electronics Engineering
              </h3>

              <p className="mt-2 text-sm text-white/30">
                Walchand Institute of Technology, Solapur
              </p>
            </div>
          </div>

          <div className="sm:text-right">
            <p className="font-mono text-sm text-white/40">
              CGPA
            </p>

            <p className="mt-1 text-xl font-semibold text-violet-400">
              8.19
            </p>
          </div>
        </div>

        <div className="mt-7 border-t border-white/5 pt-6">
          <p className="max-w-3xl text-xs leading-6 text-white/25">
            Electronics engineering gave me a foundation in
            problem-solving, systems thinking and understanding how
            technology works beneath the surface — skills that
            continue to influence how I approach software.
          </p>
        </div>
      </Card>
    </div>
  );
};

/* ================================================================
   EXPERIENCE AREA
   ================================================================ */

const ExperienceArea = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <Card className="group rounded-2xl border-white/6 bg-white/1.5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/6 bg-white/2.5 transition-colors group-hover:border-violet-400/20 group-hover:bg-violet-400/6">
        <Icon className="h-4 w-4 text-white/35 transition-colors group-hover:text-violet-400" />
      </div>

      <h4 className="mt-6 text-sm font-medium text-white/70">
        {title}
      </h4>

      <p className="mt-3 text-xs leading-6 text-white/30">
        {description}
      </p>
    </Card>
  );
};

/* ================================================================
   EXPERIENCE FLOW TAG
   ================================================================ */

const ExperienceTag = ({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/2 px-3 py-2">
      <Icon className="h-3.5 w-3.5 text-violet-400/70" />

      <span className="text-[10px] text-white/35">
        {label}
      </span>
    </div>
  );
};

/* ================================================================
   ARROW
   ================================================================ */

const Arrow = () => {
  return (
    <span className="hidden text-white/15 sm:block">
      →
    </span>
  );
};

/* ================================================================
   STAT
   ================================================================ */

const Stat = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div>
      <p className="text-3xl font-semibold tracking-tight text-white">
        {value}
      </p>

      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/20">
        {label}
      </p>
    </div>
  );
};

export default Experience;