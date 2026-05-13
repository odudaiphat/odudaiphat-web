/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import Image from "next/image"
import { LazyYouTubeEmbed } from "@/components/shared/LazyYouTubeEmbed"
import { ZALO_URL } from "@/lib/constants"

const projectImages = [
  {
    src: "/images/projects/real-villa-outdoor-dining-01.webp",
    title: "Villa sân vườn",
    alt: "Công trình lắp đặt dù ngoài trời thực tế tại sân vườn",
  },
  {
    src: "/images/projects/real-villa-outdoor-dining-02.webp",
    title: "Khu bàn ngoài trời",
    alt: "Khu bàn ngoài trời sử dụng dù lệch tâm thực tế",
  },
  {
    src: "/images/projects/real-cafe-installation-01.webp",
    title: "Giao lắp thực tế",
    alt: "Giao lắp dù ngoài trời thực tế cho mặt bằng kinh doanh",
  },
]

export function MobileRealProjectsSummary() {
  return (
    <section id="cong-trinh-thuc-te" className="bg-[#201d18] px-4 py-9 text-white md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d8bc8c] md:font-black md:tracking-[0.22em]">
            Thực tế đã giao lắp
          </p>
          <h2 className="mt-2 text-[24px] font-semibold leading-tight tracking-[-0.03em] md:text-[clamp(30px,4vw,42px)] md:font-black">
            Công trình & giao lắp thực tế
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/70 md:max-w-2xl md:text-base md:leading-8">
            Một cụm preview gọn giúp khách xem nhanh video, villa, khu bàn ngoài trời và giao lắp thật trước khi tư vấn.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[26px] border border-white/10 bg-black shadow-[0_22px_60px_rgba(0,0,0,0.26)] md:rounded-[30px]">
            <LazyYouTubeEmbed
              youtubeId="SHJj26NeNmY"
              title="Video lắp đặt thực tế Ô Dù Đại Phát"
              posterLabel="Xem video công trình"
              className="aspect-[9/16] md:aspect-video lg:aspect-[9/16]"
              nocookie={false}
            />
          </div>

          <div className="grid gap-3 md:grid-cols-3 lg:gap-4">
            {projectImages.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-[0_18px_48px_rgba(0,0,0,0.2)] md:rounded-[26px]"
              >
                <div className="relative aspect-[3/4] bg-[#eee6dc]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 18vw"
                    className="object-cover object-center transition duration-700 md:hover:scale-[1.018]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold tracking-[-0.01em] text-white">
                    {image.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-center sm:flex-row sm:justify-center md:justify-start">
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#201d18] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5"
          >
            Xem thêm công trình qua Zalo
          </a>
          <a
            href="#bao-gia"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/18 px-6 py-3 text-sm font-semibold text-white/88 transition duration-300 hover:bg-white/8"
          >
            Gửi ảnh mặt bằng để tư vấn
          </a>
        </div>
      </div>
    </section>
  )
}
