"use client";

/**
 * NABTURA Full-Site Phrase Dictionary
 * Maps English phrases to translated equivalents for German and Arabic.
 */

export type PhraseDict = Record<string, string>;

// ─── GERMAN ──────────────────────────────────────────────────────────────────
import { germanPhrases } from "./germanPhrases";
export const de: PhraseDict = germanPhrases;

// ─── ARABIC ──────────────────────────────────────────────────────────────────
import { arabicPhrases } from "./arabicPhrases";
export const ar: PhraseDict = arabicPhrases;

export const phraseDicts: Record<string, PhraseDict> = { en: {}, de, ar };
