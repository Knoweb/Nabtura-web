"use client";

import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, Leaf, MapPin, Wind, CloudRain, Droplets, Sun, SunDim, TreePine, ChefHat, Building2, Store, Sprout, Building, GraduationCap, Home, CheckCircle2, Factory, MonitorSmartphone, Briefcase } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandscapesPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden">
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="NABTURA LANDSCAPES"
        headline={<>GREEN SPACES <br className="hidden sm:block" />DESIGNED TO PERFORM.</>}
        tagline="Beautiful. Intelligent. Adapted."
        description="Landscape solutions designed around your space, climate, purpose and how the environment will actually be used."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-green"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center z-10 relative">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link href="#explore" className="text-xs font-bold tracking-widest text-nabtura-green hover:text-white uppercase transition-all flex items-center gap-2 group">
            EXPLORE LANDSCAPES <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
          </Link>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
          <Link href="/contact" className="text-xs font-bold tracking-widest text-nabtura-green hover:text-white uppercase transition-all flex items-center gap-2 group">
            SHOW US YOUR SPACE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. MORE THAN LANDSCAPING */}
      <section className="pt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-white/10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight mb-4">
            NOT JUST GREEN. <br />INTELLIGENTLY GREEN.
          </h2>
          <p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
            A landscape should do more than look good.
          </p>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-10 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-nabtura-green/5 to-transparent blur-2xl group-hover:bg-nabtura-green/10 transition-all duration-700"></div>
            <div className="relative z-10">
              <p className="text-gray-300 font-bold tracking-widest text-sm uppercase mb-4">NABTURA brings together:</p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
                {['DESIGN', 'PLANTS', 'WATER', 'CLIMATE', 'PURPOSE', 'MANAGEMENT'].map(item => (
                  <span key={item} className="inline-block px-4 py-1.5 md:py-2 bg-[#09110E] border border-nabtura-green/20 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase text-nabtura-green shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 font-light text-lg italic">
                to create green spaces that work for the place, people and environment.
              </p>
            </div>
          </div>

          <p className="text-white font-medium text-lg tracking-wide">
            Designed as a green system—not simply a collection of plants.
          </p>
        </div>
      </section>

      {/* 3. DESIGN WITH PURPOSE */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-12 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-white/10">

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-nabtura-green/5 blur-[120px] -z-10 pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4 drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">GREEN CAN</span> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_25px_rgba(34,197,94,0.5)]">DO MORE.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            What should your landscape do?
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 relative z-10 max-w-4xl mx-auto mb-10 px-2">
          {['WELCOME', 'RELAX', 'GATHER', 'DINE', 'PLAY', 'GROW', 'TEACH', 'COOL', 'EXPERIENCE'].map((tag, index) => (
            <div key={tag} className="relative group/crop">
              {/* Slow pulsing light around the tag */}
              <div
                className="absolute -inset-0.5 rounded-xl border border-nabtura-green/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-[pulse_3s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.3}s` }}
              ></div>

              {/* Stronger hover glow */}
              <div className="absolute inset-0 bg-nabtura-green/20 rounded-xl blur-md opacity-0 group-hover/crop:opacity-100 transition-opacity duration-500"></div>

              <span className="relative inline-block bg-[#0A120E] border border-white/5 px-6 py-3 rounded-xl text-gray-300 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#0F1A14] hover:text-white transition-all duration-300 cursor-default group-hover/crop:-translate-y-1">
                {tag}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10 pb-4 max-w-3xl mx-auto">
          <p className="text-gray-400 font-light mb-6">
            From hospitality and commercial spaces to homes and developments, NABTURA starts with the purpose of the space.
          </p>
          <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-green px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]">
            EXPLORE THE POSSIBILITIES <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </motion.section>

      {/* 4. PRODUCTIVE LANDSCAPES */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-12 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-light-green/5 rounded-full blur-[100px] -z-10 group-hover:bg-nabtura-light-green/10 transition-colors duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10 relative">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
                BEAUTY CAN <br />BE PRODUCTIVE.
              </h2>
              <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                Selected landscapes can combine beautiful planting with opportunities to grow. Create spaces that can be experienced—and harvested.
              </p>
              <Link href="/contact" className="inline-flex items-center text-nabtura-light-green font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
                EXPLORE PRODUCTIVE GREEN <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Chef Gardens', icon: ChefHat },
                { title: 'Herb Gardens', icon: Sprout },
                { title: 'Edible Planting', icon: Leaf },
                { title: 'Kitchen Gardens', icon: Store },
                { title: 'Productive Rooftops', icon: Building2 }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-nabtura-light-green/30 transition-all duration-300 flex items-center gap-4 group/item cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#09110E] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-nabtura-light-green/50 transition-colors">
                      <Icon className="w-5 h-5 text-gray-400 group-hover/item:text-nabtura-light-green transition-colors" />
                    </div>
                    <h4 className="text-white font-bold uppercase tracking-wide text-sm">{item.title}</h4>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. WATER-SMART LANDSCAPES */}
      <section className="pt-10 pb-10 relative overflow-hidden bg-[#02080D]">
        {/* Dynamic Water Beams and Ripples */}
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(from_90deg_at_50%_0%,#00000000_45%,#0ea5e920_50%,#00000000_55%)] opacity-30 animate-[pulse_4s_ease-in-out_infinite] pointer-events-none"></div>
        <div className="absolute top-1/4 -left-1/4 w-[50rem] h-[50rem] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[50rem] h-[50rem] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="relative inline-flex items-center justify-center mb-10">
                {/* Ripple Rings */}
                <div className="absolute inset-0 border border-cyan-400/30 rounded-2xl animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="absolute inset-0 border border-blue-500/20 rounded-2xl animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }}></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                  <Droplets className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-500 uppercase leading-[1.1] tracking-tighter drop-shadow-sm">
                  EVERY DROP <br />HAS A JOB.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                  Good landscape design and intelligent water management belong together. NABTURA can integrate smart irrigation, zoning, appropriate water delivery and monitoring according to the planting and environment.
                </p>
              </div>

              <div className="mt-12">
                <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-8 font-bold tracking-widest text-xs uppercase text-cyan-900 bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-300">
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                    <div className="relative h-full w-8 bg-white/40"></div>
                  </div>
                  <span className="relative z-10 flex items-center">
                    EXPLORE SMART IRRIGATION <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="relative">
              {/* Glowing Aura behind Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/30 via-blue-500/20 to-transparent rounded-[3rem] blur-3xl -z-10 animate-[pulse_4s_ease-in-out_infinite]"></div>

              <div className="group relative w-full rounded-[3rem] bg-[#050D14]/80 backdrop-blur-2xl border border-white/10 p-1 lg:p-2 overflow-hidden shadow-2xl">
                <div className="relative h-full w-full rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent p-10 md:p-14 flex flex-col items-center justify-center text-center overflow-hidden">

                  <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-20 transition-opacity duration-700 group-hover:scale-110 transform">
                    <Wind className="w-64 h-64 text-cyan-400" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 opacity-5 group-hover:opacity-20 transition-opacity duration-700 group-hover:scale-110 transform">
                    <Droplets className="w-64 h-64 text-blue-500" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center gap-6 group-hover:-translate-y-2 transition-transform duration-700">
                    <h3 className="text-4xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
                      LANDSCAPE
                    </h3>

                    <div className="relative flex items-center justify-center w-12 h-12">
                      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-colors duration-700"></div>
                      <span className="text-3xl text-cyan-400 font-bold relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">+</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-blue-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                      SMART IRRIGATION
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. TRANSFORM YOUR SPACE */}
      <section className="pt-8 pb-8 relative overflow-hidden bg-[#09110E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
              WHAT COULD <br />YOUR SPACE BECOME?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { space: 'Hotel / Resort', grow: 'Green Experience', icon: Building2 },
              { space: 'Restaurant', grow: 'Dining Forest / Chef Garden', icon: ChefHat },
              { space: 'Office', grow: 'Corporate Retreat', icon: Briefcase },
              { space: 'Villa', grow: ' Green Living + Edible Garden', icon: Home },
              { space: 'School', grow: 'Learning Garden', icon: GraduationCap },
              { space: 'Mall', grow: 'Urban Oasis', icon: Store },
              { space: 'Rooftop', grow: 'Productive Green Space', icon: Building },
              { space: 'Development', grow: 'Connected Green Community', icon: MapPin }
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
                  {/* Glowing border effect on hover */}
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[1.5rem] opacity-50 group-hover/card:from-amber-500/50 group-hover/card:to-amber-500/10 group-hover/card:opacity-100 transition-all duration-700 blur-[1px]"></div>

                  <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-[#111A16] to-[#0A110E] border border-white/5 py-6 px-4 flex flex-col items-center justify-center text-center transition-transform duration-700 hover:-translate-y-1 group-hover/card:shadow-[0_10px_30px_rgba(245,158,11,0.05)] cursor-pointer">
                    {/* Radial gradient inside card */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

                    <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover/card:bg-amber-500/20 group-hover/card:border-amber-500/50 group-hover/card:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all duration-500 relative z-10">
                      <Icon className="w-4 h-4 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] group-hover/card:text-white transition-colors duration-500" />
                    </div>

                    <span className="text-amber-500/80 font-bold tracking-widest text-[11px] uppercase mb-1 relative z-10 group-hover/card:text-white transition-colors duration-500">{app.space}</span>

                    <div className="w-px h-4 bg-gradient-to-b from-amber-500/30 to-transparent my-1 relative z-10 group-hover/card:from-amber-500/60 transition-colors duration-500"></div>

                    <h3 className="text-white font-extrabold text-[13px] uppercase tracking-wide relative z-10 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-amber-500 transition-all duration-500 leading-tight mt-2">{app.grow}</h3>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link href="/contact" className="inline-flex items-center text-amber-500 font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              SHOW US YOUR SPACE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. FROM CONCEPT TO GREEN */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-8 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-16">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
            FROM SPACE <br />TO LANDSCAPE.
          </h2>
        </div>

        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-10 md:p-16 mb-12 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-nabtura-green/5 blur-[100px] -z-10 group-hover:bg-nabtura-green/10 transition-colors duration-1000"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center relative z-10 mb-12">

            {/* Unified Animated Connective Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-6 left-[7%] right-[7%] h-[2px] bg-white/5 z-0 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 3.5, ease: "linear", delay: 0.2 }}
                className="w-full h-full bg-nabtura-green shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              ></motion.div>
            </div>

            {[
              { step: '01', title: 'UNDERSTAND' },
              { step: '02', title: 'ASSESS' },
              { step: '03', title: 'CONCEPT' },
              { step: '04', title: 'DESIGN' },
              { step: '05', title: 'CREATE' },
              { step: '06', title: 'ESTABLISH' },
              { step: '07', title: 'MANAGE' },
            ].map((phase, index) => (
              <div key={index} className="flex flex-col items-center z-10 cursor-default relative w-full">
                <motion.div
                  initial={{ borderColor: "rgba(255,255,255,0.1)", color: "#9ca3af", boxShadow: "0 0 0px rgba(34,197,94,0)" }}
                  whileInView={{ borderColor: "#22c55e", color: "#ffffff", boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
                  whileHover={{ y: -5, boxShadow: "0 0 30px rgba(34,197,94,0.6)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.5 + 0.2 }}
                  className="w-12 h-12 rounded-full bg-[#09110E] border-2 flex items-center justify-center font-bold text-xs mb-4 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.5 + 0.2 }}
                    className="absolute inset-0 rounded-full bg-nabtura-green/20 blur-md -z-10"
                  ></motion.div>
                  {phase.step}
                </motion.div>

                <motion.p
                  initial={{ color: "#9ca3af" }}
                  whileInView={{ color: "#22c55e" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.5 + 0.2 }}
                  className="font-extrabold text-[10px] md:text-xs tracking-widest uppercase"
                >
                  {phase.title}
                </motion.p>

                {/* Vertical connective line for mobile */}
                {index < 6 && (
                  <div className="md:hidden w-px h-8 bg-white/10 my-2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-gray-400 font-light text-lg mb-6 leading-relaxed">
              NABTURA can bring together the required design, planting, site preparation, irrigation and implementation to turn the concept into a working green environment.
            </p>
            <p className="text-white font-bold tracking-widest text-xl mb-8">WE MAKE IT WORK.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/solutions/environmental-projects" className="inline-flex items-center justify-center bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-gray-300 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-nabtura-green/30 hover:text-white transition-all group/btn">
                Explore Nursery Solutions <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-gray-300 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-nabtura-green/30 hover:text-white transition-all group/btn">
                Explore SmartCare <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. LET'S GREEN YOUR SPACE (Interactive Call to Action) */}
      <section className="py-12 relative overflow-hidden bg-[#0A120E]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/dubai-landscapes.jpg')] bg-cover bg-center bg-fixed opacity-40"></div>
          <div className="absolute inset-0 bg-[#0A120E]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-[#0A120E]"></div>
        </div>

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-nabtura-green/30 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-nabtura-green/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            LET'S GREEN <br />YOUR SPACE.
          </h2>
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Choose where you want to start:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            {[
              'I HAVE A SPACE',
              'I HAVE A LANDSCAPE PROJECT',
              'I WANT TO TRANSFORM AN EXISTING LANDSCAPE',
              'I\'M EXPLORING GREEN POSSIBILITIES'
            ].map((option, index) => (
              <div key={index} className="bg-[#09110E]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-[#09110E]/90 hover:border-nabtura-green/50 transition-all duration-300 cursor-pointer group flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <span className="text-white font-bold tracking-widest text-xs uppercase pr-4 group-hover:text-nabtura-green transition-colors">{option}</span>
                <CheckCircle2 className="w-5 h-5 text-gray-500 group-hover:text-nabtura-green transition-colors shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-green px-10 py-3 rounded-full font-black tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]">
              SHOW US YOUR SPACE <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link href="/contact" className="inline-flex items-center text-nabtura-green font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              DISCUSS MY LANDSCAPE PROJECT <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
