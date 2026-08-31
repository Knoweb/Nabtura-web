"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Droplets, FlaskConical, ThermometerSun, Activity, PackageCheck } from "lucide-react";

const journeySteps = [
  { id: 1, name: "SEED", icon: Leaf },
  { id: 2, name: "WATER", icon: Droplets },
  { id: 3, name: "NUTRIENTS", icon: FlaskConical },
  { id: 4, name: "ENVIRONMENT", icon: ThermometerSun },
  { id: 5, name: "MONITORING", icon: Activity },
  { id: 6, name: "HARVEST", icon: PackageCheck },
];

export default function SmartGrowing() {
  return (
    <section className="bg-nabtura-slate text-white py-32 border-b border-white/5 relative overflow-hidden">
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
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
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
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-nabtura-green group-hover:bg-white/5 transition-all shadow-xl"
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-nabtura-light-green transition-colors" strokeWidth={1.5} />
                  </motion.div>
                  <span className="text-sm md:text-base font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors uppercase">
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="bg-white/5 backdrop-blur-xl/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-8">
            SOIL ISN'T ALWAYS REQUIRED.
          </h4>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-lg md:text-xl font-light text-nabtura-light-green tracking-widest uppercase mb-8">
            <span>Hydroponics</span>
            <span className="text-white/20">•</span>
            <span>Aeroponics</span>
            <span className="text-white/20">•</span>
            <span>Aquaponics</span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl font-light mb-12">
            We select the growing approach according to the crop, location, scale and project objective.
          </p>

          <button className="group inline-flex items-center text-white font-bold tracking-widest uppercase text-sm border-b-2 border-transparent hover:border-nabtura-green pb-1 transition-all">
            DISCOVER SMART GROWING
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-light-green" />
          </button>
        </div>

      </div>
    </section>
  );
}
