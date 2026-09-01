"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Local Production",
  "Productive Spaces",
  "Greener Environments",
  "Smarter Water Use",
  "Closer-to-Market Growing",
  "Greater Production Visibility",
];

export default function GrowingGreen() {
  return (
    <section className="bg-transparent text-content py-16 md:py-12 md:py-16 border-b border-divider relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] text-content-muted font-bold mb-6 uppercase">
            GROWING FOOD. GROWING GREEN.
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            GROWING DOES <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-nabtura-green">MORE THAN</span> PRODUCE FOOD
          </h3>
        </div>

        {/* Split Screen Visual Concept */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-[2rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('/possibility_smart_greenhouse_1788160454551.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm tracking-widest font-bold text-nabtura-light-green mb-2 uppercase">Agriculture</p>
              <h4 className="text-3xl font-bold text-content">Controlled Food Production</h4>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[400px] rounded-[2rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('/possibility_urban_oasis_1788160434157.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm tracking-widest font-bold text-nabtura-green mb-2 uppercase">Environment</p>
              <h4 className="text-3xl font-bold text-content">Green Environment</h4>
            </div>
          </motion.div>
        </div>

        {/* Concise Benefits Grid */}
        <div className="bg-overlay backdrop-blur-xl/30 backdrop-blur-md rounded-3xl p-10 border border-divider max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 bg-overlay p-4 rounded-2xl hover:bg-overlay transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-nabtura-light-green shrink-0" />
                <span className="font-bold tracking-wide text-content-muted">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

