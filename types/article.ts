import type { ArticleDiagramVariant } from "@/lib/media";
import type { ArticleCoverVariant } from "@/lib/media";
import type { ArticleNoteType } from "@/lib/writing/article-types";

export type ArticleContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      style?: "bullet" | "numbered";
      items: string[];
    }
  | {
      type: "callout";
      text: string;
    }
  | {
      type: "code";
      label?: string;
      language?: string;
      code: string;
    }
  | {
      type: "diagram";
      variant: ArticleDiagramVariant;
      label?: string;
      nodes: string[];
      /** Optional Mermaid source override */
      mermaid?: string;
    };

export type ArticleReadMoreLink = {
  label: string;
  url: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  /** Narrative after diagrams/code in example sections */
  closingParagraphs?: string[];
  bullets?: string[];
  callout?: string;
  blocks?: ArticleContentBlock[];
};

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole: string;
  category: string;
  noteType?: ArticleNoteType;
  coverVariant?: ArticleCoverVariant;
  coverImage?: string;
  tags: string[];
  featured?: boolean;
  readMore?: ArticleReadMoreLink[];
  sections: ArticleSection[];
};

export type ArticleSummary = Article & {
  wordCount: number;
  readingTime: string;
  url: string;
};

export type TableOfContentsItem = {
  id: string;
  title: string;
};
