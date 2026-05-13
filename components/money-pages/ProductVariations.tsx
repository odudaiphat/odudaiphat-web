import { getProductsByCategory } from "@/lib/products"
import { ProductCard } from "@/components/shared/ProductCard"

export function ProductVariations() {
  const products = getProductsByCategory("du-lech-tam")

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <h1 className="text-[clamp(24px,6vw,40px)] font-semibold tracking-[-0.03em] text-neutral-900 lg:font-black">
        Các dòng dù lệch tâm phổ biến
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
        Chọn mẫu theo diện tích khu bàn, độ phủ bóng và vị trí đặt dù.
      </p>

      <div className="mt-7 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
