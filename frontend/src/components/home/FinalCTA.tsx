"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Lightbulb, Phone, Mail, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-nabtura-slate text-white relative">
      
      {/* Section 16: Behind NABTURA (Corporate Link) */}
      <div className="border-b border-white/5 py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-2">
              BEHIND NABTURA
            </h4>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold tracking-widest text-white">INFORGRID FZC</span>
              <span className="hidden md:inline-block w-px h-6 bg-white/20" />
              <span className="hidden md:inline-block text-gray-400 font-light">
                UAE-based corporate platform behind the NABTURA brand.
              </span>
            </div>
          </div>
          <button className="text-nabtura-sand hover:text-white font-bold tracking-widest text-sm uppercase flex items-center transition-colors">
            DISCOVER INFORGRID FZC
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section 17: Final Commercial CTA */}
      <div className="py-32 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nabtura-green/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-20 max-w-5xl mx-auto leading-tight">
            WHAT COULD WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-nabtura-green">GROW, GREEN</span> OR <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-blue to-cyan-400">TRANSFORM</span> FOR YOU?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
            <button className="bg-white/5 hover:bg-nabtura-green hover:text-black border border-white/10 p-8 rounded-3xl font-bold tracking-widest uppercase transition-all group flex flex-col items-center gap-4">
              <MapPin className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors" />
              I HAVE A LOCATION
            </button>
            <button className="bg-white/5 hover:bg-nabtura-sand hover:text-black border border-white/10 p-8 rounded-3xl font-bold tracking-widest uppercase transition-all group flex flex-col items-center gap-4">
              <TrendingUp className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors" />
              I WANT TO INVEST
            </button>
            <button className="bg-white/5 hover:bg-nabtura-blue hover:text-black border border-white/10 p-8 rounded-3xl font-bold tracking-widest uppercase transition-all group flex flex-col items-center gap-4">
              <Lightbulb className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors" />
              I HAVE A PROJECT IN MIND
            </button>
          </div>

          <div className="border-t border-white/10 pt-16 max-w-3xl mx-auto">
            <h4 className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-8">
              NOT SURE? TALK TO NABTURA.
            </h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <a href="#" className="flex items-center gap-3 text-white hover:text-nabtura-green transition-colors font-bold tracking-wider">
                <MessageCircle className="w-5 h-5 text-nabtura-green" />
                WhatsApp
              </a>
              <a href="tel:+971569300075" className="flex items-center gap-3 text-white hover:text-nabtura-green transition-colors font-bold tracking-wider">
                <Phone className="w-5 h-5 text-nabtura-green" />
                +971 56 9300075
              </a>
              <a href="mailto:info@nabtura.com" className="flex items-center gap-3 text-white hover:text-nabtura-green transition-colors font-bold tracking-wider">
                <Mail className="w-5 h-5 text-nabtura-green" />
                info@nabtura.com
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
