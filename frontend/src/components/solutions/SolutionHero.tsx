"use client";

import { motion } from "framer-motion";

interface SolutionHeroProps {
  eyebrow: string;
  headline: React.ReactNode;
  tagline: string;
  description?: string;
  bgImageUrl: string;
  accentColor?: string;
  children?: React.ReactNode;
}

export default function SolutionHero({
  eyebrow,
  headline,
  tagline,
  description,
  bgImageUrl,
  accentColor = "text-nabtura-green",
  children
}: SolutionHeroProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-4 border-b border-white/5">

      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 scale-105"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
        />
        {/* Radial vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#09110E_100%)] opacity-80" />
        {/* Bottom fade into the page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09110E] via-[#09110E]/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`text-xs md:text-sm tracking-[0.4em] ${accentColor} font-bold mb-6 uppercase drop-shadow-md`}>
            {eyebrow}
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-normal mb-5 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {headline}
          </h2>
          <div className="relative group inline-block mx-4">
            {/* Ambient glow behind the box */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl group-hover:bg-white/10 transition-colors duration-700"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 p-6 md:p-5 rounded-3xl shadow-2xl transition-all duration-700 overflow-hidden">
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <p className="text-lg md:text-lg text-gray-300 font-light tracking-wide uppercase leading-relaxed max-w-3xl mx-auto">
                {tagline}
              </p>
            </div>
          </div>

          {description && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 text-gray-400 text-sm md:text-lg font-light max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

