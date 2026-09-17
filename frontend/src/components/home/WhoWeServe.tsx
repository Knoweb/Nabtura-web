"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const clusters = [
  {
    id: "investor",
    label: "Investor",
    headline: "INVEST IN SOMETHING THAT GROWS.",
    copy: "Explore smart agriculture opportunities built around real projects, locations and commercial possibilities.",
    possibilities: ["Smart Greenhouse Investment", "Smart Microgreens Venture", "Own a Growing Facility", "Managed Agriculture Project", "Land-Based Opportunity", "Strategic Partnership"],
    values: ["Commercial Opportunity", "Managed Solutions", "Scalable Concepts", "Technology-Enabled Agriculture"],
    cta: "EXPLORE INVESTMENT OPPORTUNITIES",
    image: "/images/greenhouse.jpg"
  },
  {
    id: "grower",
    label: "Grower",
    headline: "GROW SMARTER. CONTROL MORE.",
    copy: "Bring greater intelligence, visibility and control into your growing operation.",
    possibilities: ["Smart Greenhouses", "Hydroponic Systems", "Smart Irrigation", "Fertigation", "Environmental Monitoring", "Automation", "Crop Monitoring", "SmartCare"],
    values: ["Greater Control", "Water Management", "Production Visibility", "Automation", "Operational Support"],
    cta: "EXPLORE SMART GROWING",
    image: "/images/microgreens.jpg"
  },
  {
    id: "landowner",
    label: "Landowner",
    headline: "TURN YOUR LOCATION INTO POSSIBILITY.",
    copy: "Let's explore what your land could grow, become or support.",
    possibilities: ["Smart Greenhouse", "Commercial Growing", "Landscape Development", "Desert Greening", "Nursery", "Environmental Project", "Investment Partnership"],
    values: ["Productive Use", "Commercial Possibility", "Greening", "Long-Term Development"],
    cta: "SHOW US YOUR LOCATION",
    image: "/images/dubai-landscapes.jpg"
  },
  {
    id: "developer",
    label: "Developer",
    headline: "BUILD GREEN INTO THE DEVELOPMENT.",
    copy: "Make food, water and greenery part of the development experience.",
    possibilities: ["Smart Landscapes", "Urban Forests", "Community Gardens", "Productive Rooftops", "Smart Irrigation", "Green Amenities", "Environmental Solutions"],
    values: ["Development Differentiation", "Better Amenities", "Green Identity", "Resident Experience", "Water Intelligence"],
    cta: "EXPLORE DEVELOPMENT SOLUTIONS",
    image: "/images/dubai-landscapes.jpg"
  },
  {
    id: "hospitality",
    label: "Hospitality",
    headline: "TURN GREEN INTO AN EXPERIENCE.",
    copy: "Create environments guests can see, enjoy—and sometimes even taste.",
    possibilities: ["Resort Landscapes", "Chef Gardens", "Smart Microgreens", "Edible Gardens", "Urban Forests", "Green Dining", "Smart Irrigation", "Nursery Support"],
    values: ["Guest Experience", "Fresh Produce", "Visual Appeal", "Destination Identity", "Water Management"],
    cta: "EXPLORE HOSPITALITY POSSIBILITIES",
    image: "/images/dubai-water.jpg"
  },
  {
    id: "restaurant",
    label: "Restaurant",
    headline: "GROW. SERVE. EXPERIENCE.",
    copy: "Grow selected fresh produce closer to your kitchen. Create green dining environments your guests remember.",
    possibilities: ["Smart Microgreens", "Chef Gardens", "Edible Landscapes", "Dining Forests", "Smart Irrigation", "Compact Growing Systems"],
    values: ["Freshness", "Visibility", "Dining Experience", "Differentiation", "Green Ambience"],
    cta: "EXPLORE RESTAURANT POSSIBILITIES",
    image: "/images/microgreens.jpg"
  },
  {
    id: "education",
    label: "Education",
    headline: "TURN NATURE INTO A CLASSROOM.",
    copy: "Create spaces where students can see, grow and understand food, water and nature.",
    possibilities: ["Learning Gardens", "Smart Microgreens Labs", "Mini Greenhouses", "Hydroponic Learning Systems", "Learning Forests", "Smart Irrigation", "Environmental Projects"],
    values: ["Practical Learning", "Agriculture", "STEM Exposure", "Environmental Awareness", "Student Engagement"],
    cta: "CREATE A GREEN LEARNING SPACE",
    image: "/images/greenhouse.jpg"
  },
  {
    id: "retail",
    label: "Retail",
    headline: "CREATE GREEN PEOPLE WANT TO EXPERIENCE.",
    copy: "Transform commercial spaces with purposeful greenery and memorable green environments.",
    possibilities: ["Urban Oasis", "Indoor Green Spaces", "Smart Landscapes", "Relaxation Zones", "Feature Gardens", "Smart Irrigation", "Experiential Green Installations"],
    values: ["Visitor Experience", "Visual Identity", "Dwell Space", "Destination Appeal", "Green Ambience"],
    cta: "EXPLORE RETAIL POSSIBILITIES",
    image: "/images/dubai-landscapes.jpg"
  },
  {
    id: "corporate",
    label: "Corporate",
    headline: "BRING GREEN INTO THE WORKPLACE.",
    copy: "Create productive, restorative and intelligent green environments around people and business.",
    possibilities: ["Corporate Landscapes", "Green Retreats", "Rooftop Gardens", "Edible Gardens", "Smart Microgreens", "Smart Irrigation", "Employee Green Spaces"],
    values: ["Workplace Experience", "Green Identity", "Employee Engagement", "Productive Spaces", "Environmental Initiatives"],
    cta: "EXPLORE CORPORATE GREEN SOLUTIONS",
    image: "/images/dubai-landscapes.jpg"
  },
  {
    id: "home",
    label: "Home",
    headline: "GROW CLOSER TO HOME.",
    copy: "Turn part of your home into a beautiful, productive and intelligently managed green space.",
    possibilities: ["Grow-at-Home", "Kitchen Garden", "Herb Garden", "Compact Hydroponics", "Mini Greenhouse", "Edible Landscape", "Smart Landscape", "Smart Irrigation"],
    values: ["Fresh Produce", "Convenience", "Green Living", "Food Visibility", "Beautiful Outdoor Space"],
    cta: "EXPLORE YOUR HOME'S POTENTIAL",
    extra: [
      "We Build. You Grow.",
      "We Build. We Maintain.",
      "We Grow. You Harvest."
    ],
    image: "/images/microgreens.jpg"
  },
  {
    id: "government",
    label: "Government",
    headline: "CREATE GREEN AT A LARGER SCALE.",
    copy: "Develop intelligent solutions for food, water, public spaces and challenging environments.",
    possibilities: ["Urban Forests", "Desert Greening", "Smart Irrigation", "Public Landscapes", "Controlled Agriculture", "Nurseries", "Environmental Projects", "Educational Growing"],
    values: ["Greener Communities", "Water Management", "Public Experience", "Food Initiatives", "Environmental Improvement", "Demonstration Projects"],
    cta: "DISCUSS A PROJECT",
    image: "/images/dubai-water.jpg"
  },
  {
    id: "entrepreneur",
    label: "Entrepreneur",
    headline: "START SOMETHING THAT GROWS.",
    copy: "Turn smart agriculture into a business opportunity.",
    possibilities: ["Smart Microgreens", "Compact Growing Facility", "Smart Greenhouse", "Managed Growing", "Commercial Hydroponics", "Partnership Opportunities"],
    values: ["Entry-Level Opportunities", "Scalable Growing", "Managed Options", "Technology Support"],
    cta: "EXPLORE BUSINESS OPPORTUNITIES",
    image: "/images/greenhouse.jpg"
  },
  {
    id: "wellness",
    label: "Wellness",
    headline: "CREATE GREEN FOR WELLBEING.",
    copy: "Bring purposeful natural environments into healthcare and wellness spaces.",
    possibilities: ["Healing Gardens", "Green Retreats", "Landscapes", "Sensory Gardens", "Smart Irrigation", "Edible Gardens", "Environmental Spaces"],
    values: ["Restorative Environment", "Patient/Visitor Experience", "Outdoor Spaces", "Green Ambience"],
    cta: "EXPLORE WELLNESS GREEN SPACES",
    image: "/images/dubai-landscapes.jpg"
  },
  {
    id: "partner",
    label: "Project Partner",
    headline: "LET'S BUILD GREEN TOGETHER.",
    copy: "Bring NABTURA's smart agriculture, water and greening capabilities into your project.",
    possibilities: ["Smart Agriculture Systems", "Landscape Solutions", "Smart Irrigation", "Urban Forests", "Environmental Solutions", "Nursery Support", "Technical Consultancy"],
    values: ["Specialist Expertise", "Integrated Solutions", "Project Support", "Technology Integration", "Long-Term Management"],
    cta: "PARTNER WITH NABTURA",
    image: "/images/models/operate.jpg"
  }
];

export default function WhoWeServe() {
  const [activeCluster, setActiveCluster] = useState(clusters[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveCluster((current) => {
        const currentIndex = clusters.findIndex(c => c.id === current);
        const nextIndex = (currentIndex + 1) % clusters.length;
        
        if (scrollRef.current) {
          const buttons = scrollRef.current.querySelectorAll('button');
          const targetButton = buttons[nextIndex] as HTMLElement;
          if (targetButton) {
             const container = scrollRef.current;
             const scrollLeft = targetButton.offsetLeft - (container.clientWidth / 2) + (targetButton.clientWidth / 2);
             container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
          }
        }
        
        return clusters[nextIndex].id;
      });
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  const activeContent = clusters.find(c => c.id === activeCluster) || clusters[0];

  return (
    <section id="who-we-serve" className="relative text-white py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="mb-12 text-center">
          <h2 className="text-[10px] md:text-xs tracking-[0.3em] text-nabtura-green font-bold mb-4 uppercase">
            BUILT AROUND YOUR PURPOSE
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            WHAT COULD NABTURA DO FOR YOU?
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Tell us who you are. We'll show you what's possible.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Top Section: Horizontal Scrollable Pill Selector */}
          <div 
            className="relative flex items-center group/scroll"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-3 pb-4 snap-x w-full px-8 md:px-12" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .flex.overflow-x-auto::-webkit-scrollbar { display: none; }
              `}} />
              {clusters.map((cluster) => {
                const isActive = activeCluster === cluster.id;
                return (
                  <button
                    key={cluster.id}
                    onClick={() => setActiveCluster(cluster.id)}
                    className={`flex-shrink-0 snap-start px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                      isActive 
                        ? "bg-nabtura-green text-black border-nabtura-green shadow-lg shadow-nabtura-green/20 scale-105" 
                        : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cluster.label}
                  </button>
                );
              })}
            </div>

            {/* Always visible Right Scroll Button */}
            <div className="absolute right-0 z-20 pb-4">
              <motion.button 
                onClick={() => scroll("right")}
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-nabtura-green border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.9)] hover:bg-nabtura-green hover:text-black transition-colors"
              >
                <ChevronRight className="w-6 h-6 ml-1" />
              </motion.button>
            </div>

            {/* Gradient fade on right edge to indicate scrolling */}
            <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
          </div>

          {/* Bottom Section: Dynamic Content Panel with Background Image */}
          <div className="relative border border-white/10 rounded-[2rem] min-h-[700px] lg:min-h-[750px] flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden group bg-[#020504]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={activeContent.image}
                  alt={activeContent.headline}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-1000 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020504] via-[#020504]/80 to-[#020504]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020504]/90 via-[#020504]/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 p-6 md:p-10 lg:p-12 flex-grow flex flex-col w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCluster}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full w-full mx-auto"
                >
                  <div className="max-w-4xl mb-10">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                      {activeContent.headline}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
                      {activeContent.copy}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 flex-grow">
                    <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl flex flex-col">
                      <h4 className="text-sm tracking-[0.2em] text-nabtura-green uppercase mb-8 font-bold flex items-center">
                        <span className="w-8 h-[1px] bg-nabtura-green mr-4"></span>
                        Relevant Possibilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                        {activeContent.possibilities.map((sol: string) => (
                          <li key={sol} className="flex items-start text-base lg:text-lg text-gray-200">
                            <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-nabtura-green mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,157,0.8)]" />
                            <span className="leading-snug">{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm tracking-[0.2em] text-nabtura-green uppercase mb-8 font-bold flex items-center">
                          <span className="w-8 h-[1px] bg-nabtura-green mr-4"></span>
                          Potential Value
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {activeContent.values.map((val: string) => (
                            <span key={val} className="bg-black/50 px-5 py-2.5 rounded-full text-sm font-medium border border-white/5 text-gray-300 shadow-inner">
                              {val}
                            </span>
                          ))}
                        </div>

                        {activeContent.extra && (
                          <div className="mt-8 pt-8 border-t border-white/10">
                            <h4 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-5 font-bold">Service Options</h4>
                            <ul className="space-y-4">
                              {activeContent.extra.map((opt: string) => (
                                <li key={opt} className="text-white font-medium flex items-center text-lg">
                                  <ArrowRight className="w-5 h-5 text-nabtura-green mr-4" />
                                  {opt}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="mt-12 pt-8 border-t border-white/10">
                        <Link href="/possibilities">
                          <button className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-nabtura-green text-black hover:bg-white transition-colors rounded-full font-bold tracking-widest text-sm uppercase shadow-lg">
                            {activeContent.cta} <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
