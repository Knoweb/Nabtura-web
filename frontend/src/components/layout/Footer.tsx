"use client";

import { useState } from "react";
import { submitEnquiry, submitSubscriber } from "@/lib/api";
import { Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    
    setStatus("loading");
    try {
      await submitSubscriber({ email });
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="bg-[#020504] text-gray-400 relative border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-nabtura-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        
        {/* Top Section: Giant Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24 border-b border-white/10 pb-16">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
              NABTURA
            </h2>
            <p className="text-xl md:text-2xl font-light text-content-muted leading-relaxed">
              Purpose-built green environments. Smart agriculture, water intelligence, and sustainable landscapes for the future.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">STAY UPDATED</h4>
            <form onSubmit={handleSubscribe} className="flex items-center bg-white/5 border border-white/10 rounded-full pl-6 pr-2 py-1.5 focus-within:border-nabtura-green focus-within:bg-white/10 focus-within:ring-1 focus-within:ring-nabtura-green/50 transition-all shadow-[0_0_15px_rgba(46,204,113,0.15)] group relative">
              <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={status === "loading" || status === "success"} className="bg-transparent border-none outline-none text-white placeholder-gray-500 flex-grow py-2 min-w-[220px] text-sm tracking-wide disabled:opacity-50" />
              <button type="submit" disabled={status === "loading" || status === "success"} className="text-black bg-nabtura-green hover:bg-nabtura-light-green transition-colors p-2.5 rounded-full shadow-[0_0_10px_rgba(46,204,113,0.3)] group-hover:scale-105 disabled:opacity-50 flex items-center justify-center min-w-[36px]">
                {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : status === "success" ? <CheckCircle2 className="w-4 h-4 text-black" /> : <ArrowRight className="w-4 h-4" />}</button>{status === "error" && <div className="absolute -bottom-6 text-red-400 text-xs w-full text-center">Failed to subscribe</div>}</form>
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">SOLUTIONS</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><Link href="/solutions/smart-greenhouses" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Smart Greenhouses</Link></li>
              <li><Link href="/solutions/smart-microgreens" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Smart Microgreens</Link></li>
              <li><Link href="/solutions/landscapes" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Landscapes</Link></li>
              <li><Link href="/solutions/smart-irrigation" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Smart Irrigation</Link></li>
              <li><Link href="/solutions/urban-forests" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Urban Forests</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">COMPANY</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><Link href="/about" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>About Us</Link></li>
              <li><Link href="/possibilities" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Possibilities</Link></li>
              <li><Link href="/#how-we-work" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Work With NABTURA</Link></li>
              <li><Link href="/#investment" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>Investment</Link></li>
              <li><Link href="/news" className="hover:text-nabtura-light-green transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-nabtura-green mr-0 group-hover:mr-2 transition-all duration-300"></span>News & Blogs</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="lg:col-span-4 flex flex-col md:flex-row gap-8 lg:gap-16">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">CONTACT</h4>
              <ul className="space-y-6 font-light text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-nabtura-green shrink-0 mt-0.5" />
                  <span className="leading-relaxed">INFORGRID FZC<br/>Sharjah Publishing City<br/>United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-nabtura-green shrink-0" />
                  <a href="tel:+971569300075" className="hover:text-white transition-colors">+971 56 9300075</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-nabtura-green shrink-0" />
                  <a href="mailto:info@nabtura.com" className="hover:text-white transition-colors">info@nabtura.com</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">FOLLOW US</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-nabtura-green hover:text-black hover:border-nabtura-green transition-all">
                  <InstagramIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-nabtura-green hover:text-black hover:border-nabtura-green transition-all">
                  <LinkedinIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-nabtura-green hover:text-black hover:border-nabtura-green transition-all">
                  <TwitterIcon />
                </a>
              </div>
              
              <div className="mt-8">
                 <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-4">CORPORATE</h4>
                 <p className="text-xs font-light text-content-muted">
                   NABTURA is a brand of<br/><strong className="text-white font-medium">INFORGRID FZC</strong>.
                 </p>
              </div>
            </div>
          </div>

          {/* Column 4: Map Embed */}
          <div className="lg:col-span-4 h-[250px] lg:h-full relative rounded-2xl overflow-hidden border border-white/10 group">
             <iframe 
               src="https://maps.google.com/maps?q=Sharjah%20Publishing%20City%20Free%20Zone&t=&z=13&ie=UTF8&iwloc=&output=embed" 
               className="w-full h-full absolute inset-0"
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy">
             </iframe>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} NABTURA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}




