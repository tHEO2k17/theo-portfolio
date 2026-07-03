"use client";

import { useEffect, useRef, useState } from "react";
import { BottomNav } from "./bottom-nav";
import { TopNav } from "./top-nav";
import { usePathname } from "next/navigation";

export function NavigationShell() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const pastThreshold = currentScrollY > 80;

      if (pastThreshold && scrollingDown) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopNav pathname={pathname} isVisible={isVisible} />
      <BottomNav />
    </>
  );
}
