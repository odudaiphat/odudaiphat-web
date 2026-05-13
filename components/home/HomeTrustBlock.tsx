/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import Link from "next/link"
import { ZALO_URL } from "@/lib/constants"

const items = [
  "Tư vấn theo mặt bằng thực tế",
  "Gửi ảnh qua Zalo để được gợi ý mẫu phù hợp",
  "Phù hợp cafe, villa, resort",
  "Giao lắp theo khu vực",
]

export function HomeTrustBlock() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 p-4 text-sm font-medium text-neutral-700"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Link
            href={ZALO_URL}
            className="inline-flex rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Gửi ảnh mặt bằng qua Zalo
          </Link>
        </div>
      </div>
    </section>
  )
}
