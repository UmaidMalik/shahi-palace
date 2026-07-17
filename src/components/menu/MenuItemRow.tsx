import { useState } from "react"
import { ImageIcon, Leaf, X } from "lucide-react"

import type { Language } from "@/types/language"
import type { MenuItem } from "@/types/menu"

interface MenuItemRowProps {
  item: MenuItem
  language: Language
}

export function MenuItemRow({ item, language }: MenuItemRowProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasImage = Boolean(item.image)

  return (
    <>
      <article className="group border-b border-palace-border/35 py-6 last:border-b-0">
        <button
          type="button"
          disabled={!hasImage}
          onClick={() => hasImage && setIsOpen(true)}
          className={[
            "w-full text-left",
            hasImage ? "cursor-pointer" : "cursor-default",
          ].join(" ")}
        >
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-display text-2xl font-medium text-palace-cream transition-colors group-hover:text-palace-gold">
                  {item.name[language]}
                </h4>

                {item.vegetarian && (
                  <span
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-green-400"
                    title={language === "fr" ? "Végétarien" : "Vegetarian"}
                  >
                    <Leaf className="size-3.5" aria-hidden="true" />
                    {language === "fr" ? "Végétarien" : "Vegetarian"}
                  </span>
                )}

                {hasImage && (
                  <span className="inline-flex items-center gap-1 text-xs text-palace-gold">
                    <ImageIcon className="size-3.5" aria-hidden="true" />
                    {language === "fr" ? "Voir photo" : "View photo"}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="mt-3 max-w-2xl text-sm leading-6 text-palace-cream/65">
                  {item.description[language]}
                </p>
              )}
            </div>

            <p className="shrink-0 font-display text-2xl text-palace-gold">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </button>
      </article>

      {isOpen && item.image && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${item.id}-dialog-title`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden border border-palace-border bg-palace-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-palace-black/80 text-palace-cream transition hover:bg-palace-gold hover:text-palace-black"
              aria-label={language === "fr" ? "Fermer" : "Close"}
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <img
              src={item.image}
              alt={item.name[language]}
              className="max-h-[70vh] w-full object-cover"
            />

            <div className="p-6">
              <h3
                id={`${item.id}-dialog-title`}
                className="font-display text-3xl text-palace-gold"
              >
                {item.name[language]}
              </h3>

              {item.description && (
                <p className="mt-3 text-sm leading-6 text-palace-cream/70">
                  {item.description[language]}
                </p>
              )}

              <p className="mt-4 font-display text-2xl text-palace-cream">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}