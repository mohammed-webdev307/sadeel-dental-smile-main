import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, scrollToSection } from "@/lib/i18n";
import { ToothMark } from "./ToothMark";

const sections = ["home", "about", "services", "why", "faq", "contact"] as const;

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  const labels: Record<(typeof sections)[number], string> = {
    home: t.nav.home,
    about: t.nav.about,
    services: t.nav.services,
    why: t.nav.why,
    faq: t.nav.faq,
    contact: t.nav.contact,
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-[0_2px_20px_-12px_rgba(39,50,58,0.35)] backdrop-blur" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => go("home")}
          className="flex min-w-0 shrink-0 items-center gap-2 rounded-xl py-1 text-start"
          aria-label={t.brand.name}
        >
          <ToothMark className="h-7 w-7 shrink-0 text-primary" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-latin text-base font-extrabold tracking-[0.18em] text-foreground">
              {t.brand.name}
            </span>
            <span className="font-latin text-[10px] tracking-[0.22em] text-muted-foreground">
              {t.brand.tagline}
            </span>
          </span>
        </button>

        <nav aria-label={t.nav.home} className="mx-auto hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => go(s)}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-soft hover:text-foreground"
            >
              {labels[s]}
            </button>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <button
            type="button"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-soft"
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-latin">{lang === "ar" ? "EN" : "العربية"}</span>
          </button>

          <button
            type="button"
            onClick={() => go("contact")}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-14px_rgba(201,143,150,0.9)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t.nav.book}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {sections.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => go(s)}
              className="rounded-xl px-3 py-3 text-start text-sm font-medium text-foreground transition-colors hover:bg-soft"
            >
              {labels[s]}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("contact")}
            className="mt-1 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            {t.nav.book}
          </button>
        </nav>
      </div>
    </header>
  );
}
