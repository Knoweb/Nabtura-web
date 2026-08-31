"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Sprout, TreePine, Globe2, ArrowRight } from "lucide-react";

const ecosystem = [
  {
    id: "grow",
    title: "GROW FOOD",
    icon: Sprout,
    color: "text-nabtura-light-green",
    borderColor: "border-nabtura-light-green",
    solutions: [
      { name: "Smart Greenhouses", desc: "Controlled environments for smarter food production." },
      { name: "Smart Microgreens", desc: "Small spaces. Smart growing. Fresh possibilities." }
    ]
  },
  {
    id: "water",
    title: "MANAGE WATER",
    icon: Droplets,
    color: "text-nabtura-blue",
    borderColor: "border-nabtura-blue",
    solutions: [
      { name: "Smart Irrigation", desc: "Precision water management and recirculation." }
    ]
  },
  {
    id: "green",
    title: "CREATE GREEN",
    icon: TreePine,
    color: "text-nabtura-green",
    borderColor: "border-nabtura-green",
    solutions: [
      { name: "Landscapes", desc: "Beautiful green spaces designed to perform." },
      { name: "Urban Forests", desc: "Bring nature into the built environment." },
      { name: "Desert Greening", desc: "Where others see arid land, we see possibility." }
    ]
  },
  {
    id: "transform",
    title: "TRANSFORM",
    icon: Globe2,
    color: "text-nabtura-sand",
    borderColor: "border-nabtura-sand",
    solutions: [
      { name: "Environmental Projects", desc: "Purpose-built solutions for complex challenges." }
    ]
  }
];

export default function Ecosystem() {
  const [activeId, setActiveId] = useState<string>("grow");

  return (
    <section className="bg-nabtura-slate text-white py-24 border-y border-white/5 relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] text-gray-400 font-bold mb-4 uppercase">
            THE COMPLETE NABTURA ECOSYSTEM
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            ONE VISION.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-nabtura-green">
              SEVEN SOLUTIONS.
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Interactive Selector */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {ecosystem.map((node) => {
              const Icon = node.icon;
              const isActive = activeId === node.id;
              
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveId(node.id)}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 text-left flex flex-col items-start gap-4 ${
                    isActive 
                      ? `bg-white/10 ${node.borderColor} shadow-lg shadow-white/5` 
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isActive ? node.color : "text-gray-400"}`} />
                  <span className={`font-bold tracking-wider text-sm md:text-base ${isActive ? "text-white" : "text-gray-400"}`}>
                    {node.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Display */}
          <div className="lg:col-span-7 bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              {ecosystem.map((node) => (
                node.id === activeId && (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className={`inline-flex items-center gap-3 ${node.color} mb-8`}>
                      <node.icon className="w-6 h-6" />
                      <span className="font-bold tracking-[0.2em] uppercase">{node.title}</span>
                    </div>
                    
                    <div className="space-y-8">
                      {node.solutions.map((solution) => (
                        <div key={solution.name} className="group cursor-pointer">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-nabtura-light-green transition-colors">
                              {solution.name}
                            </h4>
                            <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-nabtura-light-green transform group-hover:translate-x-2 transition-all" />
                          </div>
                          <p className="text-gray-400 text-lg">
                            {solution.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
