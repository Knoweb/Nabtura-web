"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function UAECredibility() {
  return (
    <section className="bg-transparent text-white relative py-16 md:py-12 md:py-16 border-b border-white/5 overflow-hidden">
      
      {/* UAE Background */}
      <div className="absolute inset-0 z-0 mix-blend-screen opacity-30">
        <div className="absolute inset-0 bg-[url('/smart_landscapes_mockup_1788109519811.jpg')] bg-cover bg-center grayscale sepia-[0.3]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#020504]/90 via-[#020504]/70 to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-sm tracking-[0.3em] text-nabtura-sand font-bold mb-6 uppercase flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            OUR BASE
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white leading-tight">
            BASED IN THE UAE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-sand to-yellow-600">BUILT TO THINK BEYOND IT.</span>
          </h3>

          <div className="bg-nabtura-sand/10 border-l-4 border-nabtura-sand p-6 mb-10 rounded-r-2xl">
            <p className="text-lg md:text-xl font-bold tracking-widest text-nabtura-sand uppercase">
              Based in the UAE. Designed for challenging environments. Built for wider markets.
            </p>
          </div>

          <p className="text-gray-300 text-xl font-light leading-relaxed mb-12">
            Our UAE base places us close to some of the world’s most demanding challenges in climate, water management, food production and urban greening. That experience shapes how we approach every location.
          </p>

          <Link href="/about">
            <button className="group inline-flex items-center text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-nabtura-sand px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all">
              ABOUT NABTURA
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-sand" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
