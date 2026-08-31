"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    headline: "START SOMETHING THAT GROWS.",
    solutions: ["Smart Microgreens", "Compact Growing Facility", "Smart Greenhouse", "Managed Growing", "Commercial Hydroponics", "Partnership Opportunities"],
    benefits: ["Entry-Level Opportunities", "Scalable Growing", "Managed Options", "Technology Support"],
    cta: "EXPLORE BUSINESS OPPORTUNITIES",
  },
  residential: {
    headline: "GROW CLOSER TO HOME.",
    solutions: ["Grow-at-Home", "Kitchen Garden", "Herb Garden", "Compact Hydroponics", "Mini Greenhouse", "Edible Landscape", "Smart Landscape"],
    benefits: ["Fresh Produce", "Convenience", "Green Living", "Food Visibility", "Beautiful Outdoor Space"],
    cta: "EXPLORE YOUR HOME'S POTENTIAL",
  },
  villa: {
    headline: "GROW CLOSER TO HOME.",
    solutions: ["Grow-at-Home", "Kitchen Garden", "Herb Garden", "Compact Hydroponics", "Mini Greenhouse", "Edible Landscape", "Smart Landscape"],
    benefits: ["Fresh Produce", "Convenience", "Green Living", "Food Visibility", "Beautiful Outdoor Space"],
    cta: "EXPLORE YOUR HOME'S POTENTIAL",
  },
  landowner: {
    headline: "GROW CLOSER TO HOME.",
    solutions: ["Grow-at-Home", "Kitchen Garden", "Herb Garden", "Compact Hydroponics", "Mini Greenhouse", "Edible Landscape", "Smart Landscape"],
    benefits: ["Fresh Produce", "Convenience", "Green Living", "Food Visibility", "Beautiful Outdoor Space"],
    cta: "EXPLORE YOUR HOME'S POTENTIAL",
  },
  government: {
    headline: "CREATE GREEN AT A LARGER SCALE.",
    solutions: ["Urban Forests", "Desert Greening", "Smart Irrigation", "Public Landscapes", "Controlled Agriculture", "Nurseries", "Environmental Projects"],
    benefits: ["Greener Communities", "Water Management", "Public Experience", "Food Initiatives", "Environmental Improvement"],
    cta: "DISCUSS A PROJECT",
  },
  school: {
    headline: "CREATE GREEN AT A LARGER SCALE.",
    solutions: ["Urban Forests", "Desert Greening", "Smart Irrigation", "Public Landscapes", "Controlled Agriculture", "Nurseries", "Educational Growing"],
    benefits: ["Greener Communities", "Water Management", "Public Experience", "Food Initiatives", "Demonstration Projects"],
    cta: "DISCUSS A PROJECT",
  },
  developer: {
    headline: "LET'S BUILD GREEN TOGETHER.",
    solutions: ["Smart Agriculture Systems", "Landscape Solutions", "Smart Irrigation", "Urban Forests", "Environmental Solutions", "Nursery Support", "Technical Consultancy"],
    benefits: ["Specialist Expertise", "Integrated Solutions", "Project Support", "Technology Integration", "Long-Term Management"],
    cta: "PARTNER WITH NABTURA",
  },
  healthcare: {
    headline: "CREATE GREEN FOR WELLBEING.",
    solutions: ["Healing Gardens", "Green Retreats", "Landscapes", "Sensory Gardens", "Smart Irrigation", "Edible Gardens", "Environmental Spaces"],
    benefits: ["Restorative Environment", "Patient/Visitor Experience", "Outdoor Spaces", "Green Ambience"],
    cta: "EXPLORE WELLNESS GREEN SPACES",
  },
  corporate: {
    headline: "Transform your space intelligently.",
    solutions: ["Smart Greenhouses", "Landscapes", "Urban Forests", "Smart Irrigation", "Corporate Gardens"],
    benefits: ["Workplace Experience", "Green Identity", "Employee Engagement", "Productive Spaces", "Environmental Initiatives"],
    cta: "EXPLORE CORPORATE GREEN SOLUTIONS",
  },
  grower: {
    headline: "Scale your production intelligently.",
    solutions: ["Smart Greenhouses", "Commercial Hydroponics", "Smart Irrigation", "Managed Growing"],
    benefits: ["Scalability", "Food Security", "Managed Operations", "Tech-Driven ROI"],
    cta: "EXPLORE GROWING SOLUTIONS",
  },
  mall: {
    headline: "Transform retail into a green experience.",
    solutions: ["Indoor Landscapes", "Urban Forests", "Green Atriums", "Smart Irrigation"],
    benefits: ["Aesthetics", "Customer Experience", "Green Identity", "Extended Dwell Time"],
    cta: "EXPLORE RETAIL POSSIBILITIES",
  },
  retail: {
    headline: "Transform retail into a green experience.",
    solutions: ["Indoor Landscapes", "Urban Forests", "Green Atriums", "Smart Irrigation"],
    benefits: ["Aesthetics", "Customer Experience", "Green Identity", "Extended Dwell Time"],
    cta: "EXPLORE RETAIL POSSIBILITIES",
  },
  industrial: {
    headline: "Make industrial spaces work harder.",
    solutions: ["Controlled Agriculture", "Smart Greenhouses", "Commercial Hydroponics", "Environmental Projects"],
    benefits: ["Space Utilization", "Sustainability", "Food Security", "Operational Efficiency"],
    cta: "EXPLORE INDUSTRIAL POSSIBILITIES",
  },
  // Default fallback for any others
  default: {
    headline: "Transform your space intelligently.",
    solutions: ["Smart Greenhouses", "Landscapes", "Urban Forests", "Smart Irrigation"],
    benefits: ["Sustainability", "Efficiency", "Aesthetics", "Control"],
    cta: "SEE POSSIBILITIES",
  }
};

export default function WhoWeServe() {
  const [activeAudience, setActiveAudience] = useState("restaurant");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveAudience((current) => {
        const currentIndex = audiences.findIndex(a => a.id === current);
        const nextIndex = (currentIndex + 1) % audiences.length;
        
        if (scrollRef.current) {
          const buttons = scrollRef.current.querySelectorAll('button');
          const targetButton = buttons[nextIndex] as HTMLElement;
          if (targetButton) {
             const container = scrollRef.current;
             const scrollLeft = targetButton.offsetLeft - (container.clientWidth / 2) + (targetButton.clientWidth / 2);
             container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
          }
        }
        
        return audiences[nextIndex].id;
      });
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  const content = contentMap[activeAudience] || contentMap.default;

  return (
    <section id="who-we-serve" className="bg-transparent text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            WHAT COULD NABTURA<br />
            DO FOR YOU?
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Section: Horizontal Scrollable Pill Selector */}
          <div 
            className="relative flex items-center group/scroll"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-3 pb-4 snap-x w-full pr-12" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
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

            {/* Always visible Right Scroll Button */}
            <div className="absolute right-0 z-20 pb-4">
              <motion.button 
                onClick={() => scroll("right")}
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-nabtura-slate flex items-center justify-center text-nabtura-green border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.9)] hover:bg-nabtura-green hover:text-black transition-colors"
              >
                <ChevronRight className="w-6 h-6 ml-1" />
              </motion.button>
            </div>

            {/* Gradient fade on right edge to indicate scrolling */}
            <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
          </div>

          {/* Bottom Section: Dynamic Content */}
          <div className="bg-nabtura-slate border border-white/10 rounded-[2rem] p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-2xl relative overflow-hidden">
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
