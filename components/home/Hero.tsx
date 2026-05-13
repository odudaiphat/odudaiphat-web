import Image from "next/image"
import { ContactCTA } from "@/components/shared/ContactCTA"

const HERO_IMAGE = "/images/hero/odudaiphat-premium-lakeside-hero.webp"

const trustBadges = [
  "Tư vấn theo mặt bằng",
  "Ảnh giao lắp thực tế",
  "Hỗ trợ toàn quốc",
]

const heroStats = [
  { value: "Cafe", label: "khu bàn ngoài trời" },
  { value: "Villa", label: "sân vườn & hồ bơi" },
  { value: "Zalo", label: "gửi ảnh nhận tư vấn" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fbf7f0] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(154,107,47,0.12),transparent_30%),linear-gradient(180deg,#fffaf3_0%,#f4eadc_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <p className="inline-flex rounded-full border border-[#dfceb5] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a602b] shadow-[0_10px_30px_rgba(32,29,24,0.05)]">
            Ô Dù Đại Phát · Outdoor living
          </p>

          <h1 className="mt-5 max-w-3xl text-[clamp(34px,10vw,72px)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#201d18]">
            Ô dù ngoài trời cho không gian cafe, villa & resort
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#62594e] sm:text-lg sm:leading-8">
            Tư vấn mẫu dù, kích thước và vị trí đặt theo mặt bằng thực tế — giúp không gian mát hơn, gọn hơn và nhìn chuyên nghiệp hơn.
          </p>

          <ContactCTA
            className="mt-7 max-w-xl"
            primaryLabel="Gọi tư vấn ngay"
            secondaryLabel="Gửi ảnh mặt bằng"
            stackOnMobile={false}
          />

          <div className="mt-6 flex flex-wrap gap-2.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#e5d7c2] bg-white/70 px-3.5 py-2 text-xs font-semibold text-[#4d453c]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[#eee3d4] shadow-[0_28px_90px_rgba(32,29,24,0.16)] sm:rounded-[44px]">
            <div className="relative aspect-[4/5] min-h-[430px] sm:aspect-[16/13] lg:min-h-[640px]">
              <Image
                src={HERO_IMAGE}
                alt="Ô dù ngoài trời cao cấp cho cafe sân vườn hồ bơi"
                fill
                priority
                fetchPriority="high"
                quality={88}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center lg:object-[center_42%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/8 to-transparent" />
              <div className="absolute left-4 right-4 top-4 rounded-[24px] border border-white/30 bg-white/82 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-md sm:left-auto sm:right-5 sm:top-5 sm:w-[300px] sm:p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a602b]">
                  Quick consultation
                </p>
                <p className="mt-2 text-sm font-semibold leading-5 text-[#201d18]">
                  Chụp ảnh khu đặt dù, đội ngũ sẽ gợi ý kiểu dù và vùng che phù hợp.
                </p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 rounded-[24px] border border-white/20 bg-[#201d18]/82 p-2.5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-3">
                {heroStats.map((item) => (
                  <div key={item.value} className="rounded-2xl bg-white/8 p-3 text-center">
                    <p className="text-sm font-semibold sm:text-base">{item.value}</p>
                    <p className="mt-1 text-[10px] leading-4 text-white/68 sm:text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
