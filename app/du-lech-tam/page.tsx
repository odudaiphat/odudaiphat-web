import { JsonLd } from "@/components/seo/OrganizationSchema"
import { ProductVariations } from "@/components/money-pages/ProductVariations"
import { FAQAccordion } from "@/components/shared/FAQAccordion"
import { FinalCTA } from "@/components/home/FinalCTA"
import { createMetadata } from "@/lib/metadata"
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema"
import { duLechTamFaqs } from "@/lib/faq"

export const metadata = createMetadata({
  title: "Dù Lệch Tâm Ngoài Trời Cao Cấp | Ô Dù Đại Phát",
  description:
    "Dù lệch tâm ngoài trời cao cấp cho quán cafe, sân vườn, hồ bơi và resort. Tư vấn theo diện tích, báo giá nhanh, hỗ trợ toàn quốc.",
  path: "/du-lech-tam",
  image: "/images/du-lech-tam-hero.webp",
})

export default function DuLechTamPage() {
  return (
    <main className="bg-white text-neutral-950">
      <JsonLd data={productSchema()} />
      <JsonLd data={faqSchema(duLechTamFaqs)} />
      <JsonLd data={breadcrumbSchema()} />

      <ProductVariations />

      <FinalCTA />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <FAQAccordion faqs={duLechTamFaqs} />
      </section>

    </main>
  )
}
