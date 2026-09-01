"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Lightbulb, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
export default function FinalCTA() {
  return (
    <section id="contact" className="bg-transparent text-content relative">
      
      {/* Section 16: Behind NABTURA (Corporate Link) */}
      <div className="border-b border-divider py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-content-muted text-xs font-bold tracking-[0.3em] uppercase mb-2">
              BEHIND NABTURA
            </h4>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold tracking-widest text-content">INFORGRID FZC</span>
              <span className="hidden md:inline-block w-px h-6 bg-white/20" />
              <span className="hidden md:inline-block text-content-muted font-light">
                UAE-based corporate platform behind the NABTURA brand.
              </span>
            </div>
          </div>
          <button className="text-nabtura-sand hover:text-content font-bold tracking-widest text-sm uppercase flex items-center transition-colors">
            DISCOVER INFORGRID FZC
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section 17: Final Commercial CTA */}
      <div className="py-16 md:py-20 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nabtura-green/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 max-w-4xl mx-auto leading-tight"
          >
            WHAT COULD WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400">GROW, GREEN</span> OR <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-blue to-cyan-400">TRANSFORM</span> FOR YOU?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {/* Location CTA */}
            <Link href="/contact?type=location" className="block">
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                className="relative group bg-[#050A08]/60 backdrop-blur-xl border border-white/10 hover:border-nabtura-green p-6 lg:p-8 rounded-[1.5rem] overflow-hidden flex flex-col items-center gap-4 shadow-xl hover:shadow-[0_15px_40px_rgba(21,184,118,0.2)] transition-all duration-500 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nabtura-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 group-hover:border-nabtura-green group-hover:bg-nabtura-green flex items-center justify-center transition-all duration-500">
                  <MapPin className="w-6 h-6 text-gray-400 group-hover:text-[#050A08] transition-colors duration-300" />
                </div>
                
                <span className="font-bold tracking-[0.15em] uppercase text-white group-hover:text-nabtura-light-green transition-colors duration-300 text-center text-sm lg:text-base mt-2">
                  I HAVE A LOCATION
                </span>

                <div className="flex items-center gap-2 text-nabtura-light-green opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 font-bold text-[10px] md:text-xs tracking-widest mt-auto">
                  START PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                </div>
              </motion.div>
            </Link>

            {/* Invest CTA */}
            <Link href="/contact?type=invest" className="block">
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                className="relative group bg-[#050A08]/60 backdrop-blur-xl border border-white/10 hover:border-nabtura-sand p-6 lg:p-8 rounded-[1.5rem] overflow-hidden flex flex-col items-center gap-4 shadow-xl hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)] transition-all duration-500 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nabtura-sand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 group-hover:border-nabtura-sand group-hover:bg-nabtura-sand flex items-center justify-center transition-all duration-500">
                  <TrendingUp className="w-6 h-6 text-gray-400 group-hover:text-[#050A08] transition-colors duration-300" />
                </div>
                
                <span className="font-bold tracking-[0.15em] uppercase text-white group-hover:text-nabtura-sand transition-colors duration-300 text-center text-sm lg:text-base mt-2">
                  I WANT TO INVEST
                </span>

                <div className="flex items-center gap-2 text-nabtura-sand opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 font-bold text-[10px] md:text-xs tracking-widest mt-auto">
                  EXPLORE OPTIONS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                </div>
              </motion.div>
            </Link>

            {/* Project CTA */}
            <Link href="/contact?type=project" className="block">
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                className="relative group bg-[#050A08]/60 backdrop-blur-xl border border-white/10 hover:border-nabtura-blue p-6 lg:p-8 rounded-[1.5rem] overflow-hidden flex flex-col items-center gap-4 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)] transition-all duration-500 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nabtura-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 group-hover:border-nabtura-blue group-hover:bg-nabtura-blue flex items-center justify-center transition-all duration-500">
                  <Lightbulb className="w-6 h-6 text-gray-400 group-hover:text-[#050A08] transition-colors duration-300" />
                </div>
                
                <span className="font-bold tracking-[0.15em] uppercase text-white group-hover:text-cyan-400 transition-colors duration-300 text-center text-sm lg:text-base mt-2">
                  I HAVE A PROJECT
                </span>

                <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 font-bold text-[10px] md:text-xs tracking-widest mt-auto">
                  DISCUSS IDEAS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                </div>
              </motion.div>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}

