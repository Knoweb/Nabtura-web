"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, Globe } from "lucide-react";
import CookiePreferencesButton from "./CookiePreferencesButton";
import { useLanguage } from "@/context/LanguageContext";

const NabturaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0 transition-transform group-hover:scale-105 duration-300" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 95 C 20 85, 10 50, 20 30 C 40 30, 55 60, 50 95 Z" fill="#2E7D32"/>
    <path d="M50 95 C 75 80, 95 40, 85 15 C 60 15, 40 50, 50 95 Z" fill="#4CAF50"/>
    <path d="M20 30 Q 35 60 50 95" fill="none" stroke="#05150C" strokeWidth="1.5"/>
    <path d="M85 15 Q 60 50 50 95" fill="none" stroke="#05150C" strokeWidth="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0a1811] text-gray-400 relative border-t border-white/5 overflow-hidden font-sans pt-12">
      {/* Subtle Premium Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 5-COLUMN LINK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 mb-10">
          
          {/* 1. BRAND BLOCK & 9. FINAL BRAND LINE */}
          <div className="flex flex-col h-full">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 group -ml-1">
                <NabturaLogo />
                <div className="flex flex-col pt-1">
                  <span className="text-2xl font-black tracking-[0.15em] text-white group-hover:text-nabtura-green transition-colors leading-none pb-1">
                    NABTURA
                  </span>
                </div>
              </Link>
              <div className="space-y-3 pt-2">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/90 leading-snug">
                  {t.footer.tagline}
                </p>
                <p className="text-[12px] font-semibold text-nabtura-green tracking-wide">
                  GROW FOOD. MANAGE WATER. CREATE GREEN.
                </p>
                <p className="text-[12px] font-light text-gray-400 leading-relaxed pr-2">
                  {t.footer.description}
                </p>
                <p className="text-[10px] text-gray-500 italic">
                  A business of INFORGRID FZC — UAE
                </p>
              </div>
            </div>

            <div className="space-y-1 pt-8 mt-auto">
              <h3 className="text-[10px] font-bold text-white tracking-widest uppercase">Green Can Do More.</h3>
              <p className="text-[12px] font-light text-nabtura-light-green italic leading-snug">
                Grow. Feed. Beautify. Restore. Experience.
              </p>
            </div>
          </div>

          {/* 2. SOLUTIONS & 3. SUPPORTING CAPABILITIES */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-3">{t.footer.solutions}</h4>
            <ul className="space-y-1.5 text-[12px] font-light text-gray-400">
              <li><Link href="/solutions/smart-greenhouses" className="hover:text-nabtura-green transition-colors duration-300">Smart Greenhouses</Link></li>
              <li><Link href="/solutions/smart-microgreens" className="hover:text-nabtura-green transition-colors duration-300">Smart Microgreens</Link></li>
              <li><Link href="/solutions/smart-irrigation" className="hover:text-nabtura-green transition-colors duration-300">Smart Irrigation</Link></li>
              <li><Link href="/solutions/landscapes" className="hover:text-nabtura-green transition-colors duration-300">Landscapes</Link></li>
              <li><Link href="/solutions/urban-forests" className="hover:text-nabtura-green transition-colors duration-300">Urban Forests</Link></li>
              <li><Link href="/solutions/desert-greening" className="hover:text-nabtura-green transition-colors duration-300">Desert Greening</Link></li>
              <li><Link href="/solutions/environmental-projects" className="hover:text-nabtura-green transition-colors duration-300">Environmental Projects</Link></li>
            </ul>
            <Link href="/solutions" className="inline-flex items-center text-[9px] font-bold tracking-widest text-nabtura-green hover:text-white transition-colors uppercase pt-2 group">
              VIEW ALL SOLUTIONS <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mt-6 mb-3">Supporting Capabilities</h4>
            <ul className="space-y-1.5 text-[12px] font-light text-gray-400">
              <li><Link href="/capabilities/smartcare" className="hover:text-nabtura-green transition-colors duration-300">NABTURA SmartCare</Link></li>
              <li><Link href="/capabilities/nursery-solutions" className="hover:text-nabtura-green transition-colors duration-300">NABTURA Nursery Solutions</Link></li>
            </ul>
          </div>

          {/* 5. WHO WE SERVE */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-3">{t.footer.whoWeServe}</h4>
            <ul className="space-y-1.5 text-[12px] font-light text-gray-400">
              <li><Link href="/who-we-serve/hotels-resorts" className="hover:text-nabtura-green transition-colors duration-300">Hotels & Resorts</Link></li>
              <li><Link href="/who-we-serve/restaurants-fb" className="hover:text-nabtura-green transition-colors duration-300">Restaurants & F&B</Link></li>
              <li><Link href="/who-we-serve/developers" className="hover:text-nabtura-green transition-colors duration-300">Developers</Link></li>
              <li><Link href="/who-we-serve/growers-farms" className="hover:text-nabtura-green transition-colors duration-300">Growers & Farms</Link></li>
              <li><Link href="/who-we-serve/landowners" className="hover:text-nabtura-green transition-colors duration-300">Landowners</Link></li>
              <li><Link href="/who-we-serve/homes-villas" className="hover:text-nabtura-green transition-colors duration-300">Homes & Villas</Link></li>
              <li><Link href="/who-we-serve/investors-partners" className="hover:text-nabtura-green transition-colors duration-300">Investors & Partners</Link></li>
            </ul>
            <Link href="/who-we-serve" className="inline-flex items-center text-[9px] font-bold tracking-widest text-nabtura-green hover:text-white transition-colors uppercase pt-2 group">
              VIEW ALL <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4. EXPLORE NABTURA & 6. QUICK ACTIONS */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-3">Explore</h4>
            <ul className="space-y-1.5 text-[12px] font-light text-gray-400">
              <li><Link href="/who-we-serve" className="hover:text-nabtura-green transition-colors duration-300">Who We Serve</Link></li>
              <li><Link href="/possibilities" className="hover:text-nabtura-green transition-colors duration-300">NABTURA Possibilities</Link></li>
              <li><Link href="/work-with-nabtura" className="hover:text-nabtura-green transition-colors duration-300">Work With NABTURA</Link></li>
              <li><Link href="/who-we-serve/investors-partners" className="hover:text-nabtura-green transition-colors duration-300">Investment & Partnerships</Link></li>
              <li><Link href="/about" className="hover:text-nabtura-green transition-colors duration-300">About NABTURA</Link></li>
            </ul>

            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mt-6 mb-3">Start Here</h4>
            <ul className="space-y-1.5 text-[12px] font-light text-gray-400">
              <li><Link href="/solutions" className="hover:text-nabtura-green transition-colors duration-300">Find Your NABTURA Solution</Link></li>
              <li><Link href="/possibilities" className="hover:text-nabtura-green transition-colors duration-300">What Could My Space Become?</Link></li>
              <li><Link href="/contact" className="hover:text-nabtura-green transition-colors duration-300">Contact NABTURA</Link></li>
            </ul>
            <div className="pt-3">
              <Link href="/contact" className="inline-flex items-center text-[9px] font-bold tracking-widest text-white hover:text-nabtura-green transition-colors uppercase group">
                START A CONVERSATION <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 7. CONTACT & 8. SOCIAL */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-3">Contact NABTURA</h4>
            <div className="space-y-3 text-[12px] font-light text-gray-400">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">WhatsApp / Phone</p>
                <a href="tel:+971569300075" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <Phone className="w-3 h-3" /> +971 56 9300075
                </a>
              </div>
              
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Email</p>
                <a href="mailto:info@nabtura.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <Mail className="w-3 h-3" /> info@nabtura.com
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Web</p>
                <a href="https://www.nabtura.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <Globe className="w-3 h-3" /> www.nabtura.com
                </a>
              </div>
              
              <p className="text-gray-500 pt-1 text-[11px]">United Arab Emirates</p>
              
              <div className="pt-2">
                <a href="https://wa.me/971569300075" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] px-4 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase hover:bg-[#25D366] hover:text-[#05150C] transition-all duration-300">
                  <Phone className="w-3 h-3" /> CHAT ON WHATSAPP <ArrowRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mt-6 mb-3">Follow NABTURA</h4>
            <div className="flex gap-2">
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:bg-nabtura-green hover:text-[#05150C] hover:border-nabtura-green transition-all duration-300">
                <LinkedinIcon />
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:bg-nabtura-green hover:text-[#05150C] hover:border-nabtura-green transition-all duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:bg-nabtura-green hover:text-[#05150C] hover:border-nabtura-green transition-all duration-300">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* 10. LEGAL BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-white/10 gap-4">
          <div className="flex flex-col items-center md:items-start gap-1 text-[10px] font-light text-gray-500 text-center md:text-left">
            <span>© 2026 INFORGRID FZC. All rights reserved.</span>
            <span>NABTURA is a business of INFORGRID FZC — UAE.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-light text-gray-500">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors duration-300">{t.footer.privacyPolicy}</Link>
            <Link href="/legal/terms-of-use" className="hover:text-white transition-colors duration-300">{t.footer.termsOfUse}</Link>
            <Link href="/legal/cookie-policy" className="hover:text-white transition-colors duration-300">{t.footer.cookiePolicy}</Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
