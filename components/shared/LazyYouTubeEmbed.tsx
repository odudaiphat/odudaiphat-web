"use client"

import { useCallback, useRef, useState, type PointerEvent } from "react"

type LazyYouTubeEmbedProps = {
  youtubeId: string
  title: string
  className?: string
  posterLabel?: string
  nocookie?: boolean
}

function warmupLink(rel: "preconnect" | "dns-prefetch", href: string) {
  if (document.head.querySelector(`link[rel="${rel}"][href="${href}"]`)) return

  const link = document.createElement("link")
  link.rel = rel
  link.href = href
  if (rel === "preconnect") {
    link.crossOrigin = "anonymous"
  }
  document.head.appendChild(link)
}

export function LazyYouTubeEmbed({
  youtubeId,
  title,
  className = "aspect-video",
  posterLabel = "Xem video thực tế",
  nocookie = true,
}: LazyYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [shouldMute, setShouldMute] = useState(false)
  const hasWarmedUp = useRef(false)
  const hasStartedPlayback = useRef(false)
  const host = nocookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com"
  const embedUrl = `${host}/embed/${youtubeId}?autoplay=1&playsinline=1&mute=${shouldMute ? "1" : "0"}&rel=0&modestbranding=1`
  const thumbnailUrl = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`

  const warmupVideo = useCallback(() => {
    if (hasWarmedUp.current) return
    hasWarmedUp.current = true

    warmupLink("preconnect", "https://www.youtube.com")
    warmupLink("preconnect", "https://www.youtube-nocookie.com")
    warmupLink("preconnect", "https://i.ytimg.com")
    warmupLink("preconnect", "https://www.google.com")
    warmupLink("dns-prefetch", "https://www.youtube.com")
    warmupLink("dns-prefetch", "https://i.ytimg.com")
  }, [])

  const startPlayback = useCallback((muteOnStart: boolean) => {
    if (hasStartedPlayback.current) return

    hasStartedPlayback.current = true
    setShouldMute(muteOnStart)
    warmupVideo()
    setIsPlaying(true)
  }, [warmupVideo])

  const handlePointerUp = useCallback((event: PointerEvent<HTMLButtonElement>) => {
    startPlayback(event.pointerType !== "mouse")
  }, [startPlayback])

  const handlePlay = useCallback(() => {
    startPlayback(false)
  }, [startPlayback])

  return (
    <div
      className={`relative overflow-hidden rounded-[26px] bg-[#201d18] ${className}`}
      onPointerEnter={warmupVideo}
      onTouchStart={warmupVideo}
    >
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="group absolute inset-0 flex items-end overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          aria-label={posterLabel}
          onPointerUp={handlePointerUp}
          onClick={handlePlay}
          onFocus={warmupVideo}
        >
          <img
            src={thumbnailUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />
          <span className="relative m-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/38 px-4 py-3 text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-200 group-hover:scale-[1.015] group-active:scale-[0.985] sm:m-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#201d18] shadow-sm">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="ml-0.5 h-4 w-4 fill-current"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/68">
                Video thực tế
              </span>
              <span className="mt-1 text-sm font-semibold text-white">
                {posterLabel}
              </span>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
