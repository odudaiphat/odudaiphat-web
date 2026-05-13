import type { Metadata } from "next"
import { ServiceAuthorityPage } from "@/components/service/ServiceAuthorityPage"
import { SITE_URL } from "@/lib/constants"

const title = "Sửa Dù Lệch Tâm, Thay Mái Dù Ngoài Trời"
const description =
  "Ô Dù Đại Phát hỗ trợ sửa dù lệch tâm, thay mái dù, thay dây dù, lắp chân đế và bảo trì ô dù cafe ngoài trời. Gửi ảnh lỗi qua Zalo để được tư vấn."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/sua-chua-o-du-ngoai-troi`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/sua-chua-o-du-ngoai-troi`,
    type: "website",
  },
}

export default function ServicePage() {
  return <ServiceAuthorityPage />
}
