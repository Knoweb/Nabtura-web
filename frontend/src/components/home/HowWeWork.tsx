"use client";

import Link from "next/link";
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
    <section id="how-we-work" className="bg-transparent text-content py-12 border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] text-content-muted font-bold mb-4 uppercase">
            FLEXIBLE WAYS TO WORK WITH NABTURA
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            YOUR LOCATION.<br className="hidden md:block" />
            <span className="text-nabtura-light-green md:ml-4">OUR GREEN SOLUTION.</span>
          </h3>
        </div>

        {/* Compact Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-overlay border border-divider rounded-2xl p-6 hover:bg-overlay hover:border-nabtura-green/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-overlay backdrop-blur-xl flex items-center justify-center mb-4 border border-divider group-hover:border-nabtura-green transition-colors">
                  <Icon className="w-5 h-5 text-content-muted group-hover:text-nabtura-light-green transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-content mb-2 leading-tight">
                  {model.title}
                </h4>
                <p className="text-content-muted font-light text-sm">
                  {model.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-overlay/50 p-6 rounded-2xl border border-divider">
          <p className="text-content-muted text-sm text-left">
            Need the location prepared too? Site preparation, infrastructure and supporting civil works can be considered.
          </p>
          <Link href="/solutions" className="shrink-0">
            <button className="group inline-flex items-center text-nabtura-light-green font-bold tracking-widest uppercase text-xs border-b border-transparent hover:border-nabtura-light-green pb-1 transition-all">
              FIND THE RIGHT MODEL
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-3 h-3" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

