"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const audiences = [
  { id: "investor", label: "Investor" },
  { id: "grower", label: "Grower" },
  { id: "landowner", label: "Landowner" },
  { id: "developer", label: "Developer" },
  { id: "hotel", label: "Hotel / Resort" },
  { id: "restaurant", label: "Restaurant" },
  { id: "school", label: "School / University" },
  { id: "mall", label: "Mall / Retailer" },
  { id: "corporate", label: "Business / Corporate" },
  { id: "villa", label: "Home / Villa Owner" },
  { id: "government", label: "Government / Institution" },
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
    <section className="bg-black text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            WHAT COULD NABTURA<br />
            DO FOR YOU?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Selector */}
          <div className="lg:col-span-4">
            <h3 className="text-xl text-gray-500 font-light mb-6">I AM A...</h3>
            <div className="flex flex-col gap-2">
              {audiences.map((audience) => (
                <button
                  key={audience.id}
                  onClick={() => setActiveAudience(audience.id)}
                  className={`text-left text-xl md:text-2xl font-bold tracking-wide transition-all duration-300 py-2 border-l-2 pl-4 ${
                    activeAudience === audience.id 
                      ? "border-nabtura-green text-white" 
                      : "border-transparent text-gray-600 hover:text-gray-300 hover:border-gray-700"
                  }`}
                >
                  {audience.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAudience}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl md:text-5xl font-bold text-nabtura-green mb-10">
                  {content.headline}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4">Possible Solutions</h4>
                    <ul className="space-y-3">
                      {content.solutions.map((sol: string) => (
                        <li key={sol} className="flex items-center text-lg text-gray-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-3" />
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4">Potential Benefits</h4>
                    <div className="flex flex-wrap gap-2 text-gray-300">
                      {content.benefits.map((ben: string, idx: number) => (
                        <span key={ben}>
                          {ben} {idx < content.benefits.length - 1 && <span className="text-nabtura-green mx-2">•</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="group flex items-center text-white font-bold tracking-wider hover:text-nabtura-light-green transition-colors">
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
