"use client";

/**
 * AutoTranslate — DOM-level text translation
 * 
 * Watches for text changes and translates all visible text nodes
 * using the phrase dictionary. Works on ANY page without modifying
 * individual page files.
 */

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { phraseDicts } from "@/translations/phrases";

// Tags to skip (not translatable content)
const SKIP_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "INPUT",
  "TEXTAREA", "SELECT", "OPTION", "SVG", "PATH", "META", "LINK"
]);

function translateNode(node: Text, translate: (s: string) => string) {
  const original = node.nodeValue;
  if (!original || original.trim() === "") return;
  const translated = translate(original.trim());
  if (translated !== original.trim() && node.nodeValue !== null) {
    node.nodeValue = original.replace(original.trim(), translated);
  }
}

function walkAndTranslate(root: Node, translate: (s: string) => string) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        // Skip elements with data-no-translate
        if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  const nodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    nodes.push(node as Text);
  }
  nodes.forEach(n => translateNode(n, translate));
}

export default function AutoTranslate() {
  const { language, translate } = useLanguage();
  const prevLangRef = useRef<string>("en");
  // Store original text for restoration
  const originalsRef = useRef<Map<Text, string>>(new Map());

  useEffect(() => {
    if (language === "en") {
      // Restore originals
      originalsRef.current.forEach((original, node) => {
        if (node.nodeValue !== null) {
          node.nodeValue = original;
        }
      });
      originalsRef.current.clear();
      prevLangRef.current = "en";
      return;
    }

    const dict = phraseDicts[language];
    if (!dict) return;

    // Capture all text nodes and translate
    function doTranslate() {
      // Restore originals first (to avoid double-translation)
      originalsRef.current.forEach((original, node) => {
        if (node.nodeValue !== null) {
          node.nodeValue = original;
        }
      });
      originalsRef.current.clear();

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
      while ((n = walker.nextNode())) nodes.push(n as Text);

      nodes.forEach(node => {
        const original = node.nodeValue;
        if (!original || original.trim() === "") return;

        const trimmed = original.trim();
        const translated = dict[trimmed];
        if (translated && translated !== trimmed) {
          originalsRef.current.set(node, original);
          node.nodeValue = original.replace(trimmed, translated);
        }
      });
    }

    // Initial translation
    doTranslate();
    prevLangRef.current = language;

    // Watch for DOM changes (React re-renders, route changes, etc.)
    const observer = new MutationObserver((mutations) => {
      let hasNewNodes = false;
      mutations.forEach(m => {
        if (m.addedNodes.length > 0) hasNewNodes = true;
      });
      if (hasNewNodes) {
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
  }, [language, translate]);

  return null;
}
