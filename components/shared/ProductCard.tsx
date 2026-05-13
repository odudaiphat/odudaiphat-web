/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#ece6dd] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#f7f3ec] to-[#ece4d8] p-1 md:p-5">
        <Image
          src={product.images.thumbnail}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain object-center transition duration-700 active:scale-[1.015] md:group-hover:scale-[1.04]"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#9a6b2f] shadow-sm backdrop-blur">
          {product.categoryName}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-6">
        <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1f1f1c] transition group-hover:text-[#9a6b2f] sm:text-[22px] sm:font-black">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-[14px] leading-6 text-[#57534e] sm:mt-4 sm:line-clamp-3 sm:text-[15px] sm:leading-7">
          {product.excerpt}
        </p>

        {product.specs.length > 0 ? (
          <ul className="mt-4 space-y-2 border-t border-[#eee7dd] pt-4 text-sm leading-6 text-[#57534e]">
            {product.specs.slice(0, 2).map((spec) => (
              <li key={spec} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a6b2f]" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-6">
          <div className="inline-flex w-full items-center justify-center rounded-2xl bg-[#1f1f1c] px-5 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white transition duration-300 group-hover:bg-[#9a6b2f]">
            Xem chi tiết
          </div>
        </div>
      </div>
    </Link>
  )
}
