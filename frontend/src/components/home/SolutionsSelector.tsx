"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';

const options = [
  { label: "Grow Food", target: "Smart Greenhouses / Smart Microgreens", link: "/solutions#explore" },
  { label: "Manage Water", target: "Smart Irrigation", link: "/solutions/smart-irrigation" },
  { label: "Create a Green Space", target: "Landscapes", link: "/solutions/landscapes" },
  { label: "Create an Urban Forest / Green Experience", target: "Urban Forests", link: "/solutions/urban-forests" },
  { label: "Green Arid or Challenging Land", target: "Desert Greening", link: "/solutions/desert-greening" },
  { label: "Solve a Custom Environmental Challenge", target: "Environmental Projects", link: "/solutions/environmental-projects" },
  { label: "Invest or Partner", target: "Investment & Partnerships", link: "/work-with-nabtura" },
  { label: "I'm Not Sure", target: "Find Your NABTURA Solution", link: "/solutions" },
];

export default function SolutionsSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedOption = selectedIndex !== null ? options[selectedIndex] : null;

  return (
    <section className="py-10 md:py-16 relative border-y border-white/5 z-20">
      {/* Background Image & Gradient overlay */}
      <div className="absolute inset-0 bg-[#020A05] z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0"></div>
      
      {/* Background elements wrapper with overflow hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm tracking-[0.4em] text-emerald-400 font-bold mb-3 uppercase drop-shadow-md"
        >
          WHAT ARE YOU LOOKING FOR?
        </motion.h2>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white font-light mb-8 max-w-2xl mx-auto drop-shadow-sm"
        >
          Tell us what you're interested in and we'll take you to the right place.
        </motion.p>

        {/* Selector Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-visible"
        >
          <h3 className="text-sm font-bold tracking-widest text-white mb-6 uppercase text-left">
            WHAT ARE YOU LOOKING TO DO?
          </h3>

          {/* Custom Dropdown */}
          <div className="relative mb-8 text-left">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_20px_rgba(52,211,153,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'}`}
            >
              <span className={`text-base md:text-lg font-bold tracking-wide ${selectedOption ? 'text-white' : 'text-gray-400'}`}>
                {selectedOption ? selectedOption.label : "Select what you're looking for"}
              </span>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-2"
                >
                  <div className="bg-[#0A2213] border border-white/10 rounded-2xl shadow-inner overflow-y-auto custom-scrollbar max-h-[250px]">
                    <div className="p-2 space-y-1">
                      {options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedIndex(idx);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-4 py-4 rounded-xl flex items-center justify-between transition-colors ${selectedIndex === idx ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                        >
                          <span className="text-sm md:text-base">{option.label}</span>
                          {selectedIndex === idx && <Check className="w-4 h-4 text-emerald-400" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Result & CTA */}
          <AnimatePresence mode="wait">
            {selectedOption ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="text-left flex-1">
                  <span className="text-xs text-gray-500 font-bold tracking-widest uppercase block mb-2">WE RECOMMEND:</span>
                  <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                    {selectedOption.target}
                  </div>
                </div>
                
                <Link 
                  href={selectedOption.link}
                  className="w-full md:w-auto group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 text-black font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(52,211,153,0.3)] shrink-0"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center">
                    TAKE ME THERE <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pt-4 border-t border-white/5 flex items-center justify-center"
              >
                <span className="text-gray-500 text-sm">Please select an option above to continue.</span>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </section>
  );
}
