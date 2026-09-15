import { Instagram, Phone } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE,
  scrollToSection,
  useLanguage,
} from "@/lib/i18n";
import { ToothMark } from "./ToothMark";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    ["home", t.nav.home],
    ["services", t.nav.services],
    ["about", t.nav.about],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <footer className="border-t border-border bg-foreground pb-24 pt-12 text-background md:pb-10 sm:pt-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div className="min-w-0">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 rounded-xl text-start"
            aria-label={t.brand.name}
          >
            <ToothMark className="h-9 w-9 text-primary" />
            <span className="flex flex-col leading-none">
              <span className="font-latin text-lg font-extrabold tracking-[0.18em]">{t.brand.name}</span>
              <span className="font-latin mt-1 text-[10px] tracking-[0.22em] text-background/65">
                {t.brand.tagline}
              </span>
            </span>
          </button>
          <p className="mt-5 max-w-sm text-xs leading-6 text-background/65">{t.footer.disclaimer}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold">{t.footer.links}</h2>
          <nav className="mt-4 flex flex-col items-start gap-2" aria-label={t.footer.links}>
            {links.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="rounded-md py-1 text-sm text-background/70 transition-colors hover:text-background"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold">{t.footer.contact}</h2>
          <div className="mt-4 space-y-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <span dir="ltr">{PHONE}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
            >
              <Instagram className="h-4 w-4 text-primary" aria-hidden="true" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-background/10 px-4 pt-6 text-center text-xs text-background/55 sm:px-6">
        {t.footer.rights}
      </div>
    </footer>
  );
}
