"use client";

import SolutionHero from "@/components/solutions/SolutionHero";
import Link from "next/link";
import { ArrowRight, Sprout, Droplets, TreePine, Globe2, Leaf, Sun, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsOverviewPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden">
      {/* 1. HERO */}
      <SolutionHero 
        eyebrow="NABTURA SOLUTIONS"
        headline={<>SEVEN BUSINESSES.<br />ONE CONNECTED GREEN ECOSYSTEM.</>}
        tagline="Grow food. Manage water. Create green. Transform environments."
        description="NABTURA brings together smart agriculture, water intelligence and green solutions designed around where you are and what you want to achieve."
        bgImageUrl="/images/dubai-landscapes.jpg"
        accentColor="text-nabtura-green"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center z-10 relative">
        <Link href="#explore" className="text-xs font-bold tracking-widest text-nabtura-green hover:text-white uppercase transition-all inline-flex items-center gap-2 group">
          EXPLORE OUR SOLUTIONS <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
        </Link>
      </div>

      <div id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* 2. GROW FOOD */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-light-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          
          <div className="mb-16 relative">
            <div className="absolute -left-4 sm:-left-6 top-2 bottom-2 w-1.5 bg-gradient-to-b from-nabtura-light-green via-green-400 to-transparent rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
            <div className="pl-4 sm:pl-6">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 tracking-normal">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-green-100 to-nabtura-light-green drop-shadow-[0_0_20px_rgba(74,222,128,0.2)]">GROW FOOD.</span>
              </h2>
              <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-white font-black tracking-widest uppercase mb-6 drop-shadow-md">Create smarter environments for growing.</p>
              
              <div className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-3xl border border-white/5 backdrop-blur-md max-w-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-nabtura-light-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed relative z-10">
                  <span className="text-white font-medium">Whether for commercial production, hospitality, institutions or home growing,</span> NABTURA develops growing solutions around the crop, space, environment and purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/solutions/smart-greenhouses" className="group block rounded-[2rem] p-8 md:p-10 hover:border-nabtura-light-green/50 transition-all duration-500 shadow-2xl overflow-hidden relative border border-white/10 bg-[#050a08]">
              <div className="absolute inset-0 bg-[url('/images/dubai-greenhouse.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-nabtura-light-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                    <Sun className="w-6 h-6 text-nabtura-light-green" />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-normal text-white mb-2 uppercase drop-shadow-md">SMART GREENHOUSES</h3>
                  <p className="text-nabtura-light-green font-bold text-sm tracking-widest uppercase mb-4 drop-shadow-sm">Grow beyond the climate.</p>
                  <p className="text-gray-300 font-light mb-8 leading-relaxed">Smart growing environments designed around your crop, location and commercial objective.</p>
                </div>
                <span className="inline-flex items-center bg-nabtura-light-green/10 border border-nabtura-light-green/20 group-hover:border-nabtura-light-green/50 group-hover:bg-nabtura-light-green/20 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-nabtura-light-green uppercase transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.1)] backdrop-blur-md self-start mt-4">
                  EXPLORE SMART GREENHOUSES
                  <span className="ml-4 w-6 h-6 rounded-full bg-nabtura-light-green/20 flex items-center justify-center group-hover:bg-nabtura-light-green group-hover:text-black transition-colors">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>
              </div>
            </Link>

            <Link href="/solutions/smart-microgreens" className="group block rounded-[2rem] p-8 md:p-10 hover:border-nabtura-light-green/50 transition-all duration-500 shadow-2xl overflow-hidden relative border border-white/10 bg-[#050a08]">
              <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-nabtura-light-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                    <Sprout className="w-6 h-6 text-nabtura-light-green" />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-normal text-white mb-2 uppercase drop-shadow-md">SMART MICROGREENS</h3>
                  <p className="text-nabtura-light-green font-bold text-sm tracking-widest uppercase mb-4 drop-shadow-sm">Small space. Smart growing.</p>
                  <p className="text-gray-300 font-light mb-8 leading-relaxed">Controlled microgreen growing solutions for fresh production closer to where food is used.</p>
                </div>
                <span className="inline-flex items-center bg-nabtura-light-green/10 border border-nabtura-light-green/20 group-hover:border-nabtura-light-green/50 group-hover:bg-nabtura-light-green/20 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-nabtura-light-green uppercase transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.1)] backdrop-blur-md self-start mt-4">
                  EXPLORE SMART MICROGREENS
                  <span className="ml-4 w-6 h-6 rounded-full bg-nabtura-light-green/20 flex items-center justify-center group-hover:bg-nabtura-light-green group-hover:text-black transition-colors">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link href="/possibilities" className="group relative inline-flex items-center gap-4 bg-[#050a08] border border-white/10 rounded-full py-3 px-8 hover:border-nabtura-light-green/40 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-md z-10 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]">
              <div className="absolute inset-0 bg-nabtura-light-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-nabtura-light-green font-bold tracking-widest uppercase text-xs sm:text-sm relative z-10">
                EXPLORE HOME GROWING
                <span className="ml-4 w-8 h-8 rounded-full bg-nabtura-light-green/10 flex items-center justify-center group-hover:bg-nabtura-light-green group-hover:text-black transition-colors shadow-inner">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 3. MANAGE WATER */}
        <motion.section initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-nabtura-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-center">
            <div className="lg:col-span-1 relative mb-8 lg:mb-0">
              <div className="absolute -left-4 sm:-left-6 top-2 bottom-2 w-1.5 bg-gradient-to-b from-nabtura-blue via-blue-400 to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <div className="pl-4 sm:pl-6">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 tracking-normal">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-nabtura-blue drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">MANAGE<br className="hidden lg:block"/> WATER.</span>
                </h2>
                <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-nabtura-blue to-white font-black tracking-widest uppercase drop-shadow-md">Make every drop work smarter.</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Link href="/solutions/smart-irrigation" className="group block rounded-[2rem] p-8 md:p-12 hover:border-nabtura-blue/30 transition-all duration-500 shadow-xl overflow-hidden relative border border-white/10 bg-[#050a08] h-full">
                <div className="absolute inset-0 bg-[url('/images/dubai-water.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-nabtura-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Droplets className="w-6 h-6 text-nabtura-blue" />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-normal text-white mb-2 uppercase drop-shadow-md">SMART IRRIGATION</h3>
                  <p className="text-nabtura-blue font-bold text-sm tracking-widest uppercase mb-4 drop-shadow-sm">Water where it matters. When it matters.</p>
                  <p className="text-gray-300 font-light mb-8 leading-relaxed">Intelligent irrigation designed around the plants, landscape, crop, climate and actual water requirements of the project.</p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-nabtura-blue text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-10">
                    <span className="bg-nabtura-blue/10 px-3 py-1.5 rounded-md border border-nabtura-blue/20">SENSE</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                    <span className="bg-nabtura-blue/10 px-3 py-1.5 rounded-md border border-nabtura-blue/20">DECIDE</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                    <span className="bg-nabtura-blue/10 px-3 py-1.5 rounded-md border border-nabtura-blue/20">DELIVER</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                    <span className="bg-nabtura-blue/10 px-3 py-1.5 rounded-md border border-nabtura-blue/20">MONITOR</span> <ArrowRight className="w-3 h-3 text-gray-600" />
                    <span className="bg-nabtura-blue/10 px-3 py-1.5 rounded-md border border-nabtura-blue/20">OPTIMIZE</span>
                  </div>

                  <span className="inline-flex items-center bg-nabtura-blue/10 border border-nabtura-blue/20 group-hover:border-nabtura-blue/50 group-hover:bg-nabtura-blue/20 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-nabtura-blue uppercase transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md self-start mt-4">
                    EXPLORE SMART IRRIGATION
                    <span className="ml-4 w-6 h-6 rounded-full bg-nabtura-blue/20 flex items-center justify-center group-hover:bg-nabtura-blue group-hover:text-black transition-colors">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* 4. CREATE GREEN */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-nabtura-green/5 rounded-full blur-[150px] -z-10 pointer-events-none -translate-y-1/2"></div>
          
          <div className="mb-16 relative">
            <div className="absolute -left-4 sm:-left-6 top-2 bottom-2 w-1.5 bg-gradient-to-b from-nabtura-green via-emerald-400 to-transparent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
            <div className="pl-4 sm:pl-6">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 tracking-normal">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-100 to-nabtura-green drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">CREATE GREEN.</span>
              </h2>
              <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-nabtura-green to-white font-black tracking-widest uppercase mb-6 drop-shadow-md">Turn spaces and land into purposeful green environments.</p>
              
              <div className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-3xl border border-white/5 backdrop-blur-md max-w-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-nabtura-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed relative z-10">
                  <span className="text-white font-medium">Three different approaches for three different types of opportunity.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "LANDSCAPES", tag: "Green spaces designed to perform.", 
                desc: "Create beautiful, intelligent and purposeful green spaces around how they will actually be used.",
                link: "/solutions/landscapes", linkText: "EXPLORE LANDSCAPES", icon: Leaf, bgImage: "/images/landscapes.jpg"
              },
              { 
                title: "URBAN FORESTS", tag: "Bring nature closer.", 
                desc: "Create immersive green environments where people can gather, relax, learn, dine, walk and experience.",
                link: "/solutions/urban-forests", linkText: "EXPLORE URBAN FORESTS", icon: TreePine, bgImage: "/images/dubai-landscapes.jpg"
              },
              { 
                title: "DESERT GREENING", tag: "Turn land into green value.", 
                desc: "Intelligent greening strategies designed around land, water, climate and challenging environments.",
                link: "/solutions/desert-greening", linkText: "EXPLORE DESERT GREENING", icon: Sun, bgImage: "/images/uae_green_city.jpg"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link key={idx} href={item.link} className="group block rounded-[2rem] p-8 hover:border-nabtura-green/50 transition-all duration-500 shadow-2xl flex flex-col justify-between h-full overflow-hidden relative border border-white/10 bg-[#050a08]">
                  <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${item.bgImage})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-nabtura-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <Icon className="w-6 h-6 text-nabtura-green" />
                      </div>
                      <h3 className="text-2xl font-extrabold tracking-normal text-white mb-2 uppercase drop-shadow-md">{item.title}</h3>
                      <p className="text-nabtura-green font-bold text-xs tracking-widest uppercase mb-4 drop-shadow-sm">{item.tag}</p>
                      <p className="text-gray-300 font-light mb-8 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="inline-flex items-center bg-nabtura-green/10 border border-nabtura-green/20 group-hover:border-nabtura-green/50 group-hover:bg-nabtura-green/20 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-nabtura-green uppercase transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md self-start mt-4">
                      {item.linkText}
                      <span className="ml-4 w-6 h-6 rounded-full bg-nabtura-green/20 flex items-center justify-center group-hover:bg-nabtura-green group-hover:text-black transition-colors">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </motion.section>

        {/* 5. TRANSFORM ENVIRONMENTS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-nabtura-sand/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-center">
            <div className="lg:col-span-1 relative mb-8 lg:mb-0">
              <div className="absolute -left-4 sm:-left-6 top-2 bottom-2 w-1.5 bg-gradient-to-b from-nabtura-sand via-orange-300 to-transparent rounded-full shadow-[0_0_15px_rgba(251,146,60,0.5)]"></div>
              <div className="pl-4 sm:pl-6">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 tracking-normal">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-100 to-nabtura-sand drop-shadow-[0_0_20px_rgba(251,146,60,0.2)]">TRANSFORM<br className="hidden lg:block"/> ENVIRONMENTS.</span>
                </h2>
                <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-nabtura-sand to-white font-black tracking-widest uppercase mb-6 drop-shadow-md">START WITH THE CHALLENGE.</p>
                
                <div className="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-3xl border border-white/5 backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-nabtura-sand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed relative z-10">
                    <span className="text-white font-medium">Not every project fits a standard solution.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Link href="/solutions/environmental-projects" className="group block rounded-[2rem] p-8 md:p-12 hover:border-nabtura-sand/30 transition-all duration-500 shadow-xl overflow-hidden relative border border-white/10 bg-[#050a08] h-full">
                <div className="absolute inset-0 bg-[url('/images/before_arid.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-nabtura-sand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-6 h-6 text-nabtura-sand" />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-normal text-white mb-2 uppercase drop-shadow-md">ENVIRONMENTAL PROJECTS</h3>
                  <p className="text-nabtura-sand font-bold text-sm tracking-widest uppercase mb-4 drop-shadow-sm">Purpose-built green and environmental solutions developed around the challenge, location and intended outcome.</p>
                  
                  <div className="mt-8 mb-8">
                    <p className="text-gray-400 text-sm font-light italic mb-4">Where required, NABTURA can bring together different capabilities across:</p>
                    <div className="flex flex-wrap items-center gap-2 text-nabtura-sand text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                      <span className="bg-nabtura-sand/10 px-3 py-1.5 rounded-md border border-nabtura-sand/20">LAND</span>
                      <span className="bg-nabtura-sand/10 px-3 py-1.5 rounded-md border border-nabtura-sand/20">WATER</span>
                      <span className="bg-nabtura-sand/10 px-3 py-1.5 rounded-md border border-nabtura-sand/20">PLANTS</span>
                      <span className="bg-nabtura-sand/10 px-3 py-1.5 rounded-md border border-nabtura-sand/20">IRRIGATION</span>
                      <span className="bg-nabtura-sand/10 px-3 py-1.5 rounded-md border border-nabtura-sand/20">GROWING</span>
                      <span className="bg-nabtura-sand/10 px-3 py-1.5 rounded-md border border-nabtura-sand/20">MONITORING</span>
                      <span className="bg-nabtura-sand/10 px-3 py-1.5 rounded-md border border-nabtura-sand/20">MANAGEMENT</span>
                    </div>
                  </div>

                  <p className="text-white font-medium italic text-sm tracking-wide mb-10">"The solution follows the challenge—not the other way around."</p>

                  <span className="inline-flex items-center bg-nabtura-sand/10 border border-nabtura-sand/20 group-hover:border-nabtura-sand/50 group-hover:bg-nabtura-sand/20 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-nabtura-sand uppercase transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.1)] backdrop-blur-md self-start mt-4">
                    EXPLORE ENVIRONMENTAL PROJECTS
                    <span className="ml-4 w-6 h-6 rounded-full bg-nabtura-sand/20 flex items-center justify-center group-hover:bg-nabtura-sand group-hover:text-black transition-colors">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* 6. SUPPORTING CAPABILITIES */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="pt-10 border-t border-white/10">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 tracking-normal">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-md">SUPPORTING CAPABILITIES</span>
            </h2>
            <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white font-black tracking-widest uppercase mb-6 drop-shadow-md">SUPPORTING WHAT WE CREATE.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/capabilities/smartcare" className="group block rounded-[2rem] p-8 md:p-10 hover:border-white/50 transition-all duration-500 shadow-2xl relative overflow-hidden border border-white/10 bg-[#050a08]">
              <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider drop-shadow-md">NABTURA SMARTCARE</h3>
                  </div>
                  <p className="text-gray-300 font-light mb-8 leading-relaxed">Ongoing care, monitoring, management and optimization.</p>
                </div>
                <span className="inline-flex items-center bg-white/10 border border-white/20 group-hover:border-white/50 group-hover:bg-white/20 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md self-start mt-4">
                  EXPLORE SMARTCARE
                  <span className="ml-4 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>
              </div>
            </Link>

            <Link href="/contact" className="group block rounded-[2rem] p-8 md:p-10 hover:border-white/50 transition-all duration-500 shadow-2xl relative overflow-hidden border border-white/10 bg-[#050a08]">
              <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider drop-shadow-md">NABTURA NURSERY SOLUTIONS</h3>
                  </div>
                  <p className="text-gray-300 font-light mb-8 leading-relaxed">Project-focused plant sourcing, nursery coordination, preparation and supply.</p>
                </div>
                <span className="inline-flex items-center bg-white/10 border border-white/20 group-hover:border-white/50 group-hover:bg-white/20 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md self-start mt-4">
                  EXPLORE NURSERY SOLUTIONS
                  <span className="ml-4 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </span>
              </div>
            </Link>
          </div> 
        </motion.section>
      </div>

      {/* 7. FIND YOUR SOLUTION */}
      <section className="py-20 relative overflow-hidden bg-[#0A120E] border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/dubai-landscapes.jpg')] bg-cover bg-center bg-fixed opacity-20 grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-[#0A120E]"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-nabtura-green/5 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            NOT SURE <br />WHERE TO START?
          </h2>
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
            You don't need to know which NABTURA solution you need. Tell us what you have, what you want to create, or what challenge you are trying to solve.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              'I WANT TO GROW FOOD',
              'I WANT TO GROW FOOD AT HOME',
              'I WANT TO MANAGE WATER',
              'I WANT TO CREATE A GREEN SPACE',
              'I WANT TO GREEN LAND',
              'I HAVE AN ENVIRONMENTAL CHALLENGE',
              'I’M EXPLORING AN OPPORTUNITY'
            ].map((option, index) => (
              <Link href="/contact" key={index} className="bg-[#09110E]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 hover:bg-nabtura-green/10 hover:border-nabtura-green/50 hover:text-white text-gray-300 transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:-translate-y-1 text-xs font-bold tracking-widest uppercase">
                {option}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-green px-10 py-4 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]">
              FIND MY NABTURA SOLUTION <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link href="/contact" className="inline-flex items-center text-nabtura-green font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              START A CONVERSATION <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
