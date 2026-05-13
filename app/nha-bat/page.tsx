import { CategoryPage, createCategoryMetadata } from "@/lib/category-pages"

export const metadata = createCategoryMetadata("nha-bat")

export default function NhaBatPage() {
  return <CategoryPage slug="nha-bat" />
}
