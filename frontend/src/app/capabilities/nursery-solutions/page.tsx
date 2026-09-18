"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Leaf, Target, MapPin, Droplets, Sun, Sprout, Combine, Truck, BookOpen, Activity, Box, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NurserySolutionsPage() {
  const [selectedSelectorItem, setSelectedSelectorItem] = useState<number | null>(0);

  const selectorItems = [
    { title: "I HAVE A LANDSCAPE PROJECT", response: "We source and prepare the exact plant species needed for your design, ensuring they thrive in their new landscape.", icon: Leaf },
    { title: "I HAVE AN URBAN FOREST PROJECT", response: "We coordinate large quantities of trees and understory plants, managing supply chains for massive urban greening.", icon: Sprout },
    { title: "I HAVE A DESERT GREENING PROJECT", response: "We supply hardy, drought-tolerant species acclimatized to extreme heat and arid conditions.", icon: Sun },
    { title: "I HAVE A DEVELOPMENT / LARGE-SCALE PROJECT", response: "We handle bulk plant procurement and delivery scheduling aligned perfectly with your construction phases.", icon: Box },
    { title: "I NEED PROJECT-SPECIFIC PLANT SUPPLY", response: "We find the rare, specific, or unique plants your project's architecture or environment demands.", icon: Target },
    { title: "I'M NOT SURE WHAT PLANTS I NEED", response: "We can help you develop a plant strategy based on your site's climate, water availability, and design goals.", icon: BookOpen },
  ];

  return (
    <div className="bg-[#020504] min-h-screen pt-24 font-sans selection:bg-yellow-500/30 selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-6 border-b border-white/5 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center opacity-20 z-0 scale-105 transition-transform duration-[20s] hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#050A08] z-10 pointer-events-none"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-10"></div>

        <div className="max-w-6xl mx-auto w-full relative z-20 text-center flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] text-yellow-500 font-bold mb-6 uppercase drop-shadow-md"
          >
            NABTURA NURSERY SOLUTIONS
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8"
          >
            <span className="text-white">THE RIGHT </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">PLANTS.</span><br />
            <span className="text-white">FOR THE RIGHT </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]">PROJECT.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-14 relative"
          >
            {/* Glowing Vertical Divider for Desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent hidden md:block"></div>
            
            <div className="flex-1 text-center md:text-right pr-0 md:pr-8">
              <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                Project-focused plant sourcing, nursery coordination, <span className="text-yellow-400 font-bold drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">preparation and supply.</span>
              </p>
            </div>
            
            {/* Horizontal divider for mobile */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent block md:hidden my-2"></div>

            <div className="flex-1 text-center md:text-left pl-0 md:pl-8">
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                From landscapes and urban forests to desert greening and environmental projects, NABTURA Nursery Solutions helps connect the plant requirement with the project requirement.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-30"
          >
            <a href="#explore-nursery" className="group w-full sm:w-auto relative px-8 py-3 bg-[#0a120e]/80 backdrop-blur-md border border-yellow-500/30 text-white font-bold tracking-[0.2em] text-xs md:text-sm rounded-full hover:border-yellow-400 hover:bg-[#0a120e] transition-all duration-500 overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                EXPLORE NURSERY SOLUTIONS <ArrowDown className="ml-3 w-4 h-4 text-yellow-500 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            
            <Link href="/contact" className="group w-full sm:w-auto relative px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-black font-black tracking-[0.2em] text-xs md:text-sm rounded-full hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
               <span className="relative z-10 flex items-center">
                DISCUSS YOUR PLANT REQUIREMENTS <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. START WITH THE PROJECT */}
      <section id="explore-nursery" className="py-10 md:py-15 relative z-10 bg-[#050A08] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-yellow-500 font-bold mb-3 uppercase"
            >
              START WITH THE PROJECT
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-white mb-6"
            >
              NOT JUST PLANTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">THE RIGHT PLANT STRATEGY.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10"
            >
              Plant requirements should begin with the environment and purpose of the project. <br className="hidden md:block" />
              NABTURA considers:
            </motion.p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
            >
              {[
                { name: 'PROJECT', icon: Target },
                { name: 'LOCATION', icon: MapPin },
                { name: 'CLIMATE', icon: Sun },
                { name: 'WATER', icon: Droplets },
                { name: 'PLANTING DESIGN', icon: Leaf },
                { name: 'QUANTITY', icon: Box },
                { name: 'ESTABLISHMENT', icon: Sprout }
              ].map((item, idx) => (
                <motion.span 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold tracking-widest text-gray-300 hover:text-white hover:border-yellow-500 hover:bg-yellow-500/10 transition-colors cursor-default shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] flex items-center gap-2"
                >
                  <item.icon className="w-3.5 h-3.5 text-yellow-500/70" />
                  {item.name}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="inline-block relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
              <p className="relative text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base border border-emerald-500/30 bg-emerald-950/40 px-8 py-3 rounded-full backdrop-blur-sm">
                Right plant. Right place. Right purpose.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT-SPECIFIC SOLUTIONS */}
      <section className="py-10 md:py-15 relative z-10 bg-[#09100c]">
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-yellow-500 font-bold mb-3 uppercase"
            >
              PROJECT-SPECIFIC SOLUTIONS
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-6"
            >
              WHAT DOES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">YOUR PROJECT NEED?</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            >
              Depending on the project, Nursery Solutions can support:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "PLANT SOURCING", desc: "Identify and coordinate appropriate plant material for the project.", icon: Leaf },
              { title: "NURSERY COORDINATION", desc: "Work with suitable nursery and supply partners around project requirements.", icon: Combine },
              { title: "PROJECT QUANTITIES", desc: "Coordinate plant requirements across different types, sizes and quantities.", icon: Box },
              { title: "PLANT PREPARATION", desc: "Plan for appropriate preparation and readiness before project delivery.", icon: Sprout },
              { title: "DELIVERY COORDINATION", desc: "Coordinate plant supply with the wider project programme.", icon: Truck },
              { title: "ESTABLISHMENT SUPPORT", desc: "Connect plant supply with planting, irrigation and establishment requirements.", icon: ShieldCheck }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-[#050A08] border border-white/5 rounded-2xl p-6 hover:border-yellow-500/30 hover:bg-[#0a120e] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/0 blur-[40px] rounded-full group-hover:bg-yellow-500/10 transition-colors duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-300 border border-white/10 group-hover:border-yellow-500/30">
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h4 className="text-sm font-bold tracking-widest text-white mb-2 uppercase group-hover:text-yellow-400 transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUILT AROUND THE ENVIRONMENT */}
      <section className="py-10 md:py-15 relative z-10 bg-[#050A08] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-emerald-400 font-bold mb-3 uppercase"
              >
                BUILT AROUND THE ENVIRONMENT
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-6"
              >
                PLANTS NEED <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">THE RIGHT CONDITIONS.</span>
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-6"
              >
                Plant selection and supply should consider more than appearance. NABTURA works to align planting requirements with the conditions in which the plants are expected to establish and grow.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-yellow-500 font-bold tracking-widest text-xs md:text-sm uppercase"
              >
                Don't simply select green. Select what can work.
              </motion.p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-yellow-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#050A08]/90 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden backdrop-blur-xl shadow-2xl"
                >
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {[
                      { label: "CLIMATE", icon: Sun },
                      { label: "WATER", icon: Droplets },
                      { label: "SOIL", icon: Target },
                      { label: "LOCATION", icon: MapPin },
                      { label: "PURPOSE", icon: BookOpen },
                      { label: "MANAGEMENT", icon: Activity }
                    ].map((env, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-xl p-4 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all">
                        <env.icon className="w-5 h-5 text-emerald-500/70" />
                        <span className="text-xs font-bold tracking-widest text-gray-300">{env.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHERE NURSERY SOLUTIONS FIT */}
      <section className="py-10 md:py-15 relative z-10 bg-[#09100c] border-t border-white/5 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-yellow-500/5 to-transparent pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-yellow-500 font-bold mb-3 uppercase"
            >
              WHERE NURSERY SOLUTIONS FIT
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-4"
            >
              SUPPORTING <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">WHAT WE CREATE.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            >
              Nursery Solutions can support planting requirements across relevant NABTURA projects. Each of these links back to the relevant NABTURA solution.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "LANDSCAPES", desc: "Planting for residential, hospitality, commercial and development environments.", link: "/solutions/landscapes" },
              { title: "URBAN FORESTS", desc: "Plant requirements for immersive and purpose-built green environments.", link: "/solutions/urban-forests" },
              { title: "DESERT GREENING", desc: "Adapted planting for arid and challenging sites.", link: "/solutions/desert-greening" },
              { title: "ENVIRONMENTAL PROJECTS", desc: "Project-specific planting requirements where appropriate.", link: "/solutions/environmental-projects" },
              { title: "DEVELOPMENTS & LARGE-SCALE", desc: "Coordinated plant requirements across larger project environments.", link: "/solutions/environmental-projects" },
            ].map((item, idx) => (
              <Link href={item.link} key={idx} className="block group">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                  className="bg-[#050A08] border border-white/10 rounded-2xl p-8 hover:bg-[#070d0a] hover:border-yellow-500/40 shadow-lg transition-all duration-300 overflow-hidden relative h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/0 blur-[30px] rounded-full transition-colors duration-500 group-hover:bg-yellow-500/10"></div>
                  <h4 className="text-sm font-bold tracking-widest text-white mb-3 uppercase transition-colors relative z-10 group-hover:text-yellow-400 flex items-center justify-between">
                    {item.title}
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FROM REQUIREMENT TO SITE */}
      <section className="py-10 md:py-15 relative z-10 bg-[#050A08] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-emerald-400 font-bold mb-3 uppercase"
            >
              FROM REQUIREMENT TO SITE
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-4"
            >
              PLAN THE PLANTS <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">WITH THE PROJECT.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10"
            >
              NABTURA Nursery Solutions connects plant requirements with the wider design, water, implementation and establishment strategy of the project.
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
            <div className="relative z-10 max-w-5xl mx-auto mb-10 md:mb-12 overflow-x-auto pb-6 md:pb-0 hide-scrollbar">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-6 left-6 right-6 h-[2px] bg-white/5 z-0 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.2, ease: "linear", delay: 0.2 }}
                  className="w-full h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                ></motion.div>
              </div>

              <div className="flex flex-row items-center justify-between min-w-[800px] md:min-w-0">
                {['UNDERSTAND', 'SPECIFY', 'SOURCE', 'PREPARE', 'COORDINATE', 'DELIVER', 'ESTABLISH'].map((step, index) => (
                  <div key={step} className="flex flex-col items-center z-10 cursor-default relative flex-1">
                    <motion.div 
                      initial={{ borderColor: "rgba(255,255,255,0.1)", color: "#9ca3af", boxShadow: "0 0 0px rgba(16,185,129,0)" }}
                      whileInView={{ borderColor: "#10b981", color: "#ffffff", boxShadow: "0 0 20px rgba(16,185,129,0.4)" }}
                      whileHover={{ y: -5, boxShadow: "0 0 30px rgba(16,185,129,0.6)" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: index * 0.3 + 0.2 }}
                      className="w-12 h-12 rounded-full bg-[#09110E] border-2 flex items-center justify-center font-bold text-sm mb-4 relative"
                    >
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1.5, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                        className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md -z-10"
                      ></motion.div>
                      {index + 1}
                    </motion.div>
                    <motion.p 
                      initial={{ color: "#9ca3af" }}
                      whileInView={{ color: "#34d399" }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: index * 0.3 + 0.2 }}
                      className="font-bold tracking-widest uppercase text-[9px] sm:text-[10px] md:text-xs text-center px-1"
                    >
                      {step}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CONNECTED CARE */}
      <section className="py-10 md:py-15 relative z-10 bg-[#09100c] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-yellow-500 font-bold mb-3 uppercase"
            >
              CONNECTED CARE
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase leading-tight text-white mb-4"
            >
              SUPPLY IS <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">NOT THE END.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
            >
              Successful green environments depend on what happens after planting. Nursery Solutions can connect with:
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-6 hover:bg-blue-900/20 hover:border-blue-500/40 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-2">SMART IRRIGATION</h4>
                <p className="text-gray-400 text-sm font-light">Appropriate water delivery for the planting strategy.</p>
                <Link href="/solutions/smart-irrigation" className="inline-block mt-4 text-[10px] text-blue-400 font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Explore Smart Irrigation →
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6 hover:bg-emerald-900/20 hover:border-emerald-500/40 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-2">NABTURA SMARTCARE</h4>
                <p className="text-gray-400 text-sm font-light">Ongoing establishment, care and management where required.</p>
                <Link href="/capabilities/smartcare" className="inline-block mt-4 text-[10px] text-emerald-400 font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Explore SmartCare →
                </Link>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {['PLANT', 'ESTABLISH', 'CARE', 'GROW'].map((step, idx, arr) => (
                <div key={idx} className="flex items-center">
                  <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest text-gray-300 uppercase shadow-md">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-600 mx-2" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/capabilities/smartcare" className="inline-flex items-center text-xs font-bold text-nabtura-light-green tracking-[0.2em] uppercase hover:text-white transition-colors group bg-nabtura-light-green/10 border border-nabtura-light-green/20 px-8 py-3 rounded-full hover:bg-nabtura-light-green/20 shadow-[0_0_20px_rgba(21,184,118,0.15)] hover:shadow-[0_0_30px_rgba(21,184,118,0.3)]">
                EXPLORE NABTURA SMARTCARE <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION (INTERACTIVE SELECTOR) */}
      <section className="py-10 md:py-15 relative z-10 bg-[#050A08] overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-10"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center"></div>
        </motion.div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050A08] via-[#050A08]/80 to-[#050A08]"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Pulsing Glowing Orbs */}
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.7, 1.2, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/20 blur-[120px] rounded-full pointer-events-none z-0"
        ></motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight drop-shadow-lg mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white">WHAT DOES</span> <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.4)]">YOUR PROJECT NEED?</span>
            </h3>
            <p className="text-gray-300 text-base md:text-lg font-light tracking-wide">Tell us about your planting requirement.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Options List */}
            <div className="space-y-2">
              {selectorItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSelectorItem(selectedSelectorItem === idx ? null : idx)}
                  className={`w-full text-left px-5 py-3 md:py-3.5 rounded-xl border transition-all duration-300 flex justify-between items-center group ${selectedSelectorItem === idx
                      ? 'bg-yellow-500/10 border-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.2)]'
                      : 'bg-white/5 border-white/10 hover:border-yellow-500/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)]'
                    }`}
                >
                  <span className={`font-bold tracking-widest text-[10px] sm:text-xs md:text-sm ${selectedSelectorItem === idx ? 'text-yellow-400' : 'text-gray-300 group-hover:text-white transition-colors'}`}>
                    {item.title}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ml-3 ${selectedSelectorItem === idx ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)]' : 'bg-white/10 text-white'}`}>
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
                    className="w-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden h-full flex flex-col justify-center"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 blur-[50px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 blur-[50px] rounded-full"></div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg">
                        {(() => {
                          const Icon = selectorItems[selectedSelectorItem].icon;
                          return <Icon className="w-8 h-8 text-yellow-400" />;
                        })()}
                      </div>
                      <h4 className="text-lg md:text-xl font-light text-gray-200 mb-8 leading-relaxed text-center max-w-sm mx-auto">
                        {selectorItems[selectedSelectorItem].response}
                      </h4>
                      <Link href="/contact" className="mt-2 px-8 py-3 bg-white text-black font-bold tracking-widest text-[10px] md:text-xs rounded-full hover:bg-yellow-400 transition-colors shadow-lg uppercase">
                        DISCUSS MY PLANT REQUIREMENTS
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
            <Link href="/contact" className="px-10 py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-black font-black tracking-[0.2em] text-sm md:text-base rounded-full hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center mb-6 w-full sm:w-auto">
              DISCUSS MY PLANT REQUIREMENTS <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            
            <Link href="/contact" className="text-yellow-500 hover:text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-colors flex items-center group mb-8">
              TELL US ABOUT YOUR PROJECT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">
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
