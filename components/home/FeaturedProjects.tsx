/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import Image from "next/image"

const showroomProjects = [
  {
    image: "/images/projects/real-villa-outdoor-dining-01.webp",
    title: "Sân vườn ven hồ",
    location: "Không gian ngoài trời",
    area: "Dù lệch tâm vuông 3m",
    goal: "Tạo vùng che mát lớn cho bàn ăn sân vườn, giữ lối đi thoáng và không chắn tầm nhìn ra hồ.",
  },
  {
    image: "/images/projects/real-villa-outdoor-dining-02.webp",
    title: "Khu bàn ngoài trời",
    location: "Sân vườn / hồ nước",
    area: "Tán dù lớn",
    goal: "Giúp khách dễ hình dung khoảng cách bàn ghế, chân đế và độ phủ bóng khi đặt dù ngoài trời.",
  },
  {
    image: "/images/projects/real-cafe-installation-01.webp",
    title: "Giao lắp mặt bằng kinh doanh",
    location: "Cafe / cửa hàng",
    area: "Lắp đặt thực tế",
    goal: "Cho khách thấy quy trình giao dù, lắp đặt và kiểm tra vị trí đặt dù tại công trình.",
  },
]

export function FeaturedProjects() {
  return (
    <section className="hidden bg-[#201d18] text-white md:block">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] sm:font-black sm:tracking-[0.22em] text-[#d8bc8c]">
            Hình ảnh giao lắp thực tế
          </p>

          <h2 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] sm:text-[clamp(32px,4vw,46px)] sm:font-black sm:tracking-[-0.04em] text-white">
            Hình Ảnh Giao Lắp
          </h2>

          <p className="mt-4 text-base leading-8 text-white/70">
            Ảnh chụp thực tế giúp dễ hình dung vùng che, khoảng cách bàn ghế,
            hướng nắng và vị trí đặt dù cho từng mặt bằng.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          {showroomProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white/10">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.area}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.018]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#d8bc8c]">
                  {project.location} · {project.area}
                </p>
                <h3 className="mt-3 text-xl font-black tracking-[-0.02em] text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {project.goal}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
