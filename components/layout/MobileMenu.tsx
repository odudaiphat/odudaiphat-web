/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
"use client"

import { useState } from "react"
import Link from "next/link"

const mainMobileLinks = [
  { href: "/du-lech-tam", label: "Dù lệch tâm" },
  { href: "/du-chinh-tam", label: "Dù chính tâm" },
  { href: "/o-du-cafe", label: "Ô dù cafe" },
  { href: "/nha-bat", label: "Nhà bạt di động" },
  { href: "/#cong-trinh-thuc-te", label: "Công trình thực tế" },
  { href: "/sua-chua-o-du-ngoai-troi", label: "Sửa chữa ô dù" },
  { href: "/#bao-gia", label: "Liên hệ / Báo giá" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label="Mở menu danh mục"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex min-h-11 items-center justify-center rounded-xl border border-neutral-200 px-3 text-sm font-semibold text-neutral-900"
      >
        Menu
      </button>

      {isOpen ? (
        <nav
          aria-label="Menu danh mục mobile"
          className="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl"
        >
          {mainMobileLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
