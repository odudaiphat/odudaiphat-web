/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { LazyYouTubeEmbed } from "@/components/shared/LazyYouTubeEmbed"

export function HomeTrustVideo() {
  return (
    <section className="hidden bg-white md:block">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a602b] sm:font-black sm:tracking-[0.22em]">
            Công trình thực tế
          </p>
          <h2 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[#2f2a22] sm:text-[clamp(32px,4vw,46px)] sm:font-black sm:tracking-[-0.04em]">
            Công Trình Thực Tế
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#62594e] sm:mt-4 sm:text-base sm:leading-8">
            Hình ảnh và video lắp đặt thực tế giúp khách dễ hình dung vị trí đặt dù, vùng che và lối đi.
          </p>

          <div className="mt-6 grid gap-3 text-sm font-bold text-[#5f574d] sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e9dfd1] bg-[#fffaf3] px-4 py-3">
              Giao dù tận nơi
            </div>
            <div className="rounded-2xl border border-[#e9dfd1] bg-[#fffaf3] px-4 py-3">
              Lắp đặt thực tế
            </div>
            <div className="rounded-2xl border border-[#e9dfd1] bg-[#fffaf3] px-4 py-3">
              Tư vấn qua Zalo
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-[#e9dfd1] bg-[#fffdf9] p-2 shadow-[0_26px_80px_rgba(32,29,24,0.1)]">
          <LazyYouTubeEmbed
            youtubeId="SHJj26NeNmY"
            title="Video thực tế giao và lắp đặt dù ngoài trời Ô Dù Đại Phát"
            posterLabel="Xem video công trình thực tế"
            className="aspect-[9/16] sm:aspect-video lg:aspect-[9/16]"
            nocookie={false}
          />
        </div>
      </div>
    </section>
  )
}
