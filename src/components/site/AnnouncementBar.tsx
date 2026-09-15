import { BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function AnnouncementBar() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-center gap-2 rounded-3xl bg-soft px-5 py-6 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-start">
        <BadgeCheck className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-sm font-bold text-foreground sm:text-base">{t.announcement.main}</p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{t.announcement.sub}</p>
        </div>
      </div>
    </div>
  );
}
