import { CategoryPage, createCategoryMetadata } from "@/lib/category-pages"

export const metadata = createCategoryMetadata("du-chinh-tam")

export default function DuChinhTamPage() {
  return <CategoryPage slug="du-chinh-tam" />
}
