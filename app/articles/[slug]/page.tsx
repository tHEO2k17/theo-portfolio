import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArticleLayout } from "@/components/article-layout";
import { ArticleMeta } from "@/components/article-meta";
import { ArticleTags } from "@/components/article-tags";
import {
  getArticleBySlug,
  getArticleSlugs,
  getArticleWordCount,
  getTableOfContents,
  getReadingTime,
} from "@/lib/articles";
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

  const url = `https://theopaintsil.online/articles/${article.slug}`;

  const ogImages = article.coverImage
    ? [
        {
          url: `https://theopaintsil.online${article.coverImage}`,
          width: 1200,
          height: 630,
          alt: article.coverAlt ?? article.title,
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
      <h3 className="text-base font-semibold text-foreground md:text-lg">
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p className="leading-7 text-text-secondary md:leading-8">{block.text}</p>
    );
  }

  if (block.type === "list") {
    const listClassName = "space-y-2 pl-5 text-text-secondary";

    if (block.style === "numbered") {
      return (
        <ol className={listClassName}>
          {block.items.map((item) => (
            <li key={item} className="list-decimal leading-7">
              {item}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <ul className={listClassName}>
        {block.items.map((item) => (
          <li key={item} className="list-disc leading-7">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <div className="border-l-2 border-accent-bronze/40 pl-4 text-text-secondary">
        {block.text}
      </div>
    );
  }

  return (
    <div>
      {block.label ? (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-text-tertiary">
          {block.label}
        </p>
      ) : null}
      <pre className="my-5 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-zinc-100">
        <code className="font-mono">{block.code}</code>
      </pre>
    </div>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `https://theopaintsil.online/articles/${article.slug}`;
  const tableOfContents = getTableOfContents(article);
  const readingTime = getReadingTime(article);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      author: {
        "@type": "Person",
        name: article.author,
        jobTitle: article.authorRole,
        url: "https://theopaintsil.online",
      },
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      mainEntityOfPage: canonicalUrl,
      url: canonicalUrl,
      image: article.coverImage
        ? `https://theopaintsil.online${article.coverImage}`
        : "https://theopaintsil.online/og-image.png",
      keywords: article.tags,
      wordCount: getArticleWordCount(article),
      publisher: {
        "@type": "Person",
        name: "Theophilus Paintsil",
        url: "https://theopaintsil.online",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      url: "https://theopaintsil.online",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ArticleLayout
        article={article}
        canonicalUrl={canonicalUrl}
        tableOfContents={tableOfContents}
        readingTime={readingTime}
      >
        <div className="space-y-4">
          <ArticleMeta
            author={article.author}
            authorRole={article.authorRole}
            publishedAt={article.publishedAt}
            updatedAt={article.updatedAt}
            readingTime={readingTime}
          />
          <p className="text-text-secondary">{article.excerpt}</p>
          <ArticleTags tags={article.tags} />
        </div>

        {article.coverImage ? (
          <div className="w-full overflow-hidden rounded-lg">
            <div className="relative w-full aspect-[21/9] bg-border/10">
              <Image
                src={article.coverImage}
                alt={article.coverAlt ?? article.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 1000px"
              />
            </div>
          </div>
        ) : null}

        {article.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 space-y-3 mt-5"
          >
            <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-7 text-text-secondary md:leading-8"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2 pl-5 text-text-secondary">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc leading-7">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.callout ? (
              <div className="border-l-2 border-accent-bronze/40 pl-4 text-text-secondary">
                {section.callout}
              </div>
            ) : null}
            {section.blocks?.map((block, index) => (
              <div key={`${section.id}-block-${index}`}>
                {renderContentBlock(block)}
              </div>
            ))}
          </section>
        ))}

        {article.readMore?.length ? (
          <section className="mt-10 border-t border-border/30 pt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
              Read more
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary md:text-base md:leading-8">
              Use these references to go deeper on the framework or pattern
              discussed above.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {article.readMore.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border/40 bg-bg-secondary/35 px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-accent-bronze/50 hover:text-accent-warm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </ArticleLayout>
    </>
  );
}
