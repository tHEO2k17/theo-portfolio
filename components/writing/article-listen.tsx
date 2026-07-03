"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
      ? articleTtsPlan.readingState.statusText.playing
      : state === "paused"
        ? articleTtsPlan.readingState.statusText.paused
        : null;

  const handleClick = () => {
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

  return (
    <div className={cn("flex items-center gap-layout-2", className)}>
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={state !== "idle"}
        className={cn(
          typography.caption,
          "article-listen motion-link rounded-sm px-layout-2 py-layout-1 text-text-tertiary hover:text-accent-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        {label}
      </button>
      {state !== "idle" ? (
        <>
          <span
            className={cn(typography.caption, "text-text-tertiary")}
            aria-live={articleTtsPlan.accessibility.ariaLive}
            role="status"
          >
            {statusText}
          </span>
          <button
            type="button"
            onClick={stop}
            className={cn(
              typography.caption,
              "motion-link text-text-tertiary hover:text-accent-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            {articleTtsPlan.controls.stop}
          </button>
        </>
      ) : null}
    </div>
  );
}
