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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-nabtura-slate text-content pt-20">
      {/* Cinematic Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={bgImages[index % bgImages.length]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImages[index % bgImages.length]})` }}
          />
        </AnimatePresence>
        {/* Left-aligned heavy gradient fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A08] via-[#050A08]/90 to-transparent z-10" />
        {/* Bottom gradient to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-nabtura-slate via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 px-6 sm:px-12 lg:px-24 max-w-[1600px] mx-auto w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-nabtura-green"></div>
            <p className="text-sm md:text-base tracking-[0.3em] text-nabtura-green uppercase font-bold drop-shadow-[0_0_10px_rgba(0,255,157,0.3)]">
              Smart Agriculture & Green Solutions
            </p>
          </motion.div>

          {/* Headline Area */}
          <div className="mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-300 mb-2"
            >
              WE BUILD THE FUTURE OF
            </motion.h1>
            
            {/* Dynamic Transitioning Text */}
            <div className="h-24 sm:h-32 md:h-40 flex items-center relative overflow-visible">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute left-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none py-2"
                >
                  {words[index]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-16"
          >
            {/* Pillars */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-lg sm:text-xl font-medium text-white/80 tracking-widest mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-nabtura-green shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
                GROW FOOD
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-nabtura-green shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
                MANAGE WATER
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-nabtura-green shadow-[0_0_10px_rgba(0,255,157,0.8)]"></div>
                CREATE GREEN
              </div>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-nabtura-light-green font-bold tracking-[0.2em] uppercase text-xs sm:text-sm bg-nabtura-green/10 px-6 py-2 rounded-full border border-nabtura-green/30 inline-block">
                Smart &middot; Controlled &middot; Adapted
              </p>
            </div>

            <p className="text-gray-400 max-w-2xl mt-8 text-lg sm:text-xl font-light leading-relaxed text-balance border-l-2 border-white/10 pl-6">
              Based in the UAE. Designed for challenging environments. Built for wider markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center sm:justify-start gap-6"
          >
            <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="#explore"
                className="w-full flex justify-center sm:w-auto px-10 py-5 bg-gradient-to-r from-nabtura-green to-emerald-400 text-black font-extrabold tracking-widest text-sm rounded-full hover:shadow-[0_0_40px_rgba(0,255,157,0.5)] transition-all uppercase"
              >
                EXPLORE NABTURA
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="#contact"
                className="w-full flex justify-center sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-lg border border-white/20 text-white font-bold tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all uppercase"
              >
                OUR CAPABILITIES
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2, duration: 1 }}
             className="mt-12"
          >
            <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
              <Link href="#invest" className="text-sm text-gray-500 hover:text-white flex items-center gap-3 transition-colors py-2">
                <span className="w-8 h-[1px] bg-gray-500"></span> Looking to invest?
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

