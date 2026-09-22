'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Sprout, Utensils, BookOpen, Home, Briefcase, Coffee, Users, RefreshCw, Sparkles, MoveRight, Leaf, Sun, Droplets, TreePine, Globe2 } from 'lucide-react';

export default function PossibilitiesPage() {
  const growItems = [
    { title: "SMART GREENHOUSE", desc: "Grow beyond the climate.", icon: Sun, bgImage: "/images/greenhouse.jpg" },
    { title: "SMART MICROGREEN ROOM", desc: "Turn compact space into fresh production.", icon: Sprout, bgImage: "/images/microgreens.jpg" },
    { title: "CHEF GARDEN", desc: "Grow closer to the kitchen.", icon: Utensils, bgImage: "/images/uae_smart_greenhouse.jpg" },
    { title: "PRODUCTIVE ROOFTOP", desc: "Put unused rooftop space to work.", icon: Home, bgImage: "/images/dubai-greenhouse.jpg" },
    { title: "SMART HOME GREENHOUSE", desc: "Grow fresh food at home.", icon: Leaf, bgImage: "/images/greenhouse.jpg" },
    { title: "KITCHEN GARDEN", desc: "Bring productive growing into everyday living.", icon: Coffee, bgImage: "/images/microgreens.jpg" },
    { title: "SMART GROWING LAB", desc: "Create a space to grow, learn and experiment.", icon: Sparkles, bgImage: "/images/uae_smart_greenhouse.jpg" },
  ];

  const experienceItems = [
    { title: "DINING FOREST", desc: "Dine within nature.", icon: Utensils, bgImage: "/images/dubai-landscapes.jpg" },
    { title: "HOTEL CHEF GARDEN", desc: "Bring growing closer to hospitality.", icon: Coffee, bgImage: "/images/landscapes.jpg" },
    { title: "RESORT GREEN EXPERIENCE", desc: "Make green part of the guest journey.", icon: Sparkles, bgImage: "/images/uae_green_city.jpg" },
    { title: "URBAN OASIS", desc: "Create green where people need it.", icon: TreePine, bgImage: "/images/dubai-water.jpg" },
    { title: "GREEN COURTYARD", desc: "Turn an ordinary space into a living environment.", icon: Home, bgImage: "/images/nabtura_path_bg.jpg" },
    { title: "WELLNESS GARDEN", desc: "Create green around relaxation and wellbeing.", icon: Leaf, bgImage: "/images/dubai-landscapes.jpg" },
  ];

  const learnItems = [
    { title: "LEARNING GARDEN", desc: "Learn by growing.", icon: BookOpen, bgImage: "/images/landscapes.jpg" },
    { title: "LEARNING FOREST", desc: "Let nature become the classroom.", icon: TreePine, bgImage: "/images/dubai-landscapes.jpg" },
    { title: "COMMUNITY GARDEN", desc: "Grow together.", icon: Users, bgImage: "/images/uae_green_city.jpg" },
    { title: "COMMUNITY FOREST", desc: "Create green that brings people together.", icon: Users, bgImage: "/images/nabtura_path_bg.jpg" },
    { title: "GREEN SCHOOL CAMPUS", desc: "Connect learning, nature and growing.", icon: BookOpen, bgImage: "/images/dubai-greenhouse.jpg" },
    { title: "PUBLIC MICRO-FOREST", desc: "Bring concentrated green into shared spaces.", icon: Sprout, bgImage: "/images/uae_green_city.jpg" },
  ];

  const liveItems = [
    { title: "EDIBLE LANDSCAPE", desc: "Beauty you can harvest.", icon: Leaf, bgImage: "/images/microgreens.jpg" },
    { title: "SMART VILLA GARDEN", desc: "Green designed around how you live.", icon: Home, bgImage: "/images/landscapes.jpg" },
    { title: "CORPORATE GREEN RETREAT", desc: "Step out of the office. Into green.", icon: Briefcase, bgImage: "/images/dubai-landscapes.jpg" },
    { title: "EDIBLE CORPORATE CAMPUS", desc: "Combine workplace green with productive planting.", icon: Briefcase, bgImage: "/images/uae_green_city.jpg" },
    { title: "GREEN MALL", desc: "Bring nature into retail environments.", icon: Coffee, bgImage: "/images/nabtura_path_bg.jpg" },
    { title: "WATER-SMART LANDSCAPE", desc: "Create green with smarter water management.", icon: Droplets, bgImage: "/images/dubai-water.jpg" },
  ];

  const transformItems = [
    { title: "DESERT-TO-GREEN", desc: "Turn challenging land into green possibility.", icon: Sun, bgImage: "/images/before_arid.jpg" },
    { title: "GREEN GATEWAY", desc: "Transform entrances and corridors with purposeful green.", icon: Sparkles, bgImage: "/images/nabtura_path_bg.jpg" },
    { title: "GREEN DEVELOPMENT", desc: "Integrate green into the wider development environment.", icon: Globe2, bgImage: "/images/uae_green_city.jpg" },
    { title: "SMART IRRIGATION NETWORK", desc: "Connect larger green environments through intelligent water management.", icon: Droplets, bgImage: "/images/uae_water_tech.jpg" },
    { title: "CUSTOM GREEN INTERVENTION", desc: "Start with a challenge and develop the appropriate response.", icon: RefreshCw, bgImage: "/images/before_courtyard.jpg" },
  ];

  const categories = [
    'GROW', 'DINE', 'LEARN', 'LIVE', 'WORK', 'RELAX', 'GATHER', 'TRANSFORM'
  ];

  const [currentLiveIdx, setCurrentLiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLiveIdx((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [liveItems.length]);

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden text-white selection:bg-nabtura-green selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center opacity-40 z-0 scale-105 transition-transform duration-[20s] hover:scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#050a08] z-10 pointer-events-none"></div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto w-full flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] text-nabtura-green font-bold mb-6 uppercase drop-shadow-md"
          >
            NABTURA POSSIBILITIES
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-normal leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-8"
          >
            GREEN CAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400">DO MORE.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white max-w-3xl mx-auto text-lg md:text-2xl font-bold tracking-widest leading-relaxed mb-6 uppercase"
          >
            Grow. Feed. Teach. Relax. Gather. Beautify. Restore. Experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed mb-8"
          >
            NABTURA combines growing, water, landscape and green technologies to create possibilities around how spaces can work, feel and perform.
          </motion.p>

          <motion.a
            href="#categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="group flex flex-col items-center gap-3 text-nabtura-light-green hover:text-white transition-colors"
          >
            <span className="text-xs tracking-[0.3em] font-bold uppercase">EXPLORE THE POSSIBILITIES</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* 2. START WITH WHAT YOU WANT TO CREATE */}
      <section id="categories" className="py-5 border-y border-white/5 bg-[#050A08] relative z-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nabtura-green/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <p className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs tracking-[0.3em] text-gray-400 font-bold uppercase backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-nabtura-green animate-pulse"></span>
              START WITH WHAT YOU WANT TO CREATE
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-16 drop-shadow-lg text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">WHAT COULD</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">YOUR SPACE </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_25px_rgba(21,184,118,0.5)]">BECOME?</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {categories.map((verb, idx) => (
              <motion.div
                key={verb}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative rounded-[10px] cursor-pointer group"
              >
                {/* Staggered Pulsing Glow (Idle State) */}
                <motion.div 
                  className="absolute inset-0 rounded-[10px] border border-[#15b876] pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(21, 184, 118, 0.1)", 
                      "0 0 25px rgba(21, 184, 118, 0.5)", 
                      "0 0 5px rgba(21, 184, 118, 0.1)"
                    ],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2
                  }}
                />
                
                {/* Strong Glow (Hover State) */}
                <div className="absolute inset-0 rounded-[10px] border border-[#15b876] shadow-[0_0_30px_rgba(21,184,118,0.8)] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>

                {/* Inner Content */}
                <div className="relative px-5 py-2.5 md:px-9 md:py-3 rounded-[10px] bg-[#09100c] flex items-center justify-center transition-colors duration-300">
                  <span className="text-[12px] md:text-sm font-bold tracking-[0.15em] text-white uppercase drop-shadow-md">
                    {verb}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REUSABLE SECTION COMPONENT FOR PREMIUM LOOK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 space-y-16 lg:space-y-15">
        
        {/* 3. GROW */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-light-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            <h2 className="text-xs md:text-sm tracking-[0.3em] text-nabtura-light-green font-bold mb-4 uppercase">GROW</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-8 drop-shadow-lg text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">CREATE A PLACE</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_25px_rgba(21,184,118,0.5)]">THAT GROWS.</span>
            </h3>

            <Link href="/solutions" className="inline-flex items-center text-xs font-bold text-nabtura-light-green tracking-widest uppercase hover:text-white transition-colors group bg-nabtura-light-green/10 border border-nabtura-light-green/20 px-8 py-4 rounded-full hover:bg-nabtura-light-green/20 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
              EXPLORE GROWING POSSIBILITIES <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative z-10 overflow-hidden py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...growItems, ...growItems].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="w-[300px] md:w-[350px] shrink-0 group block rounded-[2rem] p-8 hover:border-nabtura-light-green/50 transition-all duration-500 shadow-2xl overflow-hidden relative border border-white/10 bg-[#050a08] h-[300px] flex flex-col justify-end">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-nabtura-light-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                        <Icon className="w-5 h-5 text-nabtura-light-green" />
                      </div>
                      <h4 className="text-xl font-extrabold tracking-normal text-white mb-2 uppercase drop-shadow-md">{item.title}</h4>
                      <p className="text-gray-300 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* 4. EXPERIENCE */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            <h2 className="text-xs md:text-sm tracking-[0.3em] text-amber-400 font-bold mb-4 uppercase">EXPERIENCE</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-8 drop-shadow-lg text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-white">CREATE GREEN</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 drop-shadow-[0_0_25px_rgba(251,191,36,0.5)]">PEOPLE REMEMBER.</span>
            </h3>

            <Link href="/solutions" className="inline-flex items-center text-xs font-bold text-amber-400 tracking-widest uppercase hover:text-white transition-colors group bg-amber-400/10 border border-amber-400/20 px-8 py-4 rounded-full hover:bg-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
              EXPLORE GREEN EXPERIENCES <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row h-[500px] lg:h-[400px] gap-3 relative z-10 w-full max-w-7xl mx-auto">
            {experienceItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative flex-1 hover:flex-[4] transition-all duration-700 ease-in-out rounded-[2rem] overflow-hidden bg-[#050a08] border border-white/10 shadow-2xl cursor-pointer min-h-[60px]"
                >
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                  
                  {/* Default State (Collapsed) */}
                  <div className="absolute inset-0 flex lg:flex-col items-center justify-start lg:justify-end p-4 lg:p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    {/* On desktop, rotate text. On mobile, keep it normal next to icon */}
                    <div className="ml-4 lg:ml-0 lg:mt-6 flex-1 flex lg:justify-center items-center overflow-hidden">
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest whitespace-nowrap truncate lg:[writing-mode:vertical-rl] lg:rotate-180">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Expanded State (Hovered) */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(251,191,36,0.2)] transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-2xl lg:text-3xl font-extrabold tracking-normal text-white mb-2 uppercase drop-shadow-md transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 whitespace-nowrap">{item.title}</h4>
                      <p className="text-gray-300 font-light text-sm lg:text-base leading-relaxed transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150 line-clamp-2 lg:line-clamp-none">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* 5. LEARN & CONNECT */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            <h2 className="text-xs md:text-sm tracking-[0.3em] text-blue-400 font-bold mb-4 uppercase">LEARN & CONNECT</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-8 drop-shadow-lg text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">LET GREEN</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">BRING PEOPLE TOGETHER.</span>
            </h3>

            <Link href="/solutions" className="inline-flex items-center text-xs font-bold text-blue-400 tracking-widest uppercase hover:text-white transition-colors group bg-blue-400/10 border border-blue-400/20 px-8 py-4 rounded-full hover:bg-blue-400/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              EXPLORE COMMUNITY POSSIBILITIES <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative z-10 auto-rows-[200px] md:auto-rows-[220px]">
            {learnItems.map((item, idx) => {
              const Icon = item.icon;
              
              return (
                <div key={idx} className="group block rounded-[1.5rem] p-5 hover:border-blue-400/50 transition-all duration-500 shadow-xl overflow-hidden relative border border-white/10 bg-[#050a08] flex flex-col justify-end min-h-[200px] md:min-h-0">
                  <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent"></div>
                  
                  <div className="relative z-10 mt-auto">
                    <div className="w-8 h-8 mb-2 rounded-xl bg-blue-400/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="text-sm md:text-base font-bold tracking-tight text-white mb-1 uppercase group-hover:text-blue-300 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 font-light text-ms line-clamp-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* 6. LIVE & WORK GREENER */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            <h2 className="text-xs md:text-sm tracking-[0.3em] text-emerald-400 font-bold mb-4 uppercase">LIVE & WORK GREENER</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-8 drop-shadow-lg text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">BRING GREEN</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_25px_rgba(52,211,153,0.5)]">INTO EVERYDAY LIFE.</span>
            </h3>

            <Link href="/solutions" className="inline-flex items-center text-xs font-bold text-emerald-400 tracking-widest uppercase hover:text-white transition-colors group bg-emerald-400/10 border border-emerald-400/20 px-8 py-4 rounded-full hover:bg-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              EXPLORE LIVING & WORKING GREEN <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto py-4 mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLiveIdx}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(5px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
              >
                {liveItems.slice(currentLiveIdx * 3, currentLiveIdx * 3 + 3).map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="group block rounded-[1.5rem] p-5 hover:border-emerald-400/50 transition-all duration-500 shadow-xl overflow-hidden relative border border-white/10 bg-[#050a08] flex flex-col justify-end min-h-[200px] md:min-h-[220px]">
                      <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent"></div>
                      
                      <div className="relative z-10 mt-auto">
                        <div className="w-8 h-8 mb-2 rounded-xl bg-emerald-400/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                          <Icon className="w-4 h-4 text-emerald-400" />
                        </div>
                        <h4 className="text-sm md:text-base font-bold tracking-tight text-white mb-1 uppercase group-hover:text-emerald-300 transition-colors">{item.title}</h4>
                        <p className="text-gray-400 font-light text-ms line-clamp-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
            
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8 relative z-20">
              {[0, 1].map((idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentLiveIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === currentLiveIdx ? 'w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* 7. TRANSFORM */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-sand/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center mb-16 relative z-10">
            <h2 className="text-xs md:text-sm tracking-[0.3em] text-nabtura-sand font-bold mb-4 uppercase">TRANSFORM</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-8 drop-shadow-lg text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white">SEE MORE</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-sand to-yellow-600 drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]">THAN WHAT IS THERE TODAY.</span>
            </h3>

            <Link href="/solutions/environmental-projects" className="inline-flex items-center text-xs font-bold text-nabtura-sand tracking-widest uppercase hover:text-white transition-colors group bg-nabtura-sand/10 border border-nabtura-sand/20 px-8 py-4 rounded-full hover:bg-nabtura-sand/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              SHOW US WHAT TO TRANSFORM <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative z-10 auto-rows-[200px] md:auto-rows-[220px]">
            {transformItems.map((item, idx) => {
              const Icon = item.icon;
              
              // Bento Box Layout for 5 items
              let spanClasses = "md:col-span-1 md:row-span-1";
              if (idx === 0) spanClasses = "md:col-span-1 md:row-span-2"; // Narrower featured card (1 column width, 2 rows height)
              
              return (
                <div key={idx} className={`group block rounded-[1.5rem] p-5 hover:border-nabtura-sand/50 transition-all duration-500 shadow-xl overflow-hidden relative border border-white/10 bg-[#050a08] flex flex-col justify-end ${spanClasses} min-h-[200px] md:min-h-0`}>
                  <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent"></div>
                  
                  <div className="relative z-10 mt-auto">
                    <div className={`${idx === 0 ? 'w-12 h-12 mb-4' : 'w-8 h-8 mb-2'} rounded-xl bg-nabtura-sand/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.2)]`}>
                      <Icon className={`${idx === 0 ? 'w-6 h-6' : 'w-4 h-4'} text-nabtura-sand`} />
                    </div>
                    <h4 className="text-sm md:text-base font-bold tracking-tight text-white mb-1 uppercase group-hover:text-yellow-300 transition-colors">{item.title}</h4>
                    <p className={`text-gray-400 font-light ${idx === 0 ? 'text-sm' : 'text-sm line-clamp-2'} leading-relaxed`}>{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.section>

      </div>

      {/* 8. CREATE YOUR OWN POSSIBILITY */}
      <section className="py-16 md:py-24 relative z-10 bg-[#050A08] overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-[#050A08]"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-nabtura-green/5 blur-[200px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-4 drop-shadow-lg text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">DON'T SEE</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_25px_rgba(21,184,118,0.5)]">YOUR IDEA HERE?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-nabtura-green mb-8 drop-shadow-md"
          >
            Good.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-16"
          >
            NABTURA Possibilities is not a catalogue of fixed packages. Tell us about your space, land, idea or objective, and let's explore what could be created.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-20 max-w-4xl mx-auto"
          >
            {[
              "I HAVE A SPACE", 
              "I HAVE LAND", 
              "I HAVE AN IDEA", 
              "I WANT TO GROW SOMETHING", 
              "I WANT TO CREATE AN EXPERIENCE", 
              "I WANT TO TRANSFORM SOMETHING", 
              "I'M JUST EXPLORING"
            ].map((tag, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-full border border-white/20 bg-black/60 backdrop-blur-md hover:bg-nabtura-green hover:border-nabtura-green hover:text-black hover:shadow-[0_0_30px_rgba(21,184,118,0.5)] transition-all duration-300 font-bold tracking-widest text-xs md:text-sm cursor-pointer select-none"
              >
                {tag}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <Link href="/contact" className="px-10 py-2.5 bg-gradient-to-r from-nabtura-green to-emerald-400 text-black font-black tracking-[0.2em] text-sm md:text-base rounded-full hover:shadow-[0_0_50px_rgba(21,184,118,0.6)] hover:scale-105 transition-all duration-300 flex items-center">
              CREATE MY NABTURA POSSIBILITY <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            
            <Link href="/contact" className="text-nabtura-light-green hover:text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors flex items-center group">
              SHOW US YOUR SPACE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
