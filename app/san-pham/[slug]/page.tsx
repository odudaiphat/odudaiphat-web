import { notFound } from "next/navigation"
import { JsonLd } from "@/components/seo/OrganizationSchema"
import { FinalCTA } from "@/components/home/FinalCTA"
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductVideos } from "@/components/product/ProductVideos"
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema"
import { createMetadata } from "@/lib/metadata"
import { getProductBySlug, products, type Product } from "@/lib/products"

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return createMetadata({
      title: "Sản phẩm ô dù ngoài trời",
      description: "Sản phẩm ô dù ngoài trời của Ô Dù Đại Phát.",
      path: "/san-pham",
      image: "/images/hero-outdoor-umbrella.webp",
    })
  }

  return createMetadata({
    title: `${product.name} | Ô Dù Đại Phát`,
    description: product.excerpt,
    path: product.href,
    image: product.images.hero,
  })
}

function getRequiredProduct(slug: string): Product {
  const product = getProductBySlug(slug)
  if (!product) notFound()
  return product
}

function getProductSize(product: Product) {
  if (product.slug.includes("3x3")) return "3m x 3m"
  if (product.slug.includes("3m")) return "3m"
  if (product.slug.includes("2m5")) return "2.5m"
  return "Liên hệ tư vấn theo mẫu thực tế"
}

function getFrameType(product: Product) {
  if (product.slug.includes("hop-kim-nhom")) return "Hợp kim nhôm"
  if (product.slug.includes("khung-sat-son-tinh-dien")) {
    return "Khung sắt sơn tĩnh điện"
  }
  if (product.slug.includes("khung-sat")) return "Khung sắt"
  if (product.slug.includes("than-go")) return "Thân gỗ"
  return "Liên hệ tư vấn theo mẫu thực tế"
}

function getFabricType() {
  return "Liên hệ tư vấn theo mẫu thực tế"
}

function getOperatingMechanism(product: Product) {
  if (product.slug.includes("day-rut")) return "Dây rút"
  if (product.slug.includes("chinh-nghieng")) return "Chỉnh nghiêng linh hoạt"
  if (product.categorySlug === "nha-bat") return "Khung xếp di động"
  return "Liên hệ tư vấn theo mẫu thực tế"
}

function getSuitableSpace(product: Product) {
  if (product.categorySlug === "nha-bat") {
    return "Gian hàng, sự kiện, điểm bán lưu động và khu vực cần che mưa nắng tạm thời"
  }

  if (product.categorySlug === "du-chinh-tam") {
    return "Sân vườn, bàn cafe ngoài trời và không gian cần bố cục cân đối"
  }

  if (product.categorySlug === "du-lech-tam") {
    return "Quán cafe, hồ bơi, sân vườn, villa và khu vực cần vùng che thoáng chân đế"
  }

  return "Không gian ngoài trời cần tư vấn theo mặt bằng thực tế"
}

function getApplications(product: Product) {
  if (product.categorySlug === "nha-bat") {
    return "Bán hàng lưu động, sự kiện, hội chợ, che nắng mưa ngoài trời"
  }

  return "Cafe sân vườn, nhà hàng, resort, villa, hồ bơi và khu nghỉ dưỡng"
}

function getPremiumSpecs(product: Product) {
  return [
    { label: "Kích thước", value: getProductSize(product) },
    { label: "Loại khung", value: getFrameType(product) },
    { label: "Vải dù", value: getFabricType() },
    { label: "Cơ chế vận hành", value: getOperatingMechanism(product) },
    { label: "Phù hợp không gian", value: getSuitableSpace(product) },
    { label: "Ứng dụng", value: getApplications(product) },
    { label: "Bảo hành", value: "Liên hệ tư vấn theo mẫu thực tế" },
  ]
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getRequiredProduct(slug)
  const premiumSpecs = getPremiumSpecs(product)

  const faqs = [
    {
      question: "Dù này phù hợp với không gian nào?",
      answer:
        "Sản phẩm phù hợp cho quán cafe, sân vườn, hồ bơi, resort và các khu vực cần che nắng ngoài trời.",
    },
    {
      question: "Có được tư vấn kích thước trước khi mua không?",
      answer:
        "Ô Dù Đại Phát tư vấn kích thước theo diện tích, vị trí đặt dù và nhu cầu sử dụng thực tế.",
    },
    {
      question: "Có hỗ trợ giao hàng không?",
      answer:
        "Có. Đội ngũ tư vấn sẽ hỗ trợ phương án giao hàng phù hợp theo khu vực và số lượng sản phẩm.",
    },
  ]

  return (
    <main className="bg-white pb-24 text-neutral-950 lg:pb-0">
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Trang chủ", path: "/" },
          { name: product.categoryName, path: `/${product.categorySlug}` },
          { name: product.name, path: product.href },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <ProductGallery
            images={
              product.images.gallery.length > 0
                ? product.images.gallery.slice(0, 8)
                : [product.images.hero]
            }
            title={product.name}
          />

          <div className="lg:pt-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              {product.categoryName}
            </p>
            <h1 className="mt-3 text-[clamp(34px,8vw,56px)] font-black leading-tight">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {product.excerpt}
            </p>

            {product.specs.length > 0 ? (
              <div className="mt-8 rounded-3xl bg-orange-50 p-6">
                <h2 className="text-xl font-black">Thông tin nhanh</h2>
                <ul className="mt-4 space-y-3 text-neutral-700">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Thông số tư vấn
            </p>
            <h2 className="mt-2 text-2xl font-black text-neutral-950">
              Thông số sản phẩm cần kiểm tra theo mẫu thực tế
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">
              Các thông tin chưa có dữ liệu xác minh sẽ được để ở trạng thái tư
              vấn trực tiếp, tránh ghi sai thông số kỹ thuật khi khách chọn mẫu.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {premiumSpecs.map((spec) => (
              <div
                key={spec.label}
                className="border-b border-neutral-200 px-6 py-5 sm:px-8 md:odd:border-r"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500">
                  {spec.label}
                </p>
                <p className="mt-2 text-base font-bold leading-7 text-neutral-950">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductVideos videos={product.videos} />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-neutral-950">
            Câu hỏi thường gặp
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-5">
                <h3 className="font-black text-neutral-950">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <MobileStickyCTA />
    </main>
  )
}
