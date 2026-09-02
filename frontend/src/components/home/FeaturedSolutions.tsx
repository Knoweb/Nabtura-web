"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

const featured = [
  {
    title: "SMART GREENHOUSES",
    description: "Controlled environments. Smarter production.",
    details: "Our smart greenhouses use cutting-edge climate control and IoT sensors to maximize crop yields while minimizing resource usage. From automated nutrient delivery to precise temperature regulation, we provide turnkey solutions for scalable commercial agriculture. Whether you are growing leafy greens, vine crops, or specialty plants, our environments are tailored for optimal performance.",
    tags: ["Commercial", "Investment", "Managed"],
    imageSrc: "/images/greenhouse.webp",
  },
  {
    title: "SMART MICROGREENS",
    description: "Small space. Smart growing. Fresh possibilities.",
    details: "Maximize your yield in minimal space with our smart microgreens vertical farming solutions. Designed specifically for urban environments, hospitality sectors, and local businesses, these systems offer rapid growth cycles with automated lighting and irrigation, ensuring fresh, nutrient-dense produce year-round right where it's consumed.",
    tags: ["Hospitality", "Business", "Education"],
    imageSrc: "/images/microgreens.webp",
  },
  {
    title: "LANDSCAPES",
    description: "Green spaces designed to perform.",
    details: "Transform any outdoor or indoor space into a thriving, sustainable ecosystem. Our landscaping solutions integrate smart irrigation, drought-resistant plant selection, and modern aesthetic design. We specialize in creating high-performance green spaces for luxury hospitality, commercial real estate, and premium residential properties that look stunning while conserving water.",
    tags: ["Hospitality", "Commercial", "Residential"],
    imageSrc: "/images/dubai-landscapes.webp",
  },
];

export default function FeaturedSolutions() {
  const [selectedSolution, setSelectedSolution] = useState<typeof featured[0] | null>(null);

  return (
    <section className="bg-transparent text-white py-12 md:py-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            START WITH WHAT<br />
            YOU WANT TO CREATE
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
              className="group relative overflow-hidden rounded-2xl h-[500px] flex flex-col justify-end cursor-pointer"
              onClick={() => setSelectedSolution(item)}
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
                
                <div className="inline-flex items-center text-nabtura-light-green font-semibold group-hover:text-white transition-colors">
                  EXPLORE {item.title} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedSolution && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            >
              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#050A08] border border-white/10 rounded-[2rem] overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row shadow-[0_0_50px_rgba(21,184,118,0.2)] relative"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Modal Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                  <Image 
                    src={selectedSolution.imageSrc} 
                    alt={selectedSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050A08] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] to-transparent md:hidden" />
                </div>

                {/* Modal Text Details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedSolution.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-nabtura-light-green bg-nabtura-green/10 rounded-full border border-nabtura-green/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                    {selectedSolution.title}
                  </h3>
                  
                  <p className="text-xl text-nabtura-light-green font-medium mb-6">
                    {selectedSolution.description}
                  </p>
                  
                  <div className="w-12 h-1 bg-white/10 mb-6 rounded-full" />
                  
                  <p className="text-gray-300 font-light leading-relaxed mb-8">
                    {selectedSolution.details}
                  </p>
                  
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
