import { articles } from "@/content/articles";
import { truncateWords } from "@/lib/text";
import type {
  Article,
  ArticleContentBlock,
  ArticleSection,
  ArticleSummary,
  TableOfContentsItem,
} from "@/types/article";

const WORDS_PER_MINUTE = 180;

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function blockWordCount(block: ArticleContentBlock) {
  if (block.type === "code") {
    return (block.label ? countWords(block.label) : 0) + countWords(block.code);
  }

  if (block.type === "list") {
    return block.items.reduce((total, item) => total + countWords(item), 0);
  }

  if (
    block.type === "heading" ||
    block.type === "paragraph" ||
    block.type === "callout"
  ) {
    return countWords(block.text);
  }

  if (block.type === "diagram") {
    return block.nodes.reduce((total, node) => total + countWords(node), 0);
  }

  return 0;
}

function sectionWordCount(section: ArticleSection) {
  const paragraphWords = (section.paragraphs ?? []).reduce(
    (total, paragraph) => total + countWords(paragraph),
    0,
  );
  const closingWords =
    section.closingParagraphs?.reduce(
      (total, paragraph) => total + countWords(paragraph),
      0,
    ) ?? 0;
  const bulletWords =
    section.bullets?.reduce((total, bullet) => total + countWords(bullet), 0) ??
    0;
  const calloutWords = section.callout ? countWords(section.callout) : 0;
  const blockWords =
    section.blocks?.reduce(
      (total, block) => total + blockWordCount(block),
      0,
    ) ?? 0;

  return (
    countWords(section.heading) +
    paragraphWords +
    closingWords +
    bulletWords +
    calloutWords +
    blockWords
  );
}

export function getArticles() {
  return [...articles].sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() -
      new Date(left.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string) {
  return getArticles().find((article) => article.slug === slug);
}

export function getArticleSlugs() {
  return getArticles().map((article) => article.slug);
}

export function getFeaturedArticle() {
  return getArticles().find((article) => article.featured) ?? getArticles()[0];
}

export function getHomepageWritingTeaser() {
  const sorted = getArticles();
  const articles = sorted.slice(0, 3);

  return {
    articles: articles.map(getArticleSummary),
  };
}

export function getDisplayExcerpt(excerpt: string, maxWords = 25) {
  return truncateWords(excerpt, maxWords);
}

export function getArticleDisplayExcerpt(article: Article, maxWords = 25) {
  return truncateWords(article.excerpt, maxWords);
}

export function getAllArticleTags() {
  return Array.from(
    new Set(getArticles().flatMap((article) => article.tags)),
  ).sort();
}

export function getArticleWordCount(article: Article) {
  return (
    countWords(article.title) +
    countWords(article.subtitle) +
    countWords(article.excerpt) +
    article.sections.reduce(
      (total, section) => total + sectionWordCount(section),
      0,
    )
  );
}

export function getReadingTime(article: Article) {
  const minutes = Math.max(
    1,
    Math.round(getArticleWordCount(article) / WORDS_PER_MINUTE),
  );
  return `${minutes} min read`;
}

export function getArticleSummary(article: Article): ArticleSummary {
  return {
    ...article,
    url: `https://theopaintsil.online/articles/${article.slug}`,
    wordCount: getArticleWordCount(article),
    readingTime: getReadingTime(article),
  };
}

export function getArticleSummaries() {
  return getArticles().map(getArticleSummary);
}

export function getRelatedArticles(currentSlug: string, limit = 3) {
  return getArticleSummaries()
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit);
}

export function getAdjacentArticles(slug: string) {
  const sorted = getArticleSummaries();
  const index = sorted.findIndex((article) => article.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index < sorted.length - 1 ? sorted[index + 1] : null,
    next: index > 0 ? sorted[index - 1] : null,
  };
}

export function getTableOfContents(article: Article): TableOfContentsItem[] {
  return article.sections.map((section) => ({
    id: section.id,
    title: section.heading,
  }));
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function blockPlainText(block: ArticleContentBlock) {
  if (block.type === "code") {
    return block.label ?? "";
  }

  if (block.type === "list") {
    return block.items.join(". ");
  }

  if (block.type === "diagram") {
    return block.label ?? "";
  }

  if (
    block.type === "heading" ||
    block.type === "paragraph" ||
    block.type === "callout"
  ) {
    return block.text;
  }

  return "";
}

function sectionPlainText(section: ArticleSection) {
  const parts = [
    section.heading,
    ...section.paragraphs ?? [],
    ...(section.closingParagraphs ?? []),
    ...(section.bullets ?? []),
    section.callout,
    ...(section.blocks?.map(blockPlainText) ?? []),
  ].filter(Boolean);

  return parts.join("\n\n");
}

export function getArticlePlainText(article: Article) {
  const parts = [
    article.title,
    article.subtitle,
    ...article.sections.map(sectionPlainText),
  ].filter(Boolean);

  return parts.join("\n\n");
}
