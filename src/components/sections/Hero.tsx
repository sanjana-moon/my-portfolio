import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SocialLinks from "@/components/common/SocialLinks";
import personal from "@/data/personal";

const techStack = ["React", "Next.js", "TypeScript", "Node.js"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden lg:min-h-[calc(100vh-80px)] lg:flex lg:items-center"
    >
      <div className="absolute inset-1 z-1 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl md:h-80 md:w-80" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl md:h-[28rem] md:w-[28rem]" />
      </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 py-12 md:py-16 lg:py-20">

          {/* Left */}
          <div className="text-center lg:text-left">

            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              👋 Hello, I'm
            </span>

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-heading sm:text-5xl md:text-6xl xl:text-7xl">
              {personal.name}
            </h1>

            <h2 className="mt-4 text-xl font-semibold text-text md:text-2xl">
              {personal.designation}
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text transition-colors hover:border-primary hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-text md:text-lg lg:mx-0">
              {personal.tagline}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-hover"
              >
                View Projects
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-transparent px-6 py-3 font-medium text-heading transition-all duration-300 hover:bg-surface"
              >
                Download Resume
                <Download className="ml-2" size={18} />
              </Link>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <SocialLinks />
            </div>

          </div>
          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px]">

              {/* Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

              {/* Gradient Outer Ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 135deg, var(--color-hover, #2D6A76), var(--color-primary, #3B8B9B), transparent 75%, var(--color-hover, #2D6A76))",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 15px), #fff calc(100% - 13px))",
                  mask:
                    "radial-gradient(farthest-side, transparent calc(100% - 15px), #fff calc(100% - 8px))",
                }}
              />
              {/* White/Dark Ring */}
              <div className="absolute inset-[10px] rounded-full bg-bg" />

              {/* Dotted Ring */}
              <svg
                className="absolute inset-[24px] h-auto w-auto animate-spin-slow"
                viewBox="0 0 400 400"
                fill="none"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="185"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeDasharray="4 14"
                  className="text-accent/60"
                />
              </svg>

              {/* Larger Inner Circle */}
              <div className="absolute inset-[44px] rounded-full bg-[#0F2C2C] shadow-inner" />

              {/* Profile Image */}
              <div className="relative z-10 h-[78%] w-[78%] overflow-hidden rounded-full">

                <Image
                  src={personal.image}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width:640px) 220px,
                         (max-width:768px) 260px,
                         (max-width:1024px) 300px,
                         340px"
                  className="object-cover object-top scale-105"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}