import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-palace-border/50 bg-palace-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="group flex flex-col"
          aria-label="Shahi Palace home"
          onClick={closeMenu}
        >
          <span className="font-display text-2xl font-semibold tracking-[0.12em] text-palace-gold">
            SHAHI PALACE
          </span>

          <span className="text-[0.55rem] uppercase tracking-[0.3em] text-palace-muted">
            Restaurant Halal · Since 1992
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-palace-cream/80 transition-colors hover:text-palace-gold"
            >
              {item.label}
            </a>
          ))}

          <a
            href="tel:+15146850000"
            className="inline-flex items-center gap-2 border border-palace-gold/60 px-5 py-3 text-xs uppercase tracking-[0.2em] text-palace-gold transition hover:bg-palace-gold hover:text-palace-black"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Us
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-palace-cream lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-palace-border/50 bg-palace-black px-5 py-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-palace-border/30 py-4 text-sm uppercase tracking-[0.18em] text-palace-cream/85"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:+15146850000"
              onClick={closeMenu}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-palace-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-palace-black"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Us
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}