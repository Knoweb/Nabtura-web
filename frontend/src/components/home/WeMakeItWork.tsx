"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const lifecycle = [
  "ASSESS",
  "DESIGN",
  "ENGINEER",
  "BUILD",
  "COMMISSION",
  "MANAGE",
  "MONITOR",
  "MAINTAIN"
];

const capabilities = [
  { name: "SmartCare", desc: "Monitoring & ongoing support" },
  { name: "Nursery Solutions", desc: "Plants ready when projects need them" },
  { name: "Site Development", desc: "Preparing locations for the solution" },
  { name: "Operation & Maintenance", desc: "Keeping systems working" },
];

export default function WeMakeItWork() {
  return (
    <section className="bg-nabtura-slate text-white py-32 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] text-nabtura-green font-bold mb-6 uppercase">
            BEYOND INSTALLATION
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            WE MAKE IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-nabtura-green">WORK.</span>
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            From an idea or available location to an operating green solution, NABTURA can stay involved for as much of the journey as you need.
          </p>
        </div>

        {/* Lifecycle Flow */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-24">
          {lifecycle.map((step, i) => (
            <div key={step} className="flex items-center">
              <span className="text-sm md:text-base font-bold tracking-[0.2em] text-gray-300 hover:text-white transition-colors cursor-default">
                {step}
              </span>
              {i < lifecycle.length - 1 && (
                <ChevronRight className="w-5 h-5 text-nabtura-green/50 mx-2 md:mx-4" />
              )}
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-nabtura-green/50 hover:bg-white/5 transition-all group"
            >
              <h4 className="text-lg font-bold text-white mb-3 tracking-widest uppercase">
                {cap.name}
              </h4>
              <p className="text-gray-400 text-sm font-light">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center text-white font-bold tracking-widest uppercase text-sm border-b-2 border-transparent hover:border-nabtura-green pb-1 transition-all">
            HOW WE DELIVER
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-light-green" />
          </button>
        </div>

      </div>
    </section>
  );
}
