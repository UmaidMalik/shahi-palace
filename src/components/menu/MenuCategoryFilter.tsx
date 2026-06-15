import type { MenuCategory, MenuCategoryId } from "@/types/menu"

export type SelectedCategory = "all" | MenuCategoryId

interface MenuCategoryFilterProps {
  categories: MenuCategory[]
  selectedCategory: SelectedCategory
  onSelectCategory: (category: SelectedCategory) => void
}

export function MenuCategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: MenuCategoryFilterProps) {
  return (
    <div className="sticky top-20 z-30 border-y border-palace-border/40 bg-palace-black/95 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 pb-1 sm:px-8">
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          className={[
            "shrink-0 border px-5 py-3 text-xs uppercase tracking-[0.18em] transition",
            selectedCategory === "all"
              ? "border-palace-gold bg-palace-gold text-palace-black"
              : "border-palace-border text-palace-cream/70 hover:border-palace-gold hover:text-palace-gold",
          ].join(" ")}
        >
          Full Menu
        </button>

        {categories.map((category) => {
          const isSelected = selectedCategory === category.id

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={[
                "flex shrink-0 items-center gap-2 border px-5 py-3 text-xs uppercase tracking-[0.16em] transition",
                isSelected
                  ? "border-palace-gold bg-palace-gold text-palace-black"
                  : "border-palace-border text-palace-cream/70 hover:border-palace-gold hover:text-palace-gold",
              ].join(" ")}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.name.en}
            </button>
          )
        })}
      </div>
    </div>
  )
}