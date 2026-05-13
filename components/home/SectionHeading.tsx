type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  invert?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6b2f]">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[clamp(34px,4vw,46px)] ${
          invert ? "text-white" : "text-[#201d18]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[15px] leading-7 sm:text-base sm:leading-8 ${
            invert ? "text-white/68" : "text-[#62594e]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
