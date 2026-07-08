import { useState } from "react"
import type { Language } from "@/types/language"
import { menuCategories, menuItems } from "@/data/menu"
import type { MenuCategory } from "@/types/menu"

import { MenuCategoryFilter} from "@/components/menu/MenuCategoryFilter"
import type { SelectedCategory } from "@/components/menu/MenuCategoryFilter"
import { MenuItemRow } from "./MenuItemRow"

interface MenuSectionProps {
  language: Language
}

export function MenuSection({ language }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("all")

  const selectedCategoryData = menuCategories.find(
    (category) => category.id === selectedCategory,
  )

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="scroll-mt-20 bg-palace-black">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-palace-gold">
          {language === "fr" ? "Cuisine authentique" : "Authentic Cuisine"} 
        </p>

        <h2 className="mt-4 font-display text-5xl font-medium text-palace-cream sm:text-6xl">
          {language === "fr" ? "Notre menu" : "Our Menu"}
        </h2>

        <div className="mx-auto my-7 flex items-center justify-center gap-3 text-palace-gold">
          <span className="h-px w-12 bg-palace-gold/50" />
          <span className="rotate-45 text-xs">◆</span>
          <span className="h-px w-12 bg-palace-gold/50" />
        </div>

        <p className="mx-auto max-w-2xl leading-7 text-palace-cream/65">
          {
            language === "fr"
            ? "Découvrez des plats pakistanais et indiens traditionnels préparés avec des ingrédients soigneusement sélectionnés et des épices aromatiques."
            : "Explore traditional Pakistani and Indian dishes prepared with carefully selected ingredients and aromatic spices."
          }
        </p>
      </div>

      <MenuCategoryFilter
        categories={menuCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        language={language}
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {selectedCategory === "all" ? (
          <div className="space-y-14">
            {menuCategories.map((category) => (
              <MenuCategoryGroup 
                key={category.id} 
                category={category} 
                language={language}  
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-4xl">
            <CategoryHeading 
              category={selectedCategoryData}
              language={language}
            />

            <div className="mt-4">
              {filteredItems.map((item) => (
                <MenuItemRow 
                  key={item.id} 
                  item={item}
                  language={language} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function MenuCategoryGroup({ category, language }: {
  category: MenuCategory,
  language: Language
}) {
  const items = menuItems.filter((item) => item.category === category.id)

  if (items.length === 0) {
    return null
  }

  return (
    <section className="mx-auto max-w-4xl">
      <CategoryHeading 
        category={category}
        language={language} 
      />

      <div className="mt-4">
        {items.map((item) => (
          <MenuItemRow 
            key={item.id} 
            item={item}
            language={language} 
          />
        ))}
      </div>
    </section>
  )
}

function CategoryHeading({
  category,
  language
}: {
  category: MenuCategory | undefined
  language: Language
}) {
  if (!category) {
    return null
  }

  return (
    <header className="flex items-end gap-4 border-b border-palace-gold/50 pb-4">
      <span className="text-3xl" aria-hidden="true">
        {category.icon}
      </span>

      <div>
        <h3 className="font-display text-4xl text-palace-gold">
          {category.name[language]}
        </h3>
      </div>
    </header>
  )
}