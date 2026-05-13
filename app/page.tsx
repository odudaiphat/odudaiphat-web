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
import { ConsultationSection } from "@/components/home/ConsultationSection"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Hero } from "@/components/home/Hero"
import { TrustSection } from "@/components/home/TrustSection"
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
      <ConsultationSection />

      <div>
        <TrustSection />
        <BuyerGuideSection />
        <FAQPreview />
        <FinalCTA />
      </div>
    </main>
  )
}
