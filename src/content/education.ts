import type { EducationEntry } from "@/types/cv";
import type { Localizable } from "@/i18n";

// Source of truth: docs/cv-content.md — most recent first.
export const education: Localizable<EducationEntry>[] = [
  {
    institution: "Universidad Privada Domingo Savio (UPDS)",
    credential: { en: "Systems Engineering", es: "Ingeniería de Sistemas" },
    startDate: "2015-06",
    endDate: "2021-08",
  },
];
