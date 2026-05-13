import Image from "next/image"

const HERO_IMAGE = "/images/hero/odudaiphat-premium-lakeside-hero.webp"

export function Hero() {
  return (
    <section className="relative isolate bg-[#f8f3ea] px-3 sm:px-4 lg:px-6">
      <h1 className="sr-only">
        Ô Dù Ngoài Trời Cho Cafe, Sân Vườn Và Hồ Bơi
      </h1>

      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[28px]">
        <div className="relative h-[46vh] overflow-hidden sm:h-[54vh] lg:h-[64vh]">
          <Image
            src={HERO_IMAGE}
            alt="Ô dù ngoài trời cao cấp cho cafe sân vườn hồ bơi"
            fill
            priority
            fetchPriority="high"
            quality={86}
            sizes="100vw"
            className="object-cover object-center lg:object-[center_38%]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-black/5 to-transparent md:from-black/24" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/95 to-transparent" />

          <div className="absolute inset-x-0 bottom-8 z-10 px-4 pb-[env(safe-area-inset-bottom)] sm:px-6 md:bottom-10 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-end justify-between gap-4">
              <div className="max-w-[520px] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.28)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ead8b9] md:text-xs">
                  Ô Dù Đại Phát
                </p>
                <p className="mt-2 max-w-[19rem] text-[24px] font-semibold leading-[1.05] tracking-[-0.035em] md:max-w-2xl md:text-[clamp(42px,5vw,64px)]">
                  Không gian ngoài trời chuẩn cafe, villa & resort
                </p>
              </div>

              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-2 rounded-full border border-white/35 bg-white/90 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-[3px] sm:flex-nowrap lg:static lg:translate-x-0">
                <a
                  href="tel:0349596898"
                  className="inline-flex min-h-[36px] items-center justify-center rounded-full px-3 text-xs font-semibold text-[#201d18] transition duration-300 hover:bg-white lg:px-4 lg:text-sm"
                >
                  Gọi 034.9596.898
                </a>
                <a
                  href="https://zalo.me/0349596898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[36px] items-center justify-center rounded-full bg-[#201d18] px-3 text-xs font-semibold text-white shadow-[0_8px_18px_rgba(32,29,24,0.14)] transition duration-300 hover:bg-[#3a332b] lg:px-4 lg:text-sm"
                >
                  Báo giá Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
