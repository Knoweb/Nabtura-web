"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Handshake, MapPin, Building2 } from "lucide-react";

const options = [
  { title: "OWN A PROJECT", desc: "Create a NABTURA solution around your location.", icon: Building2 },
  { title: "PARTICIPATE", desc: "Explore opportunities within selected managed projects.", icon: TrendingUp },
  { title: "BRING A LOCATION", desc: "Have suitable space or land? Let's explore its potential.", icon: MapPin },
  { title: "PARTNER", desc: "Explore commercial, development or strategic collaboration.", icon: Handshake },
];

export default function Investment() {
  const optionsWithImages = [
    { title: "OWN A PROJECT", desc: "Create a NABTURA solution around your location.", icon: Building2, image: "/invest_own_project_1788238892931.webp" },
    { title: "PARTICIPATE", desc: "Explore opportunities within selected managed projects.", icon: TrendingUp, image: "/invest_participate_1788238910343.webp" },
    { title: "BRING A LOCATION", desc: "Have suitable space or land? Let's explore its potential.", icon: MapPin, image: "/invest_bring_location_1788238925083.webp" },
    { title: "PARTNER", desc: "Explore commercial, development or strategic collaboration.", icon: Handshake, image: "/invest_partner_1788238938333.webp" },
  ];

  return (
    <section id="invest" className="bg-transparent text-white relative overflow-hidden py-20 border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Text Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-sm tracking-[0.3em] text-nabtura-sand font-bold mb-6 uppercase flex justify-center items-center gap-3">
            GROW WITH NABTURA
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            LOOKING FOR SOMETHING <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-sand to-yellow-600">THAT GROWS?</span>
          </h3>
          <p className="text-xl text-gray-400 font-light mb-10 max-w-2xl mx-auto">
            Explore opportunities in smart agriculture and selected NABTURA projects.
          </p>
          <button className="group inline-flex items-center text-white bg-nabtura-sand/10 hover:bg-nabtura-sand/20 border border-nabtura-sand/30 hover:border-nabtura-sand px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all">
            EXPLORE OPPORTUNITIES
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-4 h-4 text-nabtura-sand" />
          </button>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {optionsWithImages.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-nabtura-sand/30 transition-colors duration-500"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('${opt.image}')` }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Content Area with Gradient Background */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-24 flex flex-col justify-end bg-gradient-to-t from-[#020504] via-[#020504]/90 to-transparent">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:bg-nabtura-sand/20 transition-colors duration-500 border border-white/10 group-hover:border-nabtura-sand/50">
                    <Icon className="w-5 h-5 text-nabtura-sand" />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-widest uppercase mb-3">
                    {opt.title}
                  </h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
