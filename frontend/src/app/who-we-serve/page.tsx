"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Utensils, Sprout, Trees, Droplets, Leaf, Tractor, Map, Lightbulb, Hotel, Coffee, Briefcase, Building, GraduationCap, Landmark, Users } from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen bg-transparent pt-20 overflow-hidden font-sans relative">

      {/* Global Fixed Animated Waves Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-30 bg-transparent">
        <motion.svg animate={{ x: ["0%", "-50%"] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 w-[200%] h-[250px] md:h-[400px] fill-emerald-900/30" viewBox="0 0 2880 320" preserveAspectRatio="none"><path d="M0,160 Q360,40 720,160 T1440,160 Q1800,40 2160,160 T2880,160 L2880,320 L0,320 Z" /></motion.svg>
        <motion.svg animate={{ x: ["-50%", "0%"] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 w-[200%] h-[200px] md:h-[300px] fill-nabtura-green/30" viewBox="0 0 2880 320" preserveAspectRatio="none"><path d="M0,120 Q360,240 720,120 T1440,120 Q1800,240 2160,120 T2880,120 L2880,320 L0,320 Z" /></motion.svg>
      </div>
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="WHO WE SERVE"
        headline={<>DIFFERENT NEEDS. <br className="hidden sm:block" />SMARTER GREEN POSSIBILITIES.</>}
        tagline="NABTURA works with people, businesses and organizations looking to grow food, manage water, create green or transform environments."
        description="Find where you fit—and explore what NABTURA could create with you."
        bgImageUrl="/images/greenhouse.jpg"
        accentColor="text-nabtura-green"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center z-10 relative">
        <Link href="#explore" className="text-xs font-bold tracking-widest text-nabtura-green hover:text-white uppercase transition-all inline-flex items-center gap-2 group">
          FIND YOUR PATH <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
        </Link>
      </div>

      <div id="explore" className="max-w-7xl mx-auto px-4 sm:px-12 md:px-20 lg:px-24 py-16 space-y-24 relative">
        
        {/* 2. GROWERS, LANDOWNERS & ENTREPRENEURS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-light-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-light-green/5 border border-nabtura-light-green/20 mb-8 shadow-[0_0_15px_rgba(74,222,128,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-light-green animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-light-green">GROWERS, LANDOWNERS & ENTREPRENEURS</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">TURN RESOURCES INTO </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-nabtura-light-green drop-shadow-[0_0_25px_rgba(74,222,128,0.3)]">OPPORTUNITY.</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">Whether you already grow, have land, or want to start something new,</span> NABTURA can help explore the right growing or green opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Growers & Farms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-light-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] hover:-translate-y-2"
            >
              <Link href="/who-we-serve/growers-farms" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View GROWERS & FARMS</span></Link>
              <div className="absolute inset-0 bg-[url('/images/uae_smart_greenhouse.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-light-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Tractor className="w-8 h-8 text-nabtura-light-green animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] transition-all duration-300" style={{ animationDuration: '3s' }} />
                  <h3 className="text-2xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-light-green transition-all duration-300 drop-shadow-md">GROWERS & FARMS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mb-8 transition-colors duration-300">Improve or develop smarter growing environments.</p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 group-hover:border-nabtura-light-green/30 transition-colors duration-500">
                <p className="text-nabtura-light-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">SOLUTIONS :</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s' }}>Smart Greenhouses</span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: '1s' }}>Smart Irrigation</span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: '2s' }}>Growing Systems</span>
                </div>
              </div>
            </motion.div>

            {/* Landowners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-light-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] hover:-translate-y-2"
            >
              <Link href="/who-we-serve/landowners" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View LANDOWNERS</span></Link>
              <div className="absolute inset-0 bg-[url('/images/dubai-landscapes.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-light-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Map className="w-8 h-8 text-nabtura-light-green animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  <h3 className="text-2xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-light-green transition-all duration-300 drop-shadow-md">LANDOWNERS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mb-8 transition-colors duration-300">Explore what your land could grow, become or support.</p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 group-hover:border-nabtura-light-green/30 transition-colors duration-500">
                <p className="text-nabtura-light-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">SOLUTIONS :</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s' }}>Smart Greenhouses</span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: '1s' }}>Desert Greening</span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: '2s' }}>Environmental Projects</span>
                </div>
              </div>
            </motion.div>

            {/* Entrepreneurs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-light-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] hover:-translate-y-2"
            >
              <Link href="/who-we-serve/investors-partners" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View ENTREPRENEURS</span></Link>
              <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-light-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-8 h-8 text-nabtura-light-green animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <h3 className="text-2xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-light-green transition-all duration-300 drop-shadow-md">ENTREPRENEURS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mb-8 transition-colors duration-300">Turn a growing idea into a potential business opportunity.</p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 group-hover:border-nabtura-light-green/30 transition-colors duration-500">
                <p className="text-nabtura-light-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">SOLUTIONS :</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s' }}>Smart Microgreens</span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: '1s' }}>Smart Greenhouses</span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-light-green/20 hover:border-nabtura-light-green/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: '2s' }}>Productive Green</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link href="/solutions" className="group relative inline-flex items-center gap-3 bg-nabtura-light-green border border-nabtura-light-green rounded-full py-1.5 px-6 hover:bg-nabtura-green hover:border-nabtura-green transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] z-10">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-[10px] sm:text-xs relative z-10">
                EXPLORE YOUR OPPORTUNITY
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-light-green transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 3. HOSPITALITY, F&B & BUSINESS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-nabtura-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-green/5 border border-nabtura-green/20 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-green animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-green">HOSPITALITY, F&B & BUSINESS</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">MAKE GREEN PART OF </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-nabtura-green drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">THE EXPERIENCE.</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">NABTURA can bring growing, landscape, water and green experiences closer</span> to the places where people stay, dine, work and visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Hotels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#051A0D] border border-white/10 p-10 rounded-[2rem] hover:border-nabtura-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
            >
              <Link href="/who-we-serve/hotels-resorts" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View HOTELS & RESORTS</span></Link>
              <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Hotel className="w-8 h-8 text-nabtura-green animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-300" style={{ animationDuration: '3s' }} />
                  <h3 className="text-2xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-green transition-all duration-300 drop-shadow-md">HOTELS & RESORTS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Create memorable green experiences—from landscapes and chef gardens to fresh growing and intelligent irrigation.</p>
              </div>
            </motion.div>

            {/* Restaurants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#051A0D] border border-white/10 p-10 rounded-[2rem] hover:border-nabtura-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
            >
              <Link href="/who-we-serve/restaurants-fb" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View RESTAURANTS & F&B</span></Link>
              <div className="absolute inset-0 bg-[url('/images/before_microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-8 h-8 text-nabtura-green animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  <h3 className="text-2xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-green transition-all duration-300 drop-shadow-md">RESTAURANTS & F&B</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Grow closer to the kitchen or transform outdoor spaces into distinctive dining environments.</p>
              </div>
            </motion.div>

            {/* Corporate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#051A0D] border border-white/10 p-10 rounded-[2rem] hover:border-nabtura-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
            >
              <Link href="/who-we-serve/investors-partners" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View BUSINESSES & CORPORATE</span></Link>
              <div className="absolute inset-0 bg-[url('/images/dubai-water.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-8 h-8 text-nabtura-green animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <h3 className="text-2xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-green transition-all duration-300 drop-shadow-md">BUSINESSES & CORPORATE</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Turn workplaces and properties into greener, more engaging environments.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:border-nabtura-green/30 transition-all duration-500 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p className="text-nabtura-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-5 relative z-10">POSSIBLE CONCEPTS :</p>
            <div className="flex flex-wrap items-center gap-2 relative z-10">
              {["Chef Garden", "Smart Microgreens", "Dining Forest", "Resort Landscape", "Corporate Green Retreat", "Edible Landscape"].map((concept, i) => (
                <span key={i} className="bg-white/5 border border-nabtura-green/30 shadow-[0_0_10px_rgba(16,185,129,0.1)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-green/20 hover:border-nabtura-green/60 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: `${i * 0.2}s` }}>
                  {concept}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link href="/solutions" className="group relative inline-flex items-center gap-3 bg-nabtura-green border border-nabtura-green rounded-full py-1.5 px-6 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] z-10">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-[10px] sm:text-xs relative z-10">
                EXPLORE BUSINESS & HOSPITALITY POSSIBILITIES
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-green transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 4. DEVELOPERS, INSTITUTIONS & COMMUNITIES */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-sand/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-sand/5 border border-nabtura-sand/20 mb-8 shadow-[0_0_15px_rgba(251,146,60,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-sand animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-sand">DEVELOPERS, INSTITUTIONS & COMMUNITIES</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">BUILD GREEN INTO </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-nabtura-sand drop-shadow-[0_0_25px_rgba(251,146,60,0.3)]">THE PLACE.</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">NABTURA can integrate green thinking into developments,</span> institutions and shared environments from the beginning—or help transform existing spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2">
              <Link href="/who-we-serve/developers" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View PROPERTY DEVELOPERS</span></Link>
              <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-8 h-8 text-nabtura-sand animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all duration-300" style={{ animationDuration: '3s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md">PROPERTY DEVELOPERS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Integrate landscapes, smart irrigation, productive green and green experiences into developments.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2">
              <Link href="/who-we-serve/developers" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View SCHOOLS & UNIVERSITIES</span></Link>
              <div className="absolute inset-0 bg-[url('/images/before_courtyard.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-8 h-8 text-nabtura-sand animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md">SCHOOLS & UNIVERSITIES</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Create environments where people can grow, learn and experience nature.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2">
              <Link href="/who-we-serve/developers" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View GOVERNMENT & INSTITUTIONS</span></Link>
              <div className="absolute inset-0 bg-[url('/images/uae_water_tech.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Landmark className="w-8 h-8 text-nabtura-sand animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md">GOVERNMENT & INSTITUTIONS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Explore project-specific green, water and environmental interventions.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2">
              <Link href="/who-we-serve/developers" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View COMMUNITIES</span></Link>
              <div className="absolute inset-0 bg-[url('/images/before_arid.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-nabtura-sand animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md">COMMUNITIES</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Create shared green environments designed for people and place.</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:border-nabtura-sand/30 transition-all duration-500 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-r from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <p className="text-nabtura-sand/80 text-xs font-bold tracking-[0.2em] uppercase mb-5 relative z-10">POSSIBLE CONCEPTS :</p>
            <div className="flex flex-wrap items-center gap-2 relative z-10 mb-6">
              {["Learning Garden", "Smart Growing Lab", "Community Forest", "Urban Oasis", "Green Infrastructure", "Water-Smart Landscape"].map((concept, i) => (
                <span key={i} className="bg-white/5 border border-nabtura-sand/30 shadow-[0_0_10px_rgba(251,146,60,0.1)] animate-pulse px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase hover:animate-none hover:bg-nabtura-sand/20 hover:border-nabtura-sand/60 hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all cursor-default" style={{ animationDuration: '3s', animationDelay: `${i * 0.2}s` }}>
                  {concept}
                </span>
              ))}
            </div>

            <div className="border-t border-white/10 group-hover:border-nabtura-sand/30 transition-colors duration-500 pt-4 relative z-10">
              <p className="text-gray-400 font-light text-sm italic">Project-specific planting requirements can also be supported through NABTURA Nursery Solutions.</p>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link href="/solutions" className="group relative inline-flex items-center gap-3 bg-nabtura-sand border border-nabtura-sand rounded-full py-1.5 px-6 hover:bg-orange-400 hover:border-orange-400 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(251,146,60,0.2)] hover:shadow-[0_0_30px_rgba(251,146,60,0.4)] z-10">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-[10px] sm:text-xs relative z-10">
                EXPLORE INSTITUTIONAL & DEVELOPMENT SOLUTIONS
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-sand transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 5. HOMES & VILLAS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-nabtura-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-blue/5 border border-nabtura-blue/20 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-blue animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-blue">HOMES & VILLAS</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">BRING SMART GREEN </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-nabtura-blue drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">HOME.</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">Your home can be more than landscaped.</span> It can grow food, use water intelligently and become a greener place to live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2">
              <Link href="/who-we-serve/homes-villas" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View SMART HOME GREENHOUSE</span></Link>
              <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-nabtura-blue animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" style={{ animationDuration: '3s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md">SMART HOME GREENHOUSE</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">Grow fresh food at home.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2">
              <Link href="/who-we-serve/homes-villas" className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"><span className="sr-only">View KITCHEN & EDIBLE GARDENS</span></Link>
              <div className="absolute inset-0 bg-[url('/images/before_microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Utensils className="w-6 h-6 text-nabtura-blue animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md">KITCHEN & EDIBLE GARDENS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">Make part of your landscape productive.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Sprout className="w-6 h-6 text-nabtura-blue animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md">HOME MICROGREENS</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">Fresh growing in compact spaces.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('/images/before_landscapes.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Trees className="w-6 h-6 text-nabtura-blue animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md">LANDSCAPES</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">Create green spaces around how you live.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-[#051A0D] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-[url('/images/dubai-water.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-6 h-6 text-nabtura-blue animate-pulse group-hover:animate-none group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300" style={{ animationDuration: '3s', animationDelay: '2s' }} />
                  <h3 className="text-xl font-extrabold tracking-normal text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md">SMART IRRIGATION</h3>
                </div>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">Manage garden water more intelligently.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-gradient-to-br from-white/[0.02] to-nabtura-blue/[0.05] border border-nabtura-blue/20 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(59,130,246,0.1)] group backdrop-blur-xl relative overflow-hidden">
              {/* Pulsating Neon Light Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-nabtura-blue/40 blur-[50px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '3s' }}></div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-nabtura-blue/20 via-transparent to-transparent opacity-50"></div>
              <h3 className="text-2xl font-black tracking-normal text-white uppercase drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10 group-hover:scale-105 transition-transform duration-500">GROW FRESH. <br />AT HOME.</h3>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link href="/solutions" className="group relative inline-flex items-center gap-3 bg-nabtura-blue border border-nabtura-blue rounded-full py-1.5 px-6 hover:bg-blue-400 hover:border-blue-400 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] z-10">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-[10px] sm:text-xs relative z-10">
                EXPLORE HOME & VILLA POSSIBILITIES
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-blue transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 6. INVESTORS & PARTNERS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/20 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-300">INVESTORS & PARTNERS</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">GREEN CAN BECOME </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">AN OPPORTUNITY.</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">NABTURA also works with those looking beyond a conventional project.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#051A0D] border border-white/10 p-10 rounded-[2rem] hover:border-white/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold tracking-normal text-white mb-3 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 drop-shadow-md">INVESTORS</h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Explore opportunities around smart agriculture, growing, green infrastructure and related concepts.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-[#051A0D] border border-white/10 p-10 rounded-[2rem] hover:border-white/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold tracking-normal text-white mb-3 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 drop-shadow-md">STRATEGIC PARTNERS</h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Explore ways to combine capabilities, technology, markets or project opportunities.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-[#051A0D] border border-white/10 p-10 rounded-[2rem] hover:border-white/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold tracking-normal text-white mb-3 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 drop-shadow-md">ARCHITECTS • CONSULTANTS • CONTRACTORS</h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">Bring NABTURA capabilities into wider project teams where relevant.</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center gap-3 bg-white border border-white rounded-full py-1.5 px-6 hover:bg-gray-200 hover:border-gray-200 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] z-10">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-[10px] sm:text-xs relative z-10">
                EXPLORE INVESTMENT & PARTNERSHIPS
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

      </div>

      {/* 7. FIND YOUR NABTURA PATH */}
      <section className="py-12 md:py-16 relative bg-[#050A08] overflow-hidden border-t border-white/10 mt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/nabtura_path_bg.jpg')" }}
        ></div>

        {/* Dark Overlays for Text Readability */}
        <div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-black/60"></div></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-12 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            WHAT ARE YOU <br />LOOKING TO ACHIEVE?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
            {[
              "I'M A GROWER / FARM",
              "I'M A LANDOWNER",
              "I'M A DEVELOPER",
              "I REPRESENT A HOTEL / RESORT",
              "I REPRESENT A RESTAURANT / F&B BUSINESS",
              "I REPRESENT A BUSINESS / INSTITUTION",
              "I'M A HOMEOWNER",
              "I'M AN ENTREPRENEUR",
              "I'M AN INVESTOR / PARTNER",
              "I'M NOT SURE YET"
            ].map((option, i) => (
              <span key={i} className="inline-block bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-widest text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer shadow-lg backdrop-blur-md">
                {option}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-nabtura-light-green border border-nabtura-light-green rounded-full py-3 px-8 hover:bg-nabtura-green hover:border-nabtura-green transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] z-10">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-xs sm:text-sm relative z-10">
                FIND NABTURA FOR ME
                <span className="ml-4 w-8 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-light-green transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>

            <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-3 px-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-white font-bold tracking-widest uppercase text-xs sm:text-sm relative z-10">
                START A CONVERSATION
                <span className="ml-4 w-8 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shadow-inner text-white">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
