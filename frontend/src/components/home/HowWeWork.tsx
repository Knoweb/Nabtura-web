"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, Sprout, Briefcase } from "lucide-react";

const models = [
  {
    title: "WE CREATE. YOU OPERATE.",
    desc: "We assess, design, build and commission. You take it forward.",
    icon: Wrench
  },
  {
    title: "WE CREATE. WE MANAGE.",
    desc: "From concept to ongoing operation and support.",
    icon: Sprout
  },
  {
    title: "WE ADVISE. YOU DEVELOP.",
    desc: "Our expertise. Your execution.",
    icon: Briefcase
  }
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-nabtura-slate text-content py-32 border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] text-content-muted font-bold mb-6 uppercase">
            FLEXIBLE WAYS TO WORK WITH NABTURA
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            YOUR LOCATION.<br />
            <span className="text-nabtura-light-green">OUR GREEN SOLUTION.</span>
          </h3>
        </div>

        {/* Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-overlay border border-divider rounded-3xl p-10 hover:bg-overlay hover:border-divider transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-overlay backdrop-blur-xl flex items-center justify-center mb-8 border border-divider group-hover:border-nabtura-green transition-colors">
                  <Icon className="w-8 h-8 text-content-muted group-hover:text-nabtura-light-green transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-content mb-4 leading-tight">
                  {model.title}
                </h4>
                <p className="text-content-muted font-light text-lg">
                  {model.desc}
                </p>
                
                <div className="mt-8 pt-8 border-t border-divider">
                  <span className="text-sm font-bold tracking-widest uppercase text-nabtura-green group-hover:text-nabtura-light-green flex items-center">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-content-muted text-lg mb-6">
            Need the location prepared too? Site preparation, infrastructure and supporting civil works can be considered.
          </p>
          <div className="inline-flex flex-col items-center">
            <p className="text-content font-bold tracking-widest uppercase text-sm mb-4">
              NOT SURE WHICH MODEL SUITS YOU?
            </p>
            <button className="group inline-flex items-center text-nabtura-light-green font-bold tracking-widest uppercase text-sm border-b-2 border-transparent hover:border-nabtura-light-green pb-1 transition-all">
              FIND THE RIGHT MODEL
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

