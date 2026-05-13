/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import Image from "next/image"
import { ZALO_URL } from "@/lib/constants"

export function HomeVillaSection() {
  return (
    <section className="hidden bg-[#fffaf3] md:block">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] bg-[#efe7dc] shadow-[0_24px_70px_rgba(32,29,24,0.1)]">
            <Image
              src="/images/home/real-villa-dining-portrait.webp"
              alt="Dù lệch tâm ngoài trời trong khu bàn ăn sân vườn"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[30px] bg-[#efe7dc] shadow-[0_24px_70px_rgba(32,29,24,0.1)]">
            <Image
              src="/images/home/real-villa-dining-wide-01.webp"
              alt="Khu bàn ngoài trời ven hồ dùng dù lệch tâm"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] sm:font-black sm:tracking-[0.22em] text-[#8a602b]">
            Khu bàn ngoài trời
          </p>
          <h2 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] sm:text-[clamp(32px,4vw,46px)] sm:font-black sm:tracking-[-0.04em] text-[#201d18]">
            Khu Bàn Ngoài Trời
          </h2>
          <p className="mt-4 text-base leading-8 text-[#62594e]">
            Với quán cafe sân vườn, hồ bơi và khu khách ngồi ngoài trời, dù cần
            đúng kích thước, đúng hướng nắng, đúng độ phủ bóng và không vướng
            lối đi hoặc bàn ghế.
          </p>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-[#201d18] px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_18px_50px_rgba(32,29,24,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#8a602b]"
          >
            Gửi ảnh mặt bằng để tư vấn
          </a>
        </div>
      </div>
    </section>
  )
}
