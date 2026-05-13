"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product, ProductCategory } from "@/lib/products"
import { ProductCard } from "@/components/shared/ProductCard"

type MobileColumns = 1 | 2

function MobileGridControls({
  mobileColumns,
  setMobileColumns,
}: {
  mobileColumns: MobileColumns
  setMobileColumns: (columns: MobileColumns) => void
}) {
  return (
    <div className="mt-6 flex justify-end sm:hidden">
      <div className="inline-flex rounded-full border border-[#e5d8c6] bg-white/90 p-1 shadow-[0_8px_24px_rgba(32,29,24,0.06)] backdrop-blur-[2px]">
        <button
          type="button"
          onClick={() => setMobileColumns(2)}
          aria-label="Hiển thị 2 cột"
          aria-pressed={mobileColumns === 2}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            mobileColumns === 2 ? "bg-[#201d18] text-white" : "text-[#6f665b]"
          }`}
        >
          ◫
        </button>

        <button
          type="button"
          onClick={() => setMobileColumns(1)}
          aria-label="Hiển thị 1 cột"
          aria-pressed={mobileColumns === 1}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            mobileColumns === 1 ? "bg-[#201d18] text-white" : "text-[#6f665b]"
          }`}
        >
          ◻
        </button>
      </div>
    </div>
  )
}

export function MobileFeaturedProductGrid({ products }: { products: Product[] }) {
  const [mobileColumns, setMobileColumns] = useState<MobileColumns>(2)

  return (
    <>
      <MobileGridControls
        mobileColumns={mobileColumns}
        setMobileColumns={setMobileColumns}
      />

      <div
        className={`mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 ${
          mobileColumns === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  )
}

export function MobileCategoryGrid({ categories }: { categories: ProductCategory[] }) {
  const [mobileColumns, setMobileColumns] = useState<MobileColumns>(2)

  return (
    <>
      <MobileGridControls
        mobileColumns={mobileColumns}
        setMobileColumns={setMobileColumns}
      />

      <div
        className={`mt-8 grid gap-5 lg:grid-cols-4 lg:gap-6 ${
          mobileColumns === 1 ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-2"
        }`}
      >
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="group overflow-hidden rounded-[28px] border border-[#e8dfd3] bg-[#fffdf9] shadow-[0_14px_38px_rgba(32,29,24,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#d6c0a0] hover:shadow-[0_24px_64px_rgba(32,29,24,0.09)]"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#f8f3ec] to-[#eee4d7] p-1 md:p-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain object-center transition duration-500 active:scale-[1.01] md:group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/16 via-transparent to-white/5 md:block" />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#201d18] transition group-hover:text-[#8a602b] sm:text-xl sm:font-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#62594e]">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
