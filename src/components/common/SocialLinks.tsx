"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

import socials from "@/data/socials";

export default function SocialLinks() {
  const items = [
    {
      href: socials.github,
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: socials.linkedin,
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: socials.facebook,
      icon: FaFacebook,
      label: "Facebook",
    },
    {
      href: socials.twitter,
      icon: FaXTwitter,
      label: "X",
    },
    {
      href: socials.email,
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {items.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-heading transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1"
        >
          <Icon size={20} />
        </Link>
      ))}
    </div>
  );
}