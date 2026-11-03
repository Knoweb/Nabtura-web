"use client";

/**
 * AutoTranslate — DOM-level text and attribute translation
 * 
 * Watches for text and route changes and translates all visible text nodes
 * and input placeholders using the phrase dictionary.
 * Works across all pages and interactive components.
 */

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { phraseDicts } from "@/translations/phrases";

// Tags to skip (not translatable text nodes)
const SKIP_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "SVG", "PATH", "META", "LINK"
]);

function getTranslation(raw: string, dict: Record<string, string>): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;

  // 1. Exact match
  if (dict[trimmed] !== undefined) {
    return dict[trimmed];
  }

  // 2. Trailing arrow or symbol stripped (e.g. "EXPLORE →" -> "EXPLORE")
  const withoutArrow = trimmed.replace(/\s*(?:→|->|y|>|&rarr;)\s*$/i, "").trim();
  if (withoutArrow && withoutArrow !== trimmed && dict[withoutArrow] !== undefined) {
    return dict[withoutArrow];
  }

  // 3. Trailing punctuation stripped (e.g. "FOOD." -> "FOOD" or "SENSE:" -> "SENSE")
  const withoutPunct = trimmed.replace(/[.:;!?]+$/, "").trim();
  if (withoutPunct && withoutPunct !== trimmed && dict[withoutPunct] !== undefined) {
    return dict[withoutPunct];
  }

  // 4. Case-insensitive lookup fallback
  const lower = trimmed.toLowerCase();
  for (const key in dict) {
    if (key.toLowerCase() === lower) {
      return dict[key];
    }
  }

  return null;
}

export default function AutoTranslate() {
  const { language } = useLanguage();
  const prevLangRef = useRef<string>("en");
  const originalsRef = useRef<Map<Text, string>>(new Map());
  const originalPlaceholdersRef = useRef<Map<HTMLInputElement | HTMLTextAreaElement, string>>(new Map());
  const isTranslatingRef = useRef<boolean>(false);

  useEffect(() => {
    if (language === "en") {
      // Restore original text nodes
      originalsRef.current.forEach((original, node) => {
        if (node.nodeValue !== null) {
          node.nodeValue = original;
        }
      });
      originalsRef.current.clear();

      // Restore original placeholders
      originalPlaceholdersRef.current.forEach((origPlaceholder, el) => {
        el.setAttribute("placeholder", origPlaceholder);
      });
      originalPlaceholdersRef.current.clear();

      prevLangRef.current = "en";
      return;
    }

    const dict = phraseDicts[language];
    if (!dict) return;

    function doTranslate() {
      if (isTranslatingRef.current) return;
      isTranslatingRef.current = true;

      try {
        // Restore previous originals first to prevent double-translation
        originalsRef.current.forEach((original, node) => {
          if (node.nodeValue !== null) {
            node.nodeValue = original;
          }
        });
        originalsRef.current.clear();

        // 1. Translate all text nodes in document.body
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode(node) {
              const parent = (node as Text).parentElement;
              if (!parent) return NodeFilter.FILTER_REJECT;
              if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
              if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
              return NodeFilter.FILTER_ACCEPT;
            }
          }
        );

        const nodes: Text[] = [];
        let n: Node | null;
        while ((n = walker.nextNode())) {
          nodes.push(n as Text);
        }

        nodes.forEach(node => {
          const original = node.nodeValue;
          if (!original || original.trim() === "") return;

          const translated = getTranslation(original, dict);
          if (translated && translated !== original.trim()) {
            originalsRef.current.set(node, original);
            node.nodeValue = original.replace(original.trim(), translated);
          }
        });

        // 2. Translate Input and Textarea placeholders
        const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          "input[placeholder], textarea[placeholder]"
        );
        inputs.forEach(el => {
          const currentPlaceholder = el.getAttribute("placeholder");
          if (!currentPlaceholder) return;

          if (!originalPlaceholdersRef.current.has(el)) {
            originalPlaceholdersRef.current.set(el, currentPlaceholder);
          }

          const orig = originalPlaceholdersRef.current.get(el) || currentPlaceholder;
          const translated = getTranslation(orig, dict);
          if (translated) {
            el.setAttribute("placeholder", translated);
          }
        });
      } finally {
        isTranslatingRef.current = false;
      }
    }

    // Execute translation
    doTranslate();
    prevLangRef.current = language;

    // Observe DOM mutations
    const observer = new MutationObserver((mutations) => {
      if (isTranslatingRef.current) return;
      let hasMeaningfulChange = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          hasMeaningfulChange = true;
          break;
        }
      }
      if (hasMeaningfulChange) {
        requestAnimationFrame(doTranslate);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [language]);

  return null;
}
