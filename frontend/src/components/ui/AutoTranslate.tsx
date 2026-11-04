"use client";

/**
 * AutoTranslate — DOM-level text and attribute translation
 * 
 * Watches for text and route changes and translates all visible text nodes
 * and input placeholders using the phrase dictionary.
 * Supports English, German, and Arabic.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const prevLangRef = useRef<string>("en");
  const originalsRef = useRef<Map<Text, string>>(new Map());
  const originalPlaceholdersRef = useRef<Map<HTMLInputElement | HTMLTextAreaElement, string>>(new Map());
  const isTranslatingRef = useRef<boolean>(false);

  useEffect(() => {
    // If language is English, restore all nodes to their original English values
    if (language === "en") {
      originalsRef.current.forEach((original, node) => {
        if (node.nodeValue !== null) {
          node.nodeValue = original;
        }
      });
      originalsRef.current.clear();

      originalPlaceholdersRef.current.forEach((origPlaceholder, el) => {
        el.setAttribute("placeholder", origPlaceholder);
      });
      originalPlaceholdersRef.current.clear();

      prevLangRef.current = "en";
      return;
    }

    const dict = phraseDicts[language];
    if (!dict) return;

    // If language changed from another non-English language (e.g. de -> ar), restore first
    if (prevLangRef.current !== "en" && prevLangRef.current !== language) {
      originalsRef.current.forEach((original, node) => {
        if (node.nodeValue !== null) {
          node.nodeValue = original;
        }
      });
      originalsRef.current.clear();

      originalPlaceholdersRef.current.forEach((origPlaceholder, el) => {
        el.setAttribute("placeholder", origPlaceholder);
      });
      originalPlaceholdersRef.current.clear();
    }
    prevLangRef.current = language;

    function doTranslate() {
      if (isTranslatingRef.current) return;
      isTranslatingRef.current = true;

      try {
        // 1. Walk document.body text nodes
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
          const currentVal = node.nodeValue;
          if (!currentVal || currentVal.trim() === "") return;

          // Retrieve original text or store currentVal as original
          const original = originalsRef.current.get(node) || currentVal;
          const translated = getTranslation(original, dict);

          if (translated) {
            if (!originalsRef.current.has(node)) {
              originalsRef.current.set(node, original);
            }
            const targetVal = original.replace(original.trim(), translated);
            if (node.nodeValue !== targetVal) {
              node.nodeValue = targetVal;
            }
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
          if (translated && el.getAttribute("placeholder") !== translated) {
            el.setAttribute("placeholder", translated);
          }
        });
      } finally {
        isTranslatingRef.current = false;
      }
    }

    // Run translation immediately
    doTranslate();

    // Re-run after short delays to catch hydrated content & framer-motion elements
    const t1 = setTimeout(doTranslate, 60);
    const t2 = setTimeout(doTranslate, 250);
    const t3 = setTimeout(doTranslate, 600);

    // Observe DOM mutations for dynamically inserted content
    let timeoutId: NodeJS.Timeout | null = null;
    const observer = new MutationObserver(() => {
      if (isTranslatingRef.current) return;
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        doTranslate();
      }, 50);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [language, pathname]);

  return null;
}
