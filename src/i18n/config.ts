/**
 * Locale registry. Add a locale here, then add its strings in ./ui.ts and its
 * translations in src/content/*.ts — TypeScript will flag every missing spot.
 */
export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export interface LocaleMeta {
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  /** BCP 47 tag passed to Intl formatters. */
  intl: string;
  /** Open Graph locale (underscore form). */
  og: string;
  /** Name shown in the language switcher, in its own language. */
  label: string;
  /** Short code shown in the language switcher. */
  short: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { htmlLang: "en", intl: "en-US", og: "en_US", label: "English", short: "EN" },
  es: { htmlLang: "es", intl: "es", og: "es_ES", label: "Español", short: "ES" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
