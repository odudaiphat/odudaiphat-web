import { HOTLINE, ZALO_URL } from "@/lib/constants"
import { LazyYouTubeEmbed } from "@/components/shared/LazyYouTubeEmbed"

type ServiceVideo = {
  id: string
  title: string
  description: string
}

const commonIssues = [
  "Dây kéo dù lệch tâm bị đứt, kẹt hoặc kéo không đều.",
  "Áo dù bạc màu, rách mép, thấm nước hoặc xuống màu sau thời gian sử dụng.",
  "Mái dù bị lệch, xô tán, cong nan hoặc khó bung xếp.",
  "Chân đế không đủ nặng, đặt sai vị trí hoặc cần gia cố lại cho mặt bằng gió.",
  "Khung dù bị lỏng ốc, kẹt tay quay, cần kiểm tra trước khi thay mới toàn bộ.",
]

const serviceItems = [
  {
    title: "Thay dây dù lệch tâm",
    text: "Kiểm tra cụm dây, puly, tay quay và cách luồn dây để dù bung xếp nhẹ hơn, hạn chế kẹt khi sử dụng hằng ngày.",
  },
  {
    title: "Thay mái dù, thay áo dù",
    text: "Tư vấn đo lại kích thước tán, số nan, kiểu chóp và màu vải để thay mái vừa khung, không bị hụt hoặc căng sai form.",
  },
  {
    title: "Lắp ráp chân đế và cân chỉnh vị trí",
    text: "Hướng dẫn đặt chân đế, châm nước/cát hoặc xử lý đế bê tông theo khu bàn ngoài trời, lối đi và hướng nắng thực tế.",
  },
  {
    title: "Kiểm tra khung, nan và tay quay",
    text: "Đánh giá tình trạng khung trước khi sửa để biết nên thay phụ kiện, thay áo dù hay cần đổi sang mẫu phù hợp hơn.",
  },
]

const videos: ServiceVideo[] = [
  {
    id: "fAky6EKJR20",
    title: "Thay dây dù lệch tâm chỉnh nghiêng",
    description:
      "Video thao tác thực tế khi dây dù bị đứt hoặc kẹt, phù hợp khách đang dùng dù lệch tâm 2m5 x 2m5.",
  },
  {
    id: "5SDy-07HjZg",
    title: "Thay áo dù ngoài trời",
    description:
      "Hướng dẫn nhận biết khi mái dù đã xuống màu, rách hoặc cần thay áo mới để tiếp tục sử dụng khung cũ.",
  },
  {
    id: "GZh28wgKbVs",
    title: "Sửa và bảo trì ô dù ngoài trời",
    description:
      "Các lỗi thường gặp khi dù dùng ngoài trời lâu ngày: dây, khung, áo dù, chân đế và cách xử lý ban đầu.",
  },
  {
    id: "9a4lgnE9evM",
    title: "Thay mái dù lệch tâm",
    description:
      "Nội dung phù hợp cho khách cần kiểm tra form mái, kích thước tán và cách thay đúng loại dù đang sử dụng.",
  },
  {
    id: "n1o5rjNV6JI",
    title: "Lắp ráp chân đế nhựa đổ nước",
    description:
      "Hướng dẫn lắp chân đế cho dù lệch tâm, dù tròn và ô dù cafe để đặt ổn định hơn trên mặt bằng sử dụng.",
  },
  {
    id: "nvsOkquKtpY",
    title: "Đổ bê tông vào khuôn đế dù",
    description:
      "Video xử lý đế bê tông cho khách cần chân đế chắc hơn khi đặt dù ở sân vườn, quán cafe hoặc khu nhiều gió.",
  },
]

function VideoCard({ video }: { video: ServiceVideo }) {
  return (
    <article className="overflow-hidden rounded-[26px] border border-[#e8dfd1] bg-white shadow-[0_18px_48px_rgba(32,29,24,0.06)]">
      <div className="relative aspect-[9/16] bg-[#efe7dc] sm:aspect-video">
        <LazyYouTubeEmbed
          youtubeId={video.id}
          title={video.title}
          posterLabel="Xem video sửa chữa"
          className="aspect-[9/16] sm:aspect-video"
          nocookie={false}
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-base font-semibold lg:text-lg lg:font-black tracking-[-0.02em] text-[#201d18]">
          {video.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#62594e]">
          {video.description}
        </p>
      </div>
    </article>
  )
}

export function ServiceAuthorityPage() {
  return (
    <main className="bg-[#fffaf3] text-[#201d18]">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a602b]">
              Bảo trì và sửa chữa ô dù ngoài trời
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(32px,8vw,58px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#201d18] lg:font-black">
              Sửa Dù Ngoài Trời
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#62594e] sm:text-lg sm:leading-8">
              Thay mái, thay dây và kiểm tra dù tận nơi.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={`tel:${HOTLINE}`}
                className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-[#201d18] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_18px_44px_rgba(32,29,24,0.16)] transition hover:bg-[#8a602b]"
              >
                Gọi kỹ thuật {HOTLINE}
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-[#d2bea2] bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#201d18] transition hover:bg-[#fff5e6]"
              >
                Gửi ảnh lỗi qua Zalo
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e3d6c3] bg-white p-5 shadow-[0_22px_70px_rgba(32,29,24,0.08)] sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8a602b]">
              Khi nào nên kiểm tra dù?
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[#62594e]">
              {commonIssues.map((issue) => (
                <li key={issue} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8a602b]" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#201d18] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d8bc8c]">
              Video hướng dẫn thực tế
            </p>
            <h2 className="mt-3 text-[clamp(24px,6vw,42px)] font-semibold leading-tight tracking-[-0.03em] lg:font-black">
              Video Sửa Dù Thực Tế
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              Các video được dùng để khách xem trước thao tác kỹ thuật, nhận
              diện lỗi và gửi đúng hình ảnh cần kiểm tra khi liên hệ Zalo.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a602b]">
            Hạng mục thường xử lý
          </p>
          <h2 className="mt-3 text-[clamp(24px,6vw,42px)] font-semibold lg:font-black leading-tight tracking-[-0.04em]">
            Kiểm Tra Đúng Lỗi Trước Khi Thay Mới
          </h2>
          <p className="mt-4 text-base leading-8 text-[#62594e]">
            Nhiều trường hợp không cần thay cả cây dù. Chỉ cần thay dây, thay
            mái hoặc cân chỉnh lại chân đế là có thể tiếp tục sử dụng ổn định.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {serviceItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[26px] border border-[#e8dfd1] bg-white p-6 shadow-[0_16px_42px_rgba(32,29,24,0.05)]"
            >
              <h3 className="text-lg font-semibold lg:text-xl lg:font-black tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#62594e]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[30px] border border-[#e0d1bd] bg-white px-5 py-10 text-center shadow-[0_24px_70px_rgba(32,29,24,0.08)] sm:px-8 lg:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a602b]">
            Cần kiểm tra lỗi trước khi sửa?
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-[clamp(24px,6vw,42px)] font-semibold leading-tight tracking-[-0.03em] lg:font-black">
            Gửi Ảnh Lỗi Qua Zalo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#62594e]">
            Gửi ảnh qua Zalo để được kiểm tra sơ bộ: loại dù, kích thước mái,
            tình trạng dây, chân đế, hướng nắng và vị trí đặt dù.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mx-auto lg:max-w-xl">
            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-[#201d18] px-6 py-4 font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#8a602b]"
            >
              Gọi {HOTLINE}
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-[#cdb693] bg-[#fffaf3] px-6 py-4 font-semibold uppercase tracking-[0.06em] text-[#201d18] transition hover:bg-white"
            >
              Gửi ảnh qua Zalo
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
