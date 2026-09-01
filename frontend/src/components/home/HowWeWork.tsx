"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Sprout, Briefcase } from "lucide-react";

const models = [
  {
    title: "WE CREATE. YOU OPERATE.",
    desc: "We assess, design, build and commission. You take it forward.",
    icon: Wrench,
    image: "/images/models/operate.jpg"
  },
  {
    title: "WE CREATE. WE MANAGE.",
    desc: "From concept to ongoing operation and support.",
    icon: Sprout,
    image: "/images/models/manage.jpg"
  },
  {
    title: "WE ADVISE. YOU DEVELOP.",
    desc: "Our expertise. Your execution.",
    icon: Briefcase,
    image: "/images/models/advise.jpg"
  }
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-transparent text-content py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] text-content-muted font-bold mb-4 uppercase">
            FLEXIBLE WAYS TO WORK WITH NABTURA
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-white">
            YOUR LOCATION.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400 md:ml-4">OUR GREEN SOLUTION.</span>
          </h3>
        </div>

        {/* Premium Borderless Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl rounded-[2rem] hover:bg-white/10 hover:shadow-[0_10px_40px_rgba(21,184,118,0.15)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col border border-white/5"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <Image 
                    src={model.image} 
                    alt={model.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-transparent opacity-90" />
                  
                  {/* Icon floating on the image */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-nabtura-green/50 group-hover:bg-nabtura-green/20 group-hover:shadow-[0_0_20px_rgba(21,184,118,0.3)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-nabtura-light-green transition-colors" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-white mb-3 leading-tight tracking-wide">
                    {model.title}
                  </h4>
                  <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Banner */}
        <div className="text-center max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#050A08] via-white/5 to-[#050A08] p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
          {/* Subtle glow behind the banner text */}
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <p className="text-gray-300 text-sm md:text-base text-left max-w-2xl leading-relaxed">
            <strong className="text-white font-medium">Need the location prepared too?</strong> Site preparation, infrastructure and supporting civil works can be considered.
          </p>
          <Link href="/solutions" className="shrink-0 z-10">
            <button className="group inline-flex items-center px-8 py-4 bg-white text-black font-extrabold tracking-widest uppercase text-xs rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
              FIND THE RIGHT MODEL
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

