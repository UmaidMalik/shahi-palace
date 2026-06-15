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
  icon: string
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