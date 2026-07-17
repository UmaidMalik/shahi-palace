import type { LucideIcon } from "lucide-react"

export type MenuCategoryId =
  | "soups"
  | "appetizers"
  | "salads"
  | "sandwiches"
  | "chicken"
  | "beef"
  | "lamb"
  | "shrimp"
  | "fish"
  | "wings"
  | "vegetarian"
  | "tandoori"
  | "rice"
  | "chefs-special"
  | "tandoori-bread"
  | "drinks"
  | "desserts"

export interface LocalizedText {
  en: string
  fr: string
}

export interface MenuCategory {
  id: MenuCategoryId
  name: LocalizedText
  icon: LucideIcon
}

export interface MenuItem {
  id: string
  category: MenuCategoryId
  name: LocalizedText
  description?: LocalizedText
  price: number
  image?: string
  featured?: boolean
  vegetarian?: boolean
}