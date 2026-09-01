"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, SlidersHorizontal, MapPin, Activity, Eye, BrainCircuit, Sliders, Cpu, Sparkles } from "lucide-react";

const sampleBlogs = [
  {
    id: 1,
    title: "NABTURA Launches Smart Greenhouse Project in Dubai",
    slug: "nabtura-launches-smart-greenhouse-dubai",
    content: "We are thrilled to announce the completion of our latest smart greenhouse facility in the heart of Dubai, utilizing state-of-the-art climate control.",
    coverImage: { url: "https://picsum.photos/seed/greenhouse1/800/600" },
    publishedAt: "2026-08-15T10:00:00Z"
  },
  {
    id: 2,
    title: "The Future of Microgreens in Urban Hospitality",
    slug: "future-microgreens-urban-hospitality",
    content: "How luxury hotels and restaurants in the UAE are adopting on-site vertical farming to provide hyper-local, fresh microgreens to their guests.",
    coverImage: { url: "https://picsum.photos/seed/microgreens2/800/600" },
    publishedAt: "2026-08-10T14:30:00Z"
  },
  {
    id: 3,
    title: "Water Intelligence: Saving 40% in Landscape Irrigation",
    slug: "water-intelligence-saving-irrigation",
    content: "Our new automated sensor-driven irrigation systems have successfully reduced water consumption by 40% across major commercial landscapes.",
    coverImage: { url: "https://picsum.photos/seed/irrigation3/800/600" },
    publishedAt: "2026-08-05T09:15:00Z"
  }
];

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  coverImage?: {
    url: string;
  };
  publishedAt?: string;
}

const getImageUrl = (url?: string) => {
  if (!url) return "https://picsum.photos/seed/placeholder/800/600";
  if (url.startsWith("http")) return url;
  return `http://localhost:1337${url}`; // Or process.env.NEXT_PUBLIC_STRAPI_URL
};

const pillars = [
  {
    icon: Zap,
    title: "SMART",
    subtitle: "Better visibility, decisions & operation.",
    iconColor: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
    iconBg: "bg-cyan-400/10 border-cyan-400/20 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/50",
    bulletColor: "bg-cyan-400",
    features: [
      "Sensors & Data",
      "Monitoring & Alerts",
      "Automation",
      "Cloud Connectivity",
      "Remote Management",
    ],
  },
  {
    icon: SlidersHorizontal,
    title: "CONTROLLED",
    subtitle: "Conditions for better performance.",
    iconColor: "text-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]",
    iconBg: "bg-purple-400/10 border-purple-400/20 group-hover:bg-purple-400/20 group-hover:border-purple-400/50",
    bulletColor: "bg-purple-400",
    features: [
      "Climate & Water",
      "Nutrients",
      "Irrigation",
      "Lighting & Ventilation",
      "Growing Conditions",
    ],
  },
  {
    icon: MapPin,
    title: "ADAPTED",
    subtitle: "Designed around your need.",
    iconColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",
    iconBg: "bg-amber-400/10 border-amber-400/20 group-hover:bg-amber-400/20 group-hover:border-amber-400/50",
    bulletColor: "bg-amber-400",
    features: [
      "Location & Climate",
      "Water & Crop/Plant",
      "Purpose & Scale",
      "User & Commercial Objective",
    ],
  },
];

const cycleSteps = [
  { name: "SENSE", icon: Activity },
  { name: "MONITOR", icon: Eye },
  { name: "ANALYZE", icon: BrainCircuit },
  { name: "CONTROL", icon: Sliders },
  { name: "AUTOMATE", icon: Cpu },
  { name: "OPTIMIZE", icon: Sparkles },
];

export default function Difference({ blogs = [] }: { blogs?: Blog[] }) {
  const displayBlogs = blogs && blogs.length > 0 ? blogs : sampleBlogs;
  const [currentBlogIdx, setCurrentBlogIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBlogIdx((prev) => (prev + 1) % displayBlogs.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [displayBlogs.length]);

  return (
    <section className="bg-transparent text-white py-12 md:py-16 border-t border-white/5 relative overflow-hidden">
      {/* Animated Waves Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        {/* Wave 1 (Back, slow) */}
        <motion.svg
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 w-[200%] h-[300px] md:h-[400px] fill-emerald-900/40"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
        >
          <path d="M0,160 Q360,40 720,160 T1440,160 Q1800,40 2160,160 T2880,160 L2880,320 L0,320 Z" />
        </motion.svg>

        {/* Wave 2 (Middle, medium) */}
        <motion.svg
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 w-[200%] h-[250px] md:h-[350px] fill-[#024a27]/50"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
        >
          <path d="M0,200 Q360,280 720,200 T1440,200 Q1800,280 2160,200 T2880,200 L2880,320 L0,320 Z" />
        </motion.svg>

        {/* Wave 3 (Front, fast) */}
        <motion.svg
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 w-[200%] h-[200px] md:h-[300px] fill-nabtura-green/30"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
        >
          <path d="M0,120 Q360,240 720,120 T1440,120 Q1800,240 2160,120 T2880,120 L2880,320 L0,320 Z" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            NOT JUST GREEN
            <br />
            <span className="text-nabtura-green">INTELLIGENTLY GREEN</span>
          </h2>
        </motion.div>

        {/* Split Layout: Pillars (Left) & News Slider (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          
          {/* Left Side: Three Pillars */}
          <div className="flex flex-col gap-6 h-full">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors gap-6"
              >
                <div className={`w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center transition-all border border-transparent ${pillar.iconBg}`}>
                  <pillar.icon className={`w-8 h-8 transition-colors ${pillar.iconColor}`} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold tracking-widest mb-1">{pillar.title}</h3>
                  <p className="text-gray-400 font-medium text-sm mb-3">{pillar.subtitle}</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm md:text-base text-gray-300">
                        <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${pillar.bulletColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: News & Blogs Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full flex flex-col bg-white/5 border border-white/10 rounded-3xl p-6 xl:p-8 relative overflow-hidden"
          >
            {/* Soft Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-green/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold tracking-widest uppercase">LATEST UPDATES</h3>
                <p className="text-sm text-nabtura-green tracking-wider mt-1">News & Achievements</p>
              </div>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nabtura-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-nabtura-green"></span>
              </span>
            </div>

            {/* Horizontal Slider Container */}
            <div className="relative flex-grow overflow-hidden mt-2">
              <motion.div 
                className="flex h-full"
                animate={{ x: `-${currentBlogIdx * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {displayBlogs.map((blog) => (
                  <div key={blog.id} className="min-w-full px-1 flex flex-col h-full">
                    <div className="flex flex-col flex-grow bg-black/40 border border-white/5 rounded-2xl overflow-hidden hover:border-nabtura-green/30 transition-colors group">
                      <div className="h-48 xl:h-56 w-full overflow-hidden relative flex-shrink-0">
                        <img 
                          src={getImageUrl(blog.coverImage?.url)} 
                          alt={blog.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h4 className="text-lg xl:text-xl font-bold line-clamp-2 mb-3 group-hover:text-nabtura-green transition-colors leading-tight">
                          {blog.title}
                        </h4>
                        <p className="text-sm text-gray-400 line-clamp-3 flex-grow">
                          {blog.content ? blog.content.replace(/<[^>]*>?/gm, '') : ''}
                        </p>
                        <a href={`/blog/${blog.slug}`} className="inline-block mt-5 text-xs font-bold text-nabtura-green tracking-widest uppercase hover:text-white transition-colors">
                          Read More &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-6 relative z-10">
              {displayBlogs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBlogIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentBlogIdx ? "bg-nabtura-green w-8" : "bg-white/20 hover:bg-white/40 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Smart Cycle - SmartArt Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 text-center border-t border-white/10 pt-20"
        >
          <h4 className="text-sm tracking-[0.3em] text-nabtura-green font-bold mb-16 uppercase">The Nabtura Smart Cycle</h4>
          
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Connecting Line (Background) */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-white/10 z-0 overflow-hidden rounded-full">
              {/* Infinite Flowing Energy Pulse */}
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "linear",
                  repeatDelay: 0.5
                }}
                className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-nabtura-light-green to-transparent opacity-80"
              />
            </div>
            
            {/* Connecting Line (Foreground Animated) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-gradient-to-r from-nabtura-green/10 via-nabtura-green/30 to-nabtura-green/10 z-0 origin-left"
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-4 relative z-10">
              {cycleSteps.map((step, idx) => (
                <div key={step.name} className="flex flex-col items-center group cursor-default">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 rounded-full bg-[#0a0a0a] border-2 border-white/10 group-hover:border-nabtura-green flex items-center justify-center mb-6 transition-all duration-500 relative"
                  >
                    {/* Synchronized Glowing Ring */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0px 0px 0px 0px rgba(0,255,157,0)",
                          "0px 0px 40px 10px rgba(0,255,157,0.3)",
                          "0px 0px 0px 0px rgba(0,255,157,0)",
                          "0px 0px 0px 0px rgba(0,255,157,0)",
                        ],
                        borderColor: [
                          "rgba(255,255,255,0)",
                          "rgba(0,255,157,1)",
                          "rgba(255,255,255,0)",
                          "rgba(255,255,255,0)",
                        ]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 0.75 + (idx * 0.4),
                        times: [0, 0.1, 0.4, 1],
                        ease: "easeInOut"
                      }}
                      className="absolute inset-[-2px] rounded-full border-2"
                    />

                    {/* Inner glowing dot (hover) */}
                    <div className="absolute inset-0 rounded-full bg-nabtura-green/0 group-hover:bg-nabtura-green/10 transition-colors duration-500 scale-75 group-hover:scale-100" />
                    
                    {/* Synchronized Icon Color */}
                    <motion.div
                      animate={{ color: ["#6b7280", "#00ff9d", "#6b7280", "#6b7280"] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 0.75 + (idx * 0.4),
                        times: [0, 0.1, 0.4, 1],
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <step.icon className="w-8 h-8 group-hover:!text-nabtura-green transition-colors duration-500" />
                    </motion.div>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors duration-300"
                  >
                    {step.name}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
