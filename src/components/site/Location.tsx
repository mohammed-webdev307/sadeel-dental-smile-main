import { MapPin, Navigation, Building2 } from "lucide-react";
import { MAPS_URL, useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Location() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24" aria-labelledby="location-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-medical/20 blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="min-w-0">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft">
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                </span>
                <h2 id="location-heading" className="mt-5 text-2xl font-extrabold text-foreground sm:text-4xl">
                  {t.location.heading}
                </h2>
                <p className="mt-4 flex max-w-2xl items-start gap-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-medical" aria-hidden="true" />
                  <span>{t.location.text}</span>
                </p>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                {t.location.button}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
