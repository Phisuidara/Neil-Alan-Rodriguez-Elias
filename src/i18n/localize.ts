import { locales, type Locale } from "./config";

/** A string written once per locale, e.g. `{ en: "Remote", es: "Remoto" }`. */
export type LocalizedString = { readonly [L in Locale]: string };

/**
 * Mirrors a CV type, but lets any string field be either a plain string
 * (same in every language — names, URLs, dates, tech) or a LocalizedString.
 */
export type Localizable<T> = T extends string
  ? T | LocalizedString
  : T extends readonly (infer U)[]
    ? Localizable<U>[]
    : T extends object
      ? { [K in keyof T]: Localizable<T[K]> }
      : T;

function isLocalizedString(value: unknown): value is LocalizedString {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  return keys.length === locales.length && locales.every((locale) => keys.includes(locale));
}

/** Deeply replaces every LocalizedString with its value for `locale`. */
export function localize<T>(value: Localizable<T>, locale: Locale): T {
  const walk = (node: unknown): unknown => {
    if (isLocalizedString(node)) return node[locale];
    if (Array.isArray(node)) return node.map(walk);
    if (typeof node === "object" && node !== null) {
      return Object.fromEntries(Object.entries(node).map(([key, child]) => [key, walk(child)]));
    }
    return node;
  };
  return walk(value) as T;
}
