/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
"use client"

import Image from "next/image"
import { useRef, useState, type MouseEvent } from "react"

type ProductImageZoomProps = {
  src: string
  alt: string
  priority?: boolean
}

export function ProductImageZoom({
  src,
  alt,
  priority = false,
}: ProductImageZoomProps) {
  const [isZooming, setIsZooming] = useState(false)
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%")
  const lastBackgroundPosition = useRef(backgroundPosition)

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = Math.round(((event.clientX - rect.left) / rect.width) * 100)
    const y = Math.round(((event.clientY - rect.top) / rect.height) * 100)
    const nextPosition = `${Math.max(0, Math.min(100, x))}% ${Math.max(0, Math.min(100, y))}%`

    if (lastBackgroundPosition.current === nextPosition) return

    lastBackgroundPosition.current = nextPosition
    setBackgroundPosition(nextPosition)
  }

  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#f7f3ed] shadow-xl ring-1 ring-black/5 md:cursor-zoom-in"
      onMouseEnter={() => setIsZooming(true)}
      onMouseLeave={() => setIsZooming(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`object-contain object-center p-4 transition-opacity duration-150 sm:p-6 ${
          isZooming ? "md:opacity-0" : "opacity-100"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 hidden bg-no-repeat md:block ${
          isZooming ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition,
          backgroundSize: "220%",
        }}
      />
    </div>
  )
}
