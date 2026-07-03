"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useIsMobileViewport } from "@/hooks/use-scroll-hint";
import { articleTtsPlan } from "@/lib/writing/tts-plan";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ArticleListenProps = {
  plainText: string;
  className?: string;
};

type ListenState = "idle" | "playing" | "paused";

function splitForSpeech(text: string) {
  return text
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

function getReducedMotionPreference() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ArticleListen({ plainText, className }: ArticleListenProps) {
  const isMobile = useIsMobileViewport();
  const [supported, setSupported] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [state, setState] = useState<ListenState>("idle");
  const chunkIndexRef = useRef(0);
  const chunksRef = useRef<string[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    setSupported(
      "speechSynthesis" in window && "SpeechSynthesisUtterance" in window,
    );

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }

    window.speechSynthesis.cancel();
    chunkIndexRef.current = 0;
    utteranceRef.current = null;
    setState("idle");
  }, []);

  const speakChunk = useCallback(
    (index: number) => {
      if (typeof window === "undefined" || !window.speechSynthesis) {
        return;
      }

      const chunks = chunksRef.current;
      const text = chunks[index];

      if (!text) {
        stop();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = articleTtsPlan.voice.preferLang;
      utterance.rate = articleTtsPlan.voice.rate;
      utterance.pitch = articleTtsPlan.voice.pitch;

      utterance.onend = () => {
        const nextIndex = index + 1;
        chunkIndexRef.current = nextIndex;

        if (nextIndex < chunks.length) {
          window.setTimeout(() => {
            speakChunk(nextIndex);
          }, articleTtsPlan.voice.pauseBetweenSectionsMs);
        } else {
          stop();
        }
      };

      utterance.onerror = () => {
        stop();
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setState("playing");
    },
    [stop],
  );

  const play = useCallback(() => {
    if (!plainText.trim() || getReducedMotionPreference()) {
      return;
    }

    chunksRef.current = splitForSpeech(plainText);
    chunkIndexRef.current = 0;
    window.speechSynthesis?.cancel();
    speakChunk(0);
  }, [plainText, speakChunk]);

  const pause = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }

    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setState("paused");
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setState("playing");
    }
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  if (!supported || reducedMotion) {
    return null;
  }

  const label =
    state === "playing"
      ? articleTtsPlan.controls.pause
      : state === "paused"
        ? articleTtsPlan.controls.resume
        : articleTtsPlan.controls.play;

  const statusText =
    state === "playing"
      ? isMobile
        ? articleTtsPlan.readingState.statusTextShort.playing
        : articleTtsPlan.readingState.statusText.playing
      : state === "paused"
        ? isMobile
          ? articleTtsPlan.readingState.statusTextShort.paused
          : articleTtsPlan.readingState.statusText.paused
        : null;

  const handlePrimaryClick = () => {
    if (state === "idle") {
      play();
      return;
    }

    if (state === "playing") {
      pause();
      return;
    }

    if (state === "paused") {
      resume();
    }
  };

  const buttonClass = cn(
    typography.caption,
    "article-listen__button motion-link rounded-sm text-text-tertiary hover:text-accent-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  );

  return (
    <div
      className={cn("article-listen", className)}
      data-state={state}
    >
      {statusText ? (
        <span
          className={cn(typography.bodySm, "article-listen__status text-text-tertiary")}
          aria-live={articleTtsPlan.accessibility.ariaLive}
          role="status"
        >
          {statusText}
        </span>
      ) : null}

      <div className="article-listen__controls">
        <button
          type="button"
          onClick={handlePrimaryClick}
          aria-pressed={state !== "idle"}
          className={cn(buttonClass, "article-listen__primary")}
        >
          {label}
        </button>

        {state !== "idle" ? (
          <button
            type="button"
            onClick={stop}
            className={cn(buttonClass, "article-listen__stop")}
          >
            {articleTtsPlan.controls.stop}
          </button>
        ) : null}
      </div>
    </div>
  );
}
