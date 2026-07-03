import {
  PERSON_DESCRIPTION,
  PERSON_ID,
  PERSON_SAME_AS,
  SITE_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_DESCRIPTION,
} from "./site";
import { writingHero } from "./writing";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type WebPageSchemaInput = {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    jobTitle: "Senior Software Engineer / Technical Lead",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    sameAs: [...PERSON_SAME_AS],
    description: PERSON_DESCRIPTION,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: WEBSITE_DESCRIPTION,
    publisher: { "@id": PERSON_ID },
    inLanguage: "en",
  };
}

export function getHomeStructuredData() {
  return [getPersonSchema(), getWebSiteSchema()];
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getWebPageSchema({
  title,
  description,
  path,
  breadcrumbs,
}: WebPageSchemaInput) {
  const url = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": SITE_ID },
      about: { "@id": PERSON_ID },
      inLanguage: "en",
    },
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push(getBreadcrumbSchema(breadcrumbs));
  }

  return graph;
}

type ArticleSchemaInput = {
  title: string;
  description: string;
  slug: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  wordCount: number;
  coverImage?: string;
};

export function getArticleStructuredData({
  title,
  description,
  slug,
  author,
  authorRole,
  publishedAt,
  updatedAt,
  tags,
  wordCount,
  coverImage,
}: ArticleSchemaInput) {
  const url = absoluteUrl(`/articles/${slug}`);
  const image = coverImage ? absoluteUrl(coverImage) : `${SITE_URL}/og-image.png`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      author: {
        "@type": "Person",
        name: author,
        jobTitle: authorRole,
        url: SITE_URL,
      },
      datePublished: publishedAt,
      dateModified: updatedAt ?? publishedAt,
      mainEntityOfPage: url,
      url,
      image,
      keywords: tags,
      wordCount,
      publisher: {
        "@type": "Person",
        name: SITE_NAME,
        url: SITE_URL,
      },
      isPartOf: { "@id": SITE_ID },
    },
    getPersonSchema(),
  ];
}

export function getArticlesIndexStructuredData() {
  return getWebPageSchema({
    title: "Writing",
    description: writingHero.description,
    path: "/articles",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Writing", path: "/articles" },
    ],
  });
}
