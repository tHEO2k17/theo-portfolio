'use client';

import { Reveal } from '@/components/motion';
import { getArticleDisplayExcerpt } from '@/lib/articles';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import { getArticleNoteType } from '@/lib/writing';
import type { ArticleSummary } from '@/types/article';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { WritingMobileIndex } from './writing-mobile-index';
import { WritingTopicFilters } from './writing-topic-filters';
import { formatWritingDate } from './writing-list-shared';

type WritingIndexProps = {
  articles: ArticleSummary[];
  featuredSlug: string;
};

export function WritingIndex({ articles, featuredSlug }: WritingIndexProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const featured = articles.find((article) => article.slug === featuredSlug) ?? articles[0];

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      if (article.slug === featured?.slug) return false;
      if (!selectedTopic) return true;
      return getArticleNoteType(article) === selectedTopic;
    });
  }, [articles, featured?.slug, selectedTopic]);

  const recent = filtered.slice(0, 4);
  const archive = filtered.slice(4);

  return (
    <div className="col-span-full">
      <WritingMobileIndex articles={articles} />

      <div className="hidden md:block">
        <div className="writing-index-top">
          {featured ? (
            <Reveal>
              <section
                aria-labelledby="writing-featured"
                className="writing-featured border-b border-border/30 pb-layout-12"
              >
                <Link href={`/articles/${featured.slug}`} className="group block">
                  <p
                    id="writing-featured"
                    className={cn(typography.caption, 'text-text-tertiary mb-layout-4')}
                  >
                    Featured
                  </p>
                  <h2
                    className={cn(
                      typography.h1,
                      'motion-link text-foreground mb-layout-4 group-hover:text-accent-warm',
                    )}
                  >
                    {featured.title}
                  </h2>
                  <p className={cn(typography.bodySm, 'text-text-tertiary mb-layout-4')}>
                    {formatWritingDate(featured.publishedAt)} · {featured.readingTime}
                  </p>
                  <p className={cn(typography.bodyLg, 'text-text-secondary max-w-prose')}>
                    {getArticleDisplayExcerpt(featured, 30)}
                  </p>
                </Link>
              </section>
            </Reveal>
          ) : null}

          <section aria-labelledby="writing-topics">
            <h2
              id="writing-topics"
              className={cn(typography.label, 'text-text-tertiary mb-layout-6')}
            >
              Topics
            </h2>
            <WritingTopicFilters
              selectedTopic={selectedTopic}
              onSelect={setSelectedTopic}
            />
          </section>
        </div>

        {recent.length > 0 || archive.length > 0 ? (
          <div className="writing-index-list">
            {recent.length > 0 ? (
              <section aria-labelledby="writing-recent">
                <h2
                  id="writing-recent"
                  className={cn(typography.label, 'text-text-tertiary mb-layout-8')}
                >
                  Recent writing
                </h2>
                <ul className="writing-archive-list">
                  {recent.map((article, index) => (
                    <Reveal key={article.slug} as="li" delay={index * 80}>
                      <article className="writing-archive-item">
                        <Link href={`/articles/${article.slug}`} className="group block">
                          <p className={cn(typography.caption, 'text-text-tertiary mb-layout-2')}>
                            {getArticleNoteType(article)}
                          </p>
                          <h3
                            className={cn(
                              typography.h3,
                              'motion-link text-foreground mb-layout-2 group-hover:text-accent-warm',
                            )}
                          >
                            {article.title}
                          </h3>
                          <p className={cn(typography.bodySm, 'text-text-tertiary mb-layout-3')}>
                            {formatWritingDate(article.publishedAt)} · {article.readingTime}
                          </p>
                          <p className={cn(typography.body, 'text-text-secondary max-w-prose')}>
                            {getArticleDisplayExcerpt(article)}
                          </p>
                        </Link>
                      </article>
                    </Reveal>
                  ))}
                </ul>
              </section>
            ) : null}

            {archive.length > 0 ? (
              <section aria-labelledby="writing-archive">
                <h2
                  id="writing-archive"
                  className={cn(typography.label, 'text-text-tertiary mb-layout-8')}
                >
                  Archive
                </h2>
                <ul className="writing-archive-list">
                  {archive.map((article, index) => (
                    <Reveal key={article.slug} as="li" delay={index * 60}>
                      <article className="writing-archive-item">
                        <Link
                          href={`/articles/${article.slug}`}
                          className="group flex flex-col gap-layout-2 md:flex-row md:items-baseline md:justify-between"
                        >
                          <h3
                            className={cn(
                              typography.bodyLg,
                              'motion-link text-foreground group-hover:text-accent-warm',
                            )}
                          >
                            {article.title}
                          </h3>
                          <p className={cn(typography.bodySm, 'text-text-tertiary shrink-0')}>
                            {formatWritingDate(article.publishedAt)} · {article.readingTime}
                          </p>
                        </Link>
                      </article>
                    </Reveal>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
