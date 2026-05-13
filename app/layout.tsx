/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA"
import { JsonLd } from "@/components/seo/OrganizationSchema"
import { SITE_URL } from "@/lib/constants"
import { organizationSchema } from "@/lib/schema"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ô Dù Đại Phát | Ô Dù Ngoài Trời Cao Cấp",
    template: "%s | Ô Dù Đại Phát",
  },
  description:
  "Ô Dù Đại Phát cung cấp ô dù ngoài trời, dù lệch tâm, dù chính tâm, dù sân vườn, ô dù cafe và ô dù quảng cáo.",

robots: {
  index: true,
  follow: true,
},

openGraph: {
  siteName: "Ô Dù Đại Phát",
  locale: "vi_VN",
  type: "website",
},
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="overflow-x-hidden pb-[calc(104px+env(safe-area-inset-bottom))] lg:pb-0">
        <JsonLd data={organizationSchema()} />
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  )
}
