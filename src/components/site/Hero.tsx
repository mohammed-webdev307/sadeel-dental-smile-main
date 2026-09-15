import { Phone, CalendarCheck, HeartHandshake, Stethoscope, Sparkles } from "lucide-react";
import { useLanguage, scrollToSection, PHONE } from "@/lib/i18n";
import heroImage from "@/assets/hero-clinic.jpg";

const trustIcons = [HeartHandshake, Stethoscope, Sparkles];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-[92px] pb-14 sm:pt-28 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 end-[-6rem] h-72 w-72 rounded-full bg-soft blur-3xl sm:h-96 sm:w-96"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-xs font-semibold text-foreground sm:text-sm">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            {t.hero.titleA}
            <span className="block text-primary">{t.hero.titleB}</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {t.hero.desc}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-16px_rgba(201,143,150,1)] transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              {t.hero.book}
            </button>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-soft"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              {t.hero.call}
            </a>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {t.hero.trust.map((item, i) => {
              const Icon = trustIcons[i] ?? Sparkles;
              return (
                <li
                  key={item}
                  className="flex min-w-0 items-center gap-2 rounded-2xl border border-border bg-card px-3 py-3 text-xs font-medium text-foreground sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-medical" aria-hidden="true" />
                  <span className="min-w-0">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_60px_-40px_rgba(39,50,58,0.45)]">
            <img
              src={heroImage}
              alt={t.hero.imageAlt}
              width={1200}
              height={1408}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
