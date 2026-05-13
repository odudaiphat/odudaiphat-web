/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { featuredProducts } from "@/lib/products"
import { MobileFeaturedProductGrid } from "@/components/home/MobileGridToggle"
import { SectionHeading } from "@/components/home/SectionHeading"

export function FeaturedProducts() {
  return (
    <section className="bg-[#fffaf5]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Sản phẩm nổi bật"
          title="Ô dù ngoài trời bán chạy"
          description="Các mẫu dù phù hợp cho quán cafe, sân vườn, hồ bơi và khu bàn ngoài trời cần độ phủ bóng ổn định."
        />

        <MobileFeaturedProductGrid products={featuredProducts} />
      </div>
    </section>
  )
}
