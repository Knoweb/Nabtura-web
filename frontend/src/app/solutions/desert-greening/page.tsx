"use client";

import { useRef, useEffect } from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import {
  ArrowRight, CheckCircle2, Trees, Leaf, Users, Utensils,
  GraduationCap, Building2, Droplets, MapPin, Sun, Wind, Search, Pickaxe, Settings, ShieldCheck, HardHat, Shield
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DesertGreeningPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth } = sliderRef.current;
        if (scrollLeft >= scrollWidth / 2) {
          sliderRef.current.scrollTo({ left: scrollLeft - (scrollWidth / 2), behavior: 'auto' });
          setTimeout(() => {
            sliderRef.current?.scrollBy({ left: 344, behavior: 'smooth' });
          }, 50);
        } else {
          sliderRef.current.scrollBy({ left: 344, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden">
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="NABTURA DESERT GREENING"
        headline={<>TURN LAND INTO <br className="hidden sm:block" />GREEN VALUE.</>}
        tagline="Intelligent greening solutions for arid and challenging environments."
        description="NABTURA develops greening strategies around the land, water, climate and purpose of the project."
        bgImageUrl="/possibility_desert_to_green_1788160571631.jpg"
        accentColor="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center z-10 relative">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link href="#explore" className="text-xs font-bold tracking-widest text-yellow-400 hover:text-white uppercase transition-all flex items-center gap-2 group">
            EXPLORE DESERT GREENING <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
          </Link>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
          <Link href="/contact" className="text-xs font-bold tracking-widest text-yellow-400 hover:text-white uppercase transition-all flex items-center gap-2 group">
            SHOW US YOUR LAND <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. START WITH THE ENVIRONMENT */}
      <section id="explore" className="py-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-yellow-600/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto">

            <div className="bg-[#0A1215]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 to-transparent blur-3xl group-hover:bg-yellow-500/10 transition-colors duration-700 pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                {/* Left Column */}
                <div className="flex flex-col justify-center lg:col-span-5">
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-[1.1] tracking-tighter">
                    ADAPT BEFORE <br />YOU GREEN.
                  </h2>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center lg:col-span-7">
                  <p className="text-gray-300 text-lg md:text-xl font-light mb-6 leading-relaxed">
                    Successful greening starts by understanding what the land can support and what the project needs to achieve.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {[
                      'LAND',
                      'WATER',
                      'CLIMATE',
                      'SOIL',
                      'PURPOSE'
                    ].map((item, idx) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="inline-flex items-center px-4 py-2 bg-[#050D14] border border-yellow-500/20 rounded-xl text-xs font-bold tracking-widest uppercase text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.1)] hover:border-yellow-500/40 hover:bg-yellow-500/10 hover:text-white transition-all cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <div className="border-l-[3px] border-yellow-500 pl-5 py-1">
                    <p className="text-white font-bold text-lg leading-relaxed">
                      "Don't force green. Design it for the environment."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. THE GREENING STRATEGY */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-white/10">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-4">
            FROM LAND <br />TO LIVING GREEN.
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-10">
            Every project requires the right combination of preparation, water and planting.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-yellow-500/5 blur-[100px] -z-10 group-hover:bg-yellow-500/10 transition-colors duration-1000"></div>

          <div className="relative w-full max-w-6xl mx-auto mb-12 py-8 px-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
            <div className="absolute top-[4rem] left-[7%] right-[7%] h-[2px] bg-yellow-500/10 hidden md:block z-0"></div>

            <motion.div
              className="absolute top-[4rem] left-[7%] h-[2px] bg-yellow-400 hidden md:block z-0 shadow-[0_0_20px_rgba(250,204,21,0.9)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "86%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 3.0, ease: "easeInOut" }}
            ></motion.div>

            <div className="flex flex-nowrap md:flex-row justify-between items-center relative z-10 min-w-[600px] md:min-w-0 px-4 md:px-0">
              {[
                { step: '01', title: 'ASSESS' },
                { step: '02', title: 'PREPARE' },
                { step: '03', title: 'WATER' },
                { step: '04', title: 'PLANT' },
                { step: '05', title: 'ESTABLISH' },
                { step: '06', title: 'MANAGE' }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col items-center group relative snap-center w-24 md:w-auto shrink-0">
                  {index !== 5 && (
                    <motion.div
                      className="absolute top-6 left-1/2 h-[2px] bg-yellow-400 md:hidden z-0 shadow-[0_0_15px_rgba(250,204,21,0.8)]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.5 }}
                    ></motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0.3, scale: 0.8, borderColor: "rgba(250,204,21,0.2)", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                    whileInView={{ opacity: 1, scale: 1, borderColor: "rgba(250,204,21,1)", boxShadow: "0 0 25px rgba(250,204,21,0.6)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                    className="w-12 h-12 rounded-full bg-[#050D14] border-[2px] flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(250,204,21,0.8)] transition-all duration-300 relative z-10 cursor-default"
                  >
                    <span className="text-white font-extrabold text-xs">{phase.step}</span>
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index * 0.5) + 0.2 }}
                    className="text-yellow-400 font-extrabold text-[10px] md:text-xs tracking-widest uppercase drop-shadow-md text-center"
                  >
                    {phase.title}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-gray-400 font-light text-md">
            "NABTURA develops the approach around the actual conditions of the site rather than applying a standard greening package."
          </div>
        </div>
      </section>

      {/* 4. WATER FIRST */}
      <section className="py-8 relative overflow-hidden bg-gradient-to-b from-[#02080D] to-[#0A1215] border-y border-white/5">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#050D14]/80 backdrop-blur-2xl border border-yellow-500/20 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <div className="absolute top-0 bottom-0 left-0 w-full z-0 translate-x-[-150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                  EVERY DROP <br />HAS VALUE.
                </h2>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-16">
                <p className="text-gray-300 text-lg md:text-xl font-light mb-8 leading-relaxed">
                  In arid environments, greening begins with a clear water strategy. Depending on the project, this may consider:
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {['Water Source', 'Storage', 'Irrigation', 'Zoning', 'Monitoring', 'Plant Requirements'].map((tag) => (
                    <span key={tag} className="inline-block bg-[#02080D] border border-yellow-500/20 px-4 py-2 rounded-xl text-yellow-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(250,204,21,0.1)] hover:border-yellow-400 hover:bg-yellow-500/10 hover:text-white hover:-translate-y-1 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-white italic font-bold mb-12">
                  "Green only works when the water strategy works."
                </p>

                <div>
                  <Link href="/solutions/smart-irrigation" className="inline-flex items-center text-black bg-yellow-400 px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] w-fit">
                    EXPLORE SMART IRRIGATION <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLANT FOR THE PLACE */}
      <section className="py-8 relative overflow-hidden bg-[#02080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
              RIGHT PLANT. <br />RIGHT PLACE.
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-10">
              Plant selection should respond to the climate, water availability, soil conditions, purpose and long-term management requirements of the site.
            </p>

            <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-yellow-500/30 via-white/5 to-transparent p-[1px] mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div className="w-full h-full rounded-[2rem] bg-[#0A1215]/70 backdrop-blur-2xl py-8 px-6 md:py-10 flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-500/15 transition-colors duration-700"></div>
                <div className="absolute top-0 bottom-0 left-0 w-full z-0 translate-x-[-150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 relative z-10 w-full">
                  <p className="text-yellow-400/80 font-black tracking-[0.2em] text-sm uppercase text-center shrink-0">SELECTION FACTORS:</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {[
                      { title: 'CLIMATE', icon: Sun },
                      { title: 'WATER', icon: Droplets },
                      { title: 'SOIL', icon: Pickaxe },
                      { title: 'PURPOSE', icon: Leaf },
                      { title: 'MANAGEMENT', icon: Settings }
                    ].map((item, idx) => (
                      <motion.span
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#050D14] border border-yellow-500/20 rounded-xl text-xs font-bold tracking-widest uppercase text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.1)] hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:text-white hover:-translate-y-1 transition-all cursor-default"
                      >
                        <item.icon className="w-4 h-4 opacity-70 group-hover:text-white transition-colors" /> {item.title}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase mb-8">
              ADAPT FIRST. GREEN SECOND.
            </p>

            <Link href="/solutions/nursery" className="inline-flex items-center text-black bg-yellow-500 px-8 py-3 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)]">
              EXPLORE NABTURA NURSERY <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHAT COULD THE LAND BECOME? */}
      <section className="py-8 relative overflow-hidden bg-[#0A1215]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
              FROM ARID LAND <br />TO GREEN POSSIBILITY.
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#0A1215] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#0A1215] to-transparent z-20 pointer-events-none"></div>

            <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-[10vw] md:px-[calc(50vw-450px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { from: 'Development Land', to: 'Integrated Green Environment', icon: Building2 },
                { from: 'Hotel / Resort', to: 'Hospitality Green', icon: Utensils },
                { from: 'Community', to: 'Shared Green Space', icon: Users },
                { from: 'Urban Site', to: 'Urban Forest', icon: MapPin },
                { from: 'Commercial / Industrial Site', to: 'Purposeful Green', icon: Settings },
                { from: 'Landholding', to: 'Productive Green', icon: Pickaxe },
                { from: 'Corridor / Entrance', to: 'Green Gateway', icon: ArrowRight },
                { from: 'Special Site', to: 'Custom Greening Concept', icon: ShieldCheck },

                // Duplicated for circular infinite scroll
                { from: 'Development Land', to: 'Integrated Green Environment', icon: Building2 },
                { from: 'Hotel / Resort', to: 'Hospitality Green', icon: Utensils },
                { from: 'Community', to: 'Shared Green Space', icon: Users },
                { from: 'Urban Site', to: 'Urban Forest', icon: MapPin },
                { from: 'Commercial / Industrial Site', to: 'Purposeful Green', icon: Settings },
                { from: 'Landholding', to: 'Productive Green', icon: Pickaxe },
                { from: 'Corridor / Entrance', to: 'Green Gateway', icon: ArrowRight },
                { from: 'Special Site', to: 'Custom Greening Concept', icon: ShieldCheck }
              ].map((transform, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-[85vw] sm:w-[320px] group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[1.5rem] bg-[#050D14] border border-white/5 hover:border-yellow-500/30 transition-all duration-500 cursor-grab active:cursor-grabbing shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden hover:shadow-[0_15px_30px_rgba(250,204,21,0.15)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/40 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-all duration-500 relative z-10">
                    <transform.icon className="w-5 h-5 text-gray-500 group-hover:text-yellow-400 transition-colors duration-500" />
                  </div>

                  <div className="text-center relative z-10 mb-4 h-10 flex items-center">
                    <span className="text-gray-400 font-medium text-md md:text-sm group-hover:text-white transition-colors duration-300">{transform.from}</span>
                  </div>

                  <div className="h-10 flex flex-col items-center justify-center relative z-10 mb-4">
                    <div className="w-[2px] h-full bg-white/5 group-hover:bg-yellow-500/20 transition-colors duration-500 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute top-0 bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_rgba(250,204,21,1)] -translate-y-[200%] group-hover:translate-y-[200%] transition-transform duration-[1.5s] ease-in-out"></div>
                    </div>
                    <ArrowRight className="absolute rotate-90 text-yellow-500/30 group-hover:text-yellow-400 w-5 h-5 bg-[#050D14] group-hover:scale-110 transition-all duration-500" />
                  </div>

                  <div className="text-center relative z-10 h-10 flex items-center">
                    <span className="text-yellow-500/80 font-black tracking-widest text-base md:text-lg uppercase drop-shadow-[0_0_10px_rgba(250,204,21,0.1)] group-hover:text-yellow-300 group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.6)] transition-all duration-300">{transform.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#final-conversion" className="inline-flex items-center text-black bg-yellow-400 px-8 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)]">
              EXPLORE WHAT YOUR LAND COULD BECOME <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FROM STRATEGY TO ESTABLISHMENT */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 10 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="py-10 relative border-b border-white/10">

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-yellow-500/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 uppercase leading-tight">
              WE DON'T JUST PLANT. <br className="hidden md:block" />WE ESTABLISH GREEN.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                { title: 'UNDERSTAND', desc: 'Identify goals and land capacity.', icon: Search },
                { title: 'ASSESS', desc: 'Detailed site analysis.', icon: MapPin },
                { title: 'STRATEGIZE', desc: 'Develop a specific approach.', icon: Shield },
                { title: 'DESIGN', desc: 'Engineer the green layout.', icon: Settings },
                { title: 'PREPARE', desc: 'Site readiness and earthworks.', icon: HardHat },
                { title: 'GREEN', desc: 'Install and plant effectively.', icon: Leaf },
                { title: 'ESTABLISH', desc: 'Monitor and nurture to maturity.', icon: CheckCircle2 }
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`relative group/card h-full ${i === 6 ? 'md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 lg:col-start-2 w-full' : ''}`}
                  >
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] opacity-50 group-hover/card:from-yellow-400/50 group-hover/card:to-yellow-600/10 group-hover/card:opacity-100 transition-all duration-700 blur-[1px]"></div>
                    <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-[#0A1215]/60 backdrop-blur-md border border-white/5 py-10 px-8 flex flex-col justify-start text-left transition-all duration-700 hover:-translate-y-2 group-hover/card:shadow-[0_20px_40px_rgba(250,204,21,0.15)] cursor-default">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-100 group-hover/card:opacity-100 transition-opacity duration-700 z-0"></div>
                      <div className="absolute top-0 bottom-0 left-0 w-full z-0 translate-x-[-150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent group-hover/card:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out"></div>

                      <div className="relative mb-6 w-fit z-10">
                        <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.2)] group-hover/card:bg-yellow-500/20 group-hover/card:border-yellow-400 group-hover/card:shadow-[0_0_30px_rgba(250,204,21,0.6)] group-hover/card:scale-110 transition-all duration-500 relative">
                          <Icon className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] group-hover/card:text-white transition-colors duration-500" />
                        </div>
                      </div>
                      <h3 className="text-white font-black text-lg uppercase tracking-wider relative z-10 group-hover/card:text-yellow-300 drop-shadow-md transition-all duration-500 mb-2">
                        {card.title}
                      </h3>
                      <div className="w-8 h-[2px] bg-yellow-500/30 mb-3 relative z-10 group-hover/card:w-16 group-hover/card:bg-yellow-400 transition-all duration-500"></div>
                      <p className="text-gray-400 font-medium text-md relative z-10 group-hover/card:text-gray-200 transition-colors duration-500">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-16 relative w-full max-w-4xl mx-auto rounded-[2rem] bg-gradient-to-br from-yellow-500/30 via-white/5 to-transparent p-[1px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden">
              <div className="w-full h-full rounded-[2rem] bg-[#0A1215]/80 backdrop-blur-2xl py-10 px-6 md:px-12 flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-500/15 transition-colors duration-700"></div>
                <div className="absolute top-0 bottom-0 left-0 w-full z-0 translate-x-[-150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none"></div>

                <p className="text-gray-300 font-light text-lg md:text-xl mb-6 leading-relaxed relative z-10 text-center">
                  NABTURA can bring together site preparation, water strategy, planting, irrigation, implementation and establishment around the needs of the project.
                </p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 font-black text-2xl tracking-[0.2em] uppercase mb-10 relative z-10">
                  WE MAKE IT WORK.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full relative z-10">
                  <div className="flex items-center gap-3 bg-[#050D14] border border-white/5 pl-5 pr-1.5 py-1.5 rounded-full hover:border-yellow-500/30 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] transition-all duration-300 w-full md:w-auto justify-between">
                    <span className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">PLANT SELECTION</span>
                    <Link href="/solutions/nursery" className="flex items-center justify-center bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-yellow-400 hover:text-black transition-colors">
                      NURSERY SOLUTIONS <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </div>

                  <ArrowRight className="hidden md:block w-4 h-4 text-yellow-500/30" />

                  <div className="flex items-center gap-3 bg-[#050D14] border border-white/5 pl-5 pr-1.5 py-1.5 rounded-full hover:border-yellow-500/30 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] transition-all duration-300 w-full md:w-auto justify-between">
                    <span className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase">ESTABLISHMENT</span>
                    <Link href="/services" className="flex items-center justify-center bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-yellow-400 hover:text-black transition-colors">
                      NABTURA SMARTCARE <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CONVERSION */}
      <section id="final-conversion" className="py-12 relative overflow-hidden bg-[#0A1215]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/possibility_desert_to_green_1788160571631.jpg')] bg-cover bg-center bg-fixed opacity-40"></div>
          <div className="absolute inset-0 bg-[#0A1215]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#02080D] via-transparent to-[#0A1215]"></div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-yellow-500/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            WHAT COULD <br />YOUR LAND BECOME?
          </h2>
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Choose your starting point:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            {[
              'I HAVE LAND TO GREEN',
              'I HAVE A DEVELOPMENT PROJECT',
              'I WANT TO TRANSFORM AN ARID SITE',
              'I HAVE A LARGE-SCALE GREENING REQUIREMENT',
              'I’M EXPLORING POSSIBILITIES'
            ].map((option, index) => (
              <div key={index} className={`bg-[#050D14]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-[#050D14]/90 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] ${index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}>
                <span className="text-white font-bold tracking-widest text-xs uppercase pr-4 group-hover:text-yellow-400 transition-colors">{option}</span>
                <CheckCircle2 className="w-5 h-5 text-gray-500 group-hover:text-yellow-400 transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link href="/contact" className="inline-flex items-center text-black bg-yellow-400 px-10 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)]">
              SHOW US YOUR LAND <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link href="/contact" className="inline-flex items-center text-yellow-400 font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              DISCUSS A DESERT GREENING PROJECT <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-6 flex justify-center text-xs font-light text-gray-500 tracking-widest">
              WhatsApp | +971 56 9300075 | info@nabtura.com
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
