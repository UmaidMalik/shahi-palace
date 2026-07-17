import { Award, Heart, Leaf, MapPin } from "lucide-react";
import type { Language } from "@/types/language";
import { imagePath } from "@/util/util";

const biryaniImage = imagePath("chicken-biryani.jpg");
const butterChickenImage = imagePath("butter-chicken.jpg");
const tandooriImage = imagePath("chicken-tandoori-breast.jpg");
const samosaImage = imagePath("samosas.jpg");

interface AboutSectionProps {
    language: Language
}

const aboutImages = [
  {
    src: biryaniImage,
    alt: {
      en: "Biryani dish at Shahi Palace",
      fr: "Plat de biryani chez Shahi Palace",
    },
  },
  {
    src: butterChickenImage,
    alt: {
      en: "Butter chicken dish at Shahi Palace",
      fr: "Plat de poulet au beurre chez Shahi Palace",
    },
  },
  {
    src: tandooriImage,
    alt: {
      en: "Tandoori dish at Shahi Palace",
      fr: "Plat tandoori chez Shahi Palace",
    },
  },
  {
    src: samosaImage,
    alt: {
      en: "Samosas at Shahi Palace",
      fr: "Samosas chez Shahi Palace",
    },
  },
]

const highlights = [
  {
    icon: MapPin,
    label: {
      en: "West Island",
      fr: "Ouest-de-l’Île",
    },
  },
  {
    icon: Award,
    label: {
      en: "Since 1992",
      fr: "Depuis 1992",
    },
  },
  {
    icon: Leaf,
    label: {
      en: "Fresh Ingredients",
      fr: "Ingrédients frais",
    },
  },
  {
    icon: Heart,
    label: {
      en: "Halal Cuisine",
      fr: "Cuisine halal",
    },
  },
]

export function AboutSection({ language }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="scroll-mt-20 overflow-hidden border-t border-palace-border/30 bg-palace-dark"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-32">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-palace-gold">
            {language === "fr" ? "Notre histoire" : "Our Story"}
          </p>

          <h2 className="mt-4 font-display text-5xl leading-tight text-palace-cream sm:text-6xl">
            {language === "fr" ? (
              <>
                Une tradition de
                <span className="block italic text-palace-gold">
                  saveurs
                </span>
              </>
            ) : (
              <>
                A Legacy of
                <span className="block italic text-palace-gold">
                  Flavour
                </span>
              </>
            )}
          </h2>

          <div className="my-7 flex items-center gap-3 text-palace-gold">
            <span className="h-px w-12 bg-palace-gold/50" />
            <span className="rotate-45 text-xs">◆</span>
            <span className="h-px w-12 bg-palace-gold/50" />
          </div>

          <div className="space-y-5 text-sm leading-7 text-palace-cream/72 sm:text-base">
            <p className="font-display text-2xl leading-9 text-palace-cream sm:text-3xl">
              {language === "fr"
                ? "Au service de l’Ouest-de-l’Île depuis 1992, avec des ingrédients frais et une délicieuse cuisine pakistanaise et indienne halal."
                : "Serving the West Island since 1992, with fresh ingredients and delicious Halal Pakistani & Indian cuisine."}
            </p>

            <p>
              {language === "fr"
                ? "Shahi Palace accueille les familles, les amis et les amateurs de cuisine réconfortante avec des plats parfumés, préparés avec soin."
                : "Shahi Palace welcomes families, friends, and lovers of comforting food with aromatic, dishes prepared with care."}
            </p>

            <p>
              {language === "fr"
                ? "Notre menu met à l’honneur les classiques pakistanais et indiens, des caris riches aux grillades tandoori, en passant par les biryanis, et les entrées."
                : "Our menu celebrates Pakistani and Indian classics, from rich curries and tandoori grills to biryanis and appetizers."}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-palace-border/50 bg-palace-border/50 sm:grid-cols-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label.en}
                className="bg-palace-panel px-4 py-6 text-center"
              >
                <Icon
                  className="mx-auto size-5 text-palace-gold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-palace-cream/80">
                  {label[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {aboutImages.map((image, index) => (
            <figure
              key={image.src}
              className={[
                "group relative overflow-hidden border border-palace-border/50 bg-palace-panel",
                index === 0 ? "translate-y-8" : "",
                index === 3 ? "-translate-y-8" : "",
              ].join(" ")}
            >
              <img
                src={image.src}
                alt={image.alt[language]}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-palace-black/55 via-transparent to-transparent opacity-80" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}