"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const challenges = [
  {
    id: "food",
    title: "FOOD",
    description: "Grow selected fresh produce closer to where it is needed.",
    image: "/possibility_microgreen_restaurant_1788160519287.jpg",
  },
  {
    id: "water",
    title: "WATER",
    description: "Use one of our most valuable resources more intelligently.",
    image: "/possibility_water_smart_resort_1788160534313.jpg",
  },
  {
    id: "climate",
    title: "CLIMATE",
    description: "Create solutions for demanding growing environments.",
    image: "/possibility_smart_greenhouse_1788160454551.jpg",
  },
  {
    id: "space",
    title: "SPACE",
    description: "Turn available spaces into productive or purposeful green environments.",
    image: "/possibility_productive_rooftop_1788160358894.jpg",
  },
  {
    id: "green",
    title: "GREEN",
    description: "Bring purposeful greenery into increasingly built environments.",
    image: "/possibility_urban_oasis_1788160434157.jpg",
  },
];

export default function Challenge() {
  const [activeTab, setActiveTab] = useState(challenges[0].id);

  const activeChallenge = challenges.find((c) => c.id === activeTab);

  return (
    <section id="explore" className="relative min-h-[80vh] flex items-center bg-transparent text-content overflow-hidden py-12 md:py-16">
      {/* Ambient Glowing Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-nabtura-green/15 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-nabtura-blue/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      {/* Cinematic Video-like Background Animation (Using HD Images due to external video link timeouts) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.8, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.5, ease: "easeInOut" },
              scale: { duration: 25, ease: "linear" } 
            }}
            className="absolute inset-0 bg-cover bg-center mix-blend-screen"
            style={{ backgroundImage: `url('${activeChallenge?.image}')` }}
          />
        </AnimatePresence>
        {/* Softened Gradient Overlays to keep it bright but readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020504]/90 via-[#020504]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020504]/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-16 text-center md:text-left"
        >
          THE WAY WE GROW<br />HAS TO CHANGE.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-20">
          {/* Interactive Words */}
          <div className="flex flex-col gap-6">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                onMouseEnter={() => setActiveTab(challenge.id)}
                onClick={() => setActiveTab(challenge.id)}
                className={`text-left group transition-all duration-300 ${
                  activeTab === challenge.id ? "opacity-100 pl-4" : "opacity-40 hover:opacity-70"
                }`}
              >
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-widest border-l-4 border-transparent">
                  {activeTab === challenge.id && (
                    <motion.span 
                      layoutId="activeBorder"
                      className="absolute -ml-4 w-1 h-12 bg-nabtura-green"
                    />
                  )}
                  {challenge.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Description Display */}
          <div className="hidden md:flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl lg:text-2xl font-light leading-snug text-gray-200 border-l border-divider pl-8 py-4">
                  {activeChallenge?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Mobile Description (shows right under the active word) */}
          <div className="md:hidden mt-4">
            <p className="text-lg font-light text-content-muted">
               {activeChallenge?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

