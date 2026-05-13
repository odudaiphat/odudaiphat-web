/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
"use client"

import Image from "next/image"
import { useCallback, useMemo, useState } from "react"
import { ProductImageZoom } from "@/components/product/ProductImageZoom"

type ProductGalleryProps = {
  images: string[]
  title: string
}

const FALLBACK_IMAGE = "/images/hero-outdoor-umbrella.webp"

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const galleryImages = useMemo(() => {
    const validImages = images.filter(Boolean).slice(0, 8)

    return validImages.length > 0
      ? validImages
      : [FALLBACK_IMAGE]
  }, [images])

  const [selectedImage, setSelectedImage] = useState(galleryImages[0])

  const activeImage = galleryImages.includes(selectedImage)
    ? selectedImage
    : galleryImages[0]

  const handleSelectImage = useCallback((image: string) => {
    if (image === activeImage) return

    setSelectedImage(image)
  }, [activeImage])

  return (
    <div>
      <ProductImageZoom
        src={activeImage}
        alt={title}
        priority={activeImage === galleryImages[0]}
      />

      <div className="mt-5 grid grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.map((image, index) => {
          const isSelected = image === activeImage

          return (
            <button
              key={image}
              type="button"
              onClick={() => handleSelectImage(image)}
              aria-label={`Xem ảnh ${index + 1} của ${title}`}
              aria-current={isSelected ? "true" : undefined}
              className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f5f5f4] ${
                isSelected
                  ? "ring-2 ring-[#9a6b2f]"
                  : "ring-1 ring-[#e7e5e4] hover:ring-[#d8ccb8]"
              }`}
            >
              <Image
                src={image}
                alt={`${title} - ảnh ${index + 1}`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 22vw, 120px"
                className="object-contain object-center p-2"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
