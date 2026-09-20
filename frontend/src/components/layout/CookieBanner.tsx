"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Check } from "lucide-react";

type CookiePreferences = {
  strictlyNecessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    strictlyNecessary: true, // Always true
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if the user has already set cookie preferences
    const storedPreferences = localStorage.getItem("nabtura_cookie_preferences");
    if (!storedPreferences) {
      setIsVisible(true);
    }

    const handleOpenPreferences = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };

    window.addEventListener("openCookiePreferences", handleOpenPreferences);
    return () => window.removeEventListener("openCookiePreferences", handleOpenPreferences);
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      strictlyNecessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("nabtura_cookie_preferences", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectOptional = () => {
    const allRejected = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(allRejected);
    localStorage.setItem("nabtura_cookie_preferences", JSON.stringify(allRejected));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("nabtura_cookie_preferences", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center">
      <div className="bg-nabtura-slate border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full pointer-events-auto relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-green/10 blur-[80px] rounded-full pointer-events-none" />

        {!showPreferences ? (
          <div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase">YOUR PRIVACY. YOUR CHOICE.</h3>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm font-light text-gray-300 leading-relaxed mb-6 relative z-10">
              We use essential technologies to keep the NABTURA website working. With your permission, we may also use optional cookies to improve functionality, understand website use and support relevant marketing.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto bg-nabtura-green text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors text-center"
              >
                ACCEPT ALL
              </button>
              <button
                onClick={handleRejectOptional}
                className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center"
              >
                REJECT OPTIONAL
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center"
              >
                MANAGE PREFERENCES
              </button>
            </div>
            <div className="mt-6 text-center sm:text-left relative z-10 flex items-center justify-center sm:justify-start gap-4">
              <Link href="/legal/privacy-policy" className="text-xs text-nabtura-green hover:text-nabtura-light-green transition-colors font-bold uppercase tracking-widest">
                Privacy Policy
              </Link>
              <span className="text-gray-500">&bull;</span>
              <Link href="/legal/cookie-policy" className="text-xs text-nabtura-green hover:text-nabtura-light-green transition-colors font-bold uppercase tracking-widest">
                Cookie Policy
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase">MANAGE PREFERENCES</h3>
              <button 
                onClick={() => setShowPreferences(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-8">
              {/* Strictly Necessary */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Strictly Necessary</h4>
                  <p className="text-xs text-gray-400 font-light">Required for the website to operate securely and function properly.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase">ALWAYS ACTIVE</span>
                  <div className="w-12 h-6 rounded-full bg-nabtura-green/50 flex items-center justify-end p-1">
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <Check className="w-3 h-3 text-nabtura-green" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Functional</h4>
                  <p className="text-xs text-gray-400 font-light">Remembers your preferences to support enhanced website experiences.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                  className={`w-12 h-6 rounded-full transition-colors flex items-center p-1 ${preferences.functional ? 'bg-nabtura-green justify-end' : 'bg-gray-700 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Analytics</h4>
                  <p className="text-xs text-gray-400 font-light">Helps us understand how visitors interact with the website.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-12 h-6 rounded-full transition-colors flex items-center p-1 ${preferences.analytics ? 'bg-nabtura-green justify-end' : 'bg-gray-700 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Marketing</h4>
                  <p className="text-xs text-gray-400 font-light">Used to support relevant marketing campaigns.</p>
                </div>
                <button 
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-12 h-6 rounded-full transition-colors flex items-center p-1 ${preferences.marketing ? 'bg-nabtura-green justify-end' : 'bg-gray-700 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handleSavePreferences}
                className="w-full sm:w-auto bg-nabtura-green text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors text-center"
              >
                SAVE PREFERENCES
              </button>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={handleRejectOptional}
                  className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center"
                >
                  REJECT OPTIONAL
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center"
                >
                  ACCEPT ALL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
