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
    } else {
      try {
        const parsed = JSON.parse(storedPreferences);
        if (parsed.analytics && typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag('consent', 'update', {
            analytics_storage: 'granted'
          });
        }
      } catch (e) {
        // ignore parse errors
      }
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
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
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
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("nabtura_cookie_preferences", JSON.stringify(preferences));
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied'
      });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex flex-col justify-end">
      <div className="bg-[#0c1f15]/90 backdrop-blur-3xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] w-full pointer-events-auto relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-nabtura-green/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          {!showPreferences ? (
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
              
              <div className="flex-1 pr-8 lg:pr-0">
                <div className="flex justify-between items-start lg:block">
                  <h3 className="text-lg md:text-xl font-black tracking-tight text-white uppercase mb-2">YOUR PRIVACY. YOUR CHOICE.</h3>
                  {/* Mobile Close Button */}
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="lg:hidden text-gray-500 hover:text-white transition-colors absolute top-6 right-4 sm:right-6"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm font-light text-gray-300 leading-relaxed mb-4 lg:mb-0 max-w-3xl">
                  We use essential technologies to keep the NABTURA website working. With your permission, we may also use optional cookies to improve functionality, understand website use and support relevant marketing.
                </p>
                <div className="flex items-center gap-4 mt-3 lg:hidden">
                  <Link href="/legal/privacy-policy" className="text-[10px] text-gray-400 hover:text-nabtura-green transition-colors font-bold uppercase tracking-widest">
                    Privacy Policy
                  </Link>
                  <span className="text-gray-600">&bull;</span>
                  <Link href="/legal/cookie-policy" className="text-[10px] text-gray-400 hover:text-nabtura-green transition-colors font-bold uppercase tracking-widest">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto bg-nabtura-green text-black px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors text-center shadow-[0_0_15px_rgba(0,255,163,0.2)]"
                >
                  ACCEPT ALL
                </button>
                <button
                  onClick={handleRejectOptional}
                  className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center"
                >
                  REJECT OPTIONAL
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center"
                >
                  MANAGE PREFERENCES
                </button>
                
                {/* Desktop Close Button */}
                <button 
                  onClick={() => setIsVisible(false)}
                  aria-label="Close cookie banner"
                  className="hidden lg:flex items-center justify-center w-10 h-10 ml-2 rounded-full border border-white/10 text-gray-500 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="hidden lg:flex flex-col gap-2 shrink-0 border-l border-white/10 pl-6 h-full justify-center">
                <Link href="/legal/privacy-policy" className="text-[10px] text-gray-400 hover:text-nabtura-green transition-colors font-bold uppercase tracking-widest">
                  Privacy Policy
                </Link>
                <Link href="/legal/cookie-policy" className="text-[10px] text-gray-400 hover:text-nabtura-green transition-colors font-bold uppercase tracking-widest">
                  Cookie Policy
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase">MANAGE YOUR PREFERENCES</h3>
                <button 
                  onClick={() => setShowPreferences(false)}
                  aria-label="Close preferences"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm font-light text-gray-300 mb-6">Choose which optional technologies you allow.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Strictly Necessary */}
                <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Strictly Necessary</h4>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">ALWAYS ACTIVE</span>
                  </div>
                  <p className="text-xs text-gray-400 font-light flex-1">Required for core website operation.</p>
                  <div className="w-12 h-6 rounded-full bg-nabtura-green/50 flex items-center justify-end p-1 mt-2">
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <Check className="w-3 h-3 text-nabtura-green" />
                    </div>
                  </div>
                </div>

                {/* Functional */}
                <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Functional</h4>
                  </div>
                  <p className="text-xs text-gray-400 font-light flex-1">Support enhanced functionality and preferences.</p>
                  <button 
                    onClick={() => setPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                    aria-label="Toggle Functional cookies"
                    className={`w-12 h-6 rounded-full transition-colors flex items-center p-1 mt-2 ${preferences.functional ? 'bg-nabtura-green justify-end' : 'bg-gray-700 justify-start'}`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </button>
                </div>

                {/* Analytics */}
                <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Analytics</h4>
                  </div>
                  <p className="text-xs text-gray-400 font-light flex-1">Help us understand and improve website use.</p>
                  <button 
                    onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    aria-label="Toggle Analytics cookies"
                    className={`w-12 h-6 rounded-full transition-colors flex items-center p-1 mt-2 ${preferences.analytics ? 'bg-nabtura-green justify-end' : 'bg-gray-700 justify-start'}`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Marketing</h4>
                  </div>
                  <p className="text-xs text-gray-400 font-light flex-1">Support campaign measurement and relevant marketing where used.</p>
                  <button 
                    onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                    aria-label="Toggle Marketing cookies"
                    className={`w-12 h-6 rounded-full transition-colors flex items-center p-1 mt-2 ${preferences.marketing ? 'bg-nabtura-green justify-end' : 'bg-gray-700 justify-start'}`}
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
    </div>
  );
}
