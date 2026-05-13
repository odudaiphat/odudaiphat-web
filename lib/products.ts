/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"

export const FALLBACK_IMAGE = "/images/hero-outdoor-umbrella.webp"
export const CATEGORY_FALLBACK_IMAGE = "/images/products/du-lech-tam-vuong-3m-hop-kim-nhom-01.webp"

export type ProductCategory = {
  slug: string
  title: string
  description: string
  href: string
  image: string
}

export type ProductImageSet = {
  hero: string
  thumbnail: string
  gallery: string[]
}

export type ProductVideo = {
  title: string
  youtubeId: string
  description?: string
}

export type ProductTechnicalSpec = {
  label: string
  value: string
}

export type VerifiedValue = {
  value: string
  verified: boolean
}

export type ProductMaterial = {
  frame: VerifiedValue
  fabric: VerifiedValue
}

export type ProductPerformance = {
  windResistance: VerifiedValue
  uvProtection: VerifiedValue
}

export type ProductAvailability =
  | "https://schema.org/InStock"
  | "https://schema.org/PreOrder"
  | "https://schema.org/OutOfStock"

export type Product = {
  slug: string
  name: string
  categorySlug: string
  categoryName: string
  href: string
  excerpt: string
  specs: string[]
  technicalSpecs: ProductTechnicalSpec[]
  images: ProductImageSet
  videos?: ProductVideo[]

  sku: string
  price?: number
  priceRange: VerifiedValue
  currency: "VND"
  material: ProductMaterial
  performance: ProductPerformance
  warranty: VerifiedValue
  availability: ProductAvailability
  useCases: string[]
  suitableFor: string[]
  areaServed: string[]
}

const PRODUCTS_IMAGE_DIR = path.join(process.cwd(), "public", "images", "products")

let cachedProductImageFiles: string[] | null = null

function readProductImageFiles() {
  if (cachedProductImageFiles) return cachedProductImageFiles
  if (!fs.existsSync(PRODUCTS_IMAGE_DIR)) {
    cachedProductImageFiles = []
    return cachedProductImageFiles
  }

  cachedProductImageFiles = fs
    .readdirSync(PRODUCTS_IMAGE_DIR)
    .filter((fileName) => fileName.toLowerCase().endsWith(".webp"))
    .sort((a, b) => a.localeCompare(b, "vi"))

  return cachedProductImageFiles
}

function detectProductSlug(fileName: string) {
  return fileName
    .toLowerCase()
    .trim()
    .replace(/\.webp$/i, "")
    .replace(/-\d+$/i, "")
}

function toTitle(slug: string) {
  if (slug === "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6") {
    return "Dù Chính Tâm 3 Đỉnh Cỡ Lớn 2m7 x 4m6"
  }

  const dictionary: Record<string, string> = {
    du: "Dù",
    lech: "Lệch",
    tam: "Tâm",
    chinh: "Chính",
    tron: "Tròn",
    vuong: "Vuông",
    khung: "Khung",
    sat: "Sắt",
    son: "Sơn",
    tinh: "Tĩnh",
    dien: "Điện",
    nhom: "Nhôm",
    hop: "Hợp",
    kim: "Kim",
    than: "Thân",
    go: "Gỗ",
    day: "Dây",
    rut: "Rút",
    nha: "Nhà",
    bat: "Bạt",
    di: "Di",
    dong: "Động",
    nghieng: "Nghiêng",
    dinh: "Đỉnh",
    co: "Cỡ",
    lon: "Lớn",
    mau: "Màu",
    do: "Đỏ",
    trang: "Trắng",
    kem: "Kem",
    be: "Be",
    ca: "Cà",
    phe: "Phê",
    xanh: "Xanh",
    la: "Lá",
    dam: "Đậm",
    duong: "Dương",
    che: "Che",
    nang: "Nắng",
    den: "Đen",
    cam: "Cam",
    tim: "Tím",
  }

  return slug
    .split("-")
    .map((word) => dictionary[word] || (/^\d/.test(word) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ")
}

function detectCategory(slug: string) {
  if (slug.startsWith("du-lech-tam")) {
    return { slug: "du-lech-tam", name: "Dù lệch tâm" }
  }

  if (slug.startsWith("du-chinh-tam")) {
    return { slug: "du-chinh-tam", name: "Dù chính tâm" }
  }

  if (slug.startsWith("nha-bat")) {
    return { slug: "nha-bat", name: "Nhà bạt" }
  }

  if (slug.startsWith("du-che-nang")) {
    return { slug: "du-chinh-tam", name: "Dù chính tâm" }
  }

  return { slug: "o-du-ngoai-troi", name: "Ô dù ngoài trời" }
}

const UNVERIFIED_VALUE: VerifiedValue = {
  value: "CẦN XÁC MINH",
  verified: false,
}

function createUnverifiedValue(): VerifiedValue {
  return { ...UNVERIFIED_VALUE }
}

function createVerifiedValue(value: string): VerifiedValue {
  return {
    value,
    verified: true,
  }
}

function createSku(slug: string): string {
  return `ODDP-${slug
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`
}

function detectMaterial(slug: string): ProductMaterial {
  if (slug === "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6") {
    return {
      frame: createVerifiedValue("Khung thép sơn tĩnh điện"),
      fabric: createVerifiedValue("Vải polyester chống nắng ngoài trời"),
    }
  }

  let frame = createUnverifiedValue()

  if (slug.includes("khung-sat-son-tinh-dien")) {
    frame = createVerifiedValue("Khung sắt sơn tĩnh điện")
  } else if (slug.includes("hop-kim-nhom")) {
    frame = createVerifiedValue("Khung hợp kim nhôm")
  } else if (slug.includes("-nhom-")) {
    frame = createVerifiedValue("Khung nhôm")
  } else if (slug.includes("than-go")) {
    frame = createVerifiedValue("Thân gỗ")
  } else if (slug.includes("khung-sat")) {
    frame = createVerifiedValue("Khung sắt")
  }

  return {
    frame,
    fabric: createUnverifiedValue(),
  }
}

function detectPerformance(): ProductPerformance {
  return {
    windResistance: createUnverifiedValue(),
    uvProtection: createUnverifiedValue(),
  }
}


type ProductCopyOverride = {
  excerpt: string
  specs: string[]
  useCases: string[]
  suitableFor: string[]
}

const productCopyOverridesBySlug: Partial<Record<string, ProductCopyOverride>> = {
  "du-lech-tam-2m5-khung-sat-son-tinh-dien": {
    excerpt:
      "Thiết kế vuông gọn, dễ bố trí cho khu bàn cafe nhỏ, sân vườn gia đình hoặc hồ bơi mini. Phù hợp không gian cần vùng che vừa phải nhưng vẫn thoáng và dễ di chuyển.",
    specs: [
      "Che phủ khoảng 6.25m²",
      "Khung thép sơn tĩnh điện chống gỉ",
      "Vải polyester phủ PU chống thấm",
      "Đóng mở bằng tay quay hoặc cần gạt",
      "Gọn, dễ lắp đặt và phù hợp khu bàn nhỏ",
    ],
    useCases: ["Cafe sân vườn", "Ban công lớn", "Hồ bơi mini", "Khu bàn ngoài trời nhỏ"],
    suitableFor: ["Cafe sân vườn", "Ban công lớn", "Hồ bơi mini", "Khu bàn ngoài trời nhỏ"],
  },
  "du-lech-tam-chinh-nghieng-2m5-khung-sat-trang": {
    excerpt:
      "Dòng dù linh hoạt hơn nhờ khả năng chỉnh nghiêng theo hướng nắng. Phù hợp cafe, villa nhỏ hoặc sân vườn cần thay đổi góc che trong ngày mà vẫn giữ lối đi thông thoáng.",
    specs: [
      "Chỉnh nghiêng tiện theo hướng nắng",
      "Khung thép sơn tĩnh điện hoặc nhôm nhẹ",
      "Vải polyester phủ PU hỗ trợ chống UV",
      "Một số mẫu hỗ trợ xoay hướng",
      "Đủ che bàn 4–6 ghế ngoài trời",
    ],
    useCases: ["Cafe sân vườn", "Villa nhỏ", "Hồ bơi gia đình", "Khu chill ngoài trời"],
    suitableFor: ["Cafe sân vườn", "Villa nhỏ", "Hồ bơi gia đình", "Khu chill ngoài trời"],
  },
  "du-lech-tam-vuong-3m-hop-kim-nhom": {
    excerpt:
      "Mẫu dù lệch tâm kích thước lớn hơn cho không gian cafe, villa và hồ bơi cần vùng che rộng. Khung hợp kim nhôm tạo cảm giác nhẹ, sạch và phù hợp phong cách outdoor cao cấp.",
    specs: [
      "Che phủ khoảng 9m²",
      "Khung hợp kim nhôm sơn tĩnh điện",
      "Tay quay trợ lực dễ sử dụng",
      "Hỗ trợ chỉnh nghiêng và nhiều mẫu xoay 360°",
      "Phù hợp khu bàn đông khách",
    ],
    useCases: ["Resort", "Cafe lớn", "Villa", "Hồ bơi", "Lounge ngoài trời"],
    suitableFor: ["Resort", "Cafe lớn", "Villa", "Hồ bơi", "Lounge ngoài trời"],
  },
  "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6": {
    excerpt:
      "Thiết kế 3 đỉnh tạo vùng che rộng và điểm nhấn nổi bật cho không gian ngoài trời. Phù hợp các khu cafe lớn, resort hoặc sân vườn cần một tán che có nhận diện mạnh.",
    specs: [
      "Vùng che khoảng 12m²",
      "Kết cấu 3 đỉnh nổi bật",
      "Thân trụ lớn, form che rộng",
      "Khung thép sơn tĩnh điện hoặc hợp kim nhôm",
      "Hợp không gian ngoài trời quy mô lớn",
    ],
    useCases: ["Cafe sân vườn lớn", "Resort", "Hồ bơi", "Khu lounge ngoài trời"],
    suitableFor: ["Cafe sân vườn lớn", "Resort", "Hồ bơi", "Khu lounge ngoài trời"],
  },
  "nha-bat-di-dong-3x3": {
    excerpt:
      "Giải pháp mái che linh hoạt cho bán hàng, hội chợ, sự kiện và khu cafe ngoài trời. Khung xếp gọn giúp setup nhanh, dễ di chuyển và phù hợp nhu cầu sử dụng ngắn hạn hoặc lưu động.",
    specs: [
      "Kích thước che khoảng 9m²",
      "Khung xếp gấp di động",
      "Có thể điều chỉnh chiều cao",
      "Mái bạt PU/PVC chống thấm",
      "Gấp gọn dễ vận chuyển",
    ],
    useCases: ["Booth bán hàng", "Cafe popup", "Sự kiện ngoài trời", "Hội chợ", "Sân vườn"],
    suitableFor: ["Booth bán hàng", "Cafe popup", "Sự kiện ngoài trời", "Hội chợ", "Sân vườn"],
  },
  "du-chinh-tam-tron-3m-than-go-day-rut": {
    excerpt:
      "Mẫu dù mang cảm giác resort tự nhiên với thân gỗ và tán tròn cân đối. Phù hợp cafe sân vườn, villa hoặc hồ bơi cần không gian outdoor ấm, thoáng và gần gũi hơn.",
    specs: [
      "Thân gỗ tự nhiên xử lý chống mối mọt",
      "Đường kính tán khoảng 3m",
      "Vải polyester phủ PU chống thấm",
      "Đóng mở bằng dây kéo ròng rọc hoặc chốt khóa",
      "Phù hợp phong cách resort/tropical",
    ],
    useCases: ["Cafe sân vườn", "Villa", "Resort", "Hồ bơi", "Khu nghỉ dưỡng ngoài trời"],
    suitableFor: ["Cafe sân vườn", "Villa", "Resort", "Hồ bơi", "Khu nghỉ dưỡng ngoài trời"],
  },
}

function detectUseCases(slug: string, categorySlug: string): string[] {
  const copyOverride = productCopyOverridesBySlug[slug]
  if (copyOverride) {
    return copyOverride.useCases
  }

  if (slug === "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6") {
    return ["Quán cafe sân vườn", "Villa và hồ bơi", "Nhà hàng ngoài trời", "Khu bàn ăn sân vườn", "Resort và khu nghỉ dưỡng"]
  }

  if (categorySlug === "nha-bat") {
    return ["Bán hàng lưu động", "Sự kiện", "Hội chợ", "Che nắng mưa tạm thời"]
  }

  if (slug.includes("du-lech-tam-vuong-3m") || slug.includes("3m-hop-kim-nhom")) {
    return ["Hồ bơi", "Villa", "Resort", "Quán cafe sân vườn"]
  }

  if (slug.includes("du-lech-tam-2m5") || slug.includes("chinh-nghieng-2m5")) {
    return ["Sân vườn nhỏ", "Cafe mini", "Nhà phố", "Patio"]
  }

  if (slug.includes("du-chinh-tam-tron-3m-than-go")) {
    return ["Cafe sân vườn", "Resort tropical", "Không gian gỗ", "Sân vườn"]
  }

  if (categorySlug === "du-chinh-tam") {
    return ["Quán cafe", "Sân vườn", "Khu bàn ngoài trời"]
  }

  if (categorySlug === "du-lech-tam") {
    return ["Quán cafe", "Sân vườn", "Nhà hàng", "Hồ bơi"]
  }

  return ["Không gian ngoài trời", "Sân vườn", "Quán cafe"]
}

function detectSuitableFor(slug: string, categorySlug: string): string[] {
  const copyOverride = productCopyOverridesBySlug[slug]
  if (copyOverride) {
    return copyOverride.suitableFor
  }

  if (slug === "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6") {
    return ["Bàn dài ngoài trời", "Khu cafe sân vườn", "Villa", "Hồ bơi", "Resort"]
  }

  if (categorySlug === "nha-bat") {
    return ["Gian hàng", "Điểm bán tạm thời", "Sự kiện ngoài trời"]
  }

  if (slug.includes("3m")) {
    return ["Không gian cần vùng che rộng", "Mặt bằng kinh doanh ngoài trời"]
  }

  if (slug.includes("2m5")) {
    return ["Sân vườn gia đình", "Quán cafe diện tích vừa", "Khu bàn nhỏ ngoài trời"]
  }

  return ["Không gian ngoài trời", "Khu vực cần che nắng mưa"]
}

function createProductExcerpt(slug: string, name: string, categorySlug: string) {
  const copyOverride = productCopyOverridesBySlug[slug]
  if (copyOverride) {
    return copyOverride.excerpt
  }

  if (slug === "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6") {
    return "Dù chính tâm 3 đỉnh kích thước lớn phù hợp khu bàn ngoài trời, sân vườn, quán cafe, villa và hồ bơi cần vùng che rộng nhưng vẫn gọn gàng khi thu dù."
  }

  if (slug.includes("du-lech-tam-vuong-3m") || slug.includes("3m-hop-kim-nhom")) {
    return "Dòng dù lệch tâm vuông 3m cho hồ bơi, villa, resort và quán cafe sân vườn cần vùng che rộng, thoáng lối đi."
  }

  if (slug.includes("chinh-nghieng-2m5")) {
    return "Mẫu dù lệch tâm chỉnh nghiêng 2m5 phù hợp sân vườn nhỏ, patio, cafe mini và nhà phố cần che nắng linh hoạt theo hướng nắng."
  }

  if (slug.includes("du-lech-tam-2m5")) {
    return "Dù lệch tâm 2m5 gọn đẹp cho cafe mini, sân vườn nhà phố và khu bàn ngoài trời cần che nắng mà không chiếm nhiều diện tích."
  }

  if (slug.includes("du-chinh-tam-tron-3m-than-go")) {
    return "Dù chính tâm thân gỗ dây rút tạo cảm giác tropical cho cafe sân vườn, resort và không gian ngoài trời dùng chất liệu gỗ ấm."
  }

  if (categorySlug === "nha-bat") {
    return "Nhà bạt di động 3x3 phù hợp bán hàng lưu động, sự kiện, hội chợ và khu vực cần che nắng mưa tạm thời, dễ triển khai."
  }

  if (categorySlug === "du-chinh-tam") {
    return "Dù chính tâm ngoài trời phù hợp bố cục bàn ghế cân đối cho sân vườn, quán cafe và khu ngồi cần điểm che trung tâm."
  }

  if (categorySlug === "du-lech-tam") {
    return `${name} phù hợp không gian cafe ngoài trời, sân vườn và khu nghỉ dưỡng cần tán che thoáng, hiện đại.`
  }

  return `${name} dành cho không gian ngoài trời cần giải pháp che nắng gọn đẹp, dễ phối với bàn ghế cafe và sân vườn.`
}

function createProductSpecs(slug: string, categorySlug: string) {
  const copyOverride = productCopyOverridesBySlug[slug]
  if (copyOverride) {
    return copyOverride.specs
  }

  if (slug === "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6") {
    return [
      "Kích thước tán khoảng 2m7 x 4m6",
      "Thiết kế 3 đỉnh cho vùng che rộng",
      "Khung thép sơn tĩnh điện màu đen",
      "Tay quay trợ lực đóng mở dễ sử dụng",
      "Phù hợp bàn dài ngoài trời và khu cafe sân vườn",
    ]
  }

  if (slug.includes("du-lech-tam-vuong-3m") || slug.includes("3m-hop-kim-nhom")) {
    return ["Tán vuông 3m cho vùng che rộng", "Phù hợp hồ bơi, villa, resort", "Tư vấn chân đế theo mặt bằng"]
  }

  if (slug.includes("chinh-nghieng-2m5")) {
    return ["Kích thước gọn cho sân vườn nhỏ", "Chỉnh nghiêng theo hướng nắng", "Hợp patio, terrace, cafe mini"]
  }

  if (slug.includes("du-lech-tam-2m5")) {
    return ["Phù hợp 1-2 bộ bàn nhỏ", "Gọn cho nhà phố và cafe mini", "Tư vấn màu vải theo không gian"]
  }

  if (slug.includes("du-chinh-tam-tron-3m-than-go")) {
    return ["Thân gỗ tạo cảm giác resort", "Tán tròn cân đối cho bàn cafe", "Phù hợp sân vườn tropical"]
  }

  if (categorySlug === "nha-bat") {
    return ["Khung xếp linh hoạt", "Phù hợp sự kiện và gian hàng", "Dễ thu gọn khi không sử dụng"]
  }

  if (categorySlug === "du-chinh-tam") {
    return ["Bố cục cân đối", "Hợp bàn tròn và sân vườn", "Tư vấn theo diện tích thực tế"]
  }

  return ["Tư vấn theo diện tích", "Phù hợp không gian ngoài trời", "Báo giá nhanh qua Zalo"]
}

const productTechnicalSpecsMap: Record<string, ProductTechnicalSpec[]> = {
  "du-lech-tam-2m5-khung-sat-son-tinh-dien": [
    { label: "Kích thước phủ bì", value: "2.5m x 2.5m" },
    { label: "Diện tích che phủ", value: "Khoảng 6.25m²" },
    { label: "Chiều cao tổng thể", value: "Khoảng 2.5m – 2.7m" },
    { label: "Chất liệu khung", value: "Thép sơn tĩnh điện" },
    { label: "Thân trụ", value: "Khoảng 48mm" },
    { label: "Nan dù", value: "Khoảng 12x18mm hoặc 12x22mm" },
    { label: "Độ dày khung", value: "Khoảng 0.8 – 1mm" },
    { label: "Chất liệu vải", value: "Polyester chống thấm" },
    { label: "Loại vải phổ biến", value: "Polyester phủ PU" },
    { label: "Chống thấm", value: "Có" },
    { label: "Hỗ trợ chống UV", value: "Có" },
    { label: "Cơ chế mở", value: "Tay quay hoặc cần gạt" },
    { label: "Chỉnh nghiêng", value: "Không" },
    { label: "Trọng lượng thân dù", value: "Khoảng 10–15kg chưa gồm chân đế" },
    { label: "Chân đế", value: "Rời" },
    { label: "Màu phổ biến", value: "Kem, đỏ đô, xanh rêu, xám" },
    { label: "Phù hợp", value: "Cafe, sân vườn, hồ bơi nhỏ" },
  ],
  "du-lech-tam-chinh-nghieng-2m5-khung-sat-trang": [
    { label: "Kích thước phủ bì", value: "2.5m x 2.5m" },
    { label: "Diện tích che phủ", value: "Khoảng 6.25m²" },
    { label: "Chiều cao tổng thể", value: "Khoảng 2.4m – 2.7m" },
    { label: "Chất liệu khung", value: "Thép sơn tĩnh điện hoặc hợp kim nhôm nhẹ" },
    { label: "Thân trụ", value: "Khoảng 48–60mm" },
    { label: "Nan dù", value: "Khoảng 12x18mm hoặc 13x22mm" },
    { label: "Độ dày khung", value: "Khoảng 0.8 – 1.2mm" },
    { label: "Chất liệu vải", value: "Polyester phủ PU" },
    { label: "Loại vải phổ biến", value: "Polyester 280g–300g" },
    { label: "Chống thấm", value: "Có" },
    { label: "Hỗ trợ chống UV", value: "Có" },
    { label: "Cơ chế mở", value: "Tay quay hoặc cần gạt" },
    { label: "Chỉnh nghiêng", value: "Có" },
    { label: "Xoay hướng", value: "Một số mẫu hỗ trợ xoay" },
    { label: "Trọng lượng thân dù", value: "Khoảng 10–15kg chưa gồm chân đế" },
    { label: "Chân đế", value: "Rời" },
    { label: "Màu phổ biến", value: "Kem, đỏ đô, xanh rêu, xám" },
    { label: "Phù hợp", value: "Cafe, villa, sân vườn" },
  ],
  "du-lech-tam-vuong-3m-hop-kim-nhom": [
    { label: "Kích thước phủ bì", value: "3m x 3m" },
    { label: "Diện tích che phủ", value: "Khoảng 9m²" },
    { label: "Chiều cao tổng thể", value: "Khoảng 2.7m – 3m" },
    { label: "Chất liệu khung", value: "Hợp kim nhôm sơn tĩnh điện" },
    { label: "Thân trụ", value: "Khoảng 60–80mm" },
    { label: "Nan dù", value: "Hợp kim nhôm" },
    { label: "Độ dày khung", value: "Khoảng 1 – 1.5mm" },
    { label: "Chất liệu vải", value: "Polyester chống thấm" },
    { label: "Loại vải phổ biến", value: "Polyester phủ PU" },
    { label: "Chống thấm", value: "Có" },
    { label: "Hỗ trợ chống UV", value: "Có" },
    { label: "Cơ chế mở", value: "Tay quay trợ lực" },
    { label: "Chỉnh nghiêng", value: "Có" },
    { label: "Xoay hướng", value: "Nhiều mẫu hỗ trợ xoay 360°" },
    { label: "Trọng lượng thân dù", value: "Khoảng 15–25kg chưa gồm chân đế" },
    { label: "Chân đế", value: "Đá/granite/bê tông rời" },
    { label: "Màu phổ biến", value: "Kem, xám, đỏ đô, xanh rêu" },
    { label: "Phù hợp", value: "Resort, cafe lớn, villa, hồ bơi" },
  ],
  "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6": [
    { label: "Kích thước phủ bì", value: "Khoảng 4.6m x 2.7m" },
    { label: "Diện tích che phủ", value: "Khoảng 12m²" },
    { label: "Chiều cao tổng thể", value: "Khoảng 2.6m – 2.9m" },
    { label: "Chất liệu khung", value: "Thép sơn tĩnh điện hoặc hợp kim nhôm" },
    { label: "Thân trụ", value: "Khoảng 76–90mm" },
    { label: "Nan dù", value: "Kết cấu 3 đỉnh" },
    { label: "Độ dày khung", value: "Khoảng 1 – 1.5mm" },
    { label: "Chất liệu vải", value: "Polyester chống thấm" },
    { label: "Loại vải phổ biến", value: "Polyester phủ PU" },
    { label: "Chống thấm", value: "Có" },
    { label: "Hỗ trợ chống UV", value: "Có" },
    { label: "Cơ chế mở", value: "Tay quay hoặc kéo trợ lực" },
    { label: "Chỉnh nghiêng", value: "Không" },
    { label: "Trọng lượng thân dù", value: "Khoảng 20–35kg chưa gồm chân đế" },
    { label: "Màu phổ biến", value: "Kem, đỏ đô, xanh rêu, xám" },
    { label: "Phù hợp", value: "Cafe lớn, resort, sân vườn, hồ bơi" },
  ],
  "nha-bat-di-dong-3x3": [
    { label: "Kích thước phủ bì", value: "3m x 3m" },
    { label: "Diện tích che phủ", value: "Khoảng 9m²" },
    { label: "Chiều cao tổng thể", value: "Khoảng 3.1m – 3.4m" },
    { label: "Chiều cao lọt lòng", value: "Khoảng 2.1m – 2.4m" },
    { label: "Chất liệu khung", value: "Thép sơn tĩnh điện hoặc nhôm nhẹ" },
    { label: "Chân ngoài", value: "Khoảng 30x30mm" },
    { label: "Chân trong", value: "Khoảng 25x25mm" },
    { label: "Thanh giằng/kèo", value: "Khoảng 23x12mm" },
    { label: "Độ dày khung", value: "Khoảng 0.6 – 0.8mm" },
    { label: "Chất liệu mái bạt", value: "Polyester phủ PU/PVC" },
    { label: "Loại vải phổ biến", value: "PU600D hoặc Oxford chống thấm" },
    { label: "Chống thấm", value: "Có" },
    { label: "Hỗ trợ chống UV", value: "Có" },
    { label: "Cơ chế mở", value: "Khung xếp gấp di động" },
    { label: "Điều chỉnh chiều cao", value: "Có" },
    { label: "Trọng lượng", value: "Khoảng 15–20kg" },
    { label: "Màu phổ biến", value: "Xanh dương, đỏ, trắng, vàng, xanh lá" },
    { label: "Đóng gói", value: "Gấp gọn dễ vận chuyển" },
    { label: "Phù hợp", value: "Hội chợ, bán hàng, cafe, sự kiện, sân vườn" },
  ],
  "du-chinh-tam-tron-3m-than-go-day-rut": [
    { label: "Đường kính phủ bì", value: "3m" },
    { label: "Diện tích che phủ", value: "Khoảng 7m²" },
    { label: "Chiều cao tổng thể", value: "Khoảng 2.5m – 2.7m" },
    { label: "Chiều cao lọt lòng", value: "Khoảng 2m – 2.2m" },
    { label: "Chất liệu thân", value: "Gỗ dầu hoặc gỗ thông xử lý chống mối mọt" },
    { label: "Đường kính thân trụ", value: "Khoảng 48–60mm" },
    { label: "Nan dù", value: "6–8 nan gỗ" },
    { label: "Chất liệu khung", value: "Khung gỗ tự nhiên" },
    { label: "Chất liệu vải", value: "Polyester chống thấm" },
    { label: "Loại vải phổ biến", value: "Polyester phủ PU" },
    { label: "Độ dày vải", value: "Khoảng 280g–300g" },
    { label: "Chống thấm", value: "Có" },
    { label: "Hỗ trợ chống UV", value: "Có" },
    { label: "Cơ chế đóng mở", value: "Dây kéo ròng rọc hoặc chốt khóa" },
    { label: "Chỉnh nghiêng", value: "Không" },
    { label: "Trọng lượng thân dù", value: "Khoảng 12–20kg chưa gồm chân đế" },
    { label: "Chân đế", value: "Đá, bê tông hoặc gang rời" },
    { label: "Màu phổ biến", value: "Kem, đỏ đô, xanh rêu, nâu cafe" },
    { label: "Phù hợp", value: "Cafe, sân vườn, villa, resort, hồ bơi" },
  ],
}

function createProductTechnicalSpecs(slug: string): ProductTechnicalSpec[] {
  return productTechnicalSpecsMap[slug] || []
}

function buildProductImageMap() {
  return readProductImageFiles().reduce<Record<string, string[]>>((acc, fileName) => {
    const slug = detectProductSlug(fileName)
    acc[slug] = acc[slug] || []
    acc[slug].push(`/images/products/${fileName}`)
    return acc
  }, {})
}

function productImageFileName(imagePath: string) {
  return imagePath.split("/").pop() || imagePath
}

function productImageSortIndex(imagePath: string) {
  const match = productImageFileName(imagePath).match(/-(\d+)\.webp$/i)

  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
}

function productImageHash(imagePath: string) {
  const filePath = path.join(
    PRODUCTS_IMAGE_DIR,
    productImageFileName(imagePath),
  )

  try {
    return crypto
      .createHash("sha1")
      .update(fs.readFileSync(filePath))
      .digest("hex")
  } catch {
    return imagePath
  }
}

function sortProductGalleryImages(images: string[]) {
  const seenHashes = new Set<string>()

  return images
    .filter((image) => {
      const hash = productImageHash(image)

      if (seenHashes.has(hash)) {
        return false
      }

      seenHashes.add(hash)

      return true
    })
    .sort((a, b) => {
      const indexDiff =
        productImageSortIndex(a) - productImageSortIndex(b)

      if (indexDiff !== 0) {
        return indexDiff
      }

      return productImageFileName(a).localeCompare(
        productImageFileName(b),
        "vi",
      )
    })
}

const productImageMap = buildProductImageMap()

const productVideoMap: Record<string, ProductVideo[]> = {
  "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6": [
    {
      title: "Video thực tế dù chính tâm 3 đỉnh cỡ lớn 2m7 x 4m6",
      youtubeId: "hX7wHgJ-0Vc",
      description: "Video thực tế dù chính tâm 3 đỉnh cỡ lớn 2m7 x 4m6.",
    },
  ],
  "du-lech-tam-2m5-khung-sat-son-tinh-dien": [
    {
      title: "Video thực tế dù lệch tâm 2m5 x 2m5 khung sắt sơn tĩnh điện",
      youtubeId: "KTC3ajS6Eyw",
      description: "Video thực tế dù lệch tâm 2m5 khung sắt.",
    },
  ],
  "du-lech-tam-chinh-nghieng-2m5-khung-sat-trang": [
    {
      title: "Video thực tế dù lệch tâm chỉnh nghiêng 2m5 khung sắt trắng",
      youtubeId: "xSBy3At-poI",
      description: "Video thực tế dù lệch tâm chỉnh nghiêng 2m5.",
    },
  ],
  "du-lech-tam-vuong-3m-hop-kim-nhom": [
    {
      title: "Video thực tế dù lệch tâm vuông 3m hợp kim nhôm",
      youtubeId: "2e3rlOT1VR8",
      description: "Video thực tế dù lệch tâm vuông 3m.",
    },
    {
      title: "Video dù lệch tâm vuông 3m hợp kim nhôm cao cấp",
      youtubeId: "UnDPhzVF_gA",
      description: "Video giới thiệu dù lệch tâm vuông 3m.",
    },
  ],
  "du-chinh-tam-tron-3m-than-go-day-rut": [
    {
      title: "Video thực tế dù chính tâm tròn 3m thân gỗ dây rút",
      youtubeId: "5uPo49F3cfs",
      description: "Video thực tế dù chính tâm tròn 3m thân gỗ.",
    },
  ],
  "nha-bat-di-dong-3x3": [
    {
      title: "Video thực tế nhà bạt di động 3m x 3m",
      youtubeId: "SKoCfE4aYJ0",
      description: "Video thực tế nhà bạt di động 3x3.",
    },
  ],
}

function getVideosForProduct(slug: string): ProductVideo[] {
  return productVideoMap[slug] || [
    {
      title: "Video showroom và công trình thực tế Ô Dù Đại Phát",
      youtubeId: "vGlD5oWXUmw",
      description: "Video thực tế sản phẩm và công trình Ô Dù Đại Phát",
    },
  ]
}


export function getImagesForProduct(slug: string): ProductImageSet {
  const images = sortProductGalleryImages(
    productImageMap[slug] || [],
  )
  const gallery = images.length > 0 ? images : [FALLBACK_IMAGE]

  return {
    hero: gallery[0] || FALLBACK_IMAGE,
    thumbnail: gallery[0] || FALLBACK_IMAGE,
    gallery,
  }
}

export const products: Product[] = Object.keys(productImageMap)
  .sort((a, b) => a.localeCompare(b, "vi"))
  .map((slug) => {
    const category = detectCategory(slug)
    const name = toTitle(slug)

    return {
      slug,
      name,
      categorySlug: category.slug,
      categoryName: category.name,
      href: `/san-pham/${slug}`,
      excerpt: createProductExcerpt(slug, name, category.slug),
      specs: createProductSpecs(slug, category.slug),
      technicalSpecs: createProductTechnicalSpecs(slug),
      images: getImagesForProduct(slug),
      videos: getVideosForProduct(slug),

      sku: createSku(slug),
      currency: "VND",
      priceRange: createUnverifiedValue(),
      material: detectMaterial(slug),
      performance: detectPerformance(),
      warranty: createUnverifiedValue(),
      availability: "https://schema.org/InStock",
      useCases: detectUseCases(slug, category.slug),
      suitableFor: detectSuitableFor(slug, category.slug),
      areaServed: ["Việt Nam"],
    }
  })

const FEATURED_PRODUCT_SLUGS = [
  "du-lech-tam-vuong-3m-hop-kim-nhom",
  "du-lech-tam-2m5-khung-sat-son-tinh-dien",
  "du-lech-tam-chinh-nghieng-2m5-khung-sat-trang",
  "du-chinh-tam-tron-3m-than-go-day-rut",
  "du-chinh-tam-3-dinh-co-lon-2m7-x-4m6",
  "nha-bat-di-dong-3x3",
]

const featuredProductSlugSet = new Set<string>()

export const featuredProducts = FEATURED_PRODUCT_SLUGS.flatMap((slug) => {
  if (featuredProductSlugSet.has(slug)) return []

  featuredProductSlugSet.add(slug)
  const product = getProductBySlug(slug)

  return product ? [product] : []
})

function firstImageByCategory(categorySlug: string, galleryIndex = 0) {
  return (
    products.find((product) => product.categorySlug === categorySlug)?.images.gallery[galleryIndex] ||
    FALLBACK_IMAGE
  )
}

export const categories: ProductCategory[] = [
  {
    slug: "du-lech-tam",
    title: "Dù lệch tâm",
    description: "Dòng dù cao cấp tối ưu không gian cafe sân vườn và hồ bơi.",
    href: "/du-lech-tam",
    image: CATEGORY_FALLBACK_IMAGE,
  },
  {
    slug: "du-chinh-tam",
    title: "Dù chính tâm",
    description: "Giải pháp che nắng cân đối cho quán cafe, sân vườn và khu vực ngoài trời.",
    href: "/du-chinh-tam",
    image: firstImageByCategory("du-chinh-tam"),
  },
  {
    slug: "o-du-cafe",
    title: "Ô Dù Cafe",
    description: "Ô dù cafe ngoài trời cho quán cafe sân vườn, nhà hàng và không gian kinh doanh.",
    href: "/o-du-cafe",
    image: CATEGORY_FALLBACK_IMAGE,
  },
  {
  slug: "du-san-vuon",
  title: "Dù Sân Vườn",
  description:
    "Dù sân vườn ngoài trời cho biệt thự, villa, hồ bơi và khu nghỉ dưỡng.",
  href: "/du-san-vuon",
  image: CATEGORY_FALLBACK_IMAGE,
},
  {
    slug: "nha-bat",
    title: "Nhà bạt di động",
    description: "Nhà bạt xếp 3x3 cho bán hàng, sự kiện, hội chợ và che nắng mưa ngoài trời.",
    href: "/nha-bat",
    image: firstImageByCategory("nha-bat"),
  },
]

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
