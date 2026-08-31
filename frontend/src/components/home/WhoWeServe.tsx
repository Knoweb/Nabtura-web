"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const audiences = [
  { id: "investor", label: "Investors & Entrepreneurs" },
  { id: "grower", label: "Growers & Farms" },
  { id: "landowner", label: "Landowners" },
  { id: "developer", label: "Developers" },
  { id: "hotel", label: "Hotels & Resorts" },
  { id: "restaurant", label: "Restaurants & F&B" },
  { id: "mall", label: "Shopping Malls & Retail" },
  { id: "school", label: "Schools & Universities" },
  { id: "corporate", label: "Corporate Campuses" },
  { id: "residential", label: "Residential Developments" },
  { id: "villa", label: "Premium Villas" },
  { id: "healthcare", label: "Healthcare & Wellness" },
  { id: "government", label: "Government & Municipalities" },
  { id: "industrial", label: "Industrial/Logistics Facilities" },
  { id: "retail", label: "Retailers/Supermarkets" },
];

const contentMap: Record<string, any> = {
  restaurant: {
    headline: "Grow closer to your kitchen.",
    solutions: ["Microgreens", "Chef Garden", "Dining Forest", "Landscape", "Smart Irrigation"],
    benefits: ["Freshness", "Experience", "Differentiation", "Green Ambience"],
    cta: "SEE RESTAURANT POSSIBILITIES",
  },
  hotel: {
    headline: "Elevate the guest experience.",
    solutions: ["Landscape", "Microgreens", "Edible Garden", "Urban Forest", "Smart Irrigation"],
    benefits: ["Luxury", "Sustainability", "Fresh Food", "Operational Efficiency"],
    cta: "SEE HOTEL POSSIBILITIES",
  },
  investor: {
    headline: "Smart agriculture. Solid returns.",
    solutions: ["Smart Greenhouse", "Microgreens", "Partnership opportunities"],
    benefits: ["Scalability", "Food Security", "Managed Operations", "Tech-Driven ROI"],
    cta: "SEE INVESTMENT POSSIBILITIES",
  },
  // Default fallback for others in this demo
  default: {
    headline: "Transform your space intelligently.",
    solutions: ["Smart Greenhouses", "Landscapes", "Urban Forests", "Smart Irrigation"],
    benefits: ["Sustainability", "Efficiency", "Aesthetics", "Control"],
    cta: "SEE POSSIBILITIES",
  }
};

export default function WhoWeServe() {
  const [activeAudience, setActiveAudience] = useState("restaurant");

  const content = contentMap[activeAudience] || contentMap.default;

  return (
    <section id="who-we-serve" className="bg-black text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            WHAT COULD NABTURA<br />
            DO FOR YOU?
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Section: Horizontal Scrollable Pill Selector */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-3 pb-4 snap-x w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style dangerouslySetInnerHTML={{__html: `
                .flex.overflow-x-auto::-webkit-scrollbar { display: none; }
              `}} />
              {audiences.map((audience) => (
                <button
                  key={audience.id}
                  onClick={() => setActiveAudience(audience.id)}
                  className={`flex-shrink-0 snap-start px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                    activeAudience === audience.id 
                      ? "bg-nabtura-green text-black border-nabtura-green shadow-lg shadow-nabtura-green/20 scale-105" 
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {audience.label}
                </button>
              ))}
            </div>
            {/* Optional gradient fade on the right to indicate scrolling */}
            <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
          </div>

          {/* Bottom Section: Dynamic Content */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-2xl relative overflow-hidden">
            {/* Subtle background glow based on active selection */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-nabtura-green/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAudience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="z-10"
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-10">
                  {content.headline}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-sm tracking-[0.2em] text-nabtura-green uppercase mb-4 font-semibold">Possible Solutions</h4>
                    <ul className="space-y-3">
                      {content.solutions.map((sol: string) => (
                        <li key={sol} className="flex items-center text-lg text-gray-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-nabtura-green mr-3" />
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm tracking-[0.2em] text-nabtura-green uppercase mb-4 font-semibold">Potential Benefits</h4>
                    <div className="flex flex-wrap gap-2 text-gray-300">
                      {content.benefits.map((ben: string, idx: number) => (
                        <span key={ben} className="bg-white/5 px-4 py-2 rounded-lg text-sm border border-white/5">
                          {ben}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="group flex items-center text-nabtura-light-green font-bold tracking-wider hover:text-white transition-colors">
                  {content.cta} <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
