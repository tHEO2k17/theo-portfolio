"use client";

import { useEffect, useId, useRef, useState } from "react";
import { EditorialLink } from "@/components/editorial";
import { buildCalendlyEmbedUrl, getCalendlyUrl } from "@/lib/calendly";
import { contactChannels } from "@/lib/content/contact";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

let scriptLoadPromise: Promise<void> | null = null;

function loadCalendlyScript() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (scriptLoadPromise) {
    return scriptLoadPromise;
  }

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );

    if (existing) {
      if (window.Calendly) {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Calendly script failed to load")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.body.appendChild(script);
  });

  return scriptLoadPromise;
}

const contactEmail =
  contactChannels.find((channel) => channel.type === "email")?.href ??
  "mailto:tpaintsil@live.com";

type CalendlyInlineProps = {
  className?: string;
};

export function CalendlyInline({ className }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const embedId = useId();
  const calendlyUrl = getCalendlyUrl();
  const [loadFailed, setLoadFailed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!calendlyUrl) return;

    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    setIsReady(false);

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Calendly) return;

        containerRef.current.replaceChildren();
        window.Calendly.initInlineWidget({
          url: buildCalendlyEmbedUrl(calendlyUrl, window.location.host),
          parentElement: containerRef.current,
          resize: true,
        });
        setIsReady(true);
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });

    return () => {
      cancelled = true;
      container.replaceChildren();
      setIsReady(false);
    };
  }, [calendlyUrl]);

  if (!calendlyUrl || loadFailed) {
    return (
      <p className={cn(typography.body, "text-text-secondary", className)}>
        Calendly link unavailable.{" "}
        <EditorialLink href={contactEmail}>Email me instead</EditorialLink>.
      </p>
    );
  }

  return (
    <div className={cn("calendly-inline", className)}>
      <div
        className={cn(
          "calendly-inline__frame",
          isReady && "calendly-inline__frame--ready",
        )}
      >
        <div
          ref={containerRef}
          id={embedId}
          className="calendly-inline__widget"
          title="Schedule a 30 minute introduction with Theophilus Paintsil"
          aria-label="Calendly scheduling widget"
        />
      </div>
      <p className={cn(typography.caption, "text-text-tertiary calendly-inline__footer")}>
        <EditorialLink href={calendlyUrl} external className="text-text-tertiary">
          Open in Calendly
        </EditorialLink>
        <span className="calendly-inline__footer-sep" aria-hidden="true">
          ·
        </span>
        <EditorialLink href={contactEmail} className="text-text-tertiary">
          Email
        </EditorialLink>
      </p>
    </div>
  );
}
