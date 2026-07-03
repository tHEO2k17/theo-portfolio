import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import {
  ArticleAdjacentNav,
} from "@/components/writing";
import {
  getAdjacentArticles,
  getArticleBySlug,
  getArticlePlainText,
  getArticleSlugs,
  getArticleWordCount,
  getTableOfContents,
  getReadingTime,
} from "@/lib/articles";
import { getArticleStructuredData } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { ArticleDiagram } from "@/components/writing/article-diagram";
import type { ArticleContentBlock } from "@/types/article";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const url = `${SITE_URL}/articles/${article.slug}`;

  const ogImages = article.coverImage
    ? [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ]
    : [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ];

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "Theophilus Paintsil",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ogImages.map((i) => i.url),
    },
  };
}

function renderContentBlock(block: ArticleContentBlock) {
  if (block.type === "heading") {
    return (
      <h3 className={cn(typography.h4, "article-block__title text-foreground")}>
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p className={cn(typography.body, "text-text-secondary")}>{block.text}</p>
    );
  }

  if (block.type === "list") {
    const listClassName = cn(
      typography.body,
      "space-y-layout-2 pl-5 text-text-secondary",
    );

    if (block.style === "numbered") {
      return (
        <ol className={listClassName}>
          {block.items.map((item) => (
            <li key={item} className="list-decimal">
              {item}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <ul className={listClassName}>
        {block.items.map((item) => (
          <li key={item} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <blockquote className="article-pull-quote article-pull-quote--inline">
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "diagram") {
    return (
      <div className="article-figure">
        <ArticleDiagram
          variant={block.variant}
          nodes={block.nodes}
          label={block.label}
          mermaid={block.mermaid}
        />
      </div>
    );
  }

  if (block.type === "code") {
    return (
      <figure className="article-figure article-code">
        {block.label ? (
          <figcaption className="article-figure__label">{block.label}</figcaption>
        ) : null}
        <pre className="article-code__pre overflow-x-auto">
          <code className="article-code__body font-mono">{block.code}</code>
        </pre>
      </figure>
    );
  }

  return null;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const tableOfContents = getTableOfContents(article);
  const readingTime = getReadingTime(article);
  const plainText = getArticlePlainText(article);
  const { previous, next } = getAdjacentArticles(slug);
  const wordCount = getArticleWordCount(article);
  const structuredData = getArticleStructuredData({
    title: article.title,
    description: article.excerpt,
    slug: article.slug,
    author: article.author,
    authorRole: article.authorRole,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    tags: article.tags,
    wordCount,
    coverImage: article.coverImage,
  });

  const showTableOfContents = wordCount >= 550;

  return (
    <SitePageShell>
      <StructuredData data={structuredData} />
      <ArticleLayout
        article={article}
        plainText={plainText}
        tableOfContents={tableOfContents}
        readingTime={readingTime}
        showTableOfContents={showTableOfContents}
        footer={<ArticleAdjacentNav previous={previous} next={next} />}
      >
        {article.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="article-section scroll-mt-nav"
          >
            {index > 0 ? <hr className="article-section-rule" /> : null}

            <header className="article-section__header">
              <h2 className="article-section__title">{section.heading}</h2>
            </header>

            {(section.paragraphs?.length ?? 0) > 0 || section.bullets ? (
              <div className="article-section__lead">
                {(section.paragraphs ?? []).map((paragraph) => (
                  <p
                    key={paragraph}
                    className={cn(typography.body, "text-text-secondary")}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul
                    className={cn(
                      typography.body,
                      "space-y-layout-2 pl-5 text-text-secondary",
                    )}
                  >
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}

            {section.blocks?.length ? (
              <div className="article-section__examples">
                {section.blocks.map((block, blockIndex) => (
                  <div key={`${section.id}-block-${blockIndex}`}>
                    {renderContentBlock(block)}
                  </div>
                ))}
              </div>
            ) : null}

            {section.closingParagraphs?.length || section.callout ? (
              <div className="article-section__takeaway">
                {section.closingParagraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={cn(typography.bodyLg, "text-foreground/90")}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.callout ? (
                  <blockquote className="article-pull-quote">
                    {section.callout}
                  </blockquote>
                ) : null}
              </div>
            ) : null}
          </section>
        ))}

        {article.readMore?.length ? (
          <section className="mt-layout-12">
            <hr className="article-section-rule" />
            <h2 className={cn(typography.label, "text-text-tertiary mb-layout-4")}>
              References
            </h2>
            <ul className="space-y-layout-3">
              {article.readMore.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      typography.link,
                      "motion-link text-text-secondary hover:text-accent-warm",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </ArticleLayout>
    </SitePageShell>
  );
}
