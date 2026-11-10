import type { CvData } from "@/types/cv";
import { localize, type Locale, type Localizable } from "@/i18n";
import { profile } from "./profile";
import { experience } from "./experience";
import { education } from "./education";
import { projects } from "./projects";
import { skills } from "./skills";
import { certifications, languages } from "./certifications";

const localizedCv: Localizable<CvData> = {
  profile,
  experience,
  education,
  projects,
  skills,
  certifications,
  languages,
};

/** Single entry point pages use to read CV content, resolved for one locale. */
export function getCv(locale: Locale): CvData {
  return localize<CvData>(localizedCv, locale);
}
