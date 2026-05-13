import { CategoryPage, createCategoryMetadata } from "@/lib/category-pages"

export const metadata = createCategoryMetadata("du-san-vuon")

export default function DuSanVuonPage() {
  return <CategoryPage slug="du-san-vuon" />
}
