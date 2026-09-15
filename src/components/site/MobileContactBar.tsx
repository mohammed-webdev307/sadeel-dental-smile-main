import { CalendarCheck, Instagram, Phone } from "lucide-react";
import { INSTAGRAM_URL, PHONE, scrollToSection, useLanguage } from "@/lib/i18n";

export function MobileContactBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-background/95 p-1 shadow-[0_18px_45px_-15px_rgba(39,50,58,0.42)] backdrop-blur">
        <a
          href={`tel:${PHONE}`}
          className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[11px] font-semibold text-foreground"
        >
          <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="truncate">{t.mobile.call}</span>
        </a>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl bg-primary px-2 py-2.5 text-[11px] font-semibold text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          <span className="truncate">{t.mobile.book}</span>
        </button>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-[11px] font-semibold text-foreground"
        >
          <Instagram className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="truncate">{t.mobile.instagram}</span>
        </a>
      </div>
    </div>
  );
}
