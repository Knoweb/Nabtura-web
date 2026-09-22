'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight, FolderKanban, TrendingUp, Users, Lightbulb, MapPin, Building, Briefcase, Phone, Mail, MessageCircle, ChevronRight, CheckCircle2, Factory, Activity, Globe, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function WorkWithNabturaPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 400]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const [selectedSelectorItem, setSelectedSelectorItem] = useState<number | null>(0);

  const selectorItems = [
    { title: "I WANT TO INVEST", response: "Let's explore suitable opportunities.", icon: TrendingUp },
    { title: "I HAVE LAND OR SPACE", response: "Let's explore what it could become.", icon: MapPin },
    { title: "I HAVE A PROJECT OPPORTUNITY", response: "Let's understand what you need.", icon: FolderKanban },
    { title: "I HAVE TECHNOLOGY", response: "Tell us how it connects with Nabtura.", icon: Building },
    { title: "I HAVE A PRODUCT OR SOLUTION", response: "Let's see how it adds value.", icon: Briefcase },
    { title: "I HAVE SPECIALIST CAPABILITY", response: "Tell us what capability you bring.", icon: Users },
    { title: "I HAVE MARKET ACCESS", response: "Let's discuss distribution and reach.", icon: Globe },
    { title: "I WANT TO BECOME A STRATEGIC PARTNER", response: "Let's build stronger capabilities together.", icon: CheckCircle2 },
    { title: "I'M EXPLORING AN IDEA", response: "Start a conversation to explore the concept.", icon: Lightbulb },
  ];

  return (
    <main className="min-h-screen bg-transparent pt-20 overflow-hidden text-white font-sans selection:bg-emerald-500 selection:text-black">

      {/* Global Fixed Animated Waves Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-30 bg-transparent">
        <motion.svg animate={{ x: ["0%", "-50%"] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 w-[200%] h-[250px] md:h-[400px] fill-emerald-900/30" viewBox="0 0 2880 320" preserveAspectRatio="none"><path d="M0,160 Q360,40 720,160 T1440,160 Q1800,40 2160,160 T2880,160 L2880,320 L0,320 Z" /></motion.svg>
        <motion.svg animate={{ x: ["-50%", "0%"] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 w-[200%] h-[200px] md:h-[300px] fill-nabtura-green/30" viewBox="0 0 2880 320" preserveAspectRatio="none"><path d="M0,120 Q360,240 720,120 T1440,120 Q1800,240 2160,120 T2880,120 L2880,320 L0,320 Z" /></motion.svg>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 pt-20 pb-12 border-b border-white/5 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div style={{ y: y1 }} className="absolute inset-0 bg-[url('/images/dubai-greenhouse.jpg')] bg-cover bg-center h-[120%] -top-[10%]"></motion.div>
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020A05] via-[#020A05]/70 to-[#020A05]/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-xs md:text-sm tracking-[0.4em] text-emerald-500 font-bold mb-6 uppercase drop-shadow-md">
            INVESTMENT & PARTNERSHIPS
          </motion.h2>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-normal mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase">
            GROW THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">OPPORTUNITY.</span><br />
            TOGETHER.
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-10 mt-4">
            {['Investment', 'Land', 'Technology', 'Capability', 'Market'].map((word, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-6">
                <span className="text-gray-300 font-bold tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-md">{word}</span>
                {i !== 4 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>}
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-3xl leading-relaxed">
            NABTURA brings together opportunities, resources and the right capabilities to explore commercially relevant smart agriculture and green projects.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="#explore" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-emerald-500 text-black font-black tracking-widest text-xs uppercase hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:scale-105 duration-300">
              EXPLORE THE OPPORTUNITY <ArrowDown className="ml-3 w-4 h-4 animate-bounce" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-white font-bold tracking-widest text-xs uppercase hover:bg-white/10 transition-colors hover:scale-105 duration-300">
              START A CONVERSATION <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE OPPORTUNITY */}
      <section id="explore" className="py-12 md:py-20 relative bg-transparent overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(52,211,153,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">THE OPPORTUNITY</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-5xl font-black mb-0 uppercase leading-tight">
              GREEN CAN BECOME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">AN OPPORTUNITY.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="max-w-5xl mx-auto bg-[#020A05]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <p className="text-xl xs:text-2xl text-gray-300 font-light leading-relaxed mb-6 mt-2 relative z-10">
                A growing project can start in different ways.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10 relative z-10">
                {[
                  { text: "Someone may bring the land.", icon: MapPin },
                  { text: "Someone may bring the capital.", icon: TrendingUp },
                  { text: "Someone may bring the technology.", icon: Building },
                  { text: "Someone may bring the market.", icon: Globe },
                  { text: "Someone may bring the capability.", icon: Users }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: (idx) => ({ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        transition: { duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 } 
                      })
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 10 } 
                    }}
                    className="relative w-full sm:w-[45%] lg:w-[28%] flex flex-col items-center text-center p-6 md:p-8 rounded-[2rem] bg-[#051A0D] border border-emerald-500/20 hover:border-emerald-500/60 backdrop-blur-xl overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(52,211,153,0.15)] z-10 transition-all duration-300"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Glow effect behind icon */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-emerald-500/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative w-16 h-16 mb-6 rounded-2xl bg-[#020A05] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] z-10">
                      <item.icon className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    
                    <span className="relative text-gray-300 font-medium tracking-wide text-sm md:text-base group-hover:text-white transition-colors duration-300 leading-relaxed z-10">{item.text}</span>
                    
                    {/* Bottom accent line on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent group-hover:w-1/2 transition-all duration-500"></div>
                  </motion.div>
                ))}
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-6 relative z-10"></div>

              <p className="text-xl xs:text-2xl text-white font-medium mb-5 relative z-10">
                NABTURA helps explore how those elements could come together.
              </p>

              <div className="inline-block p-1 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-500/30 hover:from-emerald-500/50 hover:to-green-500/50 transition-colors duration-500 relative z-10">
                <div className="px-6 py-4 md:px-10 md:py-3 bg-[#020A05] rounded-full">
                  <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-emerald-400 drop-shadow-md">
                    START WITH WHAT YOU HAVE. EXPLORE WHAT IT COULD BECOME.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. INVEST WITH NABTURA */}
      <section className="py-12 md:py-20 relative bg-transparent border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            <div className="flex-1 lg:w-[55%]">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-500">INVEST WITH NABTURA</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 uppercase leading-tight">
                INVEST IN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">WHAT CAN GROW.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 font-light mb-8 leading-relaxed max-w-xl">
                Explore opportunities connected to NABTURA's smart agriculture and intelligent green ecosystem.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "SMART AGRICULTURE", desc: "Commercial growing and controlled growing opportunities." },
                  { title: "PRODUCTIVE GREEN", desc: "Green environments designed to create additional purpose and value." },
                  { title: "WATER & TECHNOLOGY", desc: "Smart systems that can support more intelligent use and management of resources." },
                  { title: "GREEN & ENVIRONMENTAL PROJECTS", desc: "Selected projects with commercial, environmental or strategic potential." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: (idx) => ({ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1, 
                        transition: { duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 } 
                      })
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 10 } 
                    }}
                    className="relative p-6 rounded-[1.5rem] bg-[#051A0D] border border-white/[0.08] hover:border-blue-500/40 backdrop-blur-lg overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-center z-10"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <h4 className="relative text-sm font-black tracking-widest text-white mb-2 group-hover:text-blue-400 transition-colors uppercase z-10">{item.title}</h4>
                    <p className="relative text-gray-400 text-xs md:text-sm leading-relaxed z-10">{item.desc}</p>
                    
                    {/* Bottom accent line on hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp}>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-black tracking-widest text-xs uppercase hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105 duration-300">
                  EXPLORE AN INVESTMENT OPPORTUNITY <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
                  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, type: "spring" } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="relative w-full max-w-[420px] h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-blue-500/30 shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_100px_rgba(59,130,246,0.2)] transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-[url('/images/uae_smart_greenhouse.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020A05] via-[#020A05]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 4. BRING LAND OR SPACE */}
      <section className="py-12 md:py-20 relative bg-transparent border-t border-white/5 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        >
          <motion.div style={{ y: y2 }} className="absolute inset-0 bg-[url('/images/dubai-landscapes.jpg')] bg-cover bg-center h-[120%] -top-[10%]"></motion.div>
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#04160A] via-[#04160A]/80 to-[#04160A]/40"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            
            <div className="flex-1">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-yellow-500/5 border border-yellow-500/20 mb-6 shadow-[0_0_15px_rgba(234,179,8,0.1)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-yellow-500">BRING LAND OR SPACE</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 uppercase leading-tight">
                WHAT COULD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">YOUR LAND BECOME?</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-300 font-light mb-6 leading-relaxed max-w-xl">
                Land, rooftops, buildings and underused spaces may hold opportunities beyond their current use.
              </motion.p>

              <motion.p variants={fadeUp} className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Potential directions could include:</motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-6">
                {['SMART GREENHOUSES', 'MICROGREENS', 'PRODUCTIVE LANDSCAPES', 'URBAN FORESTS', 'DESERT GREENING', 'CUSTOM GREEN PROJECTS'].map((tag, i) => (
                  <span key={i} className="bg-white/5 border border-yellow-500/40 shadow-[0_0_10px_rgba(250,204,21,0.15)] animate-pulse px-4 py-2 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-yellow-500/20 hover:border-yellow-500/60 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }}>
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="p-5 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 mb-8 backdrop-blur-md">
                <p className="text-yellow-100 font-medium tracking-wide text-sm md:text-base">The opportunity follows the location, resources, market and objective.</p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-black tracking-widest text-xs uppercase hover:bg-yellow-500/20 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all hover:scale-105 duration-300">
                  EXPLORE MY LAND OR SPACE <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="flex-1 w-full relative">
              <motion.div variants={fadeUp} className="relative h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] group">
                <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#04160A] via-[#04160A]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-yellow-900/20 mix-blend-overlay"></div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 5. PARTNER WITH NABTURA */}
      <section className="py-12 md:py-20 relative bg-transparent border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-purple-500/5 border border-purple-500/20 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400">PARTNER WITH NABTURA</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 uppercase leading-tight">
              STRONGER CAPABILITIES. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]">GREATER POSSIBILITIES.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              NABTURA can explore collaboration with organizations and specialists that complement what we create.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: "TECHNOLOGY PROVIDERS", items: "Sensors • Automation • Monitoring • Growing Technology" },
              { title: "GROWING & GREEN SPECIALISTS", items: "Agriculture • Horticulture • Planting • Nursery • Environmental Expertise" },
              { title: "PROJECT PARTNERS", items: "Developers • Architects • Consultants • Contractors • Operators" },
              { title: "SUPPLY & MARKET PARTNERS", items: "Equipment • Materials • Plant Supply • Distribution • Market Access" }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: (idx) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 } })
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                className="relative p-8 rounded-[2rem] bg-[#051A0D] border border-white/[0.08] hover:border-purple-500/40 backdrop-blur-lg overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col z-10"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500 z-10"></div>
                <h4 className="relative text-sm font-black tracking-widest text-white mb-4 uppercase group-hover:text-purple-400 transition-colors z-10">{card.title}</h4>
                <p className="relative text-gray-400 text-sm leading-relaxed z-10">{card.items}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <p className="text-xl text-white font-medium mb-10">Bring the capability. Build the possibility.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-black tracking-widest text-xs uppercase hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] transition-all hover:scale-105 duration-300">
              BECOME A NABTURA PARTNER <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. HOW OPPORTUNITIES DEVELOP */}
      <section className="py-12 md:py-20 relative bg-transparent border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">HOW OPPORTUNITIES DEVELOP</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-5xl font-black mb-16 uppercase leading-tight">
              FROM POSSIBILITY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">TO PROJECT.</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 relative group">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-white/5 -translate-y-1/2 z-0 overflow-hidden rounded-full">
                <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-emerald-500 to-green-400 w-0 group-hover:w-full transition-all duration-[2s] ease-in-out"></div>
              </div>
              
              {[
                "OPPORTUNITY", "ASSESS", "CONNECT", "DEVELOP", "DELIVER", "GROW"
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (idx) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.15 } })
                  }}
                  className={`relative p-5 rounded-2xl flex flex-col items-center justify-center gap-4 z-10 backdrop-blur-md transition-all duration-300 ${i === 5 ? 'bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/50 shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:-translate-y-2' : 'bg-[#020A05]/80 border border-white/5 hover:border-emerald-500/30 hover:bg-[#0A2213]/40 hover:-translate-y-1'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border transition-colors duration-300 ${i === 5 ? 'bg-emerald-500 border-emerald-400 text-black shadow-[0_0_15px_rgba(52,211,153,0.5)]' : 'bg-black/50 border-white/10 text-gray-400 group-hover:border-emerald-500/40 group-hover:text-emerald-400'}`}>
                    {i + 1}
                  </div>
                  <span className={`text-[10px] md:text-xs font-black tracking-widest uppercase text-center ${i === 5 ? 'text-white drop-shadow-md' : 'text-emerald-400/80 group-hover:text-emerald-400'}`}>{step}</span>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Every opportunity is different. NABTURA considers the objective, location, resources, commercial potential and capabilities required before determining the appropriate way forward.
            </motion.p>

            <motion.div variants={fadeUp} className="inline-block px-10 py-5 bg-[#020A05]/50 border border-white/10 rounded-full shadow-lg">
              <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase text-gray-300">
                NO STANDARD MODEL. THE STRUCTURE FOLLOWS THE OPPORTUNITY.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. WHAT DO YOU BRING? (INTERACTIVE SELECTOR) */}
      <section className="py-12 md:py-20 relative z-10 bg-transparent border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(52,211,153,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-500">WHAT DO YOU BRING?</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase leading-tight drop-shadow-lg">
              START WITH <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">WHAT YOU HAVE.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Options List */}
            <div className="space-y-2">
              {selectorItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSelectorItem(selectedSelectorItem === idx ? null : idx)}
                  className={`relative w-full text-left px-5 py-3.5 rounded-[1rem] border transition-all duration-500 flex justify-between items-center group overflow-hidden ${selectedSelectorItem === idx
                      ? 'bg-gradient-to-r from-emerald-500/20 to-transparent border-emerald-500/50 shadow-[0_0_30px_rgba(52,211,153,0.2)]'
                      : 'bg-[#020A05]/80 backdrop-blur-md border-white/5 hover:border-emerald-500/30 hover:bg-[#0A2213]/50'
                    }`}
                >
                  {selectedSelectorItem === idx && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
                  )}
                  <span className={`relative z-10 font-bold tracking-widest text-xs md:text-sm uppercase ${selectedSelectorItem === idx ? 'text-emerald-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {item.title}
                  </span>
                  <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ml-4 ${selectedSelectorItem === idx ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(52,211,153,0.5)]' : 'bg-white/5 text-white group-hover:bg-white/10'}`}>
                    <ArrowRight className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${selectedSelectorItem === idx ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
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
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="w-full h-full bg-[#04160A]/80 border border-white/5 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 text-center shadow-2xl relative overflow-hidden flex flex-col items-center justify-center group"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full group-hover:bg-green-500/20 transition-colors duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {(() => {
                          const Icon = selectorItems[selectedSelectorItem].icon;
                          return <Icon className="w-8 h-8 text-emerald-400" />;
                        })()}
                      </div>
                      <h4 className="text-xl md:text-2xl font-black text-white mb-6 leading-tight uppercase">
                        {selectorItems[selectedSelectorItem].response}
                      </h4>
                      <Link href="/contact" className="group/btn relative inline-flex items-center gap-3 bg-emerald-500 border border-emerald-500 rounded-full py-3 px-8 hover:bg-emerald-400 hover:border-emerald-400 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] z-10 hover:scale-105">
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        <span className="flex items-center text-black font-extrabold tracking-widest uppercase text-xs relative z-10">
                          START THE CONVERSATION
                          <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-emerald-400 transition-colors shadow-inner text-black">
                            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full border-2 border-dashed border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-12 bg-[#04160A]/30"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
                    </div>
                    <p className="text-gray-400 font-bold tracking-widest text-sm uppercase max-w-xs leading-relaxed">Select an option from the list to see how we can help.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION */}
      <section className="py-12 md:py-20 relative bg-transparent border-t border-white/5 overflow-hidden text-center">
        <motion.div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center"></div>
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#04160A] via-[#04160A]/80 to-[#04160A]/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-5xl font-black mb-8 leading-tight tracking-tight uppercase"
          >
            LET'S EXPLORE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-md">WHAT COULD WORK.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 font-light mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Tell NABTURA what you bring, what you're looking for, or what opportunity you see. You don't need to have the entire model worked out before starting the conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <Link href="/contact" className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-2 rounded-full bg-emerald-500 text-black font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(52,211,153,0.3)]">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center">
                DISCUSS AN OPPORTUNITY <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/contact" className="hover:text-white transition-colors flex items-center justify-center group text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs mt-4">
              BECOME A PARTNER <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
