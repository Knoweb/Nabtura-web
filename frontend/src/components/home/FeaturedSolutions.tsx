"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featured = [
  {
    title: "NABTURA SMART GREENHOUSES",
    description: "CONTROL THE ENVIRONMENT. GROW WITH CONFIDENCE.",
    details: "Smart controlled-environment systems designed around the crop, climate, location and commercial objective.",
    tags: ["Commercial", "Investment", "Managed Solutions"],
    imageSrc: "/images/greenhouse.jpg",
    link: "/solutions/smart-greenhouses",
    cta: "EXPLORE SMART GREENHOUSES"
  },
  {
    title: "NABTURA SMART MICROGREENS",
    description: "SMALL SPACE. SMART GROWING.",
    details: "Controlled growing systems that bring fresh production closer to where food is used.",
    tags: ["Hospitality", "Commercial", "Education"],
    imageSrc: "/images/microgreens.jpg",
    link: "/solutions/smart-microgreens",
    cta: "EXPLORE SMART MICROGREENS"
  },
  {
    title: "NABTURA LANDSCAPES",
    description: "GREEN SPACES DESIGNED TO PERFORM.",
    details: "Purposeful landscapes combining design, appropriate planting and intelligent water management.",
    tags: ["Hospitality", "Commercial", "Residential", "Developments"],
    imageSrc: "/images/dubai-landscapes.jpg",
    link: "/solutions/landscapes",
    cta: "EXPLORE LANDSCAPES"
  },
];

export default function FeaturedSolutions() {
  return (
    <section className="bg-transparent text-white pt-20 pb-10 md:pt-32 md:pb-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase font-semibold text-nabtura-green mb-4">
            START WITH WHAT YOU WANT TO CREATE
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            SMART SOLUTIONS
            <br />
            <span className="text-gray-400">REAL POSSIBILITIES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] h-[600px] flex flex-col justify-end border border-white/10 hover:border-nabtura-green/30 transition-colors"
            >
              {/* Background Image */}
              <Image 
                src={item.imageSrc} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Stronger gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1811] via-[#0a1811]/80 to-transparent z-10 transition-opacity duration-300 group-hover:from-[#0a1811]/90" />
              
              <div className="relative z-20 p-8 flex flex-col h-full justify-end">
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nabtura-green bg-nabtura-green/10 backdrop-blur-md rounded-full border border-nabtura-green/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black tracking-wider mb-3 leading-tight">{item.title}</h3>
                <p className="text-nabtura-green font-bold text-sm tracking-widest mb-4 uppercase">{item.description}</p>
                <p className="text-gray-300 font-light mb-8 line-clamp-3">{item.details}</p>
                
                <Link href={item.link} className="inline-flex items-center justify-center w-full py-4 rounded-full bg-white/10 hover:bg-nabtura-green hover:text-black font-bold tracking-widest text-sm uppercase transition-all group-hover:shadow-[0_0_30px_rgba(0,255,157,0.3)]">
                  {item.cta} <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
