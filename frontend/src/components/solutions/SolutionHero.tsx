"use client";

import { motion } from "framer-motion";

interface SolutionHeroProps {
  eyebrow: string;
  headline: string;
  tagline: string;
  bgImageUrl: string;
  accentColor?: string;
}

export default function SolutionHero({
  eyebrow,
  headline,
  tagline,
  bgImageUrl,
  accentColor = "text-nabtura-green"
}: SolutionHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20 border-b border-divider">
      
      {/* Background Image & Blend */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-105"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020504]/90 via-[#020504]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`text-sm tracking-[0.3em] ${accentColor} font-bold mb-6 uppercase`}>
            {eyebrow}
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-content mb-8 leading-tight">
            {headline}
          </h2>
          <div className="bg-overlay backdrop-blur-md border border-divider p-6 rounded-2xl inline-block">
            <p className="text-xl md:text-2xl text-content-muted font-light tracking-wide uppercase">
              {tagline}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

