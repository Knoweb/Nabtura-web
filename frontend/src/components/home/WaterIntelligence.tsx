"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, BrainCircuit, Waves, Activity, Sparkles } from "lucide-react";

const waterSequence = [
  { id: 1, name: "SENSE", icon: Activity },
  { id: 2, name: "DECIDE", icon: BrainCircuit },
  { id: 3, name: "DELIVER", icon: Waves },
  { id: 4, name: "MONITOR", icon: Droplets },
  { id: 5, name: "OPTIMIZE", icon: Sparkles },
];

export default function WaterIntelligence() {
  return (
    <section className="bg-transparent text-white py-16 md:py-12 md:py-16 border-b border-white/5 relative overflow-hidden">
      {/* Dynamic Water Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-nabtura-blue/20 via-transparent to-transparent" />
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-nabtura-blue/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-sm tracking-[0.3em] text-nabtura-blue font-bold mb-6 uppercase flex items-center gap-3">
              <Droplets className="w-5 h-5" />
              SMART WATER MANAGEMENT
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              EVERY DROP HAS VALUE
            </h3>
            
            <div className="space-y-6 text-xl md:text-2xl font-light text-gray-400 leading-relaxed border-l-2 border-nabtura-blue/50 pl-6 mb-12">
              <p>Water should go where it is needed.</p>
              <p>When it is needed.</p>
              <p>In the amount it is needed.</p>
            </div>

            <p className="text-nabtura-blue font-bold tracking-widest uppercase mb-6 text-sm">
              Applications
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">
              <span>Agriculture</span><span className="text-white/20">•</span>
              <span>Greenhouses</span><span className="text-white/20">•</span>
              <span>Landscapes</span><span className="text-white/20">•</span>
              <span>Urban Forests</span><span className="text-white/20">•</span>
              <span>Desert Greening</span>
            </div>
            
            <div className="bg-nabtura-blue/10 border border-nabtura-blue/20 rounded-2xl p-6 md:p-8 mb-8 inline-block">
              <p className="text-white font-light text-lg md:text-xl">
                Smarter growing begins with smarter water management.
              </p>
            </div>

            <br />
            <button className="group inline-flex items-center text-white font-bold tracking-widest uppercase text-sm border-b-2 border-transparent hover:border-nabtura-blue pb-1 transition-all">
              EXPLORE SMART IRRIGATION
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-blue" />
            </button>
          </div>

          {/* Right Visual Sequence */}
          <div className="relative">
            <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-nabtura-blue/30 to-transparent" />
            
            <div className="space-y-12 relative z-10">
              {waterSequence.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-nabtura-blue group-hover:bg-nabtura-blue/5 transition-all shadow-xl shadow-nabtura-blue/5 relative">
                      {/* Active indicator dot */}
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-nabtura-blue opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-500 group-hover:text-nabtura-blue transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-nabtura-blue text-xs font-bold tracking-[0.2em] uppercase mb-1 block opacity-50 group-hover:opacity-100 transition-opacity">
                        Phase 0{step.id}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors uppercase">
                        {step.name}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
