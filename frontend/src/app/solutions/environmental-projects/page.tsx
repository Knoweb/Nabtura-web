"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import {
  ArrowRight,
  Leaf,
  Droplets,
  Mountain,
  Sprout,
  Network,
  Target,
  Building2,
  MapPin,
  School,
  Users,
  Activity,
  Settings2,
  Code,
  ArrowRightLeft,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";

import { useRef } from "react";

import SolutionHero from "@/components/solutions/SolutionHero";

export default function EnvironmentalProjectsPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans">
      {/* 1. HERO */}

      <SolutionHero
        eyebrow="NABTURA ENVIRONMENTAL PROJECTS"

        headline={
          <>
            ENVIRONMENTAL CHALLENGES <br className="hidden md:block" />
            NEED PURPOSE-BUILT SOLUTIONS.
          </>
        }

        tagline="Custom green and environmental solutions designed around the challenge, location and intended outcome."

        bgImageUrl="/images/uae_green_city.jpg"

        accentColor="text-nabtura-light-green"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link
            href="#possibilities"
            className="text-xs font-bold tracking-widest text-nabtura-light-green hover:text-white uppercase transition-all flex items-center gap-2 group"
          >
            EXPLORE THE POSSIBILITIES{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
          </Link>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>

          <Link
            href="/contact"
            className="text-xs font-bold tracking-widest text-nabtura-light-green hover:text-white uppercase transition-all flex items-center gap-2 group"
          >
            TELL US ABOUT YOUR PROJECT{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-8 relative z-10">
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          When a project does not fit a standard category, NABTURA can explore
          what combination of green, water, growing and environmental systems
          may provide the right response.
        </p>
      </div>

      {/* 2. START WITH THE CHALLENGE */}

      <section className="py-15 relative overflow-hidden bg-[#0A110E] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
              NOT EVERY PROJECT <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-500">
                FITS A STANDARD SOLUTION.
              </span>
            </h2>

            <p className="text-gray-300 text-xl font-light leading-relaxed mb-16">
              Some projects begin with land. Others with water, an underused
              space, a development requirement or an environmental objective.
            </p>

            <div className="relative mb-16 py-12 px-8 lg:px-16 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(134,239,172,0.05),_transparent_60%)] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 relative z-10 pt-2">
                {/* Animated Dark Connecting Line (Background) */}
                <div className="absolute top-[2.25rem] left-[10%] right-[10%] h-[2px] bg-black/40 z-0 overflow-hidden hidden md:block shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-emerald-700 to-emerald-600 shadow-[0_0_15px_rgba(4,120,87,0.8)]"
                  ></motion.div>
                </div>

                {["CHALLENGE", "UNDERSTAND", "DESIGN", "TRANSFORM"].map(
                  (step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className="flex flex-col items-center group/node cursor-default relative w-full md:w-auto z-10"
                    >
                      {/* Node Circle - Solid Background to hide the line behind it */}
                      <div className="w-16 h-16 rounded-2xl bg-[#09110E] border border-white/10 flex items-center justify-center font-bold text-gray-400 text-lg shadow-xl mb-5 relative group-hover/node:bg-[#050A08] group-hover/node:border-emerald-700/80 group-hover/node:text-emerald-500 group-hover/node:-translate-y-1 group-hover/node:shadow-[0_15px_30px_rgba(4,120,87,0.25)] transition-all duration-500">
                        <div
                          className="absolute inset-0 border border-emerald-600/30 rounded-2xl animate-ping opacity-0 group-hover/node:opacity-20"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        ></div>
                        0{index + 1}
                      </div>

                      <span className="text-gray-300 font-bold tracking-widest text-xs uppercase group-hover/node:text-emerald-500 transition-colors duration-300 drop-shadow-md">
                        {step}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </div>

            <p className="text-nabtura-light-green font-bold tracking-widest uppercase text-xs md:text-sm">
              The solution follows the challenge—not the other way around.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. PURPOSE-BUILT POSSIBILITIES */}

      <section
        id="possibilities"
        className="py-10 relative overflow-hidden bg-[#050A08]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
              WHAT DOES <br className="hidden md:block" />
              <span className="text-gray-500">THE PROJECT NEED?</span>
            </h2>

            <p className="text-gray-400 text-xl font-light">
              Depending on the challenge, a NABTURA Environmental Project may
              involve:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "GREEN INFRASTRUCTURE",
                desc: "Integrating purposeful green into developments and spaces.",
                icon: Network,
              },

              {
                title: "LAND REHABILITATION",
                desc: "Exploring ways to improve or repurpose underutilized land.",
                icon: Mountain,
              },

              {
                title: "WATER MANAGEMENT",
                desc: "Smarter approaches to water within green environments.",
                icon: Droplets,
              },

              {
                title: "ECOLOGICAL IMPROVEMENT",
                desc: "Project-specific planting and environmental interventions.",
                icon: Leaf,
              },

              {
                title: "PRODUCTIVE GREEN",
                desc: "Introducing food-growing or productive planting where appropriate.",
                icon: Sprout,
              },

              {
                title: "CUSTOM GREEN INTERVENTIONS",
                desc: "Solutions developed for requirements outside standard NABTURA categories.",
                icon: Target,
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group relative p-8 rounded-[2rem] bg-[#0A110E]/90 backdrop-blur-md border border-white/5 hover:bg-[#0D1612] hover:border-nabtura-light-green/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(134,239,172,0.15)] hover:-translate-y-2 cursor-default"
                >
                  {/* Subtle hover gradient */}

                  <div className="absolute inset-0 bg-gradient-to-br from-nabtura-light-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Icon container with permanent glow and pop animation */}

                  <div className="w-14 h-14 rounded-2xl bg-nabtura-light-green/5 border border-nabtura-light-green/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(134,239,172,0.1)] group-hover:bg-nabtura-light-green/15 group-hover:border-nabtura-light-green/50 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 relative z-10 group-hover:shadow-[0_0_25px_rgba(134,239,172,0.3)]">
                    <Icon className="w-6 h-6 text-nabtura-light-green drop-shadow-[0_0_8px_rgba(134,239,172,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(134,239,172,0.9)] group-hover:text-white transition-all duration-500" />
                  </div>

                  <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4 relative z-10 group-hover:text-nabtura-light-green transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 font-light leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center text-nabtura-light-green font-bold tracking-widest uppercase text-sm hover:text-white transition-colors group"
            >
              TELL US ABOUT THE CHALLENGE{" "}
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CONNECT THE RIGHT SYSTEMS */}

      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-[#050A08] to-[#0A110E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Premium Aurora Colorful Glows (Subtle) */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-400/25 transition-colors duration-1000"></div>
            
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-[100px] pointer-events-none group-hover:bg-teal-400/25 transition-colors duration-1000"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-nabtura-light-green/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Dot Matrix Pattern */}
            <div
              className="absolute inset-0 opacity-[0.25] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 text-center lg:text-left">
              {/* Left Column: Text & Intro */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-4 drop-shadow-md">
                  ONE CHALLENGE. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-300">
                    THE RIGHT COMBINATION.
                  </span>
                </h2>
                
                <p className="text-gray-200 text-base md:text-lg font-light mb-8 max-w-md mx-auto lg:mx-0 drop-shadow-sm">
                  A project may require more than one NABTURA capability. We bring together the elements the project actually needs rather than forcing it into a predetermined package.
                </p>

                <div className="inline-block bg-[#050A08]/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-lg">
                  <div className="flex items-center gap-5 text-nabtura-light-green font-bold tracking-widest uppercase text-[10px] md:text-xs">
                    <span className="hover:text-white transition-colors cursor-default">Assess.</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-nabtura-light-green/50 animate-pulse"></span>
                    <span className="hover:text-white transition-colors cursor-default">Adapt.</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-nabtura-light-green/50 animate-pulse"></span>
                    <span className="hover:text-white transition-colors cursor-default">Integrate.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 font-bold tracking-widest text-[10px] sm:text-xs uppercase">
                {['LAND', 'PLANTS', 'WATER', 'IRRIGATION', 'GROWING', 'MONITORING', 'MANAGEMENT'].map((tag) => (
                  <span key={tag} className="bg-[#050A08] px-5 py-3 rounded-xl border border-white/10 text-white shadow-xl hover:border-nabtura-light-green hover:bg-[#0A110E] hover:text-nabtura-light-green hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(134,239,172,0.25)] transition-all duration-300 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. SEE THE POSSIBILITY */}

      <section className="py-10 relative overflow-hidden bg-[#0A110E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
              WHAT COULD <br className="hidden md:block" />
              <span className="text-gray-500">CHANGE?</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4 mb-20 max-w-4xl mx-auto">
            {[
              {
                from: "Underutilized Land",
                to: "Purposeful Green Environment",
              },

              { from: "Arid Site", to: "Adapted Greening Strategy" },

              { from: "Development", to: "Integrated Green Infrastructure" },

              { from: "Urban Space", to: "Green Intervention" },

              { from: "Institutional Site", to: "Productive / Learning Green" },

              { from: "Community Space", to: "Shared Green Environment" },

              {
                from: "Water-Challenged Landscape",
                to: "Smarter Water Strategy",
              },

              { from: "Existing Green Area", to: "Improved Green Performance" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center gap-4 bg-[#050A08]/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-nabtura-light-green/30 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(134,239,172,0.05)] hover:-translate-y-1 cursor-default"
              >
                <div className="flex-1 text-center sm:text-right font-bold tracking-widest text-sm uppercase text-gray-400 group-hover:text-gray-200 transition-colors">
                  {item.from}
                </div>

                <div className="w-10 h-10 rounded-full bg-nabtura-light-green/10 border border-nabtura-light-green/20 flex items-center justify-center shrink-0 group-hover:bg-nabtura-light-green group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-nabtura-light-green group-hover:text-black transition-colors" />
                </div>

                <div className="flex-1 text-center sm:text-left font-black tracking-widest text-sm uppercase text-white group-hover:text-nabtura-light-green transition-colors">
                  {item.to}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center text-black bg-nabtura-light-green px-10 py-4 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(134,239,172,0.3)] hover:shadow-[0_0_50px_rgba(134,239,172,0.5)]"
            >
              EXPLORE WHAT'S POSSIBLE <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BUILT AROUND THE PROJECT */}

      <section className="py-16 relative overflow-hidden bg-[#050A08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
              NO STANDARD PACKAGE.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light mb-16 max-w-3xl mx-auto">
              The approach depends on the site, challenge, intended outcome and systems required.
            </p>

            <div className="relative mb-16 py-12 px-6 lg:px-12 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(134,239,172,0.05),_transparent_60%)] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>

              {/* Animated Connecting Line (Background) */}
              <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-white/5 -translate-y-1/2 z-0 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-nabtura-light-green to-nabtura-light-green shadow-[0_0_15px_rgba(134,239,172,0.8)]"
                ></motion.div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-4 xl:gap-6 relative z-10">
                {['UNDERSTAND', 'ASSESS', 'DESIGN', 'IMPLEMENT', 'MONITOR', 'OPTIMIZE'].map((step, i) => (
                  <motion.div 
                    key={step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.4 }}
                    className="flex-1 w-full lg:w-auto flex flex-col items-center"
                  >
                     <div className="bg-[#0A110E] border border-white/10 px-2 py-4 sm:px-4 rounded-xl shadow-lg w-full text-center group/card cursor-default hover:border-nabtura-light-green/50 hover:bg-[#0F1A15] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(134,239,172,0.2)] transition-all duration-500 relative overflow-hidden">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover/card:animate-[shimmer_1.5s_infinite]"></div>
                        
                        <span className="text-gray-300 font-bold tracking-widest text-[14px] xl:text-xs uppercase group-hover/card:text-nabtura-light-green transition-colors drop-shadow-sm">
                          {step}
                        </span>
                     </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-nabtura-light-green font-bold tracking-widest uppercase text-sm drop-shadow-md">
              NABTURA can work across relevant disciplines to develop a coordinated project response.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. FROM IDEA TO IMPLEMENTATION */}

      <section className="py-15 relative overflow-hidden bg-[#0A110E] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6">
              WE MAKE <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-500">THE SOLUTION WORK.</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              From initial assessment to implementation, NABTURA can coordinate the required green, water, growing and environmental elements around the project.
            </p>

            <div className="max-w-4xl mx-auto p-6 md:p-10 rounded-[2rem] bg-gradient-to-br from-white/5 via-[#0F1A15]/80 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden mb-16 group">
              {/* Textured Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(134, 239, 172, 0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-nabtura-light-green/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>

              <p className="text-nabtura-light-green font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-8 relative z-10 drop-shadow-md">
                Where appropriate, the solution can also connect with:
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 relative z-10">
                {[
                  { name: 'Smart Irrigation', link: '/solutions/smart-irrigation' },
                  { name: 'Landscapes', link: '/solutions/landscapes' },
                  { name: 'Urban Forests', link: '/solutions/urban-forests' },
                  { name: 'Desert Greening', link: '/solutions/desert-greening' },
                  { name: 'Smart Growing', link: '/solutions/smart-greenhouses' },
                  { name: 'Nursery Solutions', link: '/capabilities/nursery-solutions' },
                  { name: 'SmartCare', link: '/capabilities/smartcare' }
                ].map((service, i) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link href={service.link} className="flex items-center gap-3 bg-[#050A08]/80 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-lg hover:bg-[#0A110E] hover:border-nabtura-light-green/50 hover:text-nabtura-light-green hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(134,239,172,0.2)] transition-all duration-300 relative overflow-hidden group/link">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/link:bg-nabtura-light-green group-hover/link:animate-pulse transition-colors"></span>
                      <span className="relative z-10">{service.name}</span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover/link:animate-[shimmer_1.5s_infinite]"></div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-white font-black tracking-widest uppercase text-lg">
              One project. <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400">Connected capabilities.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION */}

      <section
        id="final-conversion"
        className="py-12 relative overflow-hidden bg-[#050A08]"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/dubai-landscapes.jpg')] bg-cover bg-center bg-fixed opacity-40"></div>

          <div className="absolute inset-0 bg-[#050A08]/40"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#020504] via-transparent to-[#050A08]"></div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-nabtura-light-green/30 to-transparent z-10"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-nabtura-light-green/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            TELL US <br className="hidden md:block" />
            WHAT NEEDS TO CHANGE.
          </h2>

          <p className="text-gray-200 text-lg md:text-xl font-medium mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            You do not need to know the solution yet.
          </p>

          <p className="text-white text-lg md:text-xl font-bold mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Start with the challenge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            {[
              "I HAVE LAND / A SITE",

              "I HAVE AN ENVIRONMENTAL CHALLENGE",

              "I HAVE A DEVELOPMENT REQUIREMENT",

              "I WANT TO TRANSFORM AN EXISTING SPACE",

              "I HAVE A CUSTOM PROJECT IDEA",
            ].map((option, index) => (
              <div
                key={index}
                className={`bg-[#09110E]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-[#09110E]/90 hover:border-nabtura-light-green/50 transition-all duration-300 cursor-pointer group flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(134,239,172,0.2)] ${index === 4 ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : ""}`}
              >
                <span className="text-white font-bold tracking-widest text-xs uppercase pr-4 group-hover:text-nabtura-light-green transition-colors">
                  {option}
                </span>

                <CheckCircle2 className="w-5 h-5 text-gray-500 group-hover:text-nabtura-light-green transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center text-black bg-nabtura-light-green px-10 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(134,239,172,0.3)] hover:shadow-[0_0_50px_rgba(134,239,172,0.5)]"
            >
              TELL US ABOUT YOUR PROJECT <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center text-nabtura-light-green font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link"
            >
              SHOW US YOUR SITE{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
