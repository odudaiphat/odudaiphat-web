/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { featuredProducts } from "@/lib/products"
import { MobileFeaturedProductGrid } from "@/components/home/MobileGridToggle"

export function FeaturedProducts() {
  return (
    <section className="bg-[#fffaf5]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a602b] sm:font-black sm:tracking-[0.22em]">
            Sản phẩm nổi bật
          </p>

          <h2 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#2f2a22] sm:text-[clamp(32px,4vw,46px)] sm:font-black sm:tracking-[-0.04em]">
            Ô Dù Ngoài Trời Bán Chạy
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#62594e] sm:mt-4 sm:text-base sm:leading-8">
            Các mẫu dù ngoài trời phù hợp cho quán cafe, sân vườn, hồ bơi và khu bàn ngoài trời cần độ phủ bóng ổn định.
          </p>
        </div>

        <MobileFeaturedProductGrid products={featuredProducts} />
      </div>
    </section>
  )
}
