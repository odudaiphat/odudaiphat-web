/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { ContactCTA } from "@/components/shared/ContactCTA"

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e3d4bd] bg-[#fffdf9]/95 px-3 pt-3 shadow-[0_-14px_42px_rgba(32,29,24,0.12)] backdrop-blur supports-[backdrop-filter]:bg-[#fffdf9]/88 lg:hidden pb-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-md">
        <ContactCTA
          primaryLabel="Gọi ngay"
          secondaryLabel="Gửi ảnh Zalo"
          stackOnMobile={false}
        />
      </div>
    </div>
  )
}
