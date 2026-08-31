import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-white text-xl font-bold tracking-widest mb-6">NABTURA</h3>
            <ul className="space-y-3">
              <li>Smart Agriculture</li>
              <li>Smart Greenhouses</li>
              <li>Smart Microgreens</li>
              <li>Landscapes</li>
              <li>Smart Irrigation</li>
              <li>Urban Forests</li>
              <li>Desert Greening</li>
              <li>Environmental Projects</li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">EXPLORE</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Who We Serve</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Possibilities</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">How We Work</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Investment & Partnerships</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">About NABTURA</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">INFORGRID FZC</Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">CONNECT</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-nabtura-green" />
                <span>+971 56 9300075</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-nabtura-green" />
                <span>info@nabtura.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-nabtura-green" />
                <span>WhatsApp</span>
              </li>
              <li className="pt-2">
                <Link href="https://www.nabtura.com" className="text-nabtura-green hover:underline">
                  www.nabtura.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty or Socials Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">SOCIAL</h3>
            <div className="flex space-x-4">
              {/* Placeholders for social icons */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="sr-only">LinkedIn</span>
                in
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="sr-only">Instagram</span>
                ig
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>NABTURA — A brand of INFORGRID FZC, UAE</p>
          <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} NABTURA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
