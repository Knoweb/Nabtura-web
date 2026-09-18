'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight, FolderKanban, TrendingUp, Users, Lightbulb, MapPin, Building, Briefcase, Phone, Mail, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function WorkWithNabturaPage() {
  // State for the interactive selector in Section 6
  const [selectedSelectorItem, setSelectedSelectorItem] = useState<number | null>(0);

  const selectorItems = [
    { title: "I HAVE A PROJECT", response: "Let's understand what you need.", icon: FolderKanban },
    { title: "I HAVE LAND / SPACE", response: "Let's explore what it could become.", icon: MapPin },
    { title: "I WANT TO INVEST", response: "Let's explore suitable opportunities.", icon: TrendingUp },
    { title: "I WANT TO PARTNER", response: "Tell us what capability you bring.", icon: Users },
    { title: "I HAVE A BUSINESS IDEA", response: "Let's explore the concept.", icon: Lightbulb },
    { title: "I HAVE A TECHNOLOGY / SOLUTION", response: "Tell us how it could connect with NABTURA.", icon: Building },
    { title: "I'M NOT SURE YET", response: "Start a conversation.", icon: MessageCircle },
  ];

  return (
    <main className="min-h-screen bg-[#050A08] pt-20 overflow-hidden text-white selection:bg-nabtura-green selection:text-black">

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12 border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center opacity-30 z-0 scale-105 transition-transform duration-[20s] hover:scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#050A08] z-10 pointer-events-none"></div>

        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-nabtura-green/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-20 text-center max-w-6xl mx-auto w-full flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] text-nabtura-green font-bold mb-6 uppercase drop-shadow-md"
          >
            WORK WITH NABTURA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-normal leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-8"
          >
            LET'S CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400">SOMETHING THAT GROWS.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-10"
          >
            {['Projects', 'Partnerships', 'Investments', 'Opportunities'].map((word, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-6">
                <span className="text-white font-bold tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-md">{word}</span>
                {i !== 3 && <span className="w-1.5 h-1.5 rounded-full bg-nabtura-green shadow-[0_0_8px_rgba(21,184,118,0.8)]"></span>}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/5 p-6 md:p-5 rounded-3xl border border-white/5 backdrop-blur-md relative overflow-hidden max-w-2xl mx-auto mb-12 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nabtura-light-green to-transparent opacity-30"></div>
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed relative z-10">
              Whether you have a project, property, land, business idea or investment opportunity, <span className="text-white font-bold">NABTURA can explore the right way to work together.</span>
            </p>
          </motion.div>

          <motion.a
            href="#explore"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="group flex flex-col items-center gap-3 text-nabtura-light-green hover:text-white transition-colors"
          >
            <span className="text-xs tracking-[0.3em] font-bold uppercase">EXPLORE HOW WE CAN WORK TOGETHER</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* WRAPPER FOR SECTIONS 2-5 */}
      <div id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 lg:pt-12 lg:pb-5 space-y-20 lg:space-y-24">

        {/* 2. START A PROJECT */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-light-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            <div>
              <h2 className="text-xs md:text-sm tracking-[0.3em] text-nabtura-light-green font-bold mb-3 uppercase">START A PROJECT</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-4 drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">HAVE A PROJECT?</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_25px_rgba(21,184,118,0.5)]">LET'S MAKE IT WORK.</span>
              </h3>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-6">
                Come to NABTURA with a defined requirement—or simply with a space, site or objective. We can explore opportunities across:
              </p>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
                className="flex flex-wrap gap-2 md:gap-3 mb-8"
              >
                {['SMART GROWING', 'WATER', 'LANDSCAPES', 'URBAN FORESTS', 'DESERT GREENING', 'ENVIRONMENTAL PROJECTS'].map((tag, i) => (
                  <motion.span 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-bold tracking-wider text-gray-300 hover:text-white hover:border-nabtura-light-green hover:bg-nabtura-light-green/10 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-[#0a120e] border border-white/10 rounded-2xl p-5 md:p-6 mb-8 overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nabtura-light-green/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative z-10 flex flex-wrap justify-between items-center gap-3 md:gap-4 text-xs md:text-sm font-black tracking-widest text-nabtura-light-green">
                  <span className="flex items-center gap-1 md:gap-2">UNDERSTAND <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-600" /></span>
                  <span className="flex items-center gap-1 md:gap-2">ASSESS <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-600" /></span>
                  <span className="flex items-center gap-1 md:gap-2">DESIGN <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-600" /></span>
                  <span>DELIVER</span>
                </div>
              </motion.div>

              <div className="flex justify-center w-full mt-4">
                <Link href="/contact" className="inline-flex items-center text-xs font-bold text-nabtura-light-green tracking-[0.2em] uppercase hover:text-white transition-colors group bg-nabtura-light-green/10 border border-nabtura-light-green/20 px-10 py-2 rounded-full hover:bg-nabtura-light-green/20 shadow-[0_0_20px_rgba(21,184,118,0.15)] hover:shadow-[0_0_30px_rgba(21,184,118,0.3)]">
                  START A PROJECT <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-[url('/images/dubai-greenhouse.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.section>

        {/* 3. INVEST */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center relative z-10">
            <div className="flex-1">
              <h2 className="text-xs md:text-sm tracking-[0.3em] text-blue-400 font-bold mb-3 uppercase">INVEST</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-4 drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">INVEST IN</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">WHAT CAN GROW.</span>
              </h3>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-6">
                NABTURA can explore investment opportunities around smart agriculture, productive green environments and selected green projects.
              </p>

              <div className="mb-6">
                <p className="text-white font-medium mb-4 text-sm md:text-base">You may have:</p>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                  className="space-y-3"
                >
                  {[
                    { title: "CAPITAL", desc: "Looking for a suitable opportunity." },
                    { title: "LAND", desc: "Looking for a productive or commercial use." },
                    { title: "A PROJECT IDEA", desc: "Looking for the right model and capabilities." },
                    { title: "A MARKET OPPORTUNITY", desc: "Looking to develop something new." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-400/30 hover:bg-white/10 transition-colors group cursor-default"
                    >
                      <span className="text-blue-400 font-black tracking-wider text-md md:text-sm sm:w-48 shrink-0 group-hover:text-blue-300 transition-colors">{item.title}</span>
                      <span className="text-gray-400 text-xs lg:text-sm group-hover:text-gray-200 transition-colors">{item.desc}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <p className="text-white font-medium mb-6 text-sm md:text-base">Start with the opportunity. Then explore what can work.</p>

              <div className="flex justify-center w-full mt-4">
                <Link href="/contact" className="inline-flex items-center text-xs font-bold text-blue-400 tracking-[0.2em] uppercase hover:text-white transition-colors group bg-blue-400/10 border border-blue-400/20 px-10 py-2 rounded-full hover:bg-blue-400/20 shadow-[0_0_20px_rgba(96,165,250,0.15)] hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]">
                  EXPLORE INVESTMENT <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.section>

        {/* 4. PARTNER */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            <div>
              <h2 className="text-xs md:text-sm tracking-[0.3em] text-purple-400 font-bold mb-3 uppercase">PARTNER</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-4 drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white">STRONGER CAPABILITIES.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_25px_rgba(192,132,252,0.5)]">GREATER POSSIBILITIES.</span>
              </h3>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-6">
                NABTURA can work with selected partners where combining capabilities creates stronger project opportunities.
              </p>

              <p className="text-white font-medium mb-4 text-sm md:text-base">Potential partners may include:</p>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
                className="flex flex-wrap gap-2 md:gap-3 mb-8"
              >
                {[
                  'TECHNOLOGY PROVIDERS', 'GROWING SPECIALISTS', 'SUPPLIERS', 'DEVELOPERS',
                  'ARCHITECTS', 'CONSULTANTS', 'CONTRACTORS', 'OPERATORS', 'DISTRIBUTION / MARKET PARTNERS'
                ].map((tag, i) => (
                  <motion.span 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-bold tracking-wider text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-400/10 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <p className="text-white font-medium mb-6 text-sm md:text-base">Bring the right capabilities together around the right opportunity.</p>

              <div className="flex justify-center w-full mt-4">
                <Link href="/contact" className="inline-flex items-center text-xs font-bold text-purple-400 tracking-[0.2em] uppercase hover:text-white transition-colors group bg-purple-400/10 border border-purple-400/20 px-10 py-2 rounded-full hover:bg-purple-400/20 shadow-[0_0_20px_rgba(192,132,252,0.15)] hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                  EXPLORE A PARTNERSHIP <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.section>

        {/* 5. DEVELOP AN OPPORTUNITY */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
            <h2 className="text-xs md:text-sm tracking-[0.3em] text-amber-400 font-bold mb-3 uppercase">DEVELOP AN OPPORTUNITY</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-4 drop-shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-white">HAVE AN IDEA?</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 drop-shadow-[0_0_25px_rgba(251,191,36,0.5)]">LET'S EXPLORE IT.</span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-10">
              Not every opportunity begins as a fully developed project.<br className="hidden md:block" /> You may have:
            </p>

            {/* Bento-like Grid for Ideas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-10">
              {[
                { text: "LAND + AN IDEA", span: "md:col-span-1" },
                { text: "A PROPERTY + UNUSED SPACE", span: "md:col-span-2 lg:col-span-1" },
                { text: "A BUSINESS + A GREEN OPPORTUNITY", span: "md:col-span-1 lg:col-span-2" },
                { text: "A MARKET + A GROWING CONCEPT", span: "md:col-span-2 lg:col-span-1" },
                { text: "A DEVELOPMENT + A NEW POSSIBILITY", span: "md:col-span-1 lg:col-span-3" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative p-6 rounded-3xl bg-[#0a120e] flex items-center justify-center text-center group overflow-hidden ${item.span}`}
                >
                  {/* Pulsing Light Border Animation */}
                  <motion.div
                    className="absolute inset-0 border-2 rounded-3xl pointer-events-none"
                    animate={{ 
                      borderColor: ["rgba(251,191,36,0.1)", "rgba(251,191,36,0.6)", "rgba(251,191,36,0.1)"],
                      boxShadow: ["inset 0px 0px 0px rgba(251,191,36,0)", "inset 0px 0px 15px rgba(251,191,36,0.3)", "inset 0px 0px 0px rgba(251,191,36,0)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10 font-bold tracking-widest text-xs md:text-sm text-gray-200 group-hover:text-amber-400 transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-white text-sm md:text-base font-medium mb-8 max-w-2xl mx-auto">
              NABTURA can help explore how the opportunity could connect with the appropriate growing, water or green solution.
            </p>

            <div className="flex justify-center w-full mt-4">
              <Link href="/contact" className="inline-flex items-center text-xs font-bold text-amber-400 tracking-[0.2em] uppercase hover:text-white transition-colors group bg-amber-400/10 border border-amber-400/20 px-10 py-4 rounded-full hover:bg-amber-400/20 shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                DISCUSS AN OPPORTUNITY <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.section>

      </div>

      {/* 6. BRING SOMETHING TO NABTURA (INTERACTIVE SELECTOR) */}
      <section className="pt-12 pb-8 lg:pt-16 lg:pb-8 relative z-10 bg-[#09100c] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-xs md:text-sm tracking-[0.3em] text-nabtura-green font-bold mb-3 uppercase">BRING SOMETHING TO NABTURA</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight drop-shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">WHAT DO</span> <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400 drop-shadow-[0_0_25px_rgba(21,184,118,0.5)]">YOU BRING?</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Options List */}
            <div className="space-y-2">
              {selectorItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSelectorItem(selectedSelectorItem === idx ? null : idx)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 flex justify-between items-center group ${selectedSelectorItem === idx
                      ? 'bg-nabtura-green/10 border-nabtura-green shadow-[0_0_20px_rgba(21,184,118,0.2)]'
                      : 'bg-white/5 border-white/10 hover:border-nabtura-light-green/50 hover:bg-white/10'
                    }`}
                >
                  <span className={`font-bold tracking-widest text-xs md:text-sm ${selectedSelectorItem === idx ? 'text-nabtura-green' : 'text-gray-300 group-hover:text-white'}`}>
                    {item.title}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${selectedSelectorItem === idx ? 'bg-nabtura-green text-black shadow-[0_0_15px_rgba(21,184,118,0.5)]' : 'bg-white/10 text-white'}`}>
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
                      <h4 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                        {selectorItems[selectedSelectorItem].response}
                      </h4>
                      <Link href="/contact" className="mt-4 px-8 py-3 bg-white text-black font-bold tracking-widest text-xs rounded-full hover:bg-nabtura-light-green transition-colors">
                        START THE CONVERSATION
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
        </div>
      </section>

      {/* 7. FINAL CONVERSION */}
      <section className="py-16 lg:py-24 relative z-10 bg-[#050A08] overflow-hidden">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-black uppercase leading-tight mb-8 drop-shadow-lg text-center"
          >
            <span className="text-white">LET'S FIND</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400">THE RIGHT WAY <br className="md:hidden" />TO WORK TOGETHER.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12"
          >
            You don't need to have everything worked out before contacting NABTURA.<br className="hidden md:block" /> Start with what you have, what you need, or what you want to create.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6 mb-16"
          >
            <Link href="/contact" className="px-10 py-2 bg-gradient-to-r from-nabtura-green to-emerald-400 text-black font-black tracking-[0.2em] text-sm md:text-base rounded-full hover:shadow-[0_0_50px_rgba(21,184,118,0.6)] hover:scale-105 transition-all duration-300 flex items-center">
              WORK WITH NABTURA <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link href="/contact" className="text-nabtura-light-green hover:text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors flex items-center group">
              START A CONVERSATION <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 font-medium tracking-wider"
          >
            <a href="https://wa.me/971569300075" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-nabtura-green transition-colors">
              <Phone className="w-4 h-4" /> WhatsApp | +971 56 9300075
            </a>
            <a href="mailto:info@nabtura.com" className="flex items-center gap-2 hover:text-nabtura-green transition-colors">
              <Mail className="w-4 h-4" /> info@nabtura.com
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
