import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nabtura-slate text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-white text-xl font-bold tracking-widest mb-2">NABTURA</h3>
            <p className="text-gray-300 font-light mb-4">Smart Agriculture & Intelligent Green Solutions</p>
            <p className="text-nabtura-green text-xs font-bold tracking-[0.2em] mb-6">
              GROW FOOD. • MANAGE WATER. • CREATE GREEN.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">SOLUTIONS</h3>
            <ul className="space-y-3 font-light">
              <li><Link href="/solutions/smart-greenhouses" className="hover:text-white transition-colors">Smart Greenhouses</Link></li>
              <li><Link href="/solutions/smart-microgreens" className="hover:text-white transition-colors">Smart Microgreens</Link></li>
              <li><Link href="/solutions/landscapes" className="hover:text-white transition-colors">Landscapes</Link></li>
              <li><Link href="/solutions/smart-irrigation" className="hover:text-white transition-colors">Smart Irrigation</Link></li>
              <li><Link href="/solutions/urban-forests" className="hover:text-white transition-colors">Urban Forests</Link></li>
              <li><Link href="/solutions/desert-greening" className="hover:text-white transition-colors">Desert Greening</Link></li>
              <li><Link href="/solutions/environmental-projects" className="hover:text-white transition-colors">Environmental Projects</Link></li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">EXPLORE</h3>
            <ul className="space-y-3 font-light">
              <li><Link href="/#who-we-serve" className="hover:text-white transition-colors">Who We Serve</Link></li>
              <li><Link href="/possibilities" className="hover:text-white transition-colors">Possibilities</Link></li>
              <li><Link href="/#how-we-work" className="hover:text-white transition-colors">Work With NABTURA</Link></li>
              <li><Link href="/#investment" className="hover:text-white transition-colors">Investment & Partnerships</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About NABTURA</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">INFORGRID FZC</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">CONNECT</h3>
            <ul className="space-y-4 font-light">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-nabtura-green" />
                <a href="tel:+971569300075" className="hover:text-white transition-colors">+971 56 9300075</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-nabtura-green" />
                <a href="mailto:info@nabtura.com" className="hover:text-white transition-colors">info@nabtura.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-nabtura-green" />
                <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
              </li>
              <li className="pt-2">
                <Link href="/" className="text-nabtura-green hover:underline font-bold tracking-wide">
                  www.nabtura.com
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-sm flex flex-col justify-center items-center text-center">
          <p className="text-gray-400 font-bold tracking-widest uppercase mb-2">
            NABTURA — A brand of INFORGRID FZC, UAE
          </p>
          <p className="text-gray-600">&copy; {new Date().getFullYear()} NABTURA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
