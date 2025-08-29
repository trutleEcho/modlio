import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL("https://modlio.com");
  const today = new Date().toISOString();

  return [
    {
      url: new URL("/", baseUrl).toString(),
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}


