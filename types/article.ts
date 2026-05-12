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
    };

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
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
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  coverAlt?: string;
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