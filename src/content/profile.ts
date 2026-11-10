import type { Profile } from "@/types/cv";
import type { Localizable } from "@/i18n";

// Source of truth: docs/cv-content.md
// Text fields take either a plain string (same in every language) or { en, es }.
export const profile: Localizable<Profile> = {
  fullName: "Neil Alan Rodríguez Elías",
  headline: {
    en: "Systems Engineer | Software Engineer | Full Stack Developer",
    es: "Ingeniero de Sistemas | Ingeniero de Software | Desarrollador Full Stack",
  },
  summary: {
    en:
      "Full stack developer and systems engineer with experience across VB.NET, C#, " +
      "Python, JavaScript and TypeScript, integrating modern stacks with legacy systems " +
      "to deliver scalable, maintainable software. I enjoy taking on complex problems, " +
      "learning from the people around me, and writing clear, orderly code that teams " +
      "can build on. Outside of code I'm passionate about music, which keeps my " +
      "creativity sharp. Next, I'm looking to go deeper into Python and C++ for AI, " +
      "game development and cybersecurity.",
    es:
      "Desarrollador full stack e ingeniero de sistemas con experiencia en VB.NET, C#, " +
      "Python, JavaScript y TypeScript, integrando tecnologías modernas con sistemas " +
      "heredados para entregar software escalable y mantenible. Disfruto enfrentar " +
      "problemas complejos, aprender de las personas que me rodean y escribir código " +
      "claro y ordenado sobre el que los equipos puedan construir. Fuera del código me " +
      "apasiona la música, que mantiene viva mi creatividad. Mi siguiente paso es " +
      "profundizar en Python y C++ para IA, desarrollo de videojuegos y ciberseguridad.",
  },
  location: "Potosí, Bolivia",
  email: "alan.rodriguez.elias@gmail.com",
  // Relative paths resolve against public/ (and the site base path).
  avatarUrl: "profile.jpg",
  links: [
    { label: "GitHub", url: "https://github.com/Phisuidara", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/neil-alan-rodriguez", icon: "linkedin" },
    {
      label: { en: "Email", es: "Correo" },
      url: "mailto:alan.rodriguez.elias@gmail.com",
      icon: "email",
    },
  ],
};
