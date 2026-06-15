import { ImageIcon, Leaf } from "lucide-react"

import type { MenuItem } from "@/types/menu"

interface MenuItemRowProps {
  item: MenuItem
}

export function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <article className="group border-b border-palace-border/35 py-6 last:border-b-0">
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-display text-2xl font-medium text-palace-cream transition-colors group-hover:text-palace-gold">
              {item.name.en}
            </h4>

            {item.vegetarian && (
              <span
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-green-400"
                title="Vegetarian"
              >
                <Leaf className="size-3.5" aria-hidden="true" />
                Vegetarian
              </span>
            )}

            {item.image && (
              <span className="inline-flex items-center gap-1 text-xs text-palace-gold">
                <ImageIcon className="size-3.5" aria-hidden="true" />
                View photo
              </span>
            )}
          </div>

          <p className="mt-1 text-sm italic text-palace-gold/75">
            {item.name.fr}
          </p>

          {item.description && (
            <>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-palace-cream/65">
                {item.description.en}
              </p>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-palace-muted">
                {item.description.fr}
              </p>
            </>
          )}
        </div>

        <p className="shrink-0 font-display text-2xl text-palace-gold">
          ${item.price.toFixed(2)}
        </p>
      </div>
    </article>
  )
}