import type { Language, SkillLevel } from "@/types/cv";
import type { Locale } from "./config";

/**
 * Interface strings shared by every design (headings, labels, aria text).
 * CV content itself is translated in src/content/*.ts, not here.
 */
export interface UiStrings {
  skipToContent: string;
  downloadCv: string;
  qrCaption: string;
  pdfFileName: (fullName: string) => string;
  contactLinks: string;
  avatarAlt: (fullName: string) => string;
  languageSwitcher: string;
  experience: string;
  projects: string;
  education: string;
  skills: string;
  extras: string;
  certifications: string;
  languages: string;
  present: string;
  technologiesUsed: string;
  skillsIn: (category: string) => string;
  visit: string;
  source: string;
  footer: (fullName: string, year: number) => string;
  skillLevel: Record<SkillLevel, string>;
  proficiency: Record<Language["proficiency"], string>;
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    skipToContent: "Skip to main content",
    downloadCv: "Download CV (PDF)",
    qrCaption: "Scan for the online version",
    pdfFileName: (fullName) => `${fullName} - CV (English).pdf`,
    contactLinks: "Contact and profile links",
    avatarAlt: (fullName) => `Photo of ${fullName}`,
    languageSwitcher: "Language",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    extras: "Certifications & Languages",
    certifications: "Certifications",
    languages: "Languages",
    present: "Present",
    technologiesUsed: "Technologies used",
    skillsIn: (category) => `${category} skills`,
    visit: "Visit",
    source: "Source",
    footer: (fullName, year) => `© ${year} ${fullName}. Built with Astro.`,
    skillLevel: {
      familiar: "familiar",
      proficient: "proficient",
      advanced: "advanced",
      expert: "expert",
    },
    proficiency: {
      native: "native",
      fluent: "fluent",
      professional: "professional",
      conversational: "conversational",
      basic: "basic",
    },
  },
  es: {
    skipToContent: "Saltar al contenido principal",
    downloadCv: "Descargar CV (PDF)",
    qrCaption: "Escanea para ver la versión en línea",
    pdfFileName: (fullName) => `${fullName} - CV (Español).pdf`,
    contactLinks: "Enlaces de contacto y perfil",
    avatarAlt: (fullName) => `Foto de ${fullName}`,
    languageSwitcher: "Idioma",
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Educación",
    skills: "Habilidades",
    extras: "Certificaciones e idiomas",
    certifications: "Certificaciones",
    languages: "Idiomas",
    present: "Actualidad",
    technologiesUsed: "Tecnologías utilizadas",
    skillsIn: (category) => `Habilidades: ${category}`,
    visit: "Ver",
    source: "Código",
    footer: (fullName, year) => `© ${year} ${fullName}. Hecho con Astro.`,
    skillLevel: {
      familiar: "básico",
      proficient: "competente",
      advanced: "avanzado",
      expert: "experto",
    },
    proficiency: {
      native: "nativo",
      fluent: "fluido",
      professional: "profesional",
      conversational: "conversacional",
      basic: "básico",
    },
  },
};

export function useTranslations(locale: Locale): UiStrings {
  return ui[locale];
}
