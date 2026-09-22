"use client";

/**
 * Auto-Translation Component & Hook
 * 
 * Usage:
 *   import { T, useT } from "@/components/ui/T";
 * 
 *   // Component: wraps any text node
 *   <T>GROW FOOD</T>
 * 
 *   // Hook: use in JS/prop values
 *   const t = useT();
 *   <input placeholder={t("Your Name")} />
 */

import { useLanguage } from "@/context/LanguageContext";
import { phraseDicts } from "@/translations/phrases";

/** Translates a string using the phrase dictionary for the current language */
export function useT() {
  const { language } = useLanguage();
  return function translate(text: string): string {
    if (language === "en" || !text) return text;
    const dict = phraseDicts[language];
    if (!dict) return text;
    // Exact match
    if (dict[text] !== undefined) return dict[text];
    // Try trimmed match
    const trimmed = text.trim();
    if (dict[trimmed] !== undefined) return dict[trimmed];
    // Return original if no translation found
    return text;
  };
}

/** Component that auto-translates its text child */
export function T({ children }: { children: string }) {
  const translate = useT();
  return <>{translate(children)}</>;
}

export default T;
