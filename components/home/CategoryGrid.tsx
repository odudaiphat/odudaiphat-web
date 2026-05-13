/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { categories } from "@/lib/products"
import { MobileCategoryGrid } from "@/components/home/MobileGridToggle"
import { SectionHeading } from "@/components/home/SectionHeading"

export function CategoryGrid() {
  return (
    <section
      id="danh-muc"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <SectionHeading
        eyebrow="Danh mục sản phẩm"
        title="Chọn dòng dù phù hợp với không gian"
        description="Chọn nhanh theo vị trí đặt dù: quán cafe, sân vườn, hồ bơi hoặc khu bàn ngoài trời."
      />

      <MobileCategoryGrid categories={categories} />
    </section>
  )
}
