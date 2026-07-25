"use client";

import Link from "next/link";

import socials from "@/data/socials";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-heading transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
        >
          <Icon size={20} />
        </Link>
      ))}
    </div>
  );
}