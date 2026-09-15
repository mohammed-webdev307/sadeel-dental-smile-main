import { Smile, Activity, Sparkles, Scissors, Baby, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage, scrollToSection, serviceKeys, type ServiceKey } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const icons: Record<ServiceKey, typeof Smile> = {
  denture: Smile,
  rootcanal: Activity,
  fillings: Sparkles,
  extraction: Scissors,
  children: Baby,
};

export function Services({ onSelectService }: { onSelectService: (key: ServiceKey) => void }) {
  const { t, lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="scroll-mt-20 bg-soft/40 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">{t.services.heading}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{t.services.desc}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const Icon = icons[key];
            const item = t.services.items[key];
            return (
              <Reveal key={key} delay={i * 60}>
                <article className="flex h-full min-w-0 flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-34px_rgba(39,50,58,0.55)]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-soft">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground sm:text-lg">{item.title}</h3>
                  <p className="mt-3 grow text-sm leading-7 text-muted-foreground">{item.desc}</p>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(key);
                      scrollToSection("contact");
                    }}
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-soft"
                  >
                    {t.services.cta}
                    <Arrow className="h-4 w-4 text-primary" aria-hidden="true" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
