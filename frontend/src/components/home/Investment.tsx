"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Handshake, MapPin, Building2 } from "lucide-react";

const options = [
  { title: "OWN A PROJECT", desc: "Create a NABTURA solution around your location.", icon: Building2 },
  { title: "PARTICIPATE", desc: "Explore opportunities within selected managed projects.", icon: TrendingUp },
  { title: "BRING A LOCATION", desc: "Have suitable space or land? Let's explore its potential.", icon: MapPin },
  { title: "PARTNER", desc: "Explore commercial, development or strategic collaboration.", icon: Handshake },
];

export default function Investment() {
  return (
    <section id="invest" className="bg-black text-white relative overflow-hidden py-32 border-b border-white/5">
      
      {/* Premium Background Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/smart_greenhouse_mockup_1788109457162.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="text-sm tracking-[0.3em] text-nabtura-sand font-bold mb-6 uppercase flex items-center gap-3">
              GROW WITH NABTURA
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              LOOKING FOR <br /> SOMETHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-sand to-yellow-600">THAT GROWS?</span>
            </h3>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-lg mb-12">
              Explore opportunities in smart agriculture and selected NABTURA projects.
            </p>
            
            <button className="group inline-flex items-center text-white bg-nabtura-sand/10 hover:bg-nabtura-sand/20 border border-nabtura-sand/30 hover:border-nabtura-sand px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all">
              EXPLORE OPPORTUNITIES
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-sand" />
            </button>
          </div>

          {/* Right Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {options.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/5 backdrop-blur-xl/80 hover:border-nabtura-sand/50 transition-all group"
                >
                  <Icon className="w-8 h-8 text-gray-500 group-hover:text-nabtura-sand mb-6 transition-colors" />
                  <h4 className="text-lg font-bold text-white tracking-widest uppercase mb-3">
                    {opt.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light">
                    {opt.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
