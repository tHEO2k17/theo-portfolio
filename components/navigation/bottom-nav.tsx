"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavItems, isArticleReadingPath } from "@/lib/navigation";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { NavIcon } from "./nav-icons";

export function BottomNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isArticleReadingPath(pathname)) {
    return null;
  }

  const nav = (
    <nav className="bottom-nav md:hidden" aria-label="Primary navigation">
      <ul className="bottom-nav__list">
        {bottomNavItems.map((item) => {
          const isActive = item.isActive(pathname);

          return (
            <li key={item.href} className="bottom-nav__item-wrap">
              <Link
                href={item.href}
                aria-label={item.ariaLabel}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "bottom-nav__link",
                  isActive && "bottom-nav__link--active",
                )}
              >
                {isActive ? (
                  <span className="bottom-nav__indicator" aria-hidden="true" />
                ) : null}
                <span className="bottom-nav__item">
                  <NavIcon id={item.icon} />
                  <span className={cn(typography.caption, "bottom-nav__label")}>
                    {item.shortLabel}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  if (!mounted) {
    return null;
  }

  return createPortal(nav, document.body);
}
