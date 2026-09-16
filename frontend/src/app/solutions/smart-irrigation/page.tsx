"use client";

import SolutionHero from "@/components/solutions/SolutionHero";
import { 
  ArrowRight, CheckCircle2, Droplets, CloudRain, Cpu, Wind, 
  MapPin, TreePine, Leaf, Sprout, Sun, Store, Building2,
  Home, Map, RefreshCcw, Search, Factory, Zap, Shield, BarChart3, Settings
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SmartIrrigationPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden">
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="NABTURA SMART IRRIGATION"
        headline={<>EVERY DROP <br className="hidden sm:block" />HAS VALUE.</>}
        tagline="Water where it matters. When it matters."
        description="Intelligent irrigation solutions designed around your plants, landscape, crop, climate and water requirements."
        bgImageUrl="/images/uae_water_tech.jpg"
        accentColor="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center z-10 relative">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link href="#explore" className="text-xs font-bold tracking-widest text-cyan-400 hover:text-white uppercase transition-all flex items-center gap-2 group">
            EXPLORE SMART IRRIGATION <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
          </Link>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
          <Link href="/contact" className="text-xs font-bold tracking-widest text-cyan-400 hover:text-white uppercase transition-all flex items-center gap-2 group">
            DISCUSS YOUR PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. SMARTER WATER MANAGEMENT */}
      <section className="py-24 relative overflow-hidden" id="explore">
        {/* Dynamic Water Background Blobs */}
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="text-center max-w-5xl mx-auto">
              
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[1.1] mb-6 tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">DON'T JUST WATER.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-cyan-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">WATER INTELLIGENTLY.</span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl font-light mb-8 leading-relaxed">
                Different plants, crops and green spaces have different water requirements.
              </p>
              
              <div className="relative w-full max-w-4xl mx-auto rounded-[1.5rem] bg-[#0A1215]/90 backdrop-blur-3xl border border-white/5 p-1 lg:p-2 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-10">
                  {/* Animated gradient border line */}
                  <div className="absolute inset-0 rounded-[1.5rem] border border-transparent [background:linear-gradient(45deg,transparent,rgba(34,211,238,0.4),rgba(59,130,246,0.4),transparent)_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] mask-composite-exclude pointer-events-none transition-all duration-1000"></div>

                  <div className="relative z-10 py-6 px-6 md:py-10 md:px-10 flex flex-col items-center">
                      <p className="text-white/60 font-black tracking-[0.2em] text-sm uppercase mb-5">NABTURA designs irrigation around:</p>
                      
                      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-2">
                          {[
                            'WHAT needs water', 
                            'WHERE it needs water', 
                            'WHEN it needs water', 
                            'HOW it should be delivered'
                          ].map((item, idx) => (
                              <motion.span 
                                key={item} 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="inline-flex items-center px-6 py-2.5 bg-black/40 border border-blue-500/20 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.1)] hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-white transition-all cursor-default"
                              >
                                  {item}
                              </motion.span>
                          ))}
                      </div>
                  </div>
              </div>

              <div className="inline-block relative">
                <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full -z-10"></div>
                <p className="text-white font-extrabold text-lg md:text-2xl tracking-wide">
                  The irrigation system should respond to what is growing—<br className="hidden md:block" />not simply to the clock.
                </p>
              </div>
          </motion.div>
        </div>
      </section>

      {/* 3. HOW SMART IRRIGATION WORKS */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-20 pb-8 relative border-b border-white/10">
        
        {/* Background Image with Parallax & Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/dubai-water.jpg')] bg-cover bg-center bg-fixed opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-[#0A1215]/80 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1215] via-transparent to-[#02080D]"></div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-cyan-500/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase leading-tight">
            FROM INFORMATION <br className="hidden md:block" />TO IRRIGATION.
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-16">
            Smart irrigation can bring together sensing, control, automation and monitoring to manage water more effectively.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center relative z-10 mb-16">
            
            {/* Unified Animated Connective Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-white/5 z-0 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 3.5, ease: "linear", delay: 0.2 }}
                className="w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              ></motion.div>
            </div>

             {[
                { title: 'SENSE' },
                { title: 'DECIDE' },
                { title: 'DELIVER' },
                { title: 'MONITOR' },
                { title: 'OPTIMIZE' }
             ].map((phase, index) => (
                <div key={index} className="flex flex-col items-center z-10 cursor-default relative w-full">
                   <motion.div 
                     initial={{ borderColor: "rgba(255,255,255,0.1)", color: "#9ca3af", boxShadow: "0 0 0px rgba(34,211,238,0)" }}
                     whileInView={{ borderColor: "#22d3ee", color: "#ffffff", boxShadow: "0 0 20px rgba(34,211,238,0.4)" }}
                     whileHover={{ y: -5, boxShadow: "0 0 30px rgba(34,211,238,0.6)" }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.4, delay: index * 0.5 + 0.2 }}
                     className="w-12 h-12 rounded-full bg-[#050D14] border-2 flex items-center justify-center font-bold text-xs mb-4 relative z-10"
                   >
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1.5, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.5 + 0.2 }}
                        className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md -z-10"
                      ></motion.div>
                      0{index + 1}
                   </motion.div>
                   
                   <motion.p 
                     initial={{ color: "#9ca3af" }}
                     whileInView={{ color: "#22d3ee" }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.4, delay: index * 0.5 + 0.2 }}
                     className="font-extrabold text-[12px] md:text-xs tracking-widest uppercase"
                   >
                     {phase.title}
                   </motion.p>
                   
                   {/* Vertical connective line for mobile */}
                   {index < 4 && (
                       <div className="md:hidden w-px h-8 bg-white/10 my-2"></div>
                   )}
                </div>
             ))}
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
            <p className="text-gray-300 font-bold tracking-widest uppercase text-xs mb-6 text-center">Depending on the project, this can include:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Sensors', 'Controllers', 'Irrigation Zones', 'Scheduling', 'Flow Monitoring', 'Weather Inputs', 'Alerts', 'Remote Monitoring'].map((tag) => (
                 <span key={tag} className="inline-block bg-[#050D14] border border-blue-500/20 px-4 py-2 rounded-xl text-sky-200 text-xs font-medium uppercase tracking-wider">
                     {tag}
                 </span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-cyan-400 font-extrabold tracking-widest text-lg">BETTER INFORMATION. BETTER WATER DECISIONS.</p>
            </div>
          </div>
          </div>
        </div>
      </motion.section>
      {/* 4. WATER WHERE IT MATTERS */}
      <section className="pt-10 pb-16 relative overflow-hidden bg-[#02080D]">
        {/* Dynamic Water Ripples */}
        <div className="absolute top-1/4 -right-1/4 w-[50rem] h-[50rem] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_5s_ease-in-out_infinite]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
                DIFFERENT GREEN. <br />DIFFERENT WATER.
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                One property can contain very different irrigation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
                { title: 'TREES', desc: 'Tree-specific irrigation', icon: TreePine },
                { title: 'LANDSCAPE', desc: 'Zoned irrigation', icon: Map },
                { title: 'LAWN', desc: 'Appropriate coverage', icon: Droplets },
                { title: 'EDIBLE GARDEN', desc: 'Targeted delivery', icon: Sprout },
                { title: 'GREENHOUSE', desc: 'Controlled irrigation', icon: Store },
                { title: 'SPECIAL PLANTING', desc: 'Purpose-designed watering', icon: Leaf }
            ].map((app, i) => {
                const Icon = app.icon;
                return (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative group/card bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-center text-center"
                >
                    <div className="w-14 h-14 rounded-full bg-[#050D14] border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover/card:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all">
                        <Icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-2">{app.title}</h3>
                    <p className="text-gray-400 font-light text-md">{app.desc}</p>
                </motion.div>
                )
            })}
          </div>

          <div className="text-center">
             <p className="text-gray-400 font-light text-lg mb-4">
                 NABTURA selects the appropriate irrigation and delivery strategy around the project.
             </p>
             <p className="text-cyan-400 font-black tracking-widest text-2xl uppercase">
                 EVERY DROP HAS A JOB.
             </p>
          </div>
        </div>
      </section>

      {/* 5. FROM WATER SOURCE TO PLANT */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight mb-6">
            THINK BEYOND <br />THE IRRIGATION LINE.
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-3xl mx-auto">
            Smart water management begins before water reaches the plant.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mb-16">
            {/* The line */}
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-500/20 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
                {[
                    { step: 'SOURCE', icon: Droplets },
                    { step: 'STORAGE', icon: Factory },
                    { step: 'FILTRATION', icon: Shield },
                    { step: 'CONTROL', icon: Settings },
                    { step: 'DISTRIBUTION', icon: RefreshCcw },
                    { step: 'ROOT ZONE', icon: Sprout }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center group">
                        <div className="w-16 h-16 rounded-2xl bg-[#050D14] border-2 border-white/10 flex items-center justify-center mb-4 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 relative z-10">
                            <item.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <span className="text-white font-bold tracking-widest text-[12px] uppercase text-center">{item.step}</span>
                        {i < 5 && <div className="md:hidden w-px h-8 bg-cyan-500/30 my-2"></div>}
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center max-w-4xl mx-auto pb-4">
          <p className="text-gray-400 font-light text-lg italic bg-white/5 border border-white/10 p-6 rounded-2xl">
            "Where relevant, NABTURA considers water source, quality, storage, pressure, filtration, distribution and delivery as part of the wider irrigation strategy."
          </p>
        </div>
      </motion.section>

      {/* 6. WHERE SMART WATER WORKS */}
      <section className="pt-16 pb-12 relative overflow-hidden bg-[#0A1215]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
              ONE INTELLIGENT SYSTEM.<br />MANY POSSIBILITIES.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { space: 'LANDSCAPES', grow: 'Hotels • Resorts • Villas • Commercial • Public Spaces', icon: Building2 },
              { space: 'AGRICULTURE', grow: 'Greenhouses • Farms • Nurseries • Growing Systems', icon: Sprout },
              { space: 'DEVELOPMENTS', grow: 'Communities • Mixed-Use • Large Green Areas', icon: MapPin },
              { space: 'PRODUCTIVE GREEN', grow: 'Chef Gardens • Edible Landscapes • Community Gardens', icon: Leaf },
              { space: 'URBAN FORESTS', grow: 'Establishment • Monitoring • Ongoing Water Management', icon: TreePine },
              { space: 'DESERT GREENING', grow: 'Water strategy for challenging environments', icon: Sun }
            ].map((app, i) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative group/card h-full"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[1.5rem] opacity-50 group-hover/card:from-blue-500/50 group-hover/card:to-cyan-500/10 group-hover/card:opacity-100 transition-all duration-700 blur-[1px]"></div>
                  
                  <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-[#111A20] to-[#0A1115] border border-white/5 py-8 px-6 flex flex-col items-center justify-center text-center transition-transform duration-700 hover:-translate-y-1 group-hover/card:shadow-[0_10px_30px_rgba(59,130,246,0.1)] cursor-pointer">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover/card:bg-blue-500/20 group-hover/card:border-sky-400/50 group-hover/card:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-500 relative z-10">
                        <Icon className="w-5 h-5 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] group-hover/card:text-white transition-colors duration-500" />
                    </div>

                    <h3 className="text-white font-extrabold text-[15px] uppercase tracking-wide relative z-10 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-sky-300 transition-all duration-500 leading-tight mb-2">{app.space}</h3>
                    
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-2 relative z-10 group-hover/card:from-sky-400/80 transition-colors duration-500"></div>
                    
                    <p className="text-gray-400 font-light text-md relative z-10 group-hover/card:text-gray-300 transition-colors duration-500 mt-2">{app.grow}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link href="/contact" className="inline-flex items-center text-cyan-400 font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              TELL US WHAT YOU NEED TO WATER <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. NEW OR EXISTING */}
      <section className="py-16 relative bg-[#02080D] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight drop-shadow-lg">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white">START SMART.</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">OR MAKE IT SMARTER.</span>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4 border-b border-cyan-500/20 pb-4 inline-block">NEW PROJECT</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">
                        Plan irrigation, zoning, control and monitoring as part of the project from the beginning.
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4 border-b border-cyan-500/20 pb-4 inline-block">EXISTING SYSTEM</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">
                        Explore opportunities to improve an existing irrigation system through better control, zoning, monitoring, automation or optimization, where appropriate.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <Link href="/contact" className="inline-flex items-center text-black bg-cyan-400 px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
                    ASSESS MY IRRIGATION REQUIREMENT <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
      </section>

      {/* 8. FROM SITE TO SMART WATER */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-white/10">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
            WE MAKE WATER <br />WORK SMARTER.
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-cyan-500/5 blur-[100px] -z-10 group-hover:bg-cyan-500/10 transition-colors duration-1000"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 relative z-10">
            {[
              { step: '01', title: 'ASSESS' },
              { step: '02', title: 'DESIGN' },
              { step: '03', title: 'ZONE' },
              { step: '04', title: 'INSTALL' },
              { step: '05', title: 'COMMISSION' },
              { step: '06', title: 'MONITOR' }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden group hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
              >
                <div className="text-6xl md:text-7xl font-black text-white/5 absolute -bottom-2 -right-2 group-hover:text-blue-500/10 group-hover:scale-110 transition-all duration-500 pointer-events-none origin-bottom-right">{phase.step}</div>
                <div className="relative z-10">
                  <span className="text-blue-500/50 font-bold tracking-widest text-[10px] uppercase block mb-1 group-hover:text-sky-400 transition-colors duration-300">PHASE {phase.step}</span>
                  <span className="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase drop-shadow-md">{phase.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10 pb-8">
            <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
              NABTURA can take the project from understanding the water requirement through to an operational irrigation solution and ongoing support where required.
            </p>

            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-gray-400 font-light text-sm italic">Need ongoing support?</span>
              <Link href="/services" className="inline-flex items-center justify-center bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-gray-300 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-cyan-400/30 hover:text-white transition-all group/btn">
                NABTURA SmartCare <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. FINAL CONVERSION */}
      <section className="py-24 relative overflow-hidden bg-[#0A1215]">
        {/* Background Image with Parallax & Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/uae_smart_greenhouse.jpg')] bg-cover bg-center bg-fixed opacity-40 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-[#0A1215]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#02080D] via-transparent to-[#0A1215]"></div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-blue-500/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6">
            WHAT DO YOU <br />NEED TO WATER?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-10">
            Choose your starting point:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            {[
              'I HAVE A NEW PROJECT',
              'I HAVE AN EXISTING IRRIGATION SYSTEM',
              'I HAVE A LANDSCAPE / GREEN SPACE',
              'I HAVE AN AGRICULTURE PROJECT',
              'I’M NOT SURE WHAT I NEED'
            ].map((option, index) => (
              <div key={index} className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group flex justify-between items-center ${index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}>
                <span className="text-white font-bold tracking-widest text-xs uppercase pr-4 group-hover:text-cyan-400 transition-colors">{option}</span>
                <CheckCircle2 className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link href="/contact" className="inline-flex items-center text-black bg-cyan-400 px-10 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]">
              DISCUSS MY SMART IRRIGATION PROJECT <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
            
            <Link href="/contact" className="inline-flex items-center text-cyan-400 font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              SHOW US YOUR SITE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
