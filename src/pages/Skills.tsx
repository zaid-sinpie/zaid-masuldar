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

import { Card } from "../../components/ui/card";

type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const Skills = () => {
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

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/6 bg-[#07080c] py-32"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}

        <div className="absolute left-[15%] top-[15%] h-87.5 w-87.5 rounded-full bg-violet-700/6 blur-[140px]" />

        <div className="absolute bottom-[5%] right-[10%] h-75 w-75 rounded-full bg-purple-700/5 blur-[130px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
          }}
        />
      </div>

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-350 px-7 lg:px-12">
        {/* ==========================================================
            SECTION HEADER
        ========================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Label */}

          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] text-violet-400">
                01
              </span>

              <span className="h-px w-8 bg-violet-500/60" />

              <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
                Skills
              </span>
            </div>

            <h2 className="mt-6 max-w-md text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Tools I use to
              <span className="block text-white/35">
                build things.
              </span>
            </h2>
          </div>

          {/* Intro */}

          <div className="flex items-end lg:pb-2">
            <p className="max-w-xl text-sm leading-7 text-white/40 sm:text-base">
              I work across the stack, from designing interfaces and
              building React applications to developing APIs,
              browser extensions and desktop applications. These
              are the technologies I use most often.
            </p>
          </div>
        </div>

        {/* ==========================================================
            CORE STACK
        ========================================================== */}

        <div className="mt-20">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Core stack
            </p>

            <p className="font-mono text-[10px] text-white/15">
              04 categories
            </p>
          </div>

          {/* ========================================================
              FRONTEND
          ======================================================== */}

          <SkillCategory
            number="01"
            title="Frontend"
            subtitle="Interfaces & experiences"
            skills={frontendSkills}
          />

          {/* ========================================================
              BACKEND
          ======================================================== */}

          <SkillCategory
            number="02"
            title="Backend"
            subtitle="Services & data"
            skills={backendSkills}
          />

          {/* ========================================================
              PLATFORM
          ======================================================== */}

          <SkillCategory
            number="03"
            title="Browser & Desktop"
            subtitle="Beyond the browser"
            skills={platformSkills}
          />

          {/* ========================================================
              TOOLS
          ======================================================== */}

          <SkillCategory
            number="04"
            title="Tools & Workflow"
            subtitle="Building efficiently"
            skills={tools}
          />
        </div>

        {/* ==========================================================
            TECHNOLOGY CLOUD
        ========================================================== */}

        <div className="mt-24">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              Technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
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
                  ${index % 5 === 0 ? "border-violet-400/12" : ""}
                `}
              >
                <span className="relative z-10">
                  {technology}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ==========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <div className="mt-28">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0b0c11] px-7 py-10 sm:px-10">
            {/* Glow */}

            <div className="pointer-events-none absolute -right-20 top-1/2 h-62.5 w-62.5 -translate-y-1/2 rounded-full bg-violet-600/8 blur-[100px]" />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-violet-400">
                  More than a stack
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  Technology is a tool.
                  <span className="text-white/35">
                    {" "}
                    Problem solving is the skill.
                  </span>
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/5">
                  <Code2 className="h-4 w-4 text-violet-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                    Currently
                  </p>

                  <p className="mt-1 text-xs text-white/45">
                    Learning & building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================
            SECTION END
        ========================================================== */}

        <div className="mt-16 flex items-center gap-4">
          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/8 to-transparent" />

          <span className="font-mono text-[9px] tracking-[0.25em] text-white/15">
            END OF SKILLS
          </span>

          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/8 to-transparent" />
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   SKILL CATEGORY
   ================================================================ */

type SkillCategoryProps = {
  number: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

const SkillCategory = ({
  number,
  title,
  subtitle,
  skills,
}: SkillCategoryProps) => {
  return (
    <div className="group/category border-t border-white/6">
      {/* Category heading */}

      <div className="grid gap-5 py-7 md:grid-cols-[180px_220px_1fr] md:items-center">
        {/* Number */}

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-violet-400/60">
            {number}
          </span>

          <span className="h-px w-5 bg-white/10" />
        </div>

        {/* Name */}

        <div>
          <h3 className="text-lg font-medium text-white">
            {title}
          </h3>

          <p className="mt-1 text-[11px] text-white/25">
            {subtitle}
          </p>
        </div>

        {/* Skills */}

        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ================================================================
   SKILL CARD
   ================================================================ */

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <Card className="group relative overflow-hidden rounded-xl border-white/6 bg-white/1.5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-violet-400/2.5">
      {/* Hover glow */}

      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-500/0 blur-2xl transition-all duration-500 group-hover:bg-violet-500/10" />

      <div className="relative flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-white/2.5 transition-colors duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/8">
          <Icon className="h-3.5 w-3.5 text-white/40 transition-colors group-hover:text-violet-400" />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium text-white/65 transition-colors group-hover:text-white">
            {skill.name}
          </p>

          <p className="mt-1 text-[9px] leading-4 text-white/20">
            {skill.description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Skills;