/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { BRAND_NAME, HOTLINE, SITE_URL, ZALO_URL } from "./constants"
import {
  FALLBACK_IMAGE,
  getProductsByCategory,
  type Product,
  type VerifiedValue,
} from "./products"

function absoluteUrl(path: string) {
  return path.startsWith("http://") || path.startsWith("https://")
    ? path
    : `${SITE_URL}${path}`
}

function propertyValue(name: string, value: string) {
  return {
    "@type": "PropertyValue",
    name,
    value,
  }
}

function verifiedPropertyValue(name: string, field?: VerifiedValue) {
  const value = field?.value

  if (!field?.verified || !value || value === "CẦN XÁC MINH") {
    return null
  }

  return propertyValue(name, value)
}

function compactArray<T>(items: Array<T | null | undefined | false>) {
  return items.filter(Boolean) as T[]
}

function uniqueStrings(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)))
}

export function organizationSchema() {
  const image = absoluteUrl(FALLBACK_IMAGE)

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    url: SITE_URL,
    telephone: HOTLINE,
    image,
    priceRange: "Liên hệ báo giá",

    areaServed: [
      {
        "@type": "Country",
        name: "Việt Nam",
      },
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: HOTLINE,
        contactType: "sales",
        areaServed: "VN",
        availableLanguage: ["vi"],
      },
      {
        "@type": "ContactPoint",
        url: ZALO_URL,
        contactType: "customer support",
        areaServed: "VN",
        availableLanguage: ["vi"],
      },
    ],
  }
}

export function productSchema(product?: Product) {
  const defaultProduct = getProductsByCategory("du-lech-tam")[0]
  const item = product || defaultProduct
  const image = item?.images.hero || FALLBACK_IMAGE
  const gallery = item?.images.gallery || []
  const videos = item?.videos || []

  const productImages = uniqueStrings([image, ...gallery]).map(absoluteUrl)

  const additionalProperty = compactArray([
    item?.categoryName ? propertyValue("Danh mục", item.categoryName) : null,
    verifiedPropertyValue("Chất liệu khung", item?.material.frame),
    verifiedPropertyValue("Chất liệu vải", item?.material.fabric),
    verifiedPropertyValue("Khả năng chịu gió", item?.performance.windResistance),
    verifiedPropertyValue("Khả năng chống UV", item?.performance.uvProtection),
    verifiedPropertyValue("Bảo hành", item?.warranty),
    item?.useCases.length
      ? propertyValue("Ứng dụng", item.useCases.join(", "))
      : null,
    item?.suitableFor.length
      ? propertyValue("Phù hợp cho", item.suitableFor.join(", "))
      : null,
    item?.areaServed.length
      ? propertyValue("Khu vực phục vụ", item.areaServed.join(", "))
      : null,
  ])

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}${item?.href || "/du-lech-tam"}#product`,
    name: item?.name || "Dù lệch tâm ngoài trời cao cấp",
    description:
      item?.excerpt ||
      "Dù lệch tâm ngoài trời cho quán cafe, sân vườn, hồ bơi và resort của Ô Dù Đại Phát.",
    brand: {
      "@type": "Brand",
      name: BRAND_NAME,
    },
    ...(item?.sku ? { sku: item.sku } : {}),
    ...(item?.categoryName ? { category: item.categoryName } : {}),
    image: productImages.length > 0 ? productImages : [absoluteUrl(FALLBACK_IMAGE)],
    url: `${SITE_URL}${item?.href || "/du-lech-tam"}`,

    ...(typeof item?.price === "number"
      ? {
          offers: {
            "@type": "Offer",
            url: `${SITE_URL}${item.href}`,
            priceCurrency: item.currency,
            price: item.price,
            availability: item.availability,
            itemCondition: "https://schema.org/NewCondition",
          },
        }
      : {}),

    ...(additionalProperty.length ? { additionalProperty } : {}),

    ...(videos.length
      ? {
          subjectOf: videos.map((video) => ({
            "@type": "VideoObject",
            name: video.title,
            description:
              video.description || item?.excerpt || "Video sản phẩm Ô Dù Đại Phát",
            embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`,
            url: `https://www.youtube.com/watch?v=${video.youtubeId}`,
            thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
          })),
        }
      : {}),
  }
}

export function breadcrumbSchema(items?: { name: string; path: string }[]) {
  const list = items || [
    { name: "Trang chủ", path: "/" },
    { name: "Dù lệch tâm", path: "/du-lech-tam" },
  ]

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
