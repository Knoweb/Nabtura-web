"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, Droplets, FlaskConical, ThermometerSun, Activity, PackageCheck } from "lucide-react";

const journeySteps = [
  { id: 1, name: "SEED", icon: Leaf, color: "text-emerald-400 group-hover:text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" },
  { id: 2, name: "WATER", icon: Droplets, color: "text-blue-400 group-hover:text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" },
  { id: 3, name: "NUTRIENTS", icon: FlaskConical, color: "text-purple-400 group-hover:text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" },
  { id: 4, name: "ENVIRONMENT", icon: ThermometerSun, color: "text-amber-400 group-hover:text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" },
  { id: 5, name: "MONITORING", icon: Activity, color: "text-cyan-400 group-hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" },
  { id: 6, name: "HARVEST", icon: PackageCheck, color: "text-orange-400 group-hover:text-orange-300 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" },
];

export default function SmartGrowing() {
  return (
    <section className="bg-transparent text-content py-16 md:py-12 md:py-16 border-b border-divider relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-nabtura-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] text-nabtura-light-green font-bold mb-6 uppercase">
            SMART AGRICULTURE
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            KNOW HOW YOUR FOOD IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GROWN.</span>
          </h3>
          <p className="text-xl md:text-2xl text-content-muted font-light leading-relaxed">
            Smart growing gives greater visibility and control over the conditions in which food is produced.
          </p>
        </div>

        {/* Visual Journey */}
        <div className="mb-32 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center group">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-overlay backdrop-blur-xl border border-divider flex items-center justify-center mb-6 group-hover:border-nabtura-green group-hover:bg-overlay transition-all shadow-xl relative"
                  >
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 transition-colors ${step.color}`} strokeWidth={1.5} />
                  </motion.div>
                  <span className="text-sm md:text-base font-bold tracking-widest text-content-muted group-hover:text-content transition-colors uppercase">
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement (Plain Text, Not a Box) */}
        <div className="text-center max-w-4xl mx-auto mt-24">
          <h4 className="text-3xl md:text-4xl font-bold text-content mb-8">
            SOIL ISN'T ALWAYS REQUIRED.
          </h4>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-lg md:text-xl font-light text-nabtura-light-green tracking-widest uppercase mb-8">
            <span>Hydroponics</span>
            <span className="text-content/20">•</span>
            <span>Aeroponics</span>
            <span className="text-content/20">•</span>
            <span>Aquaponics</span>
          </div>

          <p className="text-content-muted text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            We select the perfect growing approach—whether it's <em className="text-white font-normal not-italic relative inline-block px-1">hydroponics, aeroponics, or aquaponics<span className="absolute bottom-1 left-0 w-full h-[3px] bg-nabtura-light-green/30 -z-10 rounded-sm"></span></em>—tailored exactly to your <strong className="text-nabtura-light-green font-medium">crop</strong>, <strong className="text-nabtura-light-green font-medium">location</strong>, <strong className="text-nabtura-light-green font-medium">scale</strong>, and <strong className="text-nabtura-light-green font-medium">project objective</strong>.
          </p>

          <Link href="/solutions/smart-greenhouses" className="group inline-flex items-center text-content font-bold tracking-widest uppercase text-sm border-b-2 border-transparent hover:border-nabtura-green pb-1 transition-all">
            DISCOVER SMART GROWING
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-light-green" />
          </Link>
        </div>

      </div>
    </section>
  );
}

