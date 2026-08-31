"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const words = [
  "CONTROLLED AGRICULTURE",
  "MICROGREENS",
  "INTELLIGENT LANDSCAPE",
  "WATER",
  "GREENER ENVIRONMENT",
];

const bgImages = [
  "/images/dubai-landscapes.jpg",
  "/images/dubai-greenhouse.jpg",
  "/images/dubai-water.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Background sequence mapping to: controlled agriculture → microgreens → smart irrigation/water → landscape → transformed green environment.
  const bgImages = [
    "/images/greenhouse.jpg",
    "/images/microgreens.jpg",
    "/images/dubai-water.jpg",
    "/images/dubai-landscapes.jpg",
    "/images/dubai-greenhouse.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // 5 seconds per visual
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-nabtura-slate text-content pt-32 pb-16">
      {/* Cinematic Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={bgImages[index % bgImages.length]}
            initial={{ opacity: 0, scale: 1.1, filter: "brightness(0.7)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
            exit={{ opacity: 0, filter: "brightness(0.7)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImages[index % bgImages.length]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A08]/90 via-[#050A08]/70 to-[#050A08]/90 z-10" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Small Identifier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center gap-2"
        >
          <span className="text-xl md:text-2xl font-bold tracking-[0.3em] text-white">NABTURA</span>
          <p className="text-xs md:text-sm tracking-[0.4em] text-nabtura-green uppercase font-semibold drop-shadow-md">
            SMART AGRICULTURE & INTELLIGENT GREEN SOLUTIONS
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl mb-8 flex flex-col gap-2"
        >
          <span>GROW FOOD.</span>
          <span>MANAGE WATER.</span>
          <span>CREATE GREEN.</span>
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-nabtura-light-green font-medium tracking-[0.2em] uppercase text-lg sm:text-xl mb-6"
        >
          Smart. Controlled. Adapted.
        </motion.p>

        {/* Positioning */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-gray-300 max-w-2xl mx-auto mb-16 text-base sm:text-lg font-light leading-relaxed text-balance"
        >
          Based in the UAE. Designed for challenging environments. Built for wider markets.
        </motion.p>

        {/* Centered Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="#explore"
              className="w-full flex justify-center sm:w-auto px-10 py-4 bg-gradient-to-r from-nabtura-green to-emerald-400 text-black font-extrabold tracking-widest text-sm rounded-full hover:shadow-[0_0_40px_rgba(0,255,157,0.4)] transition-all uppercase"
            >
              EXPLORE NABTURA
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="#contact"
              className="w-full flex justify-center sm:w-auto px-10 py-4 bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all uppercase"
            >
              TELL US ABOUT YOUR LOCATION
            </Link>
          </motion.div>
        </motion.div>

        {/* Small Investor Link */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="mt-16"
        >
          <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
            <Link href="#invest" className="text-sm text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-colors p-2 font-medium tracking-wide">
              Looking to invest? Explore opportunities <span className="text-nabtura-green">→</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

