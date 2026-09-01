"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const concepts = [
  { id: "dining", title: "Dining Forest", desc: "Dine within nature.", image: "/possibility_forest_restaurant_1788160295877.jpg" },
  { id: "learning", title: "Learning Garden", desc: "Turn nature into a classroom.", image: "/possibility_green_school_1788160313277.jpg" },
  { id: "oasis", title: "Urban Oasis", desc: "Create a place to pause.", image: "/possibility_urban_oasis_1788160434157.jpg" },
  { id: "edible", title: "Edible Landscape", desc: "Beauty that can also produce.", image: "/possibility_edible_corporate_campus_1788160553884.jpg" },
  { id: "rooftop", title: "Productive Rooftop", desc: "Put unused space to work.", image: "/possibility_productive_rooftop_1788160358894.jpg" },
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
    <section className="bg-transparent text-content py-16 md:py-12 md:py-16 relative overflow-hidden">
      {/* Static subtle background for the section */}
      <div className="absolute inset-0 z-0 bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-nabtura-slate via-nabtura-slate/50 to-nabtura-slate pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm tracking-[0.3em] text-nabtura-light-green font-bold mb-6 uppercase">
          PURPOSE-BUILT GREEN
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
          GREEN CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DO MORE.</span>
        </h3>

        {/* Action Words */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 text-lg md:text-2xl font-light tracking-widest text-content-muted items-center">
          {actionWords.map((word, i) => (
            <div key={word} className="flex items-center">
              <span>{word}</span>
              {i < actionWords.length - 1 && (
                <div className="mx-4 md:mx-8 flex items-center justify-center relative w-2 h-2">
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className="absolute w-3 h-3 bg-nabtura-green rounded-full blur-[3px]"
                  />
                  <div className="w-1.5 h-1.5 bg-nabtura-light-green rounded-full relative z-10" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-content-muted max-w-3xl mx-auto font-light leading-relaxed mb-24">
          We create purposeful green environments around how people live, work, learn, dine and grow.
        </p>

        {/* Rotating Concepts */}
        <div className="bg-overlay backdrop-blur-xl/50 backdrop-blur-xl border border-divider rounded-[3rem] p-8 md:p-16 max-w-4xl mx-auto shadow-2xl shadow-nabtura-green/5 relative group">
          
          {/* Card Dynamic Sliding Background */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden z-0 pointer-events-none">
            <AnimatePresence>
              <motion.div
                key={activeConcept}
                initial={{ opacity: 0, x: 50, scale: 1.05 }}
                animate={{ opacity: 0.4, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${concepts[activeConcept].image}')` }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-nabtura-slate via-nabtura-slate/60 to-nabtura-slate/40" />
          </div>

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-nabtura-green text-black px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase z-20">
            Concepts
          </div>

          {/* Manual Navigation Arrows */}
          <button 
            onClick={() => setActiveConcept((prev) => (prev - 1 + concepts.length) % concepts.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 bg-white/5 hover:bg-nabtura-green text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Previous Concept"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => setActiveConcept((prev) => (prev + 1) % concepts.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 bg-white/5 hover:bg-nabtura-green text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Next Concept"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="min-h-[120px] flex items-center justify-center relative z-10 px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeConcept}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-content mb-4">
                  {concepts[activeConcept].title}
                </h4>
                <p className="text-xl md:text-2xl text-nabtura-light-green font-light">
                  {concepts[activeConcept].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12 mb-8 relative z-10">
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

          <Link href="/possibilities" className="relative z-10 group/btn inline-flex items-center justify-center text-content font-bold tracking-widest border border-divider hover:border-nabtura-green hover:bg-nabtura-green/10 rounded-full px-8 py-4 transition-all uppercase text-sm mt-4">
            Explore Possibilities
            <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

