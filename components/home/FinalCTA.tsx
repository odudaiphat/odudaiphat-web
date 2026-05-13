/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { ContactCTA } from "@/components/shared/ContactCTA"

export function FinalCTA() {
  return (
    <section id="bao-gia" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[34px] border border-[#ddccb3] bg-[#f8f1e6] px-5 py-11 text-center shadow-[0_22px_70px_rgba(32,29,24,0.09)] sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a602b]">
          Tư vấn theo diện tích và vị trí đặt dù
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-[24px] font-semibold leading-[1.14] tracking-[-0.025em] md:text-[clamp(32px,4vw,46px)] text-[#201d18]">
          Cần Ô Dù Cho Cafe, Sân Vườn Hay Hồ Bơi?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 md:text-base md:leading-8 text-[#62594e]">
          Gửi ảnh mặt bằng qua Zalo để được tư vấn kích thước dù, vùng phủ bóng
          và vị trí đặt phù hợp với lối đi và khu khách ngồi.
        </p>

        <ContactCTA className="mt-8 lg:mx-auto lg:max-w-xl" secondaryLabel="Báo giá qua Zalo" />
      </div>
    </section>
  )
}
