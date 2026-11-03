import en from "./en";
import de from "./de";
import ar from "./ar";

export type Language = "en" | "de" | "ar";

export const languages: { code: Language; label: string; flag: string; countryCode: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", flag: "🇬🇧", countryCode: "gb", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", countryCode: "de", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "🇦🇪", countryCode: "ae", dir: "rtl" },
];

export const translations: Record<Language, typeof en> = {
  en,
  de,
  ar,
};

export default translations;
