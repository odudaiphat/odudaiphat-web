/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { categories } from "@/lib/products"
import { MobileCategoryGrid } from "@/components/home/MobileGridToggle"

export function CategoryGrid() {
  return (
    <section
      id="danh-muc"
      className="mx-auto max-w-7xl px-4 py-11 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a602b] sm:font-black sm:tracking-[0.22em]">
          Danh mục sản phẩm
        </p>
        <h2 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#2f2a22] sm:text-[clamp(32px,4vw,44px)] sm:font-black sm:tracking-[-0.04em]">
          Chọn Dòng Dù Phù Hợp
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#62594e] sm:mt-4 sm:text-base sm:leading-8">
          Chọn nhanh theo vị trí đặt dù: quán cafe, sân vườn, hồ bơi hoặc khu bàn ngoài trời.
        </p>
      </div>

      <MobileCategoryGrid categories={categories} />
    </section>
  )
}
