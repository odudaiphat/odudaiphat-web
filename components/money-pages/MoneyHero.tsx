import Image from "next/image"
import { HOTLINE, ZALO_URL } from "@/lib/constants"
import { getProductsByCategory, FALLBACK_IMAGE } from "@/lib/products"

export function MoneyHero() {
  const heroImage = getProductsByCategory("du-lech-tam")[0]?.images.hero || FALLBACK_IMAGE

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-7 pb-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="max-w-3xl text-[clamp(30px,8vw,44px)] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl lg:font-black">
              Dù Lệch Tâm Ngoài Trời
              <span className="block">Cho Cafe &amp; Sân Vườn</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-neutral-300 sm:text-lg">
              Tư vấn mẫu dù lệch tâm phù hợp theo khu bàn ngoài trời, hướng nắng và diện tích cần che.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${HOTLINE}`}
                className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 font-extrabold text-white"
              >
                Gọi {HOTLINE}
              </a>
              <a
                href={ZALO_URL}
                className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-white px-6 py-4 font-extrabold text-neutral-950"
              >
                Nhận báo giá nhanh
              </a>
            </div>
          </div>

          <Image
            src={heroImage}
            alt="Dù lệch tâm ngoài trời cao cấp cho quán cafe sân vườn hồ bơi và resort của Ô Dù Đại Phát"
            width={1200}
            height={1400}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-[420px] w-full rounded-3xl object-contain min-[414px]:h-[450px] sm:h-[540px] md:h-[580px] lg:h-[740px]"
          />
        </div>
      </div>
    </section>
  )
}
