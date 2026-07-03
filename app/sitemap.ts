import { MetadataRoute } from "next";
import { getArticleSummaries } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticleSummaries();

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/work", priority: 0.85 },
    { path: "/practice", priority: 0.85 },
    { path: "/process", priority: 0.85 },
    { path: "/experience", priority: 0.85 },
    { path: "/contact", priority: 0.85 },
    { path: "/articles", priority: 0.9 },
  ] as const;

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    ...articles.map((article) => ({
      url: article.url,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
