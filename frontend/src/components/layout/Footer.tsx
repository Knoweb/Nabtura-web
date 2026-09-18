import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

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
    <footer className="bg-[#020504] text-gray-400 relative border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-nabtura-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        {/* Top Section: Brand Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
              NABTURA
            </h2>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-6">SMART AGRICULTURE & INTELLIGENT GREEN SOLUTIONS</p>
            <p className="text-lg md:text-xl font-light text-nabtura-green mb-6">GROW FOOD. MANAGE WATER. CREATE GREEN.</p>
            <p className="text-sm font-light text-content-muted leading-relaxed">
              Based in the UAE. Designed for challenging environments. Built for wider markets.<br />
              A business of INFORGRID FZC — UAE
            </p>
          </div>
          
          <div className="text-left lg:text-right">
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-2">GREEN CAN DO MORE.</h3>
            <p className="text-sm font-light text-content-muted tracking-wide">Grow. Feed. Beautify. Restore. Experience.</p>
          </div>
        </div>

        {/* Middle Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Solutions & Capabilities */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">SOLUTIONS</h4>
              <ul className="space-y-3 font-light text-sm">
                <li><Link href="/solutions/smart-greenhouses" className="hover:text-nabtura-light-green transition-colors">Smart Greenhouses</Link></li>
                <li><Link href="/solutions/smart-microgreens" className="hover:text-nabtura-light-green transition-colors">Smart Microgreens</Link></li>
                <li><Link href="/solutions/smart-irrigation" className="hover:text-nabtura-light-green transition-colors">Smart Irrigation</Link></li>
                <li><Link href="/solutions/landscapes" className="hover:text-nabtura-light-green transition-colors">Landscapes</Link></li>
                <li><Link href="/solutions/urban-forests" className="hover:text-nabtura-light-green transition-colors">Urban Forests</Link></li>
                <li><Link href="/solutions/desert-greening" className="hover:text-nabtura-light-green transition-colors">Desert Greening</Link></li>
                <li><Link href="/solutions/environmental-projects" className="hover:text-nabtura-light-green transition-colors">Environmental Projects</Link></li>
              </ul>
              <Link href="/solutions" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-nabtura-green hover:text-white transition-colors mt-6">
                VIEW ALL SOLUTIONS <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">SUPPORTING CAPABILITIES</h4>
              <ul className="space-y-3 font-light text-sm">
                <li><Link href="/capabilities/smartcare" className="hover:text-nabtura-light-green transition-colors">NABTURA SmartCare</Link></li>
                <li><Link href="/capabilities/nursery-solutions" className="hover:text-nabtura-light-green transition-colors">NABTURA Nursery Solutions</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Explore & Who We Serve */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">EXPLORE</h4>
              <ul className="space-y-3 font-light text-sm">
                <li><Link href="/who-we-serve" className="hover:text-nabtura-light-green transition-colors">Who We Serve</Link></li>
                <li><Link href="/possibilities" className="hover:text-nabtura-light-green transition-colors">NABTURA Possibilities</Link></li>
                <li><Link href="/#how-we-work" className="hover:text-nabtura-light-green transition-colors">Work With NABTURA</Link></li>
                <li><Link href="/investment" className="hover:text-nabtura-light-green transition-colors">Investment & Partnerships</Link></li>
                <li><Link href="/about" className="hover:text-nabtura-light-green transition-colors">About NABTURA</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">WHO WE SERVE</h4>
              <ul className="space-y-3 font-light text-sm">
                <li><Link href="/who-we-serve/hotels-and-resorts" className="hover:text-nabtura-light-green transition-colors">Hotels & Resorts</Link></li>
                <li><Link href="/who-we-serve/restaurants-and-fb" className="hover:text-nabtura-light-green transition-colors">Restaurants & F&B</Link></li>
                <li><Link href="/who-we-serve/developers" className="hover:text-nabtura-light-green transition-colors">Developers</Link></li>
                <li><Link href="/who-we-serve/growers-and-farms" className="hover:text-nabtura-light-green transition-colors">Growers & Farms</Link></li>
                <li><Link href="/who-we-serve/landowners" className="hover:text-nabtura-light-green transition-colors">Landowners</Link></li>
                <li><Link href="/who-we-serve/homes-and-villas" className="hover:text-nabtura-light-green transition-colors">Homes & Villas</Link></li>
                <li><Link href="/investment" className="hover:text-nabtura-light-green transition-colors">Investors & Partners</Link></li>
              </ul>
              <Link href="/who-we-serve" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-nabtura-green hover:text-white transition-colors mt-6">
                VIEW ALL <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Actions & Contact */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">START HERE</h4>
              <ul className="space-y-3 font-light text-sm mb-6">
                <li><Link href="/solutions#find" className="hover:text-nabtura-light-green transition-colors">Find Your NABTURA Solution</Link></li>
                <li><Link href="/possibilities" className="hover:text-nabtura-light-green transition-colors">What Could My Space Become?</Link></li>
                <li><Link href="/contact" className="hover:text-nabtura-light-green transition-colors">Contact NABTURA</Link></li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-nabtura-green text-black px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors shadow-lg">
                START A CONVERSATION <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">CONTACT NABTURA</h4>
              <ul className="space-y-4 font-light text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-nabtura-green shrink-0" />
                  <a href="tel:+971569300075" className="hover:text-white transition-colors">WhatsApp / Phone: +971 56 9300075</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-nabtura-green shrink-0" />
                  <a href="mailto:info@nabtura.com" className="hover:text-white transition-colors">Email: info@nabtura.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-nabtura-green shrink-0" />
                  <a href="https://www.nabtura.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web: www.nabtura.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-nabtura-green shrink-0" />
                  <span>United Arab Emirates</span>
                </li>
              </ul>
              <a href="#" className="inline-flex items-center gap-2 border border-nabtura-green text-nabtura-green px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-green hover:text-black transition-colors mt-6">
                <MessageCircle className="w-4 h-4" /> CHAT ON WHATSAPP
              </a>
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-6">FOLLOW NABTURA</h4>
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

        {/* Bottom Section: Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-light">
          <div className="space-y-1">
            <p>&copy; {new Date().getFullYear()} INFORGRID FZC. All rights reserved.</p>
            <p className="text-gray-500">NABTURA is a business of INFORGRID FZC — UAE.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
