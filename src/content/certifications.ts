import type { Certification, Language } from "@/types/cv";
import type { Localizable } from "@/i18n";

// Source of truth: docs/cv-content.md — most recent first.
// Course titles are kept in their original language.
export const certifications: Localizable<Certification>[] = [
  {
    name: "Flutter & Dart - The Complete Guide [2024 Edition]",
    issuer: "Udemy",
    issueDate: "2024-03",
    credentialUrl: "https://www.udemy.com/certificate/UC-ba59d093-afbf-40df-8c6c-5ac7828baee1/",
  },
  {
    name: "Learn GraphQL with .NET Core for Beginners",
    issuer: "Udemy",
    issueDate: "2024-03",
    credentialUrl: "https://www.udemy.com/certificate/UC-be796a47-0ac2-4ab4-9b33-2491364bbcff/",
  },
  {
    name: "SOLID & Design Patterns in C#",
    issuer: "Udemy",
    issueDate: "2024-03",
    credentialUrl: "https://www.udemy.com/certificate/UC-f05eacad-0346-40e2-af5e-c87cea48761e/",
  },
  {
    name: "Arquitectura de software: Patrones esencial",
    issuer: "LinkedIn Learning",
    issueDate: "2024-03",
  },
  {
    name: "Aprende a programar ¡en cualquier lenguaje!",
    issuer: "LinkedIn Learning",
    issueDate: "2024-03",
  },
  {
    name: "Image Classifier with Django and React",
    issuer: "Udemy",
    issueDate: "2020-12",
    credentialUrl: "https://www.udemy.com/certificate/UC-3b17f59e-e113-4025-a109-b4d9cbf28a44/",
  },
  {
    name: "Ionic - Build iOS, Android & Web Apps with Ionic & Angular",
    issuer: "Udemy",
    issueDate: "2020-07",
    credentialUrl: "https://www.udemy.com/certificate/UC-5eebdbc8-25c7-45e2-bcba-b61003c123ba/",
  },
];

// `proficiency` labels are translated in src/i18n/ui.ts.
export const languages: Localizable<Language>[] = [
  { name: { en: "Spanish", es: "Español" }, proficiency: "native" },
  { name: { en: "English", es: "Inglés" }, proficiency: "fluent" },
];
