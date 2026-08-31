"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

const transformations = [
  { before: "EMPTY LAND", after: "SMART GREENHOUSE", seedBefore: 10, seedAfter: 101 },
  { before: "UNUSED ROOM", after: "SMART MICROGREENS", seedBefore: 20, seedAfter: 201 },
  { before: "RESTAURANT TERRACE", after: "DINING FOREST", seedBefore: 30, seedAfter: 301 },
  { before: "SCHOOL COURTYARD", after: "LEARNING GARDEN", seedBefore: 40, seedAfter: 401 },
  { before: "VILLA GARDEN", after: "FRESH FOOD + GREEN LIVING", seedBefore: 50, seedAfter: 501 },
  { before: "ARID SPACE", after: "PURPOSEFUL GREEN", seedBefore: 60, seedAfter: 601 },
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
            <div className="relative bg-transparent border border-white/10 rounded-3xl p-6 md:p-10 min-h-[500px] flex flex-col justify-center overflow-hidden shadow-2xl">
              
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-green/10 blur-[80px] rounded-full pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-full h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    
                    {/* Before Image Panel */}
                    <div className="relative h-64 md:h-full min-h-[250px] rounded-2xl overflow-hidden group border border-white/5">
                      <img 
                        src={`https://picsum.photos/seed/${transformations[activeIndex].seedBefore}/800/800`} 
                        alt="Before" 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <span className="inline-block px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-gray-400 border border-white/10 text-xs font-bold tracking-widest uppercase mb-3">
                          Before
                        </span>
                        <h4 className="text-2xl font-light text-white leading-tight">
                          {transformations[activeIndex].before}
                        </h4>
                      </div>
                    </div>

                    {/* After Image Panel */}
                    <div className="relative h-64 md:h-full min-h-[250px] rounded-2xl overflow-hidden group border border-nabtura-green/20 shadow-[0_0_30px_rgba(21,184,118,0.1)]">
                      <img 
                        src={`https://picsum.photos/seed/${transformations[activeIndex].seedAfter}/800/800`} 
                        alt="After" 
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      {/* Transformation Arrow (Mobile Overlay) */}
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 md:hidden bg-nabtura-slate rounded-full p-1 border border-white/10">
                        <ArrowRightCircle className="w-8 h-8 text-nabtura-green" />
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <span className="inline-block px-3 py-1 rounded-md bg-nabtura-green/20 backdrop-blur-md border border-nabtura-green/30 text-nabtura-light-green text-xs font-bold tracking-widest uppercase mb-3 shadow-lg">
                          NABTURA Transformation
                        </span>
                        <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                          {transformations[activeIndex].after}
                        </h4>
                      </div>
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
