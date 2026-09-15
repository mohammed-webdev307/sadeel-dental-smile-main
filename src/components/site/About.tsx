import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-care.jpg";

const icons = [HeartHandshake, ShieldCheck, Sparkles];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-2 min-w-0 lg:order-1">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">{t.about.heading}</h2>
          <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">{t.about.text}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {t.about.cards.map((card, i) => {
              const Icon = icons[i] ?? Sparkles;
              return (
                <li
                  key={card}
                  className="min-w-0 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-[0_18px_40px_-30px_rgba(39,50,58,0.5)]"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{card}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100} className="order-1 min-w-0 lg:order-2">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
            <img
              src={aboutImage}
              alt={t.about.imageAlt}
              width={1104}
              height={1104}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
