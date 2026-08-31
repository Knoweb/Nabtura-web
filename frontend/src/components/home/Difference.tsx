"use client";

import { motion } from "framer-motion";
import { Zap, SlidersHorizontal, MapPin } from "lucide-react";

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

const cycle = ["SENSE", "MONITOR", "ANALYZE", "CONTROL", "AUTOMATE", "OPTIMIZE"];

export default function Difference() {
  return (
    <section className="bg-transparent text-white py-24 border-t border-white/5 relative overflow-hidden">
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

        {/* Smart Cycle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center border-t border-white/10 pt-16"
        >
          <h4 className="text-sm tracking-[0.3em] text-gray-500 mb-12 uppercase">The Nabtura Smart Cycle</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {cycle.map((step, idx) => (
              <div key={step} className="flex items-center">
                <motion.span 
                  initial={{ opacity: 0.2, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  viewport={{ once: false, amount: 0.8 }}
                  className="text-lg md:text-2xl font-bold tracking-wider text-white"
                >
                  {step}
                </motion.span>
                {idx < cycle.length - 1 && (
                  <span className="text-nabtura-green mx-4 md:mx-8">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
