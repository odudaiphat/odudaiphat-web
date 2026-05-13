/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { BRAND_NAME, HOTLINE } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl font-semibold">{BRAND_NAME}</p>
        <p className="mt-3 text-neutral-300">Hotline: {HOTLINE}</p>
        <a
          href="/sua-chua-o-du-ngoai-troi"
          className="mt-4 inline-block text-sm font-semibold text-neutral-300 underline-offset-4 transition hover:text-white hover:underline"
        >
          Bảo trì & sửa chữa ô dù ngoài trời
        </a>
      </div>
    </footer>
  )
}
