"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MOTION } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "header";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref as never}
      className={cn(
        "motion-reveal",
        isVisible && "motion-reveal--visible",
        className,
      )}
      style={
        delay > 0
          ? ({ "--motion-reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: React.ReactNode[];
  className?: string;
  staggerMs?: number;
  as?: "ul" | "ol" | "div";
};

export function Stagger({
  children,
  className,
  staggerMs = MOTION.reveal.stagger,
  as: Component = "div",
}: StaggerProps) {
  return (
    <Component className={className}>
      {children.map((child, index) => (
        <Reveal key={index} delay={index * staggerMs} as="li">
          {child}
        </Reveal>
      ))}
    </Component>
  );
}
