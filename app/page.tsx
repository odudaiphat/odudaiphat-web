/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { BuyerGuideSection } from "@/components/home/BuyerGuideSection"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { FAQPreview } from "@/components/home/FAQPreview"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Hero } from "@/components/home/Hero"
import { TrustSection } from "@/components/home/TrustSection"
import { HOTLINE, ZALO_URL } from "@/lib/constants"
import { createMetadata } from "@/lib/metadata"

export const metadata = createMetadata({
  title: "Ô Dù Ngoài Trời Cao Cấp | Ô Dù Đại Phát",
  description:
    "Ô Dù Đại Phát cung cấp dù lệch tâm, dù chính tâm, dù sân vườn, ô dù cafe và ô dù quảng cáo. Hotline 0349596898.",
  path: "/",
  image: "/images/home/real-villa-hero.webp",
})

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />

      <section id="bao-gia" className="px-4 py-8 md:hidden">
        <div className="rounded-[28px] border border-[#e0d1bd] bg-[#f7f1e8] p-5 text-center shadow-[0_18px_55px_rgba(32,29,24,0.08)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a602b]">
            Tư vấn nhanh
          </p>
          <h2 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.025em] text-[#201d18]">
            Gửi ảnh mặt bằng để chọn dù phù hợp
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#62594e]">
            Gọi tư vấn hoặc gửi ảnh Zalo để được gợi ý kích thước, kiểu dù và vị
            trí đặt.
          </p>

          <div className="mt-5 grid gap-3">
            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#201d18] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(32,29,24,0.16)]"
            >
              Gọi ngay {HOTLINE}
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-[#cdb693] bg-white px-5 py-3 text-sm font-semibold text-[#201d18]"
            >
              Gửi ảnh mặt bằng qua Zalo
            </a>
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <TrustSection />
        <BuyerGuideSection />
        <FAQPreview />
        <FinalCTA />
      </div>
    </main>
  )
}
