import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="0" y="0" width="24" height="24" rx="2" fill="currentColor" />
    <path
      fill="black"
      d="M3.56 20.45h3.57V8.99H3.56v11.46ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM9.35 8.99v11.46h3.57v-5.67c0-1.49.28-2.94 2.13-2.94 1.82 0 1.85 1.71 1.85 3.04v5.57h3.56v-6.29c0-3.09-.66-5.46-4.26-5.46-1.73 0-2.89.95-3.37 1.85h-.05V8.99H9.35Z"
    />
  </svg>
);

export const socialLinks = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/zaid-masuldar",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/zaid-sinpie",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:zaidmasuldar@gmail.com",
  },
];
