"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getArticleDisplayExcerpt } from "@/lib/articles";
import { RouteMobileHero } from "@/components/layout/route-mobile-hero";
import { writingRouteHero } from "@/lib/content/route-heroes";
import { getArticleNoteType } from "@/lib/writing";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import type { ArticleSummary } from "@/types/article";
import { WritingTopicFilters } from "./writing-topic-filters";
import { WritingMobileTopicsBar } from "./writing-mobile-topics-bar";
import { formatWritingDate } from "./writing-list-shared";

type WritingMobileIndexProps = {
  articles: ArticleSummary[];
};

export function WritingMobileIndex({ articles }: WritingMobileIndexProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!selectedTopic) return articles;
    return articles.filter(
      (article) => getArticleNoteType(article) === selectedTopic,
    );
  }, [articles, selectedTopic]);

  if (articles.length === 0) return null;

  return (
    <div className="writing-mobile-index col-span-full md:hidden">
      <RouteMobileHero
        className="col-span-content"
        label={writingRouteHero.label}
        title={writingRouteHero.title}
        descriptor={writingRouteHero.descriptor}
        description={writingRouteHero.description}
      />

      <WritingMobileTopicsBar aria-labelledby="writing-mobile-topics">
        <h2
          id="writing-mobile-topics"
          className={cn(typography.label, "text-text-tertiary mb-layout-4")}
        >
          Topics
        </h2>
        <WritingTopicFilters
          selectedTopic={selectedTopic}
          onSelect={setSelectedTopic}
          compactLabels
        />
      </WritingMobileTopicsBar>

      <div className="writing-mobile-index__feed mobile-read-surface">
        {filtered.length > 0 ? (
          <ul className="writing-archive-list writing-mobile-index__list">
            {filtered.map((article) => (
              <li key={article.slug}>
                <article className="writing-archive-item">
                  <Link href={`/articles/${article.slug}`} className="group block">
                    <p className={cn(typography.caption, "text-text-tertiary mb-layout-2")}>
                      {getArticleNoteType(article)}
                    </p>
                    <h3
                      className={cn(
                        typography.h3,
                        "motion-link text-foreground mb-layout-2 group-hover:text-accent-warm",
                      )}
                    >
                      {article.title}
                    </h3>
                    <p className={cn(typography.bodySm, "text-text-tertiary mb-layout-3")}>
                      {formatWritingDate(article.publishedAt)} · {article.readingTime}
                    </p>
                    <p className={cn(typography.body, "text-text-secondary line-clamp-3")}>
                      {getArticleDisplayExcerpt(article, 22)}
                    </p>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className={cn(typography.bodySm, "text-text-tertiary pt-layout-2")}>
            No articles in this topic yet.
          </p>
        )}
      </div>
    </div>
  );
}
