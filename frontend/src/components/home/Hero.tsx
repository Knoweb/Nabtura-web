"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

import Image from "next/image";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();

  const bgImages = [
    "/images/greenhouse.jpg",
    "/images/microgreens.jpg",
    "/images/dubai-water.jpg",
    "/images/dubai-landscapes.jpg",
    "/images/dubai-greenhouse.jpg",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="relative min-h-[80vh] lg:min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#050A08] text-content pt-32 pb-16 px-6">
      {/* Cinematic Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={bgImages[index % bgImages.length]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[index % bgImages.length]}
              alt="Nabtura Background"
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft gradient to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A08]/90 via-[#050A08]/60 to-[#050A08]/90 z-10" />
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto w-full flex flex-col items-center">

        {/* Top Section - Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-3 flex-wrap">
            <span className="text-white">NABTURA</span>
            <span className="text-nabtura-green">{t.hero.eyebrow}</span>
          </p>
        </motion.div>

        {/* Center - Stacked Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white leading-tight drop-shadow-2xl flex flex-col gap-1 items-center mb-4"
        >
          <span>{t.hero.line1}</span>
          <span className="text-gray-300">{t.hero.line2}</span>
          <span className="text-nabtura-green">{t.hero.line3}</span>
        </motion.h1>

        {/* Supporting Line with dual elegant lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 w-full flex justify-center"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gradient-to-l from-nabtura-green to-transparent hidden md:block"></span>
            <span className="text-nabtura-light-green font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm drop-shadow-md">
              {t.hero.tagline}
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-r from-nabtura-green to-transparent hidden md:block"></span>
          </div>
        </motion.div>

        {/* Positioning */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto mb-6 text-base sm:text-lg font-light leading-relaxed text-balance"
        >
          {t.hero.description}
        </motion.p>

        {/* Centered CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mb-8"
        >
          <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="#explore"
              className="w-full flex justify-center sm:w-auto px-10 py-4 bg-gradient-to-r from-nabtura-green to-emerald-400 text-black font-extrabold tracking-widest text-sm rounded-full hover:shadow-[0_0_40px_rgba(0,255,157,0.4)] transition-all uppercase whitespace-nowrap"
            >
              EXPLORE NABTURA
            </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full flex justify-center sm:w-auto px-10 py-4 bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all uppercase whitespace-nowrap"
            >
              {t.hero.cta2}
            </Link>
          </motion.div>
        </motion.div>

        {/* Small Investor Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
            <Link href="#invest" className="text-xs sm:text-sm text-gray-400 hover:text-white flex items-center justify-center gap-3 transition-colors py-2 font-medium tracking-widest uppercase group">
              {t.hero.investCta}
              <span className="text-nabtura-green group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

