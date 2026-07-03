'use client';

import { ArticleCard } from '@/components/article-card';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import type { ArticleSummary } from '@/types/article';
import { useMemo, useState } from 'react';

type ArticlesExplorerProps = {
  articles: ArticleSummary[];
  featuredSlug: string;
  tags: string[];
};

export function ArticlesExplorer({ articles, featuredSlug, tags }: ArticlesExplorerProps) {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const featuredArticle = articles.find((article) => article.slug === featuredSlug) ?? articles[0];

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      if (article.slug === featuredArticle?.slug) {
        return false;
      }

      const matchesTag = selectedTag === 'All' || article.tags.includes(selectedTag);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [article.title, article.subtitle, article.excerpt, article.category, ...article.tags]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesTag && matchesQuery;
    });
  }, [articles, featuredArticle?.slug, query, selectedTag]);

  return (
    <div className="col-span-full">
      <div className="mb-layout-8 space-y-layout-4">
        <label htmlFor="article-search" className="sr-only">
          Search articles
        </label>
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          className={cn(typography.body, 'editorial-input')}
        />

        <div className="w-full overflow-x-auto scrollbar-minimal chip-scroll">
          <div className="flex w-max gap-2 pr-4">
            {['All', ...tags].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  typography.caption,
                  'editorial-chip',
                  selectedTag === tag && 'editorial-chip--active',
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {featuredArticle ? (
        <section aria-labelledby="featured-article-heading" className="mb-layout-12">
          <div className="mb-layout-4 flex items-baseline justify-between gap-layout-4">
            <h2
              id="featured-article-heading"
              className={cn(typography.label, 'text-text-tertiary')}
            >
              Featured
            </h2>
          </div>
          <ArticleCard article={featuredArticle} featured className="!border-t-0 !pt-0" />
        </section>
      ) : null}

      <section aria-labelledby="all-articles-heading">
        <div className="mb-layout-6 flex items-baseline justify-between gap-layout-4">
          <h2 id="all-articles-heading" className={cn(typography.label, 'text-text-tertiary')}>
            All articles
          </h2>
          <p className={cn(typography.bodySm, 'text-text-tertiary')}>
            {filteredArticles.length} result
            {filteredArticles.length === 1 ? '' : 's'}
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="articles-index-list articles-index-list--grid">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className={cn(typography.body, 'text-text-secondary py-layout-8')}>
            No articles match your current search.
          </p>
        )}
      </section>
    </div>
  );
}
