/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
export function FAQAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <h2 className="text-center text-[24px] font-semibold leading-[1.14] tracking-[-0.025em] md:text-[clamp(32px,4vw,40px)]">
        Câu hỏi thường gặp
      </h2>
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border p-6">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="mt-3 text-neutral-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
