"use client";

import { motion } from "framer-motion";
import { Zap, SlidersHorizontal, MapPin, Activity, Eye, BrainCircuit, Sliders, Cpu, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "SMART",
    subtitle: "Better visibility, decisions & operation.",
    features: [
      "Sensors & Data",
      "Monitoring & Alerts",
      "Automation",
      "Cloud Connectivity",
      "Remote Management",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "CONTROLLED",
    subtitle: "Conditions for better performance.",
    features: [
      "Climate & Water",
      "Nutrients",
      "Irrigation",
      "Lighting & Ventilation",
      "Growing Conditions",
    ],
  },
  {
    icon: MapPin,
    title: "ADAPTED",
    subtitle: "Designed around your need.",
    features: [
      "Location & Climate",
      "Water & Crop/Plant",
      "Purpose & Scale",
      "User & Commercial Objective",
    ],
  },
];

const cycleSteps = [
  { name: "SENSE", icon: Activity },
  { name: "MONITOR", icon: Eye },
  { name: "ANALYZE", icon: BrainCircuit },
  { name: "CONTROL", icon: Sliders },
  { name: "AUTOMATE", icon: Cpu },
  { name: "OPTIMIZE", icon: Sparkles },
];

export default function Difference() {
  return (
    <section className="bg-black text-white py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-nabtura-green/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            NOT JUST GREEN.
            <br />
            <span className="text-nabtura-green">INTELLIGENTLY GREEN.</span>
          </h2>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-nabtura-green/20 flex items-center justify-center mb-6 group-hover:bg-nabtura-green/40 transition-colors">
                <pillar.icon className="text-nabtura-green" size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-widest mb-2">{pillar.title}</h3>
              <p className="text-gray-400 mb-6 font-medium">{pillar.subtitle}</p>
              
              <ul className="space-y-3">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-nabtura-green mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Smart Cycle - SmartArt Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 text-center border-t border-white/10 pt-20"
        >
          <h4 className="text-sm tracking-[0.3em] text-nabtura-green font-bold mb-16 uppercase">The Nabtura Smart Cycle</h4>
          
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Connecting Line (Background) */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-white/10 z-0 overflow-hidden rounded-full">
              {/* Infinite Flowing Energy Pulse */}
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "linear",
                  repeatDelay: 0.5
                }}
                className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-nabtura-light-green to-transparent opacity-80"
              />
            </div>
            
            {/* Connecting Line (Foreground Animated) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-gradient-to-r from-nabtura-green/10 via-nabtura-green/30 to-nabtura-green/10 z-0 origin-left"
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-4 relative z-10">
              {cycleSteps.map((step, idx) => (
                <div key={step.name} className="flex flex-col items-center group cursor-default">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 rounded-full bg-[#0a0a0a] border-2 border-white/10 group-hover:border-nabtura-green flex items-center justify-center mb-6 transition-all duration-500 relative"
                  >
                    {/* Synchronized Glowing Ring */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0px 0px 0px 0px rgba(0,255,157,0)",
                          "0px 0px 40px 10px rgba(0,255,157,0.3)",
                          "0px 0px 0px 0px rgba(0,255,157,0)",
                          "0px 0px 0px 0px rgba(0,255,157,0)",
                        ],
                        borderColor: [
                          "rgba(255,255,255,0)",
                          "rgba(0,255,157,1)",
                          "rgba(255,255,255,0)",
                          "rgba(255,255,255,0)",
                        ]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 0.75 + (idx * 0.4),
                        times: [0, 0.1, 0.4, 1],
                        ease: "easeInOut"
                      }}
                      className="absolute inset-[-2px] rounded-full border-2"
                    />

                    {/* Inner glowing dot (hover) */}
                    <div className="absolute inset-0 rounded-full bg-nabtura-green/0 group-hover:bg-nabtura-green/10 transition-colors duration-500 scale-75 group-hover:scale-100" />
                    
                    {/* Synchronized Icon Color */}
                    <motion.div
                      animate={{ color: ["#6b7280", "#00ff9d", "#6b7280", "#6b7280"] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 0.75 + (idx * 0.4),
                        times: [0, 0.1, 0.4, 1],
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <step.icon className="w-8 h-8 group-hover:!text-nabtura-green transition-colors duration-500" />
                    </motion.div>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors duration-300"
                  >
                    {step.name}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
