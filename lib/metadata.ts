/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import type { Metadata } from "next"
import { BRAND_NAME, SITE_URL } from "./constants"

const BRAND_SUFFIX_PATTERN = new RegExp(`\\s*\\|\\s*${BRAND_NAME}$`, "i")

function absoluteUrl(path: string) {
  return path.startsWith("http://") || path.startsWith("https://")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

function cleanTitle(title: string) {
  return title.replace(BRAND_SUFFIX_PATTERN, "").trim()
}

export function createMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image: string
}): Metadata {
  const pageTitle = cleanTitle(title)
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: BRAND_NAME,
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  }
}
