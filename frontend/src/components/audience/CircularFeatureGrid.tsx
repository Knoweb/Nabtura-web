"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CircularFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  bgImage?: string;
}

interface CircularFeatureGridProps {
  eyebrow?: string;
  headline: React.ReactNode;
  description?: React.ReactNode;
  features: CircularFeature[];
  accentColor?: string;
}

export default function CircularFeatureGrid({
  eyebrow,
  headline,
  description,
  features,
  accentColor = "text-nabtura-green"
}: CircularFeatureGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const accentHex = accentColor.includes("nabtura-green") ? "rgba(46,204,113" : "rgba(255,255,255";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3000); // Cycle every 3 seconds
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-16 md:py-24 max-w-[90rem] mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/3 max-w-xl"
        >
          {eyebrow && (
            <p className={`${accentColor} text-xs font-bold tracking-[0.25em] uppercase mb-4`}>
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
            {headline}
          </h2>
          {description && (
            <div className="text-gray-400 font-light text-lg leading-relaxed">
              {description}
            </div>
          )}
        </motion.div>

        {/* Right Side: 2x2 Circular Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 relative z-10 max-w-4xl">
          {/* Subtle background glow for the grid area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-nabtura-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          {features.map((feature, i) => {
            const isActive = i === activeIndex;
            
            return (
              <div key={i} className="flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-full max-w-[260px] aspect-square rounded-full flex flex-col items-center justify-center text-center p-6 overflow-hidden cursor-pointer group border bg-white/[0.03] backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-700 ${
                    isActive 
                      ? "border-white/40 scale-[1.05] shadow-[0_0_30px_rgba(46,204,113,0.3)] z-20" 
                      : "border-white/10 scale-100 shadow-2xl hover:border-white/20 hover:scale-[1.02] z-10 opacity-70"
                  }`}
                >
                  {/* Animated outer ring glow for active state */}
                  <div 
                    className={`absolute inset-[-2px] rounded-full transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`}
                    style={{
                      boxShadow: `inset 0 0 30px ${accentHex}, 0.3), 0 0 20px ${accentHex}, 0.2)`,
                      border: `2px solid ${accentHex}, 0.6)`
                    }}
                  />

                  {/* Background Image/Pattern with overlay */}
                  {feature.bgImage && (
                    <div className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={feature.bgImage} alt="" className={`w-full h-full object-cover rounded-full transition-transform duration-[10s] ease-linear ${isActive ? 'scale-110' : 'scale-100'}`} />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1811]/30 via-[#0a1811]/50 to-[#0a1811]/90 rounded-full" />
                    </div>
                  )}
                  {!feature.bgImage && (
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.05] to-transparent rounded-full" />
                  )}

                  {/* Icon Container */}
                  {feature.icon && (
                    <div 
                      className={`mb-3 w-14 h-14 rounded-full flex items-center justify-center bg-black/60 border transition-all duration-700 relative z-10 backdrop-blur-md ${
                        isActive ? "border-white/50 bg-black/40 shadow-[0_0_20px_rgba(46,204,113,0.4)]" : "border-white/10"
                      }`}
                    >
                      <div className={`${accentColor} transition-transform duration-700 ${isActive ? 'scale-125 drop-shadow-[0_0_8px_rgba(46,204,113,0.8)]' : 'scale-100'}`}>
                        {feature.icon}
                      </div>
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="relative z-10 px-2">
                    <h3 className={`text-lg md:text-xl font-bold uppercase tracking-wider mb-2 transition-all duration-700 ${
                      isActive ? `${accentColor} drop-shadow-[0_0_10px_rgba(46,204,113,0.3)]` : 'text-gray-400'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs md:text-sm font-light leading-relaxed transition-all duration-700 ${
                      isActive ? 'text-gray-200' : 'text-gray-500'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
