import { ContactCTA } from "@/components/shared/ContactCTA"

const steps = [
  "Gửi ảnh khu vực đặt dù",
  "Nhận gợi ý kích thước & kiểu chân đế",
  "Chốt mẫu phù hợp ngân sách",
]

export function ConsultationSection() {
  return (
    <section className="bg-[#fffaf3] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[34px] border border-[#e3d3bb] bg-white p-5 shadow-[0_24px_80px_rgba(32,29,24,0.07)] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6b2f]">
            Tư vấn nhanh qua Zalo
          </p>
          <h2 className="mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#201d18] sm:text-[40px]">
            Gửi ảnh mặt bằng để chọn dù đúng ngay từ đầu
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#62594e]">
            Cách này giúp tránh mua dù quá nhỏ, đặt chân đế vướng lối đi hoặc chọn sai kiểu cho hướng nắng/gió thực tế.
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f8f1e6] p-5 sm:p-6">
          <ol className="grid gap-3">
            {steps.map((step, index) => (
              <li key={step} className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm font-semibold text-[#201d18] shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#201d18] text-xs text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <ContactCTA className="mt-5" primaryLabel="Gọi tư vấn" secondaryLabel="Gửi ảnh Zalo" />
        </div>
      </div>
    </section>
  )
}
