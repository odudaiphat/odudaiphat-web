import Image from "next/image"
import { HOTLINE, ZALO_URL } from "@/lib/constants"

const HERO_IMAGE = "/images/hero/odudaiphat-premium-lakeside-hero.webp"

const proofPoints = ["Tư vấn theo mặt bằng", "Ảnh thật công trình", "Giao hàng toàn quốc"]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f3ea] px-3 pb-6 pt-3 sm:px-4 lg:px-6 lg:pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(154,107,47,0.18),transparent_34%),linear-gradient(180deg,#fff8ed_0%,rgba(255,248,237,0)_100%)]" />

      <div className="relative mx-auto grid max-w-[1600px] overflow-hidden rounded-[30px] border border-[#eadcc7] bg-[#201d18] shadow-[0_30px_90px_rgba(32,29,24,0.16)] lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex flex-col justify-between px-5 py-7 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ead8b9] backdrop-blur">
              Ô Dù Đại Phát
            </p>

            <h1 className="mt-5 max-w-3xl text-[clamp(34px,9vw,76px)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
              Ô dù ngoài trời cho cafe, villa &amp; resort
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/76 sm:text-lg sm:leading-8">
              Tư vấn dù lệch tâm, dù chính tâm, dù sân vườn và nhà bạt theo diện tích thực tế — ưu tiên độ bền, thẩm mỹ và bố cục không gian.
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#d79b4a] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#201d18] shadow-[0_18px_42px_rgba(215,155,74,0.26)] transition duration-300 hover:bg-[#e7b96e]"
              >
                Nhận báo giá Zalo
              </a>
              <a
                href={`tel:${HOTLINE}`}
                className="inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition duration-300 hover:bg-white/16"
              >
                Gọi {HOTLINE}
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-3 lg:mt-12">
            {proofPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.07] p-3 text-sm font-semibold text-white/88 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-full">
          <Image
            src={HERO_IMAGE}
            alt="Ô dù ngoài trời cao cấp cho cafe sân vườn hồ bơi"
            fill
            priority
            fetchPriority="high"
            quality={82}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center lg:object-[center_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#201d18]/72 via-[#201d18]/10 to-transparent lg:bg-gradient-to-r lg:from-[#201d18] lg:via-[#201d18]/18 lg:to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/88 p-4 text-[#201d18] shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur sm:left-auto sm:max-w-sm">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9a6b2f]">
              Gợi ý nhanh
            </p>
            <p className="mt-2 text-lg font-semibold leading-snug tracking-[-0.02em]">
              Gửi ảnh khu đặt dù, đội ngũ sẽ gợi ý kích thước và kiểu chân phù hợp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
