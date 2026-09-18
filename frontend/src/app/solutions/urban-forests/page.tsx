"use client";

import { useRef, useEffect } from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Trees, Leaf, Users, Utensils,
  GraduationCap, Building2, Droplets, MapPin, Sun, Wind
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UrbanForestsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -344, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth } = sliderRef.current;
        // If we reach the second duplicated half, jump back seamlessly
        if (scrollLeft >= scrollWidth / 2) {
          sliderRef.current.scrollTo({ left: scrollLeft - (scrollWidth / 2), behavior: 'auto' });
          setTimeout(() => {
            sliderRef.current?.scrollBy({ left: 344, behavior: 'smooth' });
          }, 50);
        } else {
          sliderRef.current.scrollBy({ left: 344, behavior: 'smooth' });
        }
      }
    }, 3500); // Auto-slide every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden">
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="NABTURA URBAN FORESTS"
        headline={<>BRING NATURE <br className="hidden sm:block" />CLOSER.</>}
        tagline="Purpose-built green environments for places where people live, work, gather and experience."
        description="From compact urban spaces to larger developments, NABTURA creates urban forests around the place, people and purpose."
        bgImageUrl="/images/uae_green_city.jpg"
        accentColor="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center z-10 relative">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link href="#explore" className="text-xs font-bold tracking-widest text-emerald-400 hover:text-white uppercase transition-all flex items-center gap-2 group">
            EXPLORE URBAN FORESTS <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
          </Link>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
          <Link href="/contact" className="text-xs font-bold tracking-widest text-emerald-400 hover:text-white uppercase transition-all flex items-center gap-2 group">
            DISCUSS YOUR PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. GREEN WITH PURPOSE */}
      <section id="explore" className="py-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-green-600/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto">

            <div className="bg-[#0A1215]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                {/* Left Column */}
                <div className="flex flex-col justify-center lg:col-span-5">
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-[1.1] tracking-tighter">
                    GREEN CAN <br />DO MORE.
                  </h2>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center lg:col-span-7">
                  <p className="text-gray-300 text-lg md:text-xl font-light mb-6 leading-relaxed">
                    An Urban Forest can be more than trees and planting. It can create places to:
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {[
                      'GATHER',
                      'RELAX',
                      'LEARN',
                      'DINE',
                      'WALK',
                      'CONNECT',
                      'EXPERIENCE'
                    ].map((item, idx) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="inline-flex items-center px-4 py-2 bg-[#050D14] border border-emerald-500/20 rounded-xl text-xs font-bold tracking-widest uppercase text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white transition-all cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <div className="border-l-[3px] border-emerald-500 pl-5 py-1">
                    <p className="text-white font-bold italic text-lg leading-relaxed">
                      "Start with what the space should become. Then create the green around it."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. FORESTS WITH A PURPOSE */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="py-8 relative border-b border-white/10">

        {/* Background Image with Parallax & Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center bg-fixed opacity-40"></div>
          <div className="absolute inset-0 bg-[#0A1215]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1215] via-transparent to-[#02080D]"></div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-emerald-500/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 uppercase leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              WHAT COULD <br className="hidden md:block" />YOUR FOREST BECOME?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                { title: 'DINING FOREST', desc: 'Dine within nature.', icon: Utensils },
                { title: 'LEARNING FOREST', desc: 'Let nature become the classroom.', icon: GraduationCap },
                { title: 'COMMUNITY FOREST', desc: 'Green that brings people together.', icon: Users },
                { title: 'HOSPITALITY FOREST', desc: 'Turn green into an experience.', icon: Building2 },
                { title: 'CORPORATE GREEN RETREAT', desc: 'Step out of the office. Into green.', icon: Trees },
                { title: 'URBAN OASIS', desc: 'Create green where people need it.', icon: Leaf }
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative group/card h-full"
                  >
                    {/* Glowing outer border wrapper */}
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] opacity-50 group-hover/card:from-emerald-400/50 group-hover/card:to-emerald-600/10 group-hover/card:opacity-100 transition-all duration-700 blur-[1px]"></div>

                    <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-[#050D14] border border-white/5 py-10 px-8 flex flex-col justify-end text-left transition-all duration-700 hover:-translate-y-2 group-hover/card:shadow-[0_20px_40px_rgba(16,185,129,0.15)] cursor-default">

                      {/* Ambient internal hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-0"></div>

                      {/* Sweeping diagonal shine beam */}
                      <div className="absolute top-0 bottom-0 left-0 w-full z-0 translate-x-[-150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent group-hover/card:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out"></div>

                      {/* Icon container */}
                      <div className="relative mb-10 w-fit z-10">
                        {/* Inner glowing circle */}
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover/card:bg-emerald-500/20 group-hover/card:border-emerald-400 group-hover/card:shadow-[0_0_30px_rgba(16,185,129,0.6)] group-hover/card:scale-110 transition-all duration-500 relative">
                          <Icon className="w-7 h-7 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] group-hover/card:text-white transition-colors duration-500" />
                        </div>
                      </div>

                      <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-wider relative z-10 group-hover/card:text-emerald-300 drop-shadow-md transition-all duration-500 leading-tight mb-4">
                        {card.title}
                      </h3>

                      {/* Expanding line */}
                      <div className="w-12 h-[2px] bg-emerald-500/30 mb-5 relative z-10 group-hover/card:w-24 group-hover/card:bg-emerald-400 transition-all duration-500"></div>

                      <p className="text-gray-400 font-medium text-base relative z-10 group-hover/card:text-gray-200 transition-colors duration-500">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-16 text-center">
              <Link href="#final-conversion" className="inline-flex items-center text-black bg-emerald-400 px-8 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                EXPLORE THE POSSIBILITIES <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. DESIGNED AROUND THE PLACE */}
      <section className="py-8 relative overflow-hidden bg-[#02080D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
              NOT JUST TREES. <br />A GREEN ENVIRONMENT.
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-10">
              Every location has different conditions and a different purpose.
            </p>

            <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-emerald-500/30 via-white/5 to-transparent p-[1px] mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div className="w-full h-full rounded-[2rem] bg-[#0A1215]/70 backdrop-blur-2xl py-8 px-6 md:py-10 flex flex-col items-center relative overflow-hidden">
                {/* Ambient inner glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/15 transition-colors duration-700"></div>

                {/* Sweeping diagonal shine beam */}
                <div className="absolute top-0 bottom-0 left-0 w-full z-0 translate-x-[-150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-emerald-400/5 to-transparent group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 relative z-10 w-full">
                  <p className="text-emerald-400/80 font-black tracking-[0.2em] text-sm uppercase text-center shrink-0">NABTURA considers:</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {[
                      { title: 'SITE', icon: MapPin },
                      { title: 'CLIMATE', icon: Sun },
                      { title: 'PEOPLE', icon: Users },
                      { title: 'PLANTS', icon: Leaf },
                      { title: 'WATER', icon: Droplets },
                      { title: 'USE', icon: Trees }
                    ].map((item, idx) => (
                      <motion.span
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#050D14] border border-emerald-500/20 rounded-xl text-xs font-bold tracking-widest uppercase text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white hover:-translate-y-1 transition-all cursor-default"
                      >
                        <item.icon className="w-4 h-4 opacity-70 group-hover:text-white transition-colors" /> {item.title}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase">
              Right green. Right place. Right purpose.
            </p>
          </div>
        </div>
      </section>

      {/* 5. GREEN NEEDS WATER */}
      <section className="py-5 relative overflow-hidden bg-gradient-to-b from-[#02080D] to-[#0A1215] border-y border-white/5">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-[#050D14]/80 backdrop-blur-2xl border border-blue-500/20 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            {/* Sweeping blue shine beam */}
            <div className="absolute top-0 bottom-0 left-0 w-full z-0 translate-x-[-150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-blue-400/5 to-transparent group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">

              {/* Left Column - Topic */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1] drop-shadow-lg">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">ESTABLISH.</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">GROW. SUSTAIN.</span>
                </h2>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-7 flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-16">
                <p className="text-gray-300 text-lg md:text-xl font-light mb-8 leading-relaxed">
                  Water strategy is an important part of establishing and maintaining an Urban Forest. Where appropriate, NABTURA can integrate:
                </p>

                <div className="flex flex-wrap gap-2.5 mb-12">
                  {['Smart Irrigation', 'Water Zoning', 'Monitoring', 'Plant-Specific Delivery', 'Ongoing Management'].map((tag) => (
                    <span key={tag} className="inline-block bg-[#02080D] border border-blue-500/20 px-4 py-2 rounded-xl text-sky-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:border-blue-400 hover:bg-blue-500/10 hover:text-white hover:-translate-y-1 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <Link href="/solutions/smart-irrigation" className="inline-flex items-center text-white bg-blue-500/10 border border-blue-500/30 px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] w-fit">
                    EXPLORE SMART IRRIGATION <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. TRANSFORM THE SPACE */}
      <section className="py-8 relative overflow-hidden bg-[#0A1215]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
              WHAT COULD <br />THIS SPACE BECOME?
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Gradient faded edges for slider */}
            <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#0A1215] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#0A1215] to-transparent z-20 pointer-events-none"></div>

            <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-[10vw] md:px-[calc(50vw-450px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { from: 'Restaurant Outdoor Area', to: 'Dining Forest', icon: Utensils },
                { from: 'School Grounds', to: 'Learning Forest', icon: GraduationCap },
                { from: 'Residential Development', to: 'Community Forest', icon: Users },
                { from: 'Corporate Property', to: 'Green Retreat', icon: Trees },
                { from: 'Hotel / Resort', to: 'Hospitality Forest', icon: Building2 },
                { from: 'Urban Site', to: 'Urban Oasis', icon: Leaf },
                { from: 'Public Space', to: 'Micro-Forest', icon: MapPin },
                // Duplicated for infinite circular scroll
                { from: 'Restaurant Outdoor Area', to: 'Dining Forest', icon: Utensils },
                { from: 'School Grounds', to: 'Learning Forest', icon: GraduationCap },
                { from: 'Residential Development', to: 'Community Forest', icon: Users },
                { from: 'Corporate Property', to: 'Green Retreat', icon: Trees },
                { from: 'Hotel / Resort', to: 'Hospitality Forest', icon: Building2 },
                { from: 'Urban Site', to: 'Urban Oasis', icon: Leaf },
                { from: 'Public Space', to: 'Micro-Forest', icon: MapPin }
              ].map((transform, index) => (
                <div
                  key={index}
                  className="snap-center shrink-0 w-[85vw] sm:w-[320px] group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[1.5rem] bg-[#050D14] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 cursor-grab active:cursor-grabbing shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
                >
                  {/* Ambient Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-all duration-500 relative z-10">
                    <transform.icon className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-colors duration-500" />
                  </div>

                  {/* FROM Text */}
                  <div className="text-center relative z-10 mb-4 h-10 flex items-center">
                    <span className="text-gray-400 font-medium text-xs md:text-sm group-hover:text-white transition-colors duration-300">{transform.from}</span>
                  </div>

                  {/* Vertical Laser beam connecting line */}
                  <div className="h-10 flex flex-col items-center justify-center relative z-10 mb-4">
                    <div className="w-[2px] h-full bg-white/5 group-hover:bg-emerald-500/20 transition-colors duration-500 relative overflow-hidden flex items-center justify-center">
                      {/* Shooting light beam */}
                      <div className="absolute top-0 bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_rgba(16,185,129,1)] -translate-y-[200%] group-hover:translate-y-[200%] transition-transform duration-[1.5s] ease-in-out"></div>
                    </div>
                    {/* Center Arrow */}
                    <ArrowRight className="absolute rotate-90 text-emerald-500/30 group-hover:text-emerald-400 w-5 h-5 bg-[#050D14] group-hover:scale-110 transition-all duration-500" />
                  </div>

                  {/* TO Text */}
                  <div className="text-center relative z-10 h-10 flex items-center">
                    <span className="text-emerald-500/80 font-black tracking-widest text-base md:text-lg uppercase drop-shadow-[0_0_10px_rgba(16,185,129,0.1)] group-hover:text-emerald-300 group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-300">{transform.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center text-emerald-400 font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              SHOW US YOUR SPACE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FROM SPACE TO FOREST */}
      <section className="py-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-white/10">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-4">
            CREATE. <br />ESTABLISH. GROW.
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-cyan-500/5 blur-[100px] -z-10 group-hover:bg-cyan-500/10 transition-colors duration-1000"></div>

          <div className="relative w-full max-w-6xl mx-auto mb-20 py-8 px-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
            {/* The base dark connecting line */}
            <div className="absolute top-[4rem] left-[7%] right-[7%] h-[2px] bg-cyan-500/10 hidden md:block z-0"></div>

            {/* The animated glowing light that travels forward */}
            <motion.div
              className="absolute top-[4rem] left-[7%] h-[2px] bg-cyan-400 hidden md:block z-0 shadow-[0_0_20px_rgba(6,182,212,0.9)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "86%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            ></motion.div>

            <div className="flex flex-nowrap md:flex-row justify-between items-center relative z-10 min-w-[700px] md:min-w-0 px-4 md:px-0">
              {[
                { step: '01', title: 'ASSESS' },
                { step: '02', title: 'CONCEPT' },
                { step: '03', title: 'DESIGN' },
                { step: '04', title: 'PREPARE' },
                { step: '05', title: 'PLANT' },
                { step: '06', title: 'ESTABLISH' },
                { step: '07', title: 'MANAGE' }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col items-center group relative snap-center w-24 md:w-auto shrink-0">

                  {/* Mobile horizontal animated line */}
                  {index !== 6 && (
                    <motion.div
                      className="absolute top-6 left-1/2 h-[2px] bg-cyan-400 md:hidden z-0 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    ></motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0.3, scale: 0.8, borderColor: "rgba(6,182,212,0.2)", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                    whileInView={{ opacity: 1, scale: 1, borderColor: "rgba(34,211,238,1)", boxShadow: "0 0 25px rgba(6,182,212,0.6)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.25 }}
                    className="w-12 h-12 rounded-full bg-[#050D14] border-[2px] flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300 relative z-10 cursor-default"
                  >
                    <span className="text-white font-extrabold text-xs">{phase.step}</span>
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (index * 0.25) + 0.2 }}
                    className="text-cyan-400 font-extrabold text-[10px] md:text-xs tracking-widest uppercase drop-shadow-md text-center"
                  >
                    {phase.title}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10 pb-8">
            <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
              NABTURA can bring together the required site preparation, planting strategy, irrigation, implementation and establishment to turn the concept into a working green environment.
            </p>
            <p className="text-white font-extrabold text-xl tracking-widest uppercase mb-10">
              WE MAKE IT WORK.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-gray-400 font-light text-xs italic">Project planting requirements</span>
                <Link href="/solutions/nursery" className="inline-flex items-center justify-center bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-cyan-400/30 hover:text-white transition-all group/btn">
                  Explore NABTURA Nursery <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-gray-400 font-light text-xs italic">Ongoing establishment & care</span>
                <Link href="/capabilities/smartcare" className="inline-flex items-center justify-center bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-cyan-400/30 hover:text-white transition-all group/btn">
                  Explore NABTURA SmartCare <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION */}
      <section id="final-conversion" className="py-15 relative overflow-hidden bg-[#0A1215]">
        {/* Background Image with Parallax & Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/dubai-greenhouse.jpg')] bg-cover bg-center bg-fixed opacity-40"></div>
          <div className="absolute inset-0 bg-[#0A1215]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#02080D] via-transparent to-[#0A1215]"></div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-green-500/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            WHAT COULD <br />YOUR SPACE BECOME?
          </h2>
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Choose your starting point:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            {[
              'I HAVE A LOCATION',
              'I HAVE A DEVELOPMENT',
              'I HAVE AN URBAN GREEN PROJECT',
              'I HAVE A FOREST CONCEPT',
              'I\'M EXPLORING POSSIBILITIES'
            ].map((option, index) => (
              <div key={index} className={`bg-[#050D14]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-[#050D14]/90 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] ${index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}>
                <span className="text-white font-bold tracking-widest text-xs uppercase pr-4 group-hover:text-emerald-400 transition-colors">{option}</span>
                <CheckCircle2 className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link href="/contact" className="inline-flex items-center text-black bg-emerald-400 px-10 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]">
              EXPLORE MY URBAN FOREST CONCEPT <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link href="/contact" className="inline-flex items-center text-emerald-400 font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              SHOW US YOUR SPACE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
