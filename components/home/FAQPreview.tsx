/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { HOTLINE, ZALO_URL } from "@/lib/constants"
import { homepageFaqs } from "@/lib/faq"

export function FAQPreview() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-600">
            Câu hỏi thường gặp
          </p>
          <h2 className="mt-3 text-[24px] font-semibold leading-[1.14] tracking-[-0.025em] md:text-[clamp(32px,4vw,40px)] text-neutral-950">
            Tư Vấn Chọn Ô Dù Ngoài Trời Phù Hợp
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Những câu hỏi khách hàng thường quan tâm khi chọn dù lệch tâm,
            dù chính tâm, dù cafe và giải pháp che nắng cho không gian ngoài trời.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {homepageFaqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold leading-snug md:text-lg text-neutral-950">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-3xl bg-neutral-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Cần tư vấn theo mặt bằng thực tế?</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Gửi ảnh không gian qua Zalo để được gợi ý mẫu dù, kích thước và màu sắc phù hợp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Gọi {HOTLINE}
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950"
            >
              Chat Zalo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
