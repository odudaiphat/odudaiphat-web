import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import { categories, products } from "@/lib/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "daily" as const, priority: 1 },
    ...categories.map((category) => ({
      url: `${SITE_URL}${category.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...products.map((product) => ({
      url: `${SITE_URL}${product.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
