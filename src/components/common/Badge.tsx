import * as React from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
  size?: "sm" | "md" | "lg";
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full font-medium",
        variant === "accent"
          ? "bg-primary text-white"
          : "bg-primary/10 text-primary",
        size === "sm" && "px-2.5 py-1 text-xs",
        size === "lg" && "px-4 py-2 text-base",
        size === "md" && "px-3 py-1 text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;