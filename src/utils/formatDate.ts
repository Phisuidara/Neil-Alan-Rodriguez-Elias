import { localeMeta, ui, type Locale } from "@/i18n";

/** Formats an ISO "YYYY-MM" string as a short month + year ("Mar 2021" / "mar 2021"). */
export function formatMonthYear(isoMonth: string, locale: Locale): string {
  const [year, month] = isoMonth.split("-").map(Number);
  if (!year || !month) return isoMonth;
  const date = new Date(Date.UTC(year, month - 1, 1));
  return new Intl.DateTimeFormat(localeMeta[locale].intl, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** Formats a start/end ISO "YYYY-MM" pair, using the locale's "Present" when `end` is omitted. */
export function formatDateRange(start: string, end: string | undefined, locale: Locale): string {
  return `${formatMonthYear(start, locale)} – ${end ? formatMonthYear(end, locale) : ui[locale].present}`;
}
