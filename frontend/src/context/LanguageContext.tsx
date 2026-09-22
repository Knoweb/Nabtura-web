"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, languages } from "@/translations";
import type { Language } from "@/translations";
import type { TranslationKeys } from "@/translations/en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  dir: "ltr" | "rtl";
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

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        dir,
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
