"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  writingTopicPillLabels,
  writingTopics,
} from "@/lib/writing";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type WritingTopicFiltersProps = {
  selectedTopic: string | null;
  onSelect: (topic: string | null) => void;
  /** Short labels for compact mobile scroll row */
  compactLabels?: boolean;
  className?: string;
};

function topicLabel(topic: string, compact: boolean) {
  if (!compact) return topic;

  return (
    writingTopicPillLabels[topic as keyof typeof writingTopicPillLabels] ?? topic
  );
}

export function WritingTopicFilters({
  selectedTopic,
  onSelect,
  compactLabels = false,
  className,
}: WritingTopicFiltersProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [edgeState, setEdgeState] = useState({
    atStart: true,
    atEnd: true,
    scrollable: false,
  });

  const updateEdges = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    const scrollable = scrollWidth > clientWidth + 2;
    const atStart = scrollLeft <= 2;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 2;

    setEdgeState({ atStart, atEnd, scrollable });
  }, []);

  useEffect(() => {
    if (!compactLabels) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    updateEdges();

    scroller.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);

    const resizeObserver = new ResizeObserver(updateEdges);
    resizeObserver.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
      resizeObserver.disconnect();
    };
  }, [compactLabels, updateEdges]);

  useEffect(() => {
    if (!compactLabels) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const active = scroller.querySelector<HTMLElement>(".writing-topic--active");
    if (!active) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targetLeft =
      active.offsetLeft - (scroller.clientWidth - active.offsetWidth) / 2;
    const maxLeft = scroller.scrollWidth - scroller.clientWidth;

    scroller.scrollTo({
      left: Math.max(0, Math.min(targetLeft, maxLeft)),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    requestAnimationFrame(updateEdges);
  }, [compactLabels, selectedTopic, updateEdges]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!compactLabels) return;

    const topics = [null, ...writingTopics] as const;
    const currentIndex = topics.findIndex((topic) => topic === selectedTopic);
    if (currentIndex < 0) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      onSelect(topics[Math.min(currentIndex + 1, topics.length - 1)] ?? null);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onSelect(topics[Math.max(currentIndex - 1, 0)] ?? null);
    }
  }

  const filters = (
    <>
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={cn(
          typography.caption,
          "writing-topic",
          !selectedTopic && "writing-topic--active",
        )}
      >
        All
      </button>
      {writingTopics.map((topic) => (
        <button
          key={topic}
          type="button"
          onClick={() => onSelect(topic)}
          className={cn(
            typography.caption,
            "writing-topic",
            selectedTopic === topic && "writing-topic--active",
          )}
        >
          {topicLabel(topic, compactLabels)}
        </button>
      ))}
    </>
  );

  if (compactLabels) {
    return (
      <div
        className={cn(
          "writing-topic-filters-shell",
          edgeState.scrollable && "writing-topic-filters-shell--scrollable",
          edgeState.atStart && "writing-topic-filters-shell--at-start",
          edgeState.atEnd && "writing-topic-filters-shell--at-end",
          className,
        )}
      >
        <div
          ref={scrollerRef}
          className="writing-topic-filters writing-topic-filters--scroll"
          role="group"
          aria-label="Filter by topic"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {filters}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("writing-topic-filters", className)}
      role="group"
      aria-label="Filter by topic"
    >
      {filters}
    </div>
  );
}
