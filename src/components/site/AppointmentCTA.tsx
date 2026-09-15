import { Phone, Instagram, MessageSquare } from "lucide-react";
import { useLanguage, scrollToSection, PHONE, INSTAGRAM_URL } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function AppointmentCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-[2rem] bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-xl font-extrabold leading-relaxed text-primary-foreground sm:text-3xl">
              {t.cta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/90 sm:text-base">
              {t.cta.text}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {t.cta.call}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {t.cta.instagram}
              </a>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                {t.cta.contact}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
