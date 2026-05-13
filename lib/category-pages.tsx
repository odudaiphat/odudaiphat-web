import { notFound } from "next/navigation"
import { categories, getProductsByCategory } from "@/lib/products"
import { createMetadata } from "@/lib/metadata"
import { ProductCard } from "@/components/shared/ProductCard"
import { FinalCTA } from "@/components/home/FinalCTA"
import { ContactCTA } from "@/components/shared/ContactCTA"

export const categorySlugs = categories.map((category) => category.slug)

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function createCategoryMetadata(slug: string) {
  const category = getCategoryBySlug(slug)

  if (!category) {
    return createMetadata({
      title: "Danh mục ô dù ngoài trời | Ô Dù Đại Phát",
      description: "Danh mục sản phẩm ô dù ngoài trời của Ô Dù Đại Phát.",
      path: "/#danh-muc",
      image: "/images/hero-outdoor-umbrella.webp",
    })
  }

  return createMetadata({
    title: `${category.title} | Ô Dù Đại Phát`,
    description: category.description,
    path: category.href,
    image: category.image,
  })
}

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const categoryProducts = getProductsByCategory(slug)
  const fallbackProducts =
    slug === "o-du-cafe" || slug === "du-san-vuon"
      ? getProductsByCategory("du-lech-tam")
      : []
  const products =
    categoryProducts.length > 0 ? categoryProducts : fallbackProducts.slice(0, 6)

  return (
    <main className="bg-white text-neutral-950">
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Danh mục sản phẩm
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(36px,8vw,64px)] font-black leading-tight text-neutral-950">
            {category.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
            {category.description} Ô Dù Đại Phát tư vấn theo diện tích, không
            gian sử dụng và ngân sách thực tế.
          </p>
          <div className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-2">
            <ContactCTA
              className="contents"
              primaryLabel="Gọi tư vấn"
              secondaryLabel="Gửi ảnh mặt bằng"
              primaryTone="orange"
              stackOnMobile={false}
            />
          </div>
        </div>
      </section>

      <section
        id="san-pham"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mb-10 max-w-3xl">
          <h2 className="text-[clamp(28px,7vw,40px)] font-black leading-tight">
            Sản phẩm {category.title.toLowerCase()}
          </h2>
          <p className="mt-4 text-neutral-600">
            Tham khảo các mẫu phù hợp cho quán cafe, sân vườn, hồ bơi và không
            gian nghỉ dưỡng. Liên hệ Ô Dù Đại Phát để được tư vấn theo diện
            tích sử dụng thực tế.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6 text-neutral-700">
            Danh mục này đang được cập nhật thêm ảnh và sản phẩm. Vui lòng liên
            hệ hotline để được tư vấn nhanh.
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-black text-neutral-950">
            Tư vấn chọn dù ngoài trời phù hợp
          </h2>

          <div className="mt-5 grid gap-5 text-sm leading-6 text-neutral-700 md:grid-cols-3">
            <p>
              Với quán cafe hoặc sân vườn nhỏ, nên ưu tiên mẫu dễ thao tác,
              che phủ vừa đủ lối ngồi và không chiếm nhiều diện tích.
            </p>

            <p>
              Với hồ bơi, resort hoặc khu vực nhiều nắng gió, nên chọn khung
              chắc, vải dày và kích thước phù hợp vị trí đặt thực tế.
            </p>

            <p>
              Nếu chưa rõ nên chọn mẫu nào, Ô Dù Đại Phát có thể tư vấn theo
              diện tích, phong cách không gian và ngân sách dự kiến.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
