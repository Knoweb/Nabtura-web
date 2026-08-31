"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const concepts = [
  { id: "dining", title: "Dining Forest", desc: "Dine within nature." },
  { id: "learning", title: "Learning Garden", desc: "Turn nature into a classroom." },
  { id: "oasis", title: "Urban Oasis", desc: "Create a place to pause." },
  { id: "edible", title: "Edible Landscape", desc: "Beauty that can also produce." },
  { id: "rooftop", title: "Productive Rooftop", desc: "Put unused space to work." },
];

const actionWords = ["GROW", "FEED", "TEACH", "RELAX", "GATHER", "BEAUTIFY", "RESTORE", "EXPERIENCE"];

export default function GreenWhereItMatters() {
  const [activeConcept, setActiveConcept] = useState(0);

  // Auto-rotate concepts
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveConcept((prev) => (prev + 1) % concepts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-nabtura-slate text-white py-32 relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center opacity-20 scale-105 transition-transform duration-[20s] ease-linear hover:scale-100 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-nabtura-slate via-nabtura-slate/80 to-nabtura-slate" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm tracking-[0.3em] text-nabtura-light-green font-bold mb-6 uppercase">
          PURPOSE-BUILT GREEN
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
          GREEN CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DO MORE.</span>
        </h3>

        {/* Action Words */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 text-lg md:text-2xl font-light tracking-widest text-gray-300">
          {actionWords.map((word, i) => (
            <div key={word} className="flex items-center">
              <span>{word}</span>
              {i < actionWords.length - 1 && <span className="text-nabtura-green mx-4 md:mx-8 opacity-50">•</span>}
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-24">
          We create purposeful green environments around how people live, work, learn, dine and grow.
        </p>

        {/* Rotating Concepts */}
        <div className="bg-white/5 backdrop-blur-xl/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 max-w-4xl mx-auto shadow-2xl shadow-nabtura-green/5 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-nabtura-green text-black px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
            Concepts
          </div>
          
          <div className="min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeConcept}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {concepts[activeConcept].title}
                </h4>
                <p className="text-xl md:text-2xl text-nabtura-light-green font-light">
                  {concepts[activeConcept].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12 mb-8">
            {concepts.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveConcept(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeConcept === i ? "w-12 bg-nabtura-green" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`View concept ${i + 1}`}
              />
            ))}
          </div>

          <button className="group inline-flex items-center justify-center text-white font-bold tracking-widest border border-white/20 hover:border-nabtura-green hover:bg-nabtura-green/10 rounded-full px-8 py-4 transition-all uppercase text-sm mt-4">
            Explore Possibilities
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
