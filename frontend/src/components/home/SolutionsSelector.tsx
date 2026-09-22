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
      {/* Background Base */}
      <div className="absolute inset-0 bg-[#0a150f] z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay z-0"></div>
      
      {/* Animated Background Grid & Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        {/* Lighter, brighter animated orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0, -100, 0],
            y: [0, -50, 50, -50, 0],
            scale: [1, 1.2, 0.9, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-emerald-400/20 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0, 100, 0],
            y: [0, 50, -50, 50, 0],
            scale: [1, 1.3, 0.8, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] bg-[#15B876]/20 blur-[150px] rounded-full mix-blend-screen"
        />
        
        {/* Clean, organized animated grid */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0px 0px", "0px 40px"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center space-x-2 mb-4"
        >
          <div className="w-8 h-[1px] bg-emerald-500/50"></div>
          <h2 className="text-xs md:text-sm tracking-[0.4em] text-emerald-400 font-bold uppercase drop-shadow-md">
            WHAT ARE YOU LOOKING FOR?
          </h2>
          <div className="w-8 h-[1px] bg-emerald-500/50"></div>
        </motion.div>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white font-light mb-12 max-w-2xl mx-auto drop-shadow-sm"
        >
          Tell us what you're interested in and we'll take you to the right place.
        </motion.p>

        {/* Selector Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 20 }}
          className="bg-white/[0.04] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-visible"
          style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)' }}
        >
          <h3 className="text-sm font-bold tracking-widest text-white mb-6 uppercase text-left">
            WHAT ARE YOU LOOKING TO DO?
          </h3>

          {/* Custom Dropdown */}
          <div className="relative mb-8 text-left">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl border transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-500/50 ${isOpen ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_30px_rgba(52,211,153,0.15)]' : 'bg-black/40 border-white/10 hover:border-white/20 hover:bg-black/60 hover:shadow-lg'}`}
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
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden mt-2 absolute w-full z-50 rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl bg-[#030e08]/95"
                >
                  <div className="overflow-y-auto custom-scrollbar max-h-[300px] p-2 space-y-1">
                      {options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedIndex(idx);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-5 py-4 rounded-xl flex items-center justify-between transition-all duration-200 group ${selectedIndex === idx ? 'bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/20' : 'text-gray-300 hover:bg-white/10 hover:text-white border border-transparent'}`}
                        >
                          <span className="text-sm md:text-base">{option.label}</span>
                          {selectedIndex === idx && <Check className="w-4 h-4 text-emerald-400" />}
                        </button>
                      ))}
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
