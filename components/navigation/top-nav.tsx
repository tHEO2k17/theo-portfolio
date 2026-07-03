"use client";

import Link from "next/link";
import { isTopNavItemActive, topNavItems } from "@/lib/navigation";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type TopNavProps = {
  pathname: string;
  isVisible: boolean;
};

export function TopNav({ pathname, isVisible }: TopNavProps) {
  return (
    <nav
      className={cn(
        "motion-nav fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background md:bg-background/95",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
      aria-label="Site"
    >
      <div className="layout-container">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            aria-label="Theophilus Paintsil home"
            className={cn(
              typography.body,
              "motion-link text-accent-warm hover:text-accent-bronze focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-warm/50",
            )}
          >
            TP
          </Link>

          <div className="hidden md:flex gap-1">
            {topNavItems.map((item) => {
              const isActive = isTopNavItemActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    typography.link,
                    "motion-link px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-warm/50",
                    isActive
                      ? "text-accent-warm"
                      : "text-text-secondary hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
