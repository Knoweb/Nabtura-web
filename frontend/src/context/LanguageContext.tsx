"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, languages } from "@/translations";
import type { Language } from "@/translations";
import type { TranslationKeys } from "@/translations/en";
import { phraseDicts } from "@/translations/phrases";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  dir: "ltr" | "rtl";
  /** Translates any arbitrary English phrase using the phrase dictionary */
  translate: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load saved language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("nabtura-lang") as Language | null;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  // Apply dir attribute + lang on html element when language changes
  useEffect(() => {
    const langConfig = languages.find((l) => l.code === language);
    const dir = langConfig?.dir ?? "ltr";
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", dir);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("nabtura-lang", lang);
  }, []);

  const langConfig = languages.find((l) => l.code === language);
  const dir = langConfig?.dir ?? "ltr";

  const translate = useCallback((text: string): string => {
    if (language === "en" || !text) return text;
    const dict = phraseDicts[language];
    if (!dict) return text;
    if (dict[text] !== undefined) return dict[text];
    const trimmed = text.trim();
    if (dict[trimmed] !== undefined) return dict[trimmed];
    return text;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        dir,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
