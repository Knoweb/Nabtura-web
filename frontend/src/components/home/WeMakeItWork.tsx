"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ClipboardList, PenTool, Cog, Hammer, CheckCircle2, Settings, Activity, Wrench } from "lucide-react";

const lifecycle = [
  { name: "ASSESS", icon: ClipboardList },
  { name: "DESIGN", icon: PenTool },
  { name: "ENGINEER", icon: Cog },
  { name: "BUILD", icon: Hammer },
  { name: "COMMISSION", icon: CheckCircle2 },
  { name: "MANAGE", icon: Settings },
  { name: "MONITOR", icon: Activity },
  { name: "MAINTAIN", icon: Wrench },
];

const capabilities = [
  { name: "SmartCare", desc: "Monitoring & ongoing support" },
  { name: "Nursery Solutions", desc: "Plants ready when projects need them" },
  { name: "Site Development", desc: "Preparing locations for the solution" },
  { name: "Operation & Maintenance", desc: "Keeping systems working" },
];

export default function WeMakeItWork() {
  return (
    <section className="bg-transparent text-content py-16 md:py-12 md:py-16 border-b border-divider relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] text-nabtura-green font-bold mb-6 uppercase">
            BEYOND INSTALLATION
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            WE MAKE IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-nabtura-green">WORK</span>
          </h3>
          <p className="text-xl md:text-2xl text-content-muted font-light leading-relaxed">
            From an idea or available location to an operating green solution, NABTURA can stay involved for as much of the journey as you need.
          </p>
        </div>

        {/* Animated Lifecycle Flow (Smart Art) */}
        <div className="relative mb-24 max-w-6xl mx-auto w-full px-4 pt-4 pb-4">
          
          {/* Main Background Line */}
          <div className="absolute top-[3.5rem] left-[10%] right-[10%] h-[2px] bg-white/10 hidden lg:block" />
          
          {/* Animated Progress Line (Base Gradient) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="absolute top-[3.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-nabtura-green/50 via-emerald-400/50 to-nabtura-blue/50 hidden lg:block"
          />

          {/* Fast Flowing Energy Pulse */}
          <div className="absolute top-[3.5rem] left-[10%] right-[10%] h-[2px] hidden lg:block overflow-hidden z-0">
            <motion.div 
              animate={{ left: ["-20%", "120%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-48 h-full bg-gradient-to-r from-transparent via-nabtura-light-green to-transparent shadow-[0_0_20px_rgba(21,184,118,0.9)]"
            />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-12 gap-x-4 relative z-10">
            {lifecycle.map((step, i) => {
              const Icon = step.icon;
              return (
              <motion.div 
                key={step.name} 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                className="flex flex-col items-center group cursor-pointer w-1/3 lg:w-auto"
              >
                {/* Node Circle */}
                <motion.div 
                  animate={{
                    borderColor: ["rgba(255,255,255,0.2)", "rgba(21,184,118,0.8)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.2)"],
                    boxShadow: ["0 0 0px rgba(21,184,118,0)", "0 0 20px rgba(21,184,118,0.6)", "0 0 0px rgba(21,184,118,0)", "0 0 0px rgba(21,184,118,0)"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.4, 1],
                    delay: 0.2 + (i / (lifecycle.length - 1)) * 1.07
                  }}
                  className="w-16 h-16 rounded-full bg-[#050A08] border-2 border-white/20 flex items-center justify-center mb-4 group-hover:border-nabtura-green group-hover:bg-nabtura-green/10 transition-all shadow-lg relative overflow-visible"
                >
                  <motion.div
                    animate={{
                      color: ["rgba(255,255,255,0.3)", "rgba(21,184,118,1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.3)"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.1, 0.4, 1],
                      delay: 0.2 + (i / (lifecycle.length - 1)) * 1.07
                    }}
                    className="z-10"
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Glowing Pulse on hover */}
                  <div className="absolute inset-0 rounded-full bg-nabtura-green/0 group-hover:bg-nabtura-green/20 scale-100 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100 z-0 blur-md" />
                </motion.div>
                
                {/* Step Text */}
                <span className="text-xs font-bold tracking-[0.2em] text-content-muted group-hover:text-white transition-colors uppercase text-center mt-2">
                  {step.name}
                </span>
              </motion.div>
            )})}
          </div>
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
              className="bg-overlay backdrop-blur-xl border border-divider rounded-2xl p-8 hover:border-nabtura-green/50 hover:bg-overlay transition-all group"
            >
              <h4 className="text-lg font-bold text-content mb-3 tracking-widest uppercase">
                {cap.name}
              </h4>
              <p className="text-content-muted text-sm font-light">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center text-content font-bold tracking-widest uppercase text-sm border-b-2 border-transparent hover:border-nabtura-green pb-1 transition-all">
            HOW WE DELIVER
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-light-green" />
          </button>
        </div>

      </div>
    </section>
  );
}

