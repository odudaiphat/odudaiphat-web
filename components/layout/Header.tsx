/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import Link from "next/link"
import { HOTLINE } from "@/lib/constants"
import { MobileMenu } from "@/components/layout/MobileMenu"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
        <MobileMenu />

        <Link href="/" className="text-lg font-semibold text-neutral-950">
          Ô Dù Đại Phát
        </Link>

        <nav className="hidden items-center gap-4 text-[13px] font-semibold text-neutral-700 lg:flex">
          <Link href="/du-lech-tam" className="whitespace-nowrap transition-colors hover:text-[#8a602b]">
            Dù lệch tâm
          </Link>
          <Link href="/du-chinh-tam" className="whitespace-nowrap transition-colors hover:text-[#8a602b]">
            Dù chính tâm
          </Link>
          <Link href="/o-du-cafe" className="whitespace-nowrap transition-colors hover:text-[#8a602b]">
            Ô dù cafe
          </Link>
          <Link href="/du-san-vuon" className="whitespace-nowrap transition-colors hover:text-[#8a602b]">
            Dù sân vườn
          </Link>
          <Link href="/nha-bat" className="whitespace-nowrap transition-colors hover:text-[#8a602b]">
            Nhà bạt di động
          </Link>
          <Link href="/sua-chua-o-du-ngoai-troi" className="whitespace-nowrap transition-colors hover:text-[#8a602b]">
            Sửa chữa
          </Link>
          <Link href="/#bao-gia" className="whitespace-nowrap transition-colors hover:text-[#8a602b]">
            Báo giá
          </Link>
        </nav>

        <a
          href={`tel:${HOTLINE}`}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-orange-500 px-3 text-sm font-semibold text-white sm:px-4"
        >
          {HOTLINE}
        </a>
      </div>
    </header>
  )
}
