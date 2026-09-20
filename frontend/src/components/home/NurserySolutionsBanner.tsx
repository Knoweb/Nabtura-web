"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NurserySolutionsBanner() {
  return (
    <section className="relative py-10 md:py-14 bg-[#03180D] border-y border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-[#010a05]/60 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Inner Card Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-yellow-500 mb-6"
            >
              NABTURA NURSERY SOLUTIONS
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8"
            >
              <span className="text-white">THE RIGHT </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]">PLANTS.</span><br />
              <span className="text-white">FOR THE RIGHT </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]">PROJECT.</span>
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-400 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-6 max-w-2xl"
            >
              Project-focused plant sourcing, nursery coordination, preparation and supply—supporting landscapes, urban forests, desert greening and other green projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8 shadow-inner"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
                RIGHT PLANT <span className="text-emerald-500/50 mx-2 md:mx-4">|</span> RIGHT PLACE <span className="text-yellow-500/50 mx-2 md:mx-4">|</span> RIGHT PURPOSE
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link href="/capabilities/nursery-solutions" className="group relative inline-flex items-center px-10 py-3.5 bg-transparent border border-yellow-500/50 text-white font-bold tracking-[0.2em] text-[10px] md:text-xs rounded-full hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]">
                <span className="relative z-10 flex items-center">
                  EXPLORE NURSERY SOLUTIONS <ArrowRight className="ml-3 w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
