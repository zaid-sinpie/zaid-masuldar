import { ArrowUpRight, Mail, MapPin, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

import { Button } from "../components/ui/button";
import { socialLinks } from "../constants/contact";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

const Contact = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden border-t border-white/6 bg-[#06070b] pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[35%] h-125 w-125 -translate-x-1/2 rounded-full bg-violet-700/[0.07] blur-[160px]" />

        <div className="absolute -bottom-37.5 left-[10%] h-87.5 w-87.5 rounded-full bg-purple-700/4 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, rgba(124,58,237,0.04), transparent 45%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-128px)] max-w-350 flex-col px-7 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.25em] text-violet-400">
            04
          </span>

          <span className="h-px w-8 bg-violet-500/60" />

          <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">
            Contact
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
          <div className="mb-8 flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/4 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/70" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-300/60">
              Open to opportunities
            </span>
          </div>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            Let's build
            <span className="block bg-linear-to-r from-white via-white to-white/30 bg-clip-text text-transparent md:h-25">
              something together.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
            Whether you have an interesting project, a job opportunity, or
            simply want to talk about technology, feel free to reach out.
          </p>

          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="group mt-9 h-12 rounded-xl bg-violet-600 px-6 text-sm shadow-[0_0_40px_rgba(124,58,237,0.12)] transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_50px_rgba(124,58,237,0.2)]"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send me an email
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
            <ContactInfo
              icon={Mail}
              text="zaidmasuldar@gmail.com"
              href="mailto:zaidmasuldar@gmail.com"
            />

            <span className="hidden h-1 w-1 rounded-full bg-white/10 sm:block" />

            <ContactInfo icon={MapPin} text="Pune, India" />
          </div>
        </div>

        <div className="border-t border-white/6 py-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  icon={link.icon}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
            <a
              href="https://docs.google.com/document/d/1-d5aB_EMm4gD8xPXYXSvfXlWjt6nbNygVN5VhpCcOgA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs text-white/30 transition-colors hover:text-white"
            >
              View Resume
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <footer className="border-t border-white/6 py-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <a
                href="#"
                className="text-xl font-semibold tracking-tight text-white"
              >
                ZM
                <span className="text-violet-500">.</span>
              </a>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/20">
                Software Engineer
              </p>
            </div>

            <div className="hidden text-center md:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/15">
                Thanks for scrolling
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-[10px] text-white/20">
                © {new Date().getFullYear()} Zaid Masuldar
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/10">
                Built with React & Three.js
              </p>
            </div>
          </div>
        </footer>

        <div className="flex items-center gap-4 pb-8 pt-5">
          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/6 to-transparent" />

          <span className="font-mono text-[8px] tracking-[0.35em] text-white/10">
            END
          </span>

          <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/6 to-transparent" />
        </div>
      </div>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

const ContactInfo = ({
  icon: Icon,
  text,
  href,
}: {
  icon: LucideIcon;
  text: string;
  href?: string;
}) => {
  const content = (
    <>
      <Icon className="h-3.5 w-3.5 text-white/20" />

      <span className="text-xs text-white/30 transition-colors group-hover:text-white/60">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-2 transition-colors"
      >
        {content}
      </a>
    );
  }

  return <div className="group flex items-center gap-2">{content}</div>;
};

type SocialIcon = LucideIcon | IconType;

const SocialLink = ({
  icon: Icon,
  label,
  href,
}: {
  icon: SocialIcon;
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-2 rounded-lg border border-white/6 bg-white/1.5 px-3.5 py-2.5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/4"
    >
      <Icon className="h-3.5 w-3.5 text-white/30 transition-colors group-hover:text-violet-400" />

      <span className="text-[10px] text-white/30 transition-colors group-hover:text-white/60">
        {label}
      </span>

      <ArrowUpRight className="h-3 w-3 text-white/10 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
    </a>
  );
};

export default Contact;
