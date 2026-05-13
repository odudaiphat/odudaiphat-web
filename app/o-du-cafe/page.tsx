import { CategoryPage, createCategoryMetadata } from "@/lib/category-pages"

export const metadata = createCategoryMetadata("o-du-cafe")

export default function ODuCafePage() {
  return <CategoryPage slug="o-du-cafe" />
}
