/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { HOTLINE, ZALO_URL } from "@/lib/constants"

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e3d4bd] bg-[#fffdf9]/97 px-3 pt-3 shadow-[0_-14px_42px_rgba(32,29,24,0.12)] backdrop-blur lg:hidden pb-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:${HOTLINE}`}
          className="flex min-h-[54px] items-center justify-center rounded-2xl bg-[#201d18] px-4 py-3 text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(32,29,24,0.16)]"
        >
          Gọi ngay
        </a>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[54px] items-center justify-center rounded-2xl border border-[#cdb693] bg-[#fffdf9] px-4 py-3 text-[15px] font-semibold text-[#201d18]"
        >
          Gửi ảnh Zalo
        </a>
      </div>
    </div>
  )
}
