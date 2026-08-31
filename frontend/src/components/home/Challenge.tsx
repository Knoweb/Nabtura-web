"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const challenges = [
  {
    id: "food",
    title: "FOOD",
    description: "Grow selected fresh produce closer to where it is needed.",
    bgImage: "bg-gradient-to-br from-green-900 to-black",
  },
  {
    id: "water",
    title: "WATER",
    description: "Use one of our most valuable resources more intelligently.",
    bgImage: "bg-gradient-to-br from-blue-900 to-black",
  },
  {
    id: "climate",
    title: "CLIMATE",
    description: "Create solutions for demanding growing environments.",
    bgImage: "bg-gradient-to-br from-orange-900 to-black",
  },
  {
    id: "space",
    title: "SPACE",
    description: "Turn available spaces into productive or purposeful green environments.",
    bgImage: "bg-gradient-to-br from-stone-800 to-black",
  },
  {
    id: "green",
    title: "GREEN",
    description: "Bring purposeful greenery into increasingly built environments.",
    bgImage: "bg-gradient-to-br from-emerald-900 to-black",
  },
];

export default function Challenge() {
  const [activeTab, setActiveTab] = useState(challenges[0].id);

  const activeChallenge = challenges.find((c) => c.id === activeTab);

  return (
    <section id="explore" className="relative min-h-[80vh] flex items-center bg-transparent text-white overflow-hidden py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${activeChallenge?.bgImage} opacity-30`}
        />
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-16 text-center md:text-left"
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
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-widest border-l-4 border-transparent">
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
                <p className="text-2xl lg:text-4xl font-light leading-snug text-gray-200 border-l border-white/20 pl-8 py-4">
                  {activeChallenge?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Mobile Description (shows right under the active word) */}
          <div className="md:hidden mt-4">
            <p className="text-xl font-light text-gray-300">
               {activeChallenge?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
