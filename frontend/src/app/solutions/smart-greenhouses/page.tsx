"use client";

import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, CheckCircle2, Leaf, Droplets, Wind, Sun, Activity, CheckCircle, Target, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import WhatCanIGrow from "@/components/tools/WhatCanIGrow";

export default function SmartGreenhousesPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden">
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="NABTURA SMART GREENHOUSES"
        headline={<>GROW BEYOND <br className="hidden sm:block" />THE CLIMATE.</>}
        tagline="Smart growing environments designed around your crop, location and commercial objective."
        bgImageUrl="/images/dubai-greenhouse.jpg"
        accentColor="text-nabtura-green"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link href="#explore" className="text-xs font-bold tracking-widest text-nabtura-green hover:text-white uppercase transition-all flex items-center gap-2 group">
            EXPLORE THE SYSTEM <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
          </Link>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
          <Link href="/contact" className="text-xs font-bold tracking-widest text-nabtura-green hover:text-white uppercase transition-all flex items-center gap-2 group">
            DISCUSS YOUR PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. MORE THAN A GREENHOUSE */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, ease: "easeOut" }} id="explore" className="pt-10 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden group shadow-2xl">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-green/5 rounded-full blur-[100px] -z-10 group-hover:bg-nabtura-green/10 transition-colors duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10 relative">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-4 drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">CREATE THE ENVIRONMENT</span> <br className="hidden xl:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_25px_rgba(21,184,118,0.5)]">YOUR CROP NEEDS.</span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                A NABTURA Smart Greenhouse brings together the growing environment, water, nutrients, technology and monitoring into one integrated system.
              </p>

              <div className="flex flex-wrap gap-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8">
                {['CLIMATE', 'WATER', 'NUTRIENTS', 'GROWING', 'SENSORS', 'AUTOMATION'].map(item => (
                  <span key={item} className="bg-nabtura-green/10 text-nabtura-light-green px-4 py-2 rounded-lg border border-nabtura-green/20 hover:bg-nabtura-green/20 transition-colors cursor-default shadow-lg shadow-nabtura-green/5">
                    {item}
                  </span>
                ))}
              </div>

              <div className="border-l-4 border-nabtura-green pl-5 py-2">
                <p className="text-white font-medium italic text-base tracking-wide">
                  "Not just a structure. A smarter place to grow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. CONTROL WHAT MATTERS */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative group">
          <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
            <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#09110E] via-[#09110E]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">Create conditions better suited to the crop.</h3>
              <p className="text-nabtura-green text-xs font-bold tracking-widest uppercase">Not simply the climate outside.</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-blue/5 rounded-full blur-[80px] -z-10 group-hover:bg-nabtura-blue/10 transition-colors duration-700"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase leading-tight">
              GROW WITH <br className="hidden md:block" />GREATER CONTROL.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Depending on the crop and system, the growing environment can manage relevant conditions such as:
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
              {['Temperature', 'Humidity', 'Ventilation', 'Irrigation', 'Nutrients', 'Lighting / Shading', 'Water Quality'].map(item => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-nabtura-green flex-shrink-0" />
                  <span className="font-light text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#09110E]/50 border border-white/5 rounded-2xl p-5">
              <p className="text-white text-[10px] font-bold mb-3 uppercase tracking-widest opacity-80">Technology can support:</p>
              <div className="flex flex-wrap items-center gap-2 text-nabtura-blue text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                <span className="bg-nabtura-blue/10 px-2.5 py-1.5 rounded-md border border-nabtura-blue/20">SENSE</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                <span className="bg-nabtura-blue/10 px-2.5 py-1.5 rounded-md border border-nabtura-blue/20">MONITOR</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                <span className="bg-nabtura-blue/10 px-2.5 py-1.5 rounded-md border border-nabtura-blue/20">CONTROL</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                <span className="bg-nabtura-blue/10 px-2.5 py-1.5 rounded-md border border-nabtura-blue/20">AUTOMATE</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                <span className="bg-nabtura-blue/10 px-2.5 py-1.5 rounded-md border border-nabtura-blue/20">OPTIMIZE</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. CHOOSE HOW YOU GROW */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase leading-tight">
            THE SYSTEM FOLLOWS <br className="hidden md:block" />THE CROP.
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            NABTURA can develop growing environments around appropriate methods. The technology follows the growing requirement—not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="relative group/card">
            <div className="absolute inset-0 bg-nabtura-blue/10 rounded-[2rem] blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] group-hover/card:bg-white/10 group-hover/card:border-nabtura-blue/30 transition-all shadow-lg group-hover/card:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-nabtura-blue/10 flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform">
                <Droplets className="w-6 h-6 text-nabtura-blue" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">HYDROPONICS</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Efficient soilless growing systems.</p>
            </div>
          </div>

          <div className="relative group/card">
            <div className="absolute inset-0 bg-nabtura-light-green/10 rounded-[2rem] blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] group-hover/card:bg-white/10 group-hover/card:border-nabtura-light-green/30 transition-all shadow-lg group-hover/card:shadow-[0_0_20px_rgba(134,239,172,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-nabtura-light-green/10 flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform">
                <Wind className="w-6 h-6 text-nabtura-light-green" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">AEROPONICS</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Root-zone growing using controlled mist delivery.</p>
            </div>
          </div>

          <div className="relative group/card">
            <div className="absolute inset-0 bg-nabtura-green/10 rounded-[2rem] blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] group-hover/card:bg-white/10 group-hover/card:border-nabtura-green/30 transition-all shadow-lg group-hover/card:shadow-[0_0_20px_rgba(21,184,118,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-nabtura-green/10 flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform">
                <Activity className="w-6 h-6 text-nabtura-green" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">AQUAPONICS</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Integrated plant and aquatic production systems.</p>
            </div>
          </div>

          <div className="relative group/card">
            <div className="absolute inset-0 bg-nabtura-sand/10 rounded-[2rem] blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] group-hover/card:bg-white/10 group-hover/card:border-nabtura-sand/30 transition-all shadow-lg group-hover/card:shadow-[0_0_20px_rgba(217,196,169,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-nabtura-sand/10 flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform">
                <Leaf className="w-6 h-6 text-nabtura-sand" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">SOIL / HYBRID</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Where appropriate to the crop and project.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center relative z-10">
          <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-green px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-nabtura-light-green transition-colors shadow-[0_0_20px_rgba(21,184,118,0.2)] hover:shadow-[0_0_30px_rgba(21,184,118,0.4)]">
            EXPLORE GROWING METHODS <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </motion.section>
      {/* 5. WHAT CAN YOU GROW? */}
      <section className="pt-16 pb-24 bg-nabtura-slate border-y border-white/10">
        <WhatCanIGrow />
      </section>

      {/* 7. BUILT AROUND YOUR PURPOSE */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-green/5 rounded-full blur-[100px] -z-10 group-hover:bg-nabtura-green/10 transition-colors duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10 relative">
            <div className="lg:col-span-5">
              <div className="space-y-1 mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">YOUR LOCATION.</h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">YOUR OBJECTIVE.</h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nabtura-green uppercase tracking-tight">YOUR GROWING SYSTEM.</h2>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                A Smart Greenhouse can be developed for different applications and scales—from focused growing projects to larger commercial operations.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {['Commercial Growers', 'Investors', 'Landowners', 'Hospitality', 'F&B', 'Institutions', 'Entrepreneurs', 'Homes & Villas'].map(audience => (
                  <span key={audience} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-nabtura-green/30 transition-colors cursor-default shadow-sm">
                    {audience}
                  </span>
                ))}
              </div>

              <div className="border-l-4 border-nabtura-green pl-5 py-2 mb-8">
                <p className="text-white font-medium italic text-base tracking-wide">
                  NABTURA considers the site, crop, water, infrastructure, scale and operating objective before developing the solution.
                </p>
              </div>

              <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-green hover:bg-nabtura-light-green px-6 py-3 rounded-full font-bold tracking-widest text-xs uppercase transition-all shadow-[0_0_20px_rgba(21,184,118,0.2)] hover:shadow-[0_0_30px_rgba(21,184,118,0.4)]">
                SHOW US YOUR LOCATION <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. FROM IDEA TO GROWING */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
            WE MAKE IT WORK.
          </h2>
        </div>

        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-10 md:p-16 mb-12 relative overflow-hidden group shadow-2xl">
          {/* Background glow on hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-nabtura-green/5 blur-[100px] -z-10 group-hover:bg-nabtura-green/10 transition-colors duration-1000"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center relative z-10">
            {/* Desktop connecting line with sequential fill */}
            <div className="hidden md:block absolute top-6 left-6 right-6 h-[2px] bg-white/5 z-0 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.2, ease: "linear", delay: 0.2 }}
                className="w-full h-full bg-nabtura-green shadow-[0_0_15px_rgba(21,184,118,0.8)]"
              ></motion.div>
            </div>

            {['ASSESS', 'DESIGN', 'ENGINEER', 'BUILD', 'COMMISSION', 'GROW'].map((step, index) => (
              <div key={step} className="flex flex-col items-center z-10 cursor-default relative">
                <motion.div 
                  initial={{ borderColor: "rgba(255,255,255,0.1)", color: "#9ca3af", boxShadow: "0 0 0px rgba(21,184,118,0)" }}
                  whileInView={{ borderColor: "#15b876", color: "#ffffff", boxShadow: "0 0 20px rgba(21,184,118,0.4)" }}
                  whileHover={{ y: -5, boxShadow: "0 0 30px rgba(21,184,118,0.6)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.4 + 0.2 }}
                  className="w-12 h-12 rounded-full bg-[#09110E] border-2 flex items-center justify-center font-bold text-sm mb-4 relative"
                >
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.4 + 0.2 }}
                    className="absolute inset-0 rounded-full bg-nabtura-green/20 blur-md -z-10"
                  ></motion.div>
                  {index + 1}
                </motion.div>
                <motion.p 
                  initial={{ color: "#9ca3af" }}
                  whileInView={{ color: "#15b876" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.4 + 0.2 }}
                  className="font-bold tracking-widest uppercase text-[12px]"
                >
                  {step}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
            From initial assessment to an operational growing environment, NABTURA can support the project through the required stages.
          </p>
          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-400 font-light text-xs italic opacity-80">Need ongoing support?</span>
            <Link href="/capabilities/smartcare" className="inline-flex items-center text-xs font-bold text-nabtura-light-green tracking-[0.2em] uppercase hover:text-black hover:bg-nabtura-light-green transition-all duration-300 group bg-nabtura-light-green/10 border border-nabtura-light-green/30 px-8 py-3.5 rounded-full shadow-[0_0_15px_rgba(21,184,118,0.1)] hover:shadow-[0_0_30px_rgba(21,184,118,0.4)] backdrop-blur-md relative overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
               <span className="relative z-10 flex items-center">
                 EXPLORE NABTURA SMARTCARE <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 10. FINAL CONVERSION */}
      <section id="final-conversion" className="py-12 relative overflow-hidden bg-[#0A120E]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/dubai-greenhouse.jpg')] bg-cover bg-center bg-fixed opacity-40"></div>
          <div className="absolute inset-0 bg-[#0A120E]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-[#0A120E]"></div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-nabtura-green/30 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-nabtura-green/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            WHAT DO YOU <br />WANT TO GROW?
          </h2>
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Choose your starting point:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            {[
              'I WANT TO GROW AT HOME',
              'I HAVE A CROP / GROWING IDEA',
              'I WANT A COMMERCIAL GREENHOUSE',
              'I HAVE A LOCATION',
              'I\'M EXPLORING AN INVESTMENT'
            ].map((option, index) => (
              <div key={index} className={`bg-[#09110E]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-[#09110E]/90 hover:border-nabtura-green/50 transition-all duration-300 cursor-pointer group flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] ${index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto w-full' : ''}`}>
                <span className="text-white font-bold tracking-widest text-xs uppercase pr-4 group-hover:text-nabtura-green transition-colors">{option}</span>
                <CheckCircle2 className="w-5 h-5 text-gray-500 group-hover:text-nabtura-green transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-green px-10 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]">
              DISCUSS MY SMART GREENHOUSE <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link href="/contact" className="inline-flex items-center text-nabtura-green font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              SHOW US YOUR LOCATION <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-6 flex justify-center text-xs font-light text-gray-500 tracking-widest">
              WhatsApp | +971 56 9300075 | info@nabtura.com
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
