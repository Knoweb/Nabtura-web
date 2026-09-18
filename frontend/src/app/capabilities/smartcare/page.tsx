"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Activity, Droplets, Leaf, Settings, ShieldCheck, Clock, BarChart3, Radio } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SmartCarePage() {
  const [selectedSelectorItem, setSelectedSelectorItem] = useState<number | null>(0);

  const selectorItems = [
    { title: "MY GREENHOUSE / GROWING SYSTEM", response: "We can provide ongoing Grow Care to maintain environmental parameters and crop yields.", icon: Leaf },
    { title: "MY MICROGREENS SYSTEM", response: "Consistent monitoring and care to ensure optimal harvest cycles.", icon: Activity },
    { title: "MY IRRIGATION SYSTEM", response: "Water Care ensures efficient delivery, preventing waste and stress.", icon: Droplets },
    { title: "MY LANDSCAPE", response: "Green Care for ongoing establishment, health, and visual impact.", icon: ShieldCheck },
    { title: "MY URBAN FOREST / GREEN ENVIRONMENT", response: "Long-term management to protect and grow your green investment.", icon: Leaf },
    { title: "MY DESERT GREENING PROJECT", response: "Specialized care for harsh environments to ensure survival and growth.", icon: ShieldCheck },
    { title: "MY NABTURA TECHNOLOGY / MONITORING SYSTEM", response: "System Care to keep sensors, automation, and controls online.", icon: Settings },
    { title: "I'M NOT SURE WHAT SUPPORT I NEED", response: "Let's review your environment and suggest the right level of care.", icon: Radio },
  ];

  return (
    <div className="bg-[#020504] min-h-screen pt-24 font-sans selection:bg-nabtura-green/30 selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-6 border-b border-white/5 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-30 z-0 scale-105 transition-transform duration-[20s] hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#050A08] z-10 pointer-events-none"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-nabtura-green/10 blur-[150px] rounded-full pointer-events-none z-10"></div>

        <div className="max-w-6xl mx-auto w-full relative z-20 text-center flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] text-nabtura-green font-bold mb-6 uppercase drop-shadow-md"
          >
            NABTURA SMARTCARE
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8"
          >
            <span className="text-white">KEEP IT </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">GROWING.</span><br />
            <span className="text-white">KEEP IT </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">WORKING.</span><br />
            <span className="text-white">KEEP IT </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]">PERFORMING.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-14 relative"
          >
            {/* Glowing Vertical Divider for Desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-nabtura-green/50 to-transparent hidden md:block"></div>
            
            <div className="flex-1 text-center md:text-right pr-0 md:pr-8">
              <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                Ongoing care, monitoring, management and optimization <span className="text-nabtura-light-green font-bold drop-shadow-[0_0_10px_rgba(21,184,118,0.3)]">for NABTURA environments.</span>
              </p>
            </div>
            
            {/* Horizontal divider for mobile */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-nabtura-green/50 to-transparent block md:hidden my-2"></div>

            <div className="flex-1 text-center md:text-left pl-0 md:pl-8">
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                From growing systems and irrigation to landscapes and green environments, SmartCare provides the ongoing support needed after delivery.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-30"
          >
            <a href="#explore-smartcare" className="group w-full sm:w-auto relative px-8 py-3 bg-[#0a120e]/80 backdrop-blur-md border border-nabtura-green/30 text-white font-bold tracking-[0.2em] text-xs md:text-sm rounded-full hover:border-nabtura-green hover:bg-[#0a120e] transition-all duration-500 overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nabtura-green/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                EXPLORE SMARTCARE <ArrowDown className="ml-3 w-4 h-4 text-nabtura-green group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            
            <Link href="/contact" className="group w-full sm:w-auto relative px-8 py-3 bg-gradient-to-r from-nabtura-green to-emerald-400 text-black font-black tracking-[0.2em] text-xs md:text-sm rounded-full hover:shadow-[0_0_40px_rgba(21,184,118,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
               <span className="relative z-10 flex items-center">
                DISCUSS SUPPORT NEEDS <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. BEYOND DELIVERY */}
      <section id="explore-smartcare" className="py-10 md:py-12 relative z-10 bg-[#050A08] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-nabtura-green font-bold mb-3 uppercase"
            >
              BEYOND DELIVERY
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-4"
            >
              DELIVERY <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400 drop-shadow-[0_0_15px_rgba(21,184,118,0.2)]">ISN'T THE END.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-6"
            >
              Creating the solution is one part of the journey. Keeping it operating effectively is another. <br className="hidden md:block" />
              <strong className="text-white font-medium">NABTURA SmartCare</strong> can continue supporting the environment or system through:
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="flex flex-wrap justify-center gap-2 md:gap-3"
            >
              {['CARE', 'MONITORING', 'MANAGEMENT', 'MAINTENANCE', 'OPTIMIZATION', 'SUPPORT'].map((tag, idx) => (
                <motion.span 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-bold tracking-widest text-gray-300 hover:text-white hover:border-nabtura-green hover:bg-nabtura-green/10 transition-colors cursor-default shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(21,184,118,0.3)]"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Animated Process Flow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 via-white/5 to-transparent border border-white/10 rounded-[2rem] p-6 md:p-10 relative overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
            
            <div className="text-center mb-6 relative z-10">
              <h4 className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-bold text-nabtura-green uppercase">FROM PLANT SUPPLY TO ONGOING CARE</h4>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 relative z-10">
              <motion.div whileHover={{ scale: 1.02 }} className="flex-1 w-full bg-[#0a120e] border border-white/10 rounded-xl p-4 md:py-4 md:px-2 text-center shadow-lg hover:border-white/20 transition-all duration-300">
                <span className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase">Nursery Solutions</span>
              </motion.div>
              
              <div className="flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block" />
                <ArrowDown className="w-5 h-5 text-gray-600 md:hidden" />
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} className="flex-1 w-full bg-[#0a120e] border border-white/10 rounded-xl p-4 md:py-4 md:px-2 text-center shadow-lg hover:border-white/20 transition-all duration-300">
                <span className="text-gray-300 text-xs md:text-sm font-bold tracking-widest uppercase">Establishment</span>
              </motion.div>
              
              <div className="flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-nabtura-green hidden md:block" />
                <ArrowDown className="w-5 h-5 text-nabtura-green md:hidden" />
              </div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="flex-1 w-full bg-nabtura-green/10 border border-nabtura-green/40 rounded-xl p-4 md:py-4 md:px-2 text-center shadow-[0_0_20px_rgba(21,184,118,0.15)] relative overflow-hidden group transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nabtura-green/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="text-white text-xs md:text-sm font-black tracking-widest uppercase relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">SmartCare</span>
              </motion.div>
            </div>

            <p className="text-center text-gray-400 text-sm font-light mt-8 tracking-wide relative z-10 opacity-70">
              Built to work. Supported to keep working.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ONE CARE PLATFORM */}
      <section className="py-10 md:py-15 relative z-10 bg-[#09100c]">
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-nabtura-green font-bold mb-3 uppercase"
            >
              ONE CARE PLATFORM
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-black uppercase leading-tight text-white mb-6"
            >
              WHAT NEEDS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400 drop-shadow-[0_0_15px_rgba(21,184,118,0.2)]">TO BE CARED FOR?</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            >
              SmartCare can support different parts of the NABTURA ecosystem.
            </motion.p>
          </div>

          {/* Highly Interactive Compact 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* GROW CARE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#050A08] border border-white/10 rounded-[1.5rem] p-6 hover:border-nabtura-green/50 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(21,184,118,0.2)] hover:-translate-y-2 flex flex-col h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-700 scale-110 group-hover:scale-100"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-nabtura-green/0 blur-[60px] rounded-full group-hover:bg-nabtura-green/20 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-nabtura-green/5 border border-nabtura-green/20 flex items-center justify-center group-hover:bg-nabtura-green/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(21,184,118,0.1)] group-hover:shadow-[0_0_20px_rgba(21,184,118,0.4)]">
                    <Leaf className="w-6 h-6 text-nabtura-green drop-shadow-[0_0_10px_rgba(21,184,118,0.5)]" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider group-hover:text-nabtura-light-green transition-colors">GROW CARE</h4>
                </div>
                <p className="text-nabtura-light-green text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  Greenhouses • Microgreens
                </p>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mt-auto group-hover:text-gray-300 transition-colors">
                  Keep growing environments operating around intended requirements with precision and care.
                </p>
              </div>
            </motion.div>

            {/* WATER CARE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="group bg-[#050A08] border border-white/10 rounded-[1.5rem] p-6 hover:border-blue-400/50 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(96,165,250,0.2)] hover:-translate-y-2 flex flex-col h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-10 mix-blend-overlay grayscale transition-opacity duration-700 scale-110 group-hover:scale-100"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/0 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(96,165,250,0.1)] group-hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]">
                    <Droplets className="w-6 h-6 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider group-hover:text-blue-400 transition-colors">WATER CARE</h4>
                </div>
                <p className="text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  Irrigation • Water Systems
                </p>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mt-auto group-hover:text-gray-300 transition-colors">
                  Support irrigation performance and system operation reliably over time.
                </p>
              </div>
            </motion.div>

            {/* GREEN CARE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="group bg-[#050A08] border border-white/10 rounded-[1.5rem] p-6 hover:border-emerald-400/50 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(52,211,153,0.2)] hover:-translate-y-2 flex flex-col h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-700 scale-110 group-hover:scale-100"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/0 blur-[60px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(52,211,153,0.1)] group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider group-hover:text-emerald-400 transition-colors">GREEN CARE</h4>
                </div>
                <p className="text-emerald-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  Landscapes • Urban Forests
                </p>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mt-auto group-hover:text-gray-300 transition-colors">
                  Support the establishment and ongoing management of vast green environments.
                </p>
              </div>
            </motion.div>

            {/* SYSTEM CARE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="group bg-[#050A08] border border-white/10 rounded-[1.5rem] p-6 hover:border-purple-400/50 transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(192,132,252,0.2)] hover:-translate-y-2 flex flex-col h-full cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-10 mix-blend-overlay grayscale transition-opacity duration-700 scale-110 group-hover:scale-100"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/0 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-500/5 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(192,132,252,0.1)] group-hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                    <Settings className="w-6 h-6 text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider group-hover:text-purple-400 transition-colors">SYSTEM CARE</h4>
                </div>
                <p className="text-purple-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  Sensors • Controls • Automation
                </p>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mt-auto group-hover:text-gray-300 transition-colors">
                  Keep the technology behind the environment connected and functioning.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SMARTCARE + TECHNOLOGY */}
      <section className="py-10 md:py-15 relative z-10 bg-[#050A08] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-nabtura-green font-bold mb-3 uppercase"
              >
                SMARTCARE + TECHNOLOGY
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-6"
              >
                KNOW WHAT'S <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400 drop-shadow-[0_0_15px_rgba(21,184,118,0.2)]">HAPPENING.</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-6"
              >
                Where monitoring and connected technology are part of the project, SmartCare can help turn system information into ongoing action.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-nabtura-light-green font-bold tracking-widest text-xs md:text-sm uppercase"
              >
                See more. Respond earlier. Manage smarter.
              </motion.p>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="relative group">
                {/* Glowing Aura behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-nabtura-green/20 via-emerald-500/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#050A08]/90 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl shadow-2xl"
                >
                  {/* Internal grid pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-nabtura-green/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                  
                  {/* Flow items */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 mb-12">
                    {/* Continuous connecting line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0"></div>
                    
                    {['MONITOR', 'IDENTIFY', 'RESPOND', 'ADJUST', 'OPTIMIZE'].map((step, idx, arr) => (
                      <div key={idx} className="relative z-10 w-full md:w-auto">
                        <motion.div 
                          whileHover={{ scale: 1.05, y: -5 }} 
                          className="bg-black/60 backdrop-blur-md border border-white/10 px-5 py-4 rounded-xl text-center shadow-lg hover:shadow-[0_0_25px_rgba(21,184,118,0.3)] hover:border-nabtura-green/50 transition-all duration-300 flex flex-col items-center justify-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-nabtura-green/40 group-hover:bg-nabtura-green group-hover:shadow-[0_0_10px_rgba(21,184,118,1)] transition-all duration-300"></div>
                          <span className="text-gray-400 group-hover:text-white text-[10px] md:text-xs font-bold tracking-widest transition-colors">{step}</span>
                        </motion.div>
                        {idx < arr.length - 1 && (
                          <div className="h-6 w-[1px] bg-white/10 mx-auto md:hidden my-2"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 bg-black/40 rounded-2xl p-6 border border-white/5">
                    <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-widest mb-4 flex items-center uppercase">
                      <Activity className="w-4 h-4 mr-2 text-nabtura-green" /> 
                      System Capabilities Include
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {['Performance Monitoring', 'System Status', 'Alerts', 'Environmental Data', 'Irrigation Data', 'Remote Visibility', 'Operational Follow-Up'].map((tag, idx) => (
                        <span key={idx} className="px-4 py-2.5 rounded-lg border border-white/5 bg-white/5 text-xs md:text-sm font-semibold text-gray-400 hover:text-nabtura-light-green hover:border-nabtura-green/30 hover:bg-nabtura-green/10 transition-all cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CARE THAT FITS THE PROJECT */}
      <section className="py-10 md:py-15 relative z-10 bg-[#09100c] border-t border-white/5 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-nabtura-green/5 to-transparent pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-cyan-400 font-bold mb-3 uppercase"
            >
              CARE THAT FITS THE PROJECT
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-4"
            >
              DIFFERENT SYSTEMS. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">DIFFERENT CARE.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto"
            >
              SmartCare should not be presented as one fixed maintenance package. <br className="hidden md:block" />
              The level of support can be developed around the solution, technology, scale, operating requirements and level of involvement needed.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                title: "PERIODIC CARE", desc: "Planned inspections and support.", icon: Clock, 
                colors: { border: "hover:border-cyan-500/40", shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]", glow: "group-hover:bg-cyan-500/20", iconText: "text-cyan-400", title: "group-hover:text-cyan-400" } 
              },
              { 
                title: "ONGOING CARE", desc: "Regular management and operational support.", icon: Activity, 
                colors: { border: "hover:border-blue-500/40", shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]", glow: "group-hover:bg-blue-500/20", iconText: "text-blue-400", title: "group-hover:text-blue-400" } 
              },
              { 
                title: "CONNECTED CARE", desc: "Monitoring and technology-supported oversight where applicable.", icon: Radio, 
                colors: { border: "hover:border-indigo-500/40", shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]", glow: "group-hover:bg-indigo-500/20", iconText: "text-indigo-400", title: "group-hover:text-indigo-400" } 
              },
              { 
                title: "MANAGED CARE", desc: "A broader level of ongoing involvement for selected projects.", icon: ShieldCheck, 
                colors: { border: "hover:border-purple-500/40", shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]", glow: "group-hover:bg-purple-500/20", iconText: "text-purple-400", title: "group-hover:text-purple-400" } 
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                className={`bg-[#050A08] border border-white/10 rounded-[2rem] p-8 hover:bg-[#070d0a] shadow-lg transition-all duration-300 group overflow-hidden relative ${item.colors.border} ${item.colors.shadow}`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-white/0 blur-[30px] rounded-full transition-colors duration-500 ${item.colors.glow}`}></div>
                <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 relative z-10 ${item.colors.glow} ${item.colors.iconText}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className={`text-sm md:text-base font-bold tracking-widest text-white mb-3 uppercase transition-colors relative z-10 ${item.colors.title}`}>{item.title}</h4>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FROM HANDOVER TO LONG-TERM PERFORMANCE */}
      <section className="py-10 md:py-15 relative z-10 bg-[#050A08] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-nabtura-green font-bold mb-3 uppercase"
            >
              FROM HANDOVER TO LONG-TERM PERFORMANCE
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-4"
            >
              STAY CONNECTED <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400 drop-shadow-[0_0_15px_rgba(21,184,118,0.2)]">AFTER DELIVERY.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            >
              SmartCare can begin as part of the original NABTURA project or be discussed when ongoing support becomes necessary.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            {/* The Pipeline */}
            <div className="relative z-10 max-w-4xl mx-auto mb-10 md:mb-12">
              {/* Connecting Line (Desktop/Tablet) */}
              <div className="hidden md:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-nabtura-green/60 to-transparent -translate-y-1/2 z-0"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
                {['DELIVER', 'COMMISSION', 'MONITOR', 'CARE', 'OPTIMIZE'].map((step, idx) => (
                  <div key={idx} className="relative z-10 w-full md:w-auto flex flex-col items-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-center shadow-lg hover:border-nabtura-green/60 hover:shadow-[0_0_20px_rgba(21,184,118,0.3)] transition-all duration-300 group cursor-default flex items-center gap-2.5"
                    >
                      <div className={`w-2 h-2 rounded-full ${idx > 1 ? 'bg-nabtura-green animate-pulse shadow-[0_0_8px_rgba(21,184,118,0.8)]' : 'bg-white/20 group-hover:bg-nabtura-green transition-colors'}`}></div>
                      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-300 group-hover:text-white transition-colors">{step}</span>
                    </motion.div>
                    {/* Mobile connecting line */}
                    {idx < 4 && <div className="md:hidden w-[1px] h-4 bg-white/10 my-1"></div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto mb-10">
                This creates continuity between the team that understands the solution and the people responsible for keeping it operating.
              </p>
              
              <Link href="/contact" className="inline-flex items-center text-xs font-bold text-nabtura-light-green tracking-[0.2em] uppercase hover:text-white transition-colors group bg-nabtura-light-green/10 border border-nabtura-light-green/20 px-10 py-2.5 rounded-full hover:bg-nabtura-light-green/20 shadow-[0_0_20px_rgba(21,184,118,0.15)] hover:shadow-[0_0_30px_rgba(21,184,118,0.3)]">
                EXPLORE SMARTCARE FOR MY PROJECT <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. SMARTCARE ACROSS NABTURA */}
      <section className="py-10 md:py-15 relative z-10 bg-[#09100c] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-teal-400 font-bold mb-3 uppercase"
            >
              SMARTCARE ACROSS NABTURA
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-4"
            >
              ONE NABTURA. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.2)]">CONTINUED SUPPORT.</span>
            </motion.h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                { name: 'SMART GREENHOUSES', care: 'Grow Care' },
                { name: 'SMART MICROGREENS', care: 'Grow Care' },
                { name: 'SMART IRRIGATION', care: 'Water Care' },
                { name: 'LANDSCAPES', care: 'Green Care' },
                { name: 'URBAN FORESTS', care: 'Green Care' },
                { name: 'DESERT GREENING', care: 'Green Care' },
                { name: 'ENVIRONMENTAL PROJECTS', care: 'Project-Specific Care' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                  className={`flex items-center justify-between p-3.5 md:p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-black/60 hover:border-teal-500/40 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all duration-300 group ${idx === 6 ? 'md:col-span-2 md:max-w-xl mx-auto w-full' : ''}`}
                >
                  <span className="text-sm md:text-base font-bold tracking-widest text-white group-hover:text-teal-400 transition-colors">{item.name}</span>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all shrink-0" />
                    <span className="text-xs font-medium tracking-widest text-gray-400 uppercase bg-white/5 px-3 py-1 rounded-full group-hover:bg-teal-500/10 group-hover:text-teal-300 transition-colors shrink-0 whitespace-nowrap">{item.care}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm md:text-base font-light mt-12 tracking-wide">
              From growing to water to green—SmartCare keeps NABTURA connected to what we create.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION (INTERACTIVE SELECTOR) */}
      <section className="py-10 md:py-15 relative z-10 bg-[#050A08] overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-20"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center"></div>
        </motion.div>
        
        {/* Gradients and Overlays to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050A08] via-[#050A08]/60 to-[#050A08]"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Pulsing Glowing Orbs */}
        <motion.div 
          animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.7, 1.3, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-nabtura-green/20 blur-[120px] rounded-full pointer-events-none z-0"
        ></motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight drop-shadow-lg mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">WHAT NEEDS</span> <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400 drop-shadow-[0_0_25px_rgba(21,184,118,0.5)]">SMARTCARE?</span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg font-light tracking-wide">Choose where you want support:</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Options List */}
            <div className="space-y-2">
              {selectorItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSelectorItem(selectedSelectorItem === idx ? null : idx)}
                  className={`w-full text-left px-5 py-3 md:py-3.5 rounded-xl border transition-all duration-300 flex justify-between items-center group ${selectedSelectorItem === idx
                      ? 'bg-nabtura-green/10 border-nabtura-green shadow-[0_0_20px_rgba(21,184,118,0.2)]'
                      : 'bg-white/5 border-white/10 hover:border-nabtura-light-green/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(21,184,118,0.1)]'
                    }`}
                >
                  <span className={`font-bold tracking-widest text-xs md:text-sm ${selectedSelectorItem === idx ? 'text-nabtura-green' : 'text-gray-300 group-hover:text-white transition-colors'}`}>
                    {item.title}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ml-3 ${selectedSelectorItem === idx ? 'bg-nabtura-green text-black shadow-[0_0_15px_rgba(21,184,118,0.5)]' : 'bg-white/10 text-white'}`}>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${selectedSelectorItem === idx ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Dynamic Response Box */}
            <div className="h-full min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {selectedSelectorItem !== null ? (
                  <motion.div
                    key={selectedSelectorItem}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 lg:p-12 text-center shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-nabtura-green/20 blur-[50px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-lg">
                        {(() => {
                          const Icon = selectorItems[selectedSelectorItem].icon;
                          return <Icon className="w-10 h-10 text-nabtura-green" />;
                        })()}
                      </div>
                      <h4 className="text-2xl md:text-2xl font-bold text-gray-200 mb-8 leading-relaxed text-center max-w-md mx-auto">
                        {selectorItems[selectedSelectorItem].response}
                      </h4>
                      <Link href="/contact" className="mt-4 px-8 py-3 bg-white text-black font-bold tracking-widest text-xs rounded-full hover:bg-nabtura-light-green transition-colors shadow-lg">
                        DISCUSS MY SMARTCARE NEEDS
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-center p-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      <ArrowDown className="w-6 h-6 text-gray-500 animate-bounce" />
                    </div>
                    <p className="text-gray-500 font-light tracking-widest text-sm uppercase">Select an option from the list to see how we can help.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col items-center border-t border-white/10 pt-12">
            <Link href="/contact" className="px-10 py-2 bg-gradient-to-r from-nabtura-green to-emerald-400 text-black font-black tracking-[0.2em] text-sm md:text-base rounded-full hover:shadow-[0_0_50px_rgba(21,184,118,0.6)] hover:scale-105 transition-all duration-300 flex items-center mb-6">
              DISCUSS MY SMARTCARE NEEDS <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            
            <Link href="/contact" className="text-nabtura-light-green hover:text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors flex items-center group mb-8">
              REQUEST SMARTCARE SUPPORT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold tracking-widest text-gray-400">
              <a href="https://wa.me/971569300075" className="hover:text-white transition-colors">WhatsApp</a>
              <span className="text-white/20">|</span>
              <a href="tel:+971569300075" className="hover:text-white transition-colors">+971 56 9300075</a>
              <span className="text-white/20">|</span>
              <a href="mailto:info@nabtura.com" className="hover:text-white transition-colors">info@nabtura.com</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
