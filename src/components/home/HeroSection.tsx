import { ChevronDown, MapPin } from "lucide-react"
import type { Language } from "@/types/language"
import heroImage from "@/assets/images/ShahiPalace_Hero2_2880x2304.webp"

interface HeroSectionProps {
  language: Language
}

export function HeroSection({ language }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-30 size-full object-cover"
      />

      <div className="absolute inset-0 -z-20 bg-black/45" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(19,6,8,0.2)_42%,rgba(19,6,8,0.86)_100%)]" />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center">
        <p className="mb-6 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.45em] text-palace-gold-light">
          <span aria-hidden="true">◆</span>
          Restaurant Halal
          <span aria-hidden="true">◆</span>
        </p>

        <h1 className="font-display uppercase leading-[0.82]">
          <span className="block text-7xl font-medium tracking-[0.08em] text-palace-cream sm:text-8xl lg:text-9xl">
            Shahi
          </span>

          <span className="mt-4 block text-6xl font-normal tracking-[0.14em] text-palace-gold sm:text-7xl lg:text-8xl">
            Palace
          </span>
        </h1>

        <div className="my-9 flex items-center gap-4 text-palace-gold">
          <span className="h-px w-16 bg-palace-gold/60" />
          <span className="rotate-45 text-sm">◆</span>
          <span className="h-px w-16 bg-palace-gold/60" />
        </div>

        {
          language === "fr"
          ? <p className="font-display text-xl italic text-palace-cream/90 sm:text-2xl">
            Saveurs authentiques du sous-continent
          </p>
          : <p className="mt-2 text-[0.65rem] uppercase tracking-[0.34em] text-palace-cream/60">
            Authentic flavours of the subcontinent
          </p>
        }

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#menu"
            className="inline-flex min-h-12 flex-1 items-center justify-center bg-palace-gold px-7 text-xs font-semibold uppercase tracking-[0.2em] text-palace-black transition hover:bg-palace-gold-light"
          >
            {language === "fr" ? "Voir le menu" : "View Menu"}
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-palace-cream/40 bg-black/20 px-7 text-xs font-semibold uppercase tracking-[0.2em] text-palace-cream transition hover:border-palace-gold hover:text-palace-gold"
          >
            <MapPin className="size-4" aria-hidden="true" />
            {language === "fr" ? "Nous trouver" : "Find Us"}
          </a>
        </div>
      </div>

      <a
        href="#menu"
        aria-label="Scroll to menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-palace-gold transition hover:translate-y-1"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  )
}