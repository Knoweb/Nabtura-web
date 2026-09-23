"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const challenges = [
  {
    id: "food",
    title: "FOOD",
    description: "Grow closer to where it's needed.",
    image: "/possibility_microgreen_restaurant_1788160519287.jpg",
  },
  {
    id: "water",
    title: "WATER",
    description: "Manage every drop.",
    image: "/possibility_water_smart_resort_1788160534313.jpg",
  },
  {
    id: "climate",
    title: "CLIMATE",
    description: "Create environments that thrive.",
    image: "/possibility_smart_greenhouse_1788160454551.jpg",
  },
  {
    id: "space",
    title: "SPACE",
    description: "Use what you have better.",
    image: "/possibility_productive_rooftop_1788160358894.jpg",
  },
];

export default function Challenge() {
  const [activeTab, setActiveTab] = useState(challenges[0].id);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveTab((currentId) => {
        const currentIndex = challenges.findIndex((c) => c.id === currentId);
        const nextIndex = (currentIndex + 1) % challenges.length;
        return challenges[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeChallenge = challenges.find((c) => c.id === activeTab);

  return (
    <section id="why-nabtura" className="relative bg-transparent text-content overflow-hidden pt-4 pb-12 md:pt-8 md:pb-16">
      {/* Ambient Glowing Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-nabtura-green/15 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-nabtura-blue/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      
      {/* Cinematic Background Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.5, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 25, ease: "linear" } 
            }}
            className="absolute inset-0 bg-cover bg-center mix-blend-screen"
            style={{ backgroundImage: `url('${activeChallenge?.image}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1811]/95 via-[#0a1811]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1811]/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-semibold text-nabtura-green">
            A DIFFERENT WAY TO GROW
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight text-white max-w-4xl uppercase"
        >
          THE CHALLENGES ARE CONNECTED
        </motion.h2>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-light leading-relaxed text-gray-300 max-w-3xl mb-8"
        >
          Growing fresh food, managing scarce water and creating green environments demand smarter solutions—especially in challenging climates.
        </motion.p>

        <div 
          className="flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Interactive Words */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-8 pb-4">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                onMouseEnter={() => setActiveTab(challenge.id)}
                onClick={() => setActiveTab(challenge.id)}
                className={`text-left group transition-all duration-300 relative ${
                  activeTab === challenge.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-widest">
                  {challenge.title}
                </h3>
                {activeTab === challenge.id && (
                  <motion.span 
                    layoutId="activeBorder"
                    className="absolute -bottom-4 left-0 w-full h-1 bg-nabtura-green"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Description Display */}
          <div className="flex flex-col justify-center min-h-[80px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-light italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 drop-shadow-md leading-relaxed">
                  {activeChallenge?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 border-t border-white/10 pt-6"
        >
          <p className="text-lg md:text-xl font-medium tracking-wide text-gray-300">
            We don't need a single answer to these challenges. <span className="text-nabtura-green">We need a flexible ecosystem of solutions.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
