/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
const trustItems = [
  {
    title: "Tư vấn đúng không gian",
    desc: "Gợi ý mẫu dù theo diện tích, hướng nắng, vị trí đặt và nhu cầu sử dụng thực tế.",
  },
  {
    title: "Hình ảnh giao lắp thực tế",
    desc: "Ưu tiên ảnh thật để khách dễ hình dung vùng che, chân đế, khoảng cách bàn ghế và lối đi.",
  },
  {
    title: "Hỗ trợ toàn quốc",
    desc: "Tư vấn phương án giao hàng, đóng gói và số lượng phù hợp theo từng khu vực.",
  },
]

export function TrustSection() {
  return (
    <section className="bg-[#201d18] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d8bc8c]">
              Vì sao khách chọn Đại Phát
            </p>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[42px]">
              Không chỉ bán dù, mà tư vấn đúng cách đặt dù
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-white/68 sm:text-base sm:leading-8">
            Với sản phẩm ngoài trời, cảm giác tin tưởng đến từ tư vấn đúng mặt bằng: kích thước, vùng che, hướng nắng/gió và cách bố trí để không gian vẫn thoáng.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:bg-white/[0.08] sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
