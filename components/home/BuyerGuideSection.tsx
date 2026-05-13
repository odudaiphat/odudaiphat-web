/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { ContactCTA } from "@/components/shared/ContactCTA"

const guides = [
  "Diện tích cần che và số bàn ghế",
  "Hướng nắng, hướng gió trong ngày",
  "Kiểu chân đế có vướng lối đi hay không",
]

export function BuyerGuideSection() {
  return (
    <section className="bg-[#fbf7f0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6b2f]">
            Hướng dẫn chọn nhanh
          </p>
          <h2 className="mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#201d18] sm:text-[42px]">
            Chọn ô dù ngoài trời theo mặt bằng, không chọn theo cảm tính
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#62594e] sm:text-base sm:leading-8">
            Một mẫu dù đẹp nhưng sai kích thước hoặc sai chân đế có thể làm không gian chật hơn. Hãy bắt đầu từ cách sử dụng thực tế.
          </p>
          <ContactCTA className="mt-7 max-w-xl" primaryLabel="Gọi hỏi mẫu phù hợp" secondaryLabel="Gửi ảnh để tư vấn" />
        </div>

        <div className="grid gap-3">
          {guides.map((guide, index) => (
            <div key={guide} className="flex items-start gap-4 rounded-[26px] border border-[#e6d8c4] bg-white p-5 shadow-[0_16px_46px_rgba(32,29,24,0.055)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#201d18] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-[#201d18]">{guide}</h3>
                <p className="mt-2 text-sm leading-6 text-[#62594e]">
                  Đây là yếu tố quyết định kích thước tán, kiểu dù và vị trí đặt để khách ngồi thoải mái hơn.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
