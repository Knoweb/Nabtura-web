"use client";

import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, MapPin, Building2, Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050A08] pt-20">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-nabtura-green/10 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-nabtura-blue/5 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <div className="relative z-10">
        <SolutionHero 
          eyebrow="ABOUT NABTURA"
          headline="BASED IN THE UAE. BUILT TO THINK BEYOND IT."
          tagline="Engineering green solutions for challenging environments."
          bgImageUrl="/possibility_urban_oasis_1788160434157.jpg"
          accentColor="text-nabtura-sand"
        />

        <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5"
            >
              <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
                Our Philosophy
              </motion.h2>
              <motion.p variants={itemFadeUp} className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-6">
                Our UAE base places us close to some of the world’s most demanding challenges in climate, water management, food production, and urban greening. 
              </motion.p>
              <motion.p variants={itemFadeUp} className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12">
                That experience shapes how we approach every location. We believe that integrating nature into the built environment requires more than traditional landscaping; it requires a deep integration of engineering, science, and practical delivery.
              </motion.p>
              
              <motion.div variants={itemFadeUp} className="bg-white/5 border-l-4 border-nabtura-sand p-8 rounded-r-2xl backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-nabtura-sand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-nabtura-sand font-bold tracking-[0.15em] text-sm uppercase leading-relaxed relative z-10">
                  NABTURA is the green technology brand developed and powered by INFORGRID FZC.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Right Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <motion.div variants={itemFadeUp} className="bg-[#0a0a0a] border border-white/10 hover:border-nabtura-green p-10 rounded-3xl group transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,157,0.1)] hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nabtura-green/10 blur-[50px] rounded-full group-hover:bg-nabtura-green/20 transition-colors duration-500" />
                <MapPin className="text-gray-500 group-hover:text-nabtura-green w-10 h-10 mb-6 transition-colors duration-500 relative z-10" />
                <h4 className="text-white text-xl font-bold mb-4 tracking-wide relative z-10">UAE Based</h4>
                <p className="text-gray-400 text-base font-light leading-relaxed relative z-10">Engineered in an environment that demands intelligence and efficiency.</p>
              </motion.div>

              <motion.div variants={itemFadeUp} className="bg-[#0a0a0a] border border-white/10 hover:border-nabtura-blue p-10 rounded-3xl group transition-all duration-500 hover:shadow-[0_0_40px_rgba(14,165,233,0.1)] hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nabtura-blue/10 blur-[50px] rounded-full group-hover:bg-nabtura-blue/20 transition-colors duration-500" />
                <Lightbulb className="text-gray-500 group-hover:text-nabtura-blue w-10 h-10 mb-6 transition-colors duration-500 relative z-10" />
                <h4 className="text-white text-xl font-bold mb-4 tracking-wide relative z-10">Science & Engineering</h4>
                <p className="text-gray-400 text-base font-light leading-relaxed relative z-10">Data-driven decisions for water, climate, and plant health.</p>
              </motion.div>

              <motion.div variants={itemFadeUp} className="bg-[#0a0a0a] border border-white/10 hover:border-nabtura-sand p-10 rounded-3xl sm:col-span-2 group transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:-translate-y-2 relative overflow-hidden flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-sand/5 blur-[80px] rounded-full group-hover:bg-nabtura-sand/15 transition-colors duration-500" />
                <div className="relative z-10">
                  <Building2 className="text-gray-500 group-hover:text-nabtura-sand w-12 h-12 mb-6 transition-colors duration-500" />
                  <h4 className="text-white text-2xl font-bold mb-4 tracking-wide">INFORGRID FZC</h4>
                  <p className="text-gray-400 text-lg font-light mb-0 max-w-lg leading-relaxed">The corporate platform supporting NABTURA's delivery, combining robust project execution with technological innovation.</p>
                </div>
                <div className="relative z-10 shrink-0">
                  <Link href="/contact" className="inline-flex items-center justify-center text-black bg-nabtura-sand hover:bg-yellow-500 px-8 py-4 rounded-full font-bold tracking-widest text-xs uppercase transition-all hover:scale-105">
                    Contact Us <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>
      </div>
    </main>
  );
}

