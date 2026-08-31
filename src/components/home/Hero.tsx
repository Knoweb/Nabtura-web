"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const words = [
  "CONTROLLED AGRICULTURE.",
  "MICROGREENS.",
  "INTELLIGENT LANDSCAPE.",
  "WATER.",
  "GREENER ENVIRONMENT.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
        {/* Placeholder for actual background image/video. Using a dark gradient for now. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] text-gray-400 mb-6 uppercase"
        >
          Smart Agriculture & Intelligent Green Solutions
        </motion.p>

        {/* Dynamic Transitioning Text */}
        <div className="h-32 sm:h-40 md:h-48 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="space-y-4 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 text-xl sm:text-2xl font-light text-gray-300">
            <span>GROW FOOD.</span>
            <span className="hidden sm:inline">•</span>
            <span>MANAGE WATER.</span>
            <span className="hidden sm:inline">•</span>
            <span>CREATE GREEN.</span>
          </div>
          <p className="text-nabtura-green font-medium tracking-wide">
            Smart. Controlled. Adapted.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm sm:text-base">
            Based in the UAE. Designed for challenging environments. Built for wider markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#explore"
            className="w-full sm:w-auto px-8 py-4 bg-nabtura-green text-black font-semibold rounded-full hover:bg-nabtura-light-green transition-all transform hover:scale-105"
          >
            EXPLORE NABTURA
          </Link>
          <Link
            href="#location"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all transform hover:scale-105"
          >
            TELL US ABOUT YOUR LOCATION
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="mt-12"
        >
          <Link href="#invest" className="text-sm text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
            Looking to invest? <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
