import type { ExperienceEntry } from "@/types/cv";
import type { Localizable } from "@/i18n";

// Source of truth: docs/cv-content.md — most recent first.
// Omit `endDate` for your current role.
export const experience: Localizable<ExperienceEntry>[] = [
  {
    company: "Jalasoft",
    role: "Jalasoft Core Engineer",
    location: { en: "Remote", es: "Remoto" },
    startDate: "2021-03",
    endDate: "2023-09",
    summary: {
      en:
        "Full stack developer on Jalasoft's core team, contributing to internal and client " +
        "projects across web, desktop and backend services.",
      es:
        "Desarrollador full stack en el equipo core de Jalasoft, contribuyendo a proyectos " +
        "internos y de clientes en servicios web, de escritorio y backend.",
    },
    highlights: [
      {
        en:
          "Helped build a developer interview coding-assessment platform from scratch (C#, " +
          "React, MongoDB), with Docker-containerized services that compile, transpile and " +
          "execute candidate code on the server.",
        es:
          "Participé en la construcción desde cero de una plataforma de evaluación técnica " +
          "para entrevistas de desarrolladores (C#, React, MongoDB), con servicios en " +
          "contenedores Docker que compilan, transpilan y ejecutan el código de los " +
          "candidatos en el servidor.",
      },
      {
        en:
          "Implemented features and fixed bugs in an event management web platform built " +
          "with React, GraphQL, TypeScript and MongoDB.",
        es:
          "Implementé funcionalidades y corregí errores en una plataforma web de gestión de " +
          "eventos construida con React, GraphQL, TypeScript y MongoDB.",
      },
      {
        en:
          "Developed and maintained desktop applications and services for business " +
          "management software used by building-material suppliers (VB.NET, VB6, C#), " +
          "optimizing and troubleshooting their T-SQL database integrations.",
        es:
          "Desarrollé y mantuve aplicaciones de escritorio y servicios para un software de " +
          "gestión empresarial usado por proveedores de materiales de construcción (VB.NET, " +
          "VB6, C#), optimizando y depurando sus integraciones con bases de datos T-SQL.",
      },
    ],
    technologies: [
      "C#",
      "VB.NET",
      "VB6",
      "TypeScript",
      "JavaScript",
      "React",
      "GraphQL",
      "MongoDB",
      "T-SQL",
      "Docker",
      "Linux",
    ],
    url: "https://www.jalasoft.com/",
  },
  {
    company: "I.G.L.A.",
    role: { en: "Supplies Manager", es: "Encargado de Suministros" },
    location: "Potosí, Bolivia",
    startDate: "2020-01",
    endDate: "2020-12",
    summary: {
      en:
        "Led supply planning and procurement for the company's central unit, combining " +
        "organizational management with database work.",
      es:
        "Lideré la planificación de suministros y las adquisiciones de la unidad central de " +
        "la empresa, combinando la gestión organizacional con el trabajo en bases de datos.",
    },
    highlights: [
      {
        en:
          "Managed and maintained the supplies database, keeping records accurate and easy " +
          "to access.",
        es:
          "Administré y mantuve la base de datos de suministros, con registros precisos y de " +
          "fácil acceso.",
      },
      {
        en:
          "Planned supply needs and implemented procurement strategies that improved the " +
          "central unit's operational efficiency.",
        es:
          "Planifiqué las necesidades de suministros e implementé estrategias de adquisición " +
          "que mejoraron la eficiencia operativa de la unidad central.",
      },
    ],
  },
];
