import Link from "next/link";
import { Mail, MessageCircle, ExternalLink } from "lucide-react";
import CookiePreferencesButton from "./CookiePreferencesButton";

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

export default function Footer() {
  return (
    <footer className="bg-nabtura-slate text-gray-400 relative border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-nabtura-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Block 1: General */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500 mb-2">
              NABTURA
            </h2>
            <p className="text-sm font-light text-content-muted leading-relaxed">
              Intelligent Agriculture. <br/>Sustainable Futures.
            </p>
            <div className="space-y-3 font-light text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-nabtura-green shrink-0" />
                <a href="mailto:info@nabtura.com" className="hover:text-white transition-colors">info@nabtura.com</a>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/contact" className="inline-block bg-nabtura-green text-black px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors shadow-lg">
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Block 2: Solutions */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">SOLUTIONS</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><Link href="/solutions/smart-greenhouses" className="hover:text-nabtura-light-green transition-colors">Smart Greenhouses</Link></li>
              <li><Link href="/solutions/smart-microgreens" className="hover:text-nabtura-light-green transition-colors">Smart Microgreens</Link></li>
              <li><Link href="/solutions/smart-irrigation" className="hover:text-nabtura-light-green transition-colors">Smart Irrigation</Link></li>
              <li><Link href="/solutions/landscapes" className="hover:text-nabtura-light-green transition-colors">Edible Landscapes</Link></li>
              <li><Link href="/capabilities/smartcare" className="hover:text-nabtura-light-green transition-colors">SmartCare</Link></li>
            </ul>
          </div>

          {/* Block 3: Who We Serve */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">WHO WE SERVE</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><Link href="/who-we-serve/hotels-resorts" className="hover:text-nabtura-light-green transition-colors">Hotels & Resorts</Link></li>
              <li><Link href="/who-we-serve/restaurants-fb" className="hover:text-nabtura-light-green transition-colors">Restaurants & F&B</Link></li>
              <li><Link href="/who-we-serve/developers" className="hover:text-nabtura-light-green transition-colors">Developers</Link></li>
              <li><Link href="/who-we-serve/growers-farms" className="hover:text-nabtura-light-green transition-colors">Growers & Farms</Link></li>
              <li><Link href="/who-we-serve/homes-villas" className="hover:text-nabtura-light-green transition-colors">Homes & Villas</Link></li>
            </ul>
          </div>

          {/* Block 4: Connect */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">CONNECT</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-sm font-light hover:text-nabtura-green transition-colors group">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-nabtura-green group-hover:text-black group-hover:border-nabtura-green transition-all">
                  <LinkedinIcon />
                </div>
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-3 text-sm font-light hover:text-nabtura-green transition-colors group">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-nabtura-green group-hover:text-black group-hover:border-nabtura-green transition-all">
                  <InstagramIcon />
                </div>
                Instagram
              </a>
              <a href="#" className="flex items-center gap-3 text-sm font-light hover:text-nabtura-green transition-colors group">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-nabtura-green group-hover:text-black group-hover:border-nabtura-green transition-all">
                  <FacebookIcon />
                </div>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-light text-gray-500 gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>© 2026 INFORGRID FZC. All rights reserved.</p>
            <p>NABTURA is a business of INFORGRID FZC — UAE.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
