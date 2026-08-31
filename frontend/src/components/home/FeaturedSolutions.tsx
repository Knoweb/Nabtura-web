"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    title: "SMART GREENHOUSES",
    description: "Controlled environments. Smarter production.",
    tags: ["Commercial", "Investment", "Managed"],
    href: "#",
    imageSrc: "/images/greenhouse.jpg",
  },
  {
    title: "SMART MICROGREENS",
    description: "Small space. Smart growing. Fresh possibilities.",
    tags: ["Hospitality", "Business", "Education"],
    href: "#",
    imageSrc: "/images/microgreens.jpg",
  },
  {
    title: "LANDSCAPES",
    description: "Green spaces designed to perform.",
    tags: ["Hospitality", "Commercial", "Residential"],
    href: "#",
    imageSrc: "/images/landscapes.jpg",
  },
];

export default function FeaturedSolutions() {
  return (
    <section className="bg-black text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            START WITH WHAT<br />
            YOU WANT TO CREATE.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-2xl h-[500px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <Image 
                src={item.imageSrc} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Background gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
              
              <div className="relative z-20 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold tracking-wider mb-2">{item.title}</h3>
                <p className="text-gray-300 font-light mb-6">{item.description}</p>
                
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-nabtura-light-green font-semibold hover:text-white transition-colors"
                >
                  EXPLORE {item.title} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
