import { defaultLocale, type Locale } from "@/i18n/config";

/** Joins Astro's BASE_URL with a relative asset path, normalizing the slash between them. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const rest = path.replace(/^\//, "");
  return `${base}/${rest}`;
}

/** Home URL for a locale: the default locale lives at the site root, others under /<locale>/. */
export function localePath(locale: Locale): string {
  return withBase(locale === defaultLocale ? "" : `${locale}/`);
}

/** URL of the downloadable PDF for a locale, generated at deploy time by scripts/generate-pdfs.mjs. */
export function pdfPath(locale: Locale): string {
  return withBase(`cv-${locale}.pdf`);
}

/** Human-readable form of a link for print: drops the protocol, "mailto:" and trailing slash. */
export function displayUrl(url: string): string {
  return url
    .replace(/^mailto:/, "")
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
}
