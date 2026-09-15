import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">{t.why.heading}</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full min-w-0 rounded-3xl border border-border bg-card p-6">
                <span className="font-latin text-2xl font-extrabold text-soft-foreground text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
