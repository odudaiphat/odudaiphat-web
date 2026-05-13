/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import type { ProductVideo } from "@/lib/products"
import { LazyYouTubeEmbed } from "@/components/shared/LazyYouTubeEmbed"

type ProductVideosProps = {
  videos?: ProductVideo[]
}

export function ProductVideos({ videos }: ProductVideosProps) {
  if (!videos?.length) return null

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-16">
      <div className="rounded-3xl bg-neutral-950 p-5 text-white shadow-2xl sm:p-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-400">
            Video thực tế
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Video sản phẩm Ô Dù Đại Phát
          </h2>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {videos.map((video) => (
            <article key={video.youtubeId} className="overflow-hidden rounded-2xl bg-white/5">
              <LazyYouTubeEmbed
                youtubeId={video.youtubeId}
                title={video.title}
                posterLabel="Xem video sản phẩm"
              />
              <div className="p-4">
                <h3 className="font-semibold">{video.title}</h3>
                {video.description ? (
                  <p className="mt-2 text-sm leading-6 text-neutral-300">{video.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
