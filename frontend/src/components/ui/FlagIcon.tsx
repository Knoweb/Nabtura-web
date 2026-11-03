"use client";

import React from "react";

interface FlagIconProps {
  country: "en" | "de" | "ar" | "gb" | "ae" | string;
  className?: string;
}

/**
 * High-definition vector Country Flag Logo component.
 * Renders authentic SVG national flags for UK, Germany, and UAE.
 * Guarantees consistent visual display across all operating systems (especially Windows).
 */
export function FlagIcon({ country, className = "w-5 h-3.5" }: FlagIconProps) {
  const code = country.toLowerCase();

  // Germany Flag (Deutschland 🇩🇪)
  if (code === "de") {
    return (
      <svg
        viewBox="0 0 60 40"
        className={`inline-block shrink-0 rounded-[3px] overflow-hidden shadow-sm border border-white/10 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="60" height="13.33" y="0" fill="#000000" />
        <rect width="60" height="13.33" y="13.33" fill="#DD0000" />
        <rect width="60" height="13.34" y="26.66" fill="#FFCE00" />
      </svg>
    );
  }

  // UAE Flag (United Arab Emirates 🇦🇪)
  if (code === "ar" || code === "ae") {
    return (
      <svg
        viewBox="0 0 60 40"
        className={`inline-block shrink-0 rounded-[3px] overflow-hidden shadow-sm border border-white/10 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Green top bar */}
        <rect x="15" y="0" width="45" height="13.33" fill="#00732F" />
        {/* White middle bar */}
        <rect x="15" y="13.33" width="45" height="13.33" fill="#FFFFFF" />
        {/* Black bottom bar */}
        <rect x="15" y="26.66" width="45" height="13.34" fill="#000000" />
        {/* Red vertical bar at hoist */}
        <rect x="0" y="0" width="15" height="40" fill="#FF0000" />
      </svg>
    );
  }

  // United Kingdom Flag (UK / GB 🇬🇧) for English
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block shrink-0 rounded-[3px] overflow-hidden shadow-sm border border-white/10 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="60" height="40" fill="#012169" />
      {/* White diagonal saltire */}
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFFFFF" strokeWidth="8" />
      {/* Red diagonal saltire */}
      <path d="M0 0 L30 20 M60 40 L30 20 M60 0 L30 20 M0 40 L30 20" stroke="#CF142B" strokeWidth="4.5" />
      {/* White St George's cross */}
      <path d="M30 0 v40 M0 20 h60" stroke="#FFFFFF" strokeWidth="12" />
      {/* Red St George's cross */}
      <path d="M30 0 v40 M0 20 h60" stroke="#CF142B" strokeWidth="7" />
    </svg>
  );
}

export default FlagIcon;

