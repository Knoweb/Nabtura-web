"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function UAECredibility() {
  return (
    <section className="bg-transparent text-white relative py-16 md:py-24 border-b border-white/5 overflow-hidden">
      
      {/* UAE Background */}
      <div className="absolute inset-0 z-0 mix-blend-screen opacity-30">
        <div className="absolute inset-0 bg-[url('/smart_landscapes_mockup_1788109519811.jpg')] bg-cover bg-center grayscale sepia-[0.3]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#020504]/90 via-[#020504]/80 to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
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

          {/* Photo Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative elements behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-nabtura-sand/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] rounded-full p-2 border border-nabtura-sand/30 bg-black/40 backdrop-blur-md shadow-[0_0_50px_rgba(212,175,55,0.15)]">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#020504]">
                {/* Scale added to zoom in and crop out any screenshot borders */}
                <Image 
                  src="/images/founder_new.png" 
                  alt="Founder" 
                  fill 
                  className="object-cover scale-[1.35] origin-center"
                  sizes="(max-width: 768px) 320px, 480px"
                  priority
                />
              </div>
            </div>
            
            {/* Subtle floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-[#020504]/90 backdrop-blur-xl border border-nabtura-sand/30 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-nabtura-light-green animate-pulse shadow-[0_0_10px_rgba(21,184,118,0.8)]" />
              <span className="text-sm md:text-base font-bold tracking-widest text-white uppercase">Leadership</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
