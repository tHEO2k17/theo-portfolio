import { MetadataRoute } from "next";
import { getArticleSummaries } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticleSummaries();

  return [
    {
      url: "https://theopaintsil.online/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://theopaintsil.online/articles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articles.map((article) => ({
      url: article.url,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
