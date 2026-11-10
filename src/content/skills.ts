import type { SkillGroup } from "@/types/cv";
import type { Localizable } from "@/i18n";

// Source of truth: docs/cv-content.md. `level` is optional; its label is translated in src/i18n/ui.ts.
export const skills: Localizable<SkillGroup>[] = [
  {
    category: { en: "Languages", es: "Lenguajes" },
    skills: [
      { name: "C#", level: "advanced" },
      { name: "VB.NET", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "VB6", level: "advanced" },
      { name: "Python", level: "proficient" },
      { name: "Dart", level: "proficient" },
    ],
  },
  {
    category: { en: "Frameworks & Libraries", es: "Frameworks y librerías" },
    skills: [
      { name: ".NET", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "GraphQL", level: "advanced" },
      { name: "Flutter", level: "proficient" },
      { name: "Ionic", level: "proficient" },
      { name: "Angular", level: "proficient" },
    ],
  },
  {
    category: { en: "Databases", es: "Bases de datos" },
    skills: [
      { name: "SQL (T-SQL)", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
    ],
  },
  {
    category: { en: "Tools & Platforms", es: "Herramientas y plataformas" },
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Docker", level: "advanced" },
      { name: "Linux", level: "advanced" },
    ],
  },
];
