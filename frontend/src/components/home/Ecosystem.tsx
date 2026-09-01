"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Sprout, TreePine, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ecosystem = [
  {
    id: "grow",
    title: "GROW FOOD",
    icon: Sprout,
    color: "text-nabtura-light-green",
    bgColor: "bg-nabtura-light-green",
    image: "/images/greenhouse.jpg",
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
    bgColor: "bg-nabtura-blue",
    image: "/images/dubai-water.jpg",
    solutions: [
      { name: "Smart Irrigation", desc: "Precision water management and recirculation." }
    ]
  },
  {
    id: "green",
    title: "CREATE GREEN",
    icon: TreePine,
    color: "text-nabtura-green",
    bgColor: "bg-nabtura-green",
    image: "/images/dubai-landscapes.jpg",
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
    bgColor: "bg-nabtura-sand",
    image: "/images/models/operate.jpg",
    solutions: [
      { name: "Environmental Projects", desc: "Purpose-built solutions for complex challenges." }
    ]
  }
];

export default function Ecosystem() {
  const [activeId, setActiveId] = useState<string>("grow");

  const activeNode = ecosystem.find(n => n.id === activeId) || ecosystem[0];

  return (
    <section className="bg-transparent text-content py-8 md:py-12 relative overflow-hidden border-t border-white/5">
      {/* Abstract background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-[10px] md:text-xs tracking-[0.3em] text-content-muted font-bold mb-2 uppercase">
            THE COMPLETE NABTURA ECOSYSTEM
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            ONE VISION.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400">
              SEVEN SOLUTIONS.
            </span>
          </h3>
        </div>

        {/* Top Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {ecosystem.map((node) => {
            const isActive = activeId === node.id;
            const Icon = node.icon;
            
            return (
              <button
                key={node.id}
                onClick={() => setActiveId(node.id)}
                className={`relative px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 border ${
                  isActive 
                    ? `bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]` 
                    : `bg-black/20 border-white/5 hover:bg-white/5 hover:border-white/10`
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? node.color : "text-gray-500"}`} />
                <span className={`font-bold tracking-widest text-xs md:text-sm uppercase ${isActive ? "text-white" : "text-gray-400"}`}>
                  {node.title}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="active-tab"
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 ${node.bgColor} rounded-full blur-[2px]`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Canvas Area */}
        <div className="relative w-full min-h-[500px] md:min-h-[420px] flex rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#050A08]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Canvas Background Image */}
              <Image 
                src={activeNode.image}
                alt={activeNode.title}
                fill
                className="object-cover opacity-60"
              />
              {/* Gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050A08] via-[#050A08]/80 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Canvas Content Overlay */}
          <div className="relative z-20 w-full p-6 md:p-10 flex flex-col justify-center max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeNode.id}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className={`inline-flex items-center gap-3 ${activeNode.color} mb-6`}>
                  <activeNode.icon className="w-6 h-6 md:w-8 md:h-8" />
                  <span className="font-black tracking-[0.2em] text-sm md:text-lg uppercase">{activeNode.title}</span>
                </div>

                <div className="space-y-3">
                  {activeNode.solutions.map((solution, idx) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                      key={solution.name}
                    >
                      <Link 
                        href="/solutions"
                        className="group block bg-white/5 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer shadow-lg"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-nabtura-light-green transition-colors">
                            {solution.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-nabtura-light-green transform group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-gray-300 text-sm md:text-sm leading-relaxed">
                          {solution.desc}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

