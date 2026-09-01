"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

const IMAGES = [
  { src: "/images/uae_green_city.jpg", label: "Sustainable Urban Oasis", location: "DUBAI, UAE" },
  { src: "/images/uae_smart_greenhouse.jpg", label: "Smart Food Production", location: "ABU DHABI, UAE" },
  { src: "/images/uae_water_tech.jpg", label: "Advanced Water Tech", location: "SHARJAH, UAE" },
];

export default function UAECredibility() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
              BASED IN THE UAE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-sand to-yellow-600">BUILT TO THINK BEYOND IT</span>
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

          {/* Photo Content Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end w-full"
          >
            {/* Decorative elements behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-nabtura-sand/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] p-2 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl group">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={IMAGES[currentIndex].src} 
                      alt={IMAGES[currentIndex].location} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Gradient Overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />
              </div>
              
              {/* Subtle floating badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-xl flex items-center justify-between mb-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-nabtura-light-green animate-pulse shadow-[0_0_10px_rgba(21,184,118,0.8)]" />
                      <span className="text-sm font-bold tracking-widest text-white uppercase">{IMAGES[currentIndex].location}</span>
                    </div>
                    <div className="text-xs tracking-widest text-white/50 uppercase">{IMAGES[currentIndex].label}</div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2">
                  {IMAGES.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-nabtura-sand' : 'w-2 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
