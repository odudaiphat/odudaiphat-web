/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
export function TrustSection() {
  return (
    <section className="bg-neutral-950 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3">
        <article className="rounded-3xl bg-white/5 p-6">
          <h3 className="font-semibold">Tư vấn đúng không gian</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Gợi ý mẫu dù theo diện tích, hướng nắng, vị trí đặt và nhu cầu sử
            dụng thực tế.
          </p>
        </article>

        <article className="rounded-3xl bg-white/5 p-6">
          <h3 className="font-semibold">Hỗ trợ giao hàng toàn quốc</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Tư vấn phương án giao hàng phù hợp theo khu vực và số lượng sản
            phẩm.
          </p>
        </article>

        <article className="rounded-3xl bg-white/5 p-6">
          <h3 className="font-semibold">Dòng dù ngoài trời bền đẹp</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Ưu tiên mẫu khung chắc, vải dày, phù hợp quán cafe, sân vườn, hồ
            bơi và resort.
          </p>
        </article>
      </div>
    </section>
  )
}
