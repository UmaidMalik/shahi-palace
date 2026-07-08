import {
  Clock3,
  CreditCard,
  MapPin,
  Phone,
  ShoppingBag,
  Utensils,
} from "lucide-react"

import type { Language } from "@/types/language"

interface ContactSectionProps {
  language: Language
}

const hours = [
  {
    day: { en: "Monday", fr: "Lundi" },
    time: { en: "11:00 AM – 9:30 PM", fr: "11 h 00 – 21 h 30" },
  },
  {
    day: { en: "Tuesday", fr: "Mardi" },
    time: { en: "Closed", fr: "Fermé" },
    closed: true,
  },
  {
    day: { en: "Wednesday", fr: "Mercredi" },
    time: { en: "11:00 AM – 9:30 PM", fr: "11 h 00 – 21 h 30" },
  },
  {
    day: { en: "Thursday", fr: "Jeudi" },
    time: { en: "11:00 AM – 9:30 PM", fr: "11 h 00 – 21 h 30" },
  },
  {
    day: { en: "Friday", fr: "Vendredi" },
    time: { en: "11:00 AM – 9:30 PM", fr: "11 h 00 – 21 h 30" },
  },
  {
    day: { en: "Saturday", fr: "Samedi" },
    time: { en: "11:00 AM – 9:30 PM", fr: "11 h 00 – 21 h 30" },
  },
  {
    day: { en: "Sunday", fr: "Dimanche" },
    time: { en: "11:00 AM – 9:30 PM", fr: "11 h 00 – 21 h 30" },
  },
]

const helpfulNotes = [
  {
    icon: Utensils,
    text: {
      en: "100% halal Pakistani & Indian cuisine",
      fr: "Cuisine pakistanaise et indienne 100 % halal",
    },
  },
  {
    icon: Clock3,
    text: {
      en: "Kitchen closes at 9:30 PM",
      fr: "La cuisine ferme à 21 h 30",
    },
  },
  {
    icon: ShoppingBag,
    text: {
      en: "Pickup orders usually take 15–25 minutes",
      fr: "Les commandes à emporter prennent généralement 15 à 25 minutes",
    },
  },
  {
    icon: CreditCard,
    text: {
      en: "Visa, Mastercard, Visa Debit, and Interac accepted",
      fr: "Visa, Mastercard, Visa Débit et Interac acceptés",
    },
  },
]

export function ContactSection({ language }: ContactSectionProps) {
  const mapsUrl =
    "https://www.google.com/maps?q=4773+Boul.+Des+Sources,+Pierrefonds,+QC+H8Y+3C6&output=embed"

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=4773+Boul.+Des+Sources,+Pierrefonds,+QC+H8Y+3C6"

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-palace-border/30 bg-palace-black"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-palace-gold">
            {language === "fr" ? "Nous trouver" : "Find Us"}
          </p>

          <h2 className="mt-4 font-display text-5xl text-palace-cream sm:text-6xl">
            {language === "fr" ? "Visitez-nous" : "Visit Us"}
          </h2>

          <div className="mx-auto my-7 flex items-center justify-center gap-3 text-palace-gold">
            <span className="h-px w-12 bg-palace-gold/50" />
            <span className="rotate-45 text-xs">◆</span>
            <span className="h-px w-12 bg-palace-gold/50" />
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <ContactInfoBlock
                icon={MapPin}
                title={language === "fr" ? "Adresse" : "Address"}
              >
                <p>4773 Boul. Des Sources</p>
                <p>Pierrefonds, QC H8Y 3C6</p>
                <p>Canada</p>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-palace-gold transition hover:text-palace-gold-light"
                >
                  {language === "fr" ? "Obtenir l’itinéraire" : "Get Directions"}
                </a>
              </ContactInfoBlock>

              <ContactInfoBlock
                icon={Phone}
                title={language === "fr" ? "Téléphone" : "Phone"}
              >
                <a
                  href="tel:+15146850000"
                  className="font-display text-2xl text-palace-cream transition hover:text-palace-gold"
                >
                  514-685-0000
                </a>
              </ContactInfoBlock>
            </div>

            <div className="border border-palace-border/60 bg-palace-panel/45 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-palace-gold">
                {language === "fr" ? "Informations utiles" : "Helpful Notes"}
              </p>

              <div className="mt-5 space-y-4">
                {helpfulNotes.map(({ icon: Icon, text }) => (
                  <div key={text.en} className="flex gap-3">
                    <Icon
                      className="mt-0.5 size-5 shrink-0 text-palace-gold"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-6 text-palace-cream/75">
                      {text[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="border border-palace-border/60 bg-palace-panel/35 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Clock3
                  className="size-5 text-palace-gold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <h3 className="text-xs uppercase tracking-[0.25em] text-palace-gold">
                  {language === "fr" ? "Heures" : "Hours"}
                </h3>
              </div>

              <div className="mt-6 divide-y divide-palace-border/35">
                {hours.map((entry) => (
                  <div
                    key={entry.day.en}
                    className="flex items-center justify-between gap-6 py-4 text-sm"
                  >
                    <p className={entry.closed ? "text-palace-muted" : "text-palace-cream"}>
                      {entry.day[language]}
                    </p>

                    <p
                      className={[
                        "text-right font-medium",
                        entry.closed
                          ? "text-red-300/75"
                          : "text-palace-gold",
                      ].join(" ")}
                    >
                      {entry.time[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden border border-palace-border/60 bg-palace-panel/35">
              <iframe
                title="Shahi Palace Google Maps location"
                src={mapsUrl}
                className="h-[360px] w-full border-0 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-4 border-t border-palace-border/40 pt-8 text-sm text-palace-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.12em] text-palace-gold">
              SHAHI PALACE
            </p>

            <p className="mt-1">
              © 2026 Shahi Palace Restaurant.{" "}
              {language === "fr" ? "Tous droits réservés." : "All rights reserved."}
            </p>
          </div>

          <p>
            {language === "fr"
              ? "Restaurant halal · Pierrefonds, Montréal · Depuis 1992"
              : "Halal Restaurant · Pierrefonds, Montreal · Since 1992"}
          </p>
        </footer>
      </div>
    </section>
  )
}

function ContactInfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-palace-border/60 bg-palace-panel/35 p-6">
      <div className="flex items-center gap-3">
        <Icon
          className="size-5 text-palace-gold"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <h3 className="text-xs uppercase tracking-[0.25em] text-palace-gold">
          {title}
        </h3>
      </div>

      <div className="mt-4 space-y-1 text-sm leading-6 text-palace-cream/80">
        {children}
      </div>
    </div>
  )
}