"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/article-card";
import type { ArticleSummary } from "@/types/article";

type ArticlesExplorerProps = {
  articles: ArticleSummary[];
  featuredSlug: string;
  tags: string[];
};

export function ArticlesExplorer({
  articles,
  featuredSlug,
  tags,
}: ArticlesExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const featuredArticle =
    articles.find((article) => article.slug === featuredSlug) ?? articles[0];

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      if (article.slug === featuredArticle?.slug) {
        return false;
      }

      const matchesTag =
        selectedTag === "All" || article.tags.includes(selectedTag);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          article.title,
          article.subtitle,
          article.excerpt,
          article.category,
          ...article.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesTag && matchesQuery;
    });
  }, [articles, featuredArticle?.slug, query, selectedTag]);

  return (
    <section className="pb-10 pt-0 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3">
          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-2xl border border-border/40 bg-bg-secondary/40 px-4 py-3 text-foreground placeholder:text-text-tertiary focus:border-accent-bronze/60 focus:outline-none"
          />

          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex w-max gap-2 pr-4 whitespace-nowrap">
              {["All", ...tags].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedTag === tag
                      ? "border-accent-bronze/60 bg-accent-bronze/15 text-accent-warm"
                      : "border-border/40 bg-bg-secondary/40 text-text-secondary hover:border-accent-bronze/50 hover:text-accent-warm"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {featuredArticle ? (
          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
                Featured article
              </h2>
              <span className="text-sm text-text-tertiary">
                {featuredArticle.readingTime}
              </span>
            </div>
            <ArticleCard article={featuredArticle} featured />
          </div>
        ) : null}

        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
              All articles
            </h2>
            <p className="text-sm text-text-tertiary">
              {filteredArticles.length} result
              {filteredArticles.length === 1 ? "" : "s"}
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border/40 bg-bg-secondary/40 p-8 text-center text-text-secondary">
              No articles match your current search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
