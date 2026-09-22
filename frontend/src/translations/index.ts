import en from "./en";
import ja from "./ja";
import de from "./de";
import ar from "./ar";

export type Language = "en" | "ja" | "de" | "ar";

export const languages: { code: Language; label: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ja", label: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "🇦🇪", dir: "rtl" },
];

export const translations: Record<Language, typeof en> = {
  en,
  ja,
  de,
  ar,
};

export default translations;
