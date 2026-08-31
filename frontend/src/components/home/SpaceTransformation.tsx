"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

const transformations = [
  { before: "EMPTY LAND", after: "SMART GREENHOUSE" },
  { before: "UNUSED ROOM", after: "SMART MICROGREENS" },
  { before: "RESTAURANT TERRACE", after: "DINING FOREST" },
  { before: "SCHOOL COURTYARD", after: "LEARNING GARDEN" },
  { before: "VILLA GARDEN", after: "FRESH FOOD + GREEN LIVING" },
  { before: "ARID SPACE", after: "PURPOSEFUL GREEN" },
];

export default function SpaceTransformation() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-transparent text-white py-16 md:py-12 md:py-16 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 font-bold mb-6 uppercase">
            START WITH THE LOCATION
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            YOU HAVE THE SPACE.<br />
            <span className="text-nabtura-light-green">LET'S EXPLORE THE POSSIBILITY.</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl tracking-wider font-light max-w-4xl mx-auto">
            Garden. Rooftop. Restaurant. School. Hotel. Commercial property. Land.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h4 className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-4 ml-4">Select Starting Point</h4>
            {transformations.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 font-bold tracking-widest text-sm md:text-base border ${
                    isActive 
                      ? "bg-white/10 text-white border-white/20" 
                      : "bg-transparent text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.before}
                </button>
              );
            })}
          </div>

          {/* Transformation Display */}
          <div className="lg:col-span-7">
            <div className="relative bg-transparent border border-white/10 rounded-3xl p-10 md:p-16 min-h-[400px] flex flex-col justify-center overflow-hidden shadow-2xl">
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-green/10 blur-[80px] rounded-full pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col gap-8">
                    {/* Before State */}
                    <div>
                      <span className="inline-block px-3 py-1 rounded-md bg-gray-800 text-gray-400 text-xs font-bold tracking-widest uppercase mb-3">
                        Before
                      </span>
                      <h4 className="text-3xl md:text-4xl font-light text-gray-500">
                        {transformations[activeIndex].before}
                      </h4>
                    </div>

                    {/* Arrow Divider */}
                    <div className="py-4">
                      <ArrowRightCircle className="w-12 h-12 text-nabtura-green/50 animate-pulse" strokeWidth={1} />
                    </div>

                    {/* After State */}
                    <div>
                      <span className="inline-block px-3 py-1 rounded-md bg-nabtura-green/20 text-nabtura-light-green text-xs font-bold tracking-widest uppercase mb-3">
                        NABTURA Transformation
                      </span>
                      <h4 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        {transformations[activeIndex].after}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex justify-end">
              <button className="group flex items-center text-white bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all">
                SHOW US YOUR LOCATION
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-light-green" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
