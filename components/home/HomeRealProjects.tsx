/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import Image from "next/image"

const realProjects = [
  {
    image: "/images/projects/real-villa-outdoor-dining-01.webp",
    title: "Không gian villa ven hồ",
    text: "Dù lệch tâm vuông 3m x 3m tạo vùng che lớn cho khu bàn ăn ngoài trời.",
  },
  {
    image: "/images/projects/real-villa-outdoor-dining-02.webp",
    title: "Outdoor dining cao cấp",
    text: "Tán dù rộng, màu kem đồng bộ với sân vườn, hồ nước và bàn ghế ngoài trời.",
  },
  {
    image: "/images/projects/real-villa-outdoor-dining-03.webp",
    title: "Sân vườn nghỉ dưỡng thật",
    text: "Không gian thật giúp khách dễ hình dung tỷ lệ, độ phủ bóng và cảm giác sử dụng.",
  },
  {
    image: "/images/projects/real-cafe-installation-01.webp",
    title: "Giao lắp cho mặt bằng kinh doanh",
    text: "Ảnh thi công thực tế tại quán, phù hợp khách cần kiểm chứng sản phẩm và dịch vụ.",
  },
]

export function HomeRealProjects() {
  return (
    <section id="cong-trinh-thuc-te" className="hidden bg-[#201d18] text-white md:block">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] sm:font-black sm:tracking-[0.22em] text-[#d8bc8c]">
            Hình ảnh công trình thực tế
          </p>
          <h2 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] sm:text-[clamp(32px,4vw,46px)] sm:font-black sm:tracking-[-0.04em] text-white">
            Công Trình Thực Tế
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Ưu tiên hình ảnh công trình thật để khách nhìn rõ sản phẩm trong
            không gian thực tế, không dùng cảm giác stock image hay template demo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {realProjects.map((project) => (
            <article
              key={project.image}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white/10">
                <Image
                  src={project.image}
                  alt={`${project.title} - công trình ô dù ngoài trời thực tế Ô Dù Đại Phát`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.018]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-white/5" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-black tracking-[-0.02em] text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
