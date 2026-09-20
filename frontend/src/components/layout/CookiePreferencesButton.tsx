"use client";

export default function CookiePreferencesButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("openCookiePreferences"));
        }
      }}
      className="hover:text-white transition-colors"
    >
      Cookie Preferences
    </button>
  );
}
