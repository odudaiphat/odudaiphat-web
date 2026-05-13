/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { HOTLINE, ZALO_URL } from "@/lib/constants"

const toneClasses = {
  dark:
    "bg-[#201d18] text-white shadow-[0_16px_38px_rgba(32,29,24,0.16)] hover:bg-[#8a602b]",
  orange:
    "bg-orange-500 text-white shadow-[0_16px_38px_rgba(249,115,22,0.22)] hover:bg-orange-600",
}

const secondaryClasses =
  "border border-[#cdb693] bg-[#fffdf9] text-[#201d18] hover:bg-[#fff7eb]"

type ContactCTAProps = {
  className?: string
  primaryLabel?: string
  secondaryLabel?: string
  primaryTone?: keyof typeof toneClasses
  stackOnMobile?: boolean
}

export function ContactCTA({
  className = "",
  primaryLabel = `Gọi ${HOTLINE}`,
  secondaryLabel = "Gửi ảnh mặt bằng qua Zalo",
  primaryTone = "dark",
  stackOnMobile = true,
}: ContactCTAProps) {
  return (
    <div
      className={`grid gap-3 ${stackOnMobile ? "sm:grid-cols-2" : "grid-cols-2"} ${className}`}
    >
      <a
        href={`tel:${HOTLINE}`}
        className={`inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 sm:min-h-[56px] sm:px-6 sm:py-4 sm:text-base ${toneClasses[primaryTone]}`}
      >
        {primaryLabel}
      </a>

      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 sm:min-h-[56px] sm:px-6 sm:py-4 sm:text-base ${secondaryClasses}`}
      >
        {secondaryLabel}
      </a>
    </div>
  )
}
