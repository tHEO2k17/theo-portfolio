"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { resolveLegacyHashRedirect } from "@/lib/legacy-hash-redirect";

export function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const target = resolveLegacyHashRedirect(hash);
    if (!target) return;

    const [pathname, fragment] = target.split("#");
    const url = fragment ? `${pathname}#${fragment}` : pathname;

    // Defer until after the app router has mounted (avoids dev HMR race).
    const id = window.requestAnimationFrame(() => {
      router.replace(url);
    });

    return () => window.cancelAnimationFrame(id);
  }, [router]);

  return null;
}
