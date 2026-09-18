"use client";

import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, CheckCircle2, Leaf, Droplets, Wind, Sprout, Store, ChefHat, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SmartMicrogreensPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden">
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="NABTURA SMART MICROGREENS"
        headline={<>SMALL&nbsp;SPACE.<span className="sm:hidden">&nbsp;</span><br className="hidden sm:block" />SMART&nbsp;GROWING.</>}
        tagline="Grow fresh. Grow close. Grow intelligently."
        description="Controlled microgreen growing solutions designed around your space, purpose and production needs."
        bgImageUrl="/images/microgreens.jpg"
        accentColor="text-nabtura-light-green"
      />

      <div className="bg-gradient-to-r from-nabtura-slate via-white/5 to-nabtura-slate border-b border-white/10 py-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
          <Link href="#explore" className="text-xs font-bold tracking-widest text-nabtura-light-green hover:text-white uppercase transition-all flex items-center gap-2 group">
            EXPLORE SMART MICROGREENS <ArrowRight className="w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
          </Link>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>
          <Link href="/contact" className="text-xs font-bold tracking-widest text-nabtura-light-green hover:text-white uppercase transition-all flex items-center gap-2 group">
            DISCUSS YOUR PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2. THE OPPORTUNITY */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, ease: "easeOut" }} id="explore" className="pt-10 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden group shadow-2xl">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-light-green/5 rounded-full blur-[100px] -z-10 group-hover:bg-nabtura-light-green/10 transition-colors duration-700 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10 relative">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-4">
                GROW CLOSER <br className="hidden xl:block" />TO WHERE FOOD IS USED.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                Microgreens can turn compact spaces into productive growing environments—bringing fresh production closer to restaurants, hotels, businesses and other users.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8 text-nabtura-light-green">
                <span className="bg-nabtura-light-green/10 px-4 py-2 rounded-lg border border-nabtura-light-green/20 shadow-lg">GROW</span> <ArrowRight className="w-4 h-4 text-gray-600" />
                <span className="bg-nabtura-light-green/10 px-4 py-2 rounded-lg border border-nabtura-light-green/20 shadow-lg">HARVEST</span> <ArrowRight className="w-4 h-4 text-gray-600" />
                <span className="bg-nabtura-light-green/10 px-4 py-2 rounded-lg border border-nabtura-light-green/20 shadow-lg">USE</span>
              </div>

              <div className="border-l-4 border-nabtura-light-green pl-5 py-2">
                <p className="text-white text-xs font-bold tracking-widest uppercase mb-2 opacity-60">For hospitality:</p>
                <p className="text-white font-medium italic text-base tracking-wide">
                  "GROWN HERE. HARVESTED HERE. SERVED HERE."
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. THE SYSTEM */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative group">
          <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
            <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#09110E] via-[#09110E]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">A compact growing environment designed for consistent operation.</h3>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-blue/5 rounded-full blur-[80px] -z-10 group-hover:bg-nabtura-blue/10 transition-colors duration-700"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase leading-tight">
              MORE THAN <br className="hidden md:block" />GROWING RACKS.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              A NABTURA Smart Microgreens system can bring together:
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
              {['Growing Racks', 'Lighting', 'Irrigation', 'Environmental Management', 'Air Movement', 'Monitoring', 'Automation'].map(item => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-nabtura-light-green flex-shrink-0" />
                  <span className="font-light text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. WHAT CAN YOU GROW? */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-white/10">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 uppercase leading-tight">
            WHAT WOULD YOU <br className="hidden md:block" />LIKE TO HARVEST?
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Explore microgreens including:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 relative z-10 max-w-4xl mx-auto mb-16 px-2">
          {['Radish', 'Broccoli', 'Pea Shoots', 'Sunflower', 'Mustard', 'Basil', 'Coriander', 'Red Amaranth', 'Shiso', 'Sorrel', '+ More'].map((crop, index) => (
            <div key={crop} className="relative group/crop">
              {/* Slow pulsing light around the tag */}
              <div
                className="absolute -inset-0.5 rounded-xl border border-nabtura-light-green/50 shadow-[0_0_15px_rgba(134,239,172,0.4)] animate-[pulse_3s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.3}s` }}
              ></div>

              {/* Stronger hover glow */}
              <div className="absolute inset-0 bg-nabtura-light-green/20 rounded-xl blur-md opacity-0 group-hover/crop:opacity-100 transition-opacity duration-500"></div>

              <span className="relative inline-block bg-[#0F1C17] border border-white/5 px-5 py-3 rounded-xl text-gray-300 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#152720] hover:text-white transition-all duration-300 cursor-default group-hover/crop:-translate-y-1">
                {crop}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center relative z-10 pb-8">
          <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-light-green px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors shadow-[0_0_20px_rgba(134,239,172,0.2)] hover:shadow-[0_0_40px_rgba(134,239,172,0.5)]">
            EXPLORE WHAT YOU CAN GROW <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </motion.section>

      {/* 5. APPLICATIONS */}
      <section className="pt-24 pb-10 relative overflow-hidden bg-[#09110E]">
        {/* Animated background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nabtura-light-green/10 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nabtura-blue/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight drop-shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">YOUR SPACE.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_25px_rgba(34,197,94,0.5)]">WHAT COULD IT GROW?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { space: 'Restaurant', grow: 'Fresh Microgreens', icon: ChefHat },
              { space: 'Hotel', grow: 'Chef Growing System', icon: Building2 },
              { space: 'Unused Room', grow: 'Smart Microgreen Room', icon: MapPin },
              { space: 'Commercial Unit', grow: 'Microgreens Business', icon: Store },
              { space: 'School', grow: 'Smart Growing Lab', icon: Sprout },
              { space: 'Home', grow: 'Compact Grow-at-Home System', icon: Leaf }
            ].map((app, i) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative group/card h-full"
                >
                  {/* Glowing border effect on hover */}
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[2.2rem] opacity-50 group-hover/card:from-nabtura-light-green/50 group-hover/card:to-nabtura-light-green/10 group-hover/card:opacity-100 transition-all duration-700 blur-[1px]"></div>

                  <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#111A16] to-[#0A110E] border border-white/5 py-5 px-6 flex flex-col items-center justify-center text-center transition-transform duration-700 hover:-translate-y-2 group-hover/card:shadow-[0_20px_40px_rgba(134,239,172,0.05)]">
                    {/* Radial gradient inside card */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-nabtura-light-green/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

                    <div className="w-12 h-12 rounded-full bg-nabtura-light-green/5 border border-nabtura-light-green/10 flex items-center justify-center mb-3 group-hover/card:bg-nabtura-light-green/15 group-hover/card:border-nabtura-light-green/30 transition-colors duration-500 relative z-10">
                      <Icon className="w-5 h-5 text-nabtura-light-green/60 group-hover/card:text-nabtura-light-green transition-colors duration-500" />
                    </div>

                    <span className="text-nabtura-light-green/80 font-bold tracking-widest text-[10px] uppercase mb-1 relative z-10 group-hover/card:text-white transition-colors duration-500">{app.space}</span>

                    <div className="w-px h-6 bg-gradient-to-b from-nabtura-light-green/30 to-transparent my-1 relative z-10 group-hover/card:from-nabtura-light-green/60 transition-colors duration-500"></div>
                    <ArrowRight className="w-4 h-4 text-nabtura-light-green/40 mb-3 group-hover/card:text-nabtura-light-green group-hover/card:translate-y-2 transition-all rotate-90 relative z-10" />

                    <h3 className="text-white font-extrabold text-[15px] md:text-base uppercase tracking-wide relative z-10 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-nabtura-light-green transition-all duration-500 leading-tight">{app.grow}</h3>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link href="/contact" className="inline-flex items-center text-nabtura-light-green font-bold tracking-widest uppercase text-xs hover:text-white transition-colors group/link">
              SHOW US YOUR SPACE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. HOSPITALITY + COMMERCIAL */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#121b16] to-[#080d0a] border border-white/10 rounded-[2.5rem] px-8 py-8 md:px-16 md:py-10 lg:px-20 lg:py-12 shadow-2xl"
        >
          {/* Inner Glows */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(250,204,21,0.03),_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(134,239,172,0.03),_transparent_50%)]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="pr-4">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase leading-tight mb-6 tracking-tight drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white">GROW FOR</span> <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">YOUR PURPOSE.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { title: 'RESTAURANTS & F&B', desc: 'Fresh growing closer to the kitchen.', link: 'CREATE A RESTAURANT GROWING CONCEPT' },
                { title: 'HOTELS & RESORTS', desc: 'Bring fresh growing into the hospitality experience.', link: 'EXPLORE HOSPITALITY POSSIBILITIES' },
                { title: 'ENTREPRENEURS', desc: 'Turn compact growing into a commercial opportunity.', link: 'START SOMETHING THAT GROWS' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.3 }}
                  className="group relative p-6 md:p-8 rounded-2xl transition-all duration-500 hover:bg-white/5 border border-transparent hover:border-white/10 overflow-hidden cursor-pointer backdrop-blur-sm"
                >
                  {/* Animated indicator line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-gradient-to-b from-nabtura-sand to-amber-600 group-hover:h-3/4 rounded-r-full transition-all duration-500 shadow-[0_0_15px_rgba(250,204,21,0.5)] opacity-0 group-hover:opacity-100"></div>

                  {/* Static subtle indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-1/2 bg-white/10 group-hover:opacity-0 transition-opacity duration-300"></div>

                  <h3 className="text-white font-extrabold text-xl uppercase tracking-wide mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-sand transition-all duration-500 pl-4">{item.title}</h3>
                  <p className="text-gray-400 font-light mb-5 pl-4 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  <div className="pl-4">
                    <Link href="/contact" className="inline-flex items-center text-nabtura-sand/80 font-bold tracking-widest uppercase text-[10px] group-hover:text-nabtura-sand transition-colors">
                      {item.link} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. DELIVERY (FROM SPACE TO HARVEST) */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">
            FROM SPACE TO HARVEST.
          </h2>
        </div>

        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-10 md:p-16 mb-12 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-nabtura-light-green/5 blur-[100px] -z-10 group-hover:bg-nabtura-light-green/10 transition-colors duration-1000"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center relative z-10 mb-12">
            <div className="hidden md:block absolute top-6 left-6 right-6 h-[2px] bg-white/5 z-0 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.2, ease: "linear", delay: 0.2 }}
                className="w-full h-full bg-nabtura-light-green shadow-[0_0_15px_rgba(134,239,172,0.8)]"
              ></motion.div>
            </div>

            {['ASSESS', 'DESIGN', 'INSTALL', 'COMMISSION', 'GROW', 'SUPPORT'].map((step, index) => (
              <div key={step} className="flex flex-col items-center z-10 cursor-default relative">
                <motion.div
                  initial={{ borderColor: "rgba(255,255,255,0.1)", color: "#9ca3af", boxShadow: "0 0 0px rgba(134,239,172,0)" }}
                  whileInView={{ borderColor: "#86efac", color: "#ffffff", boxShadow: "0 0 20px rgba(134,239,172,0.4)" }}
                  whileHover={{ y: -5, boxShadow: "0 0 30px rgba(134,239,172,0.6)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.4 + 0.2 }}
                  className="w-12 h-12 rounded-full bg-[#09110E] border-2 flex items-center justify-center font-bold text-sm mb-4 relative"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.4 + 0.2 }}
                    className="absolute inset-0 rounded-full bg-nabtura-light-green/20 blur-md -z-10"
                  ></motion.div>
                  {index + 1}
                </motion.div>
                <motion.p
                  initial={{ color: "#9ca3af" }}
                  whileInView={{ color: "#86efac" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.4 + 0.2 }}
                  className="font-bold tracking-widest uppercase text-[12px]"
                >
                  {step}
                </motion.p>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-white/5 pt-8">
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-6">
              NABTURA develops the system around the available space, intended production and operating model.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {['WE BUILD. YOU GROW.', 'WE BUILD. WE MANAGE.', 'WE GROW. YOU HARVEST.'].map((model) => (
                <span key={model} className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md">
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-400 font-light text-xs italic opacity-80">Need ongoing support?</span>
            <Link href="/capabilities/smartcare" className="inline-flex items-center text-xs font-bold text-nabtura-light-green tracking-[0.2em] uppercase hover:text-black hover:bg-nabtura-light-green transition-all duration-300 group bg-nabtura-light-green/10 border border-nabtura-light-green/30 px-8 py-3.5 rounded-full shadow-[0_0_15px_rgba(21,184,118,0.1)] hover:shadow-[0_0_30px_rgba(21,184,118,0.4)] backdrop-blur-md relative overflow-hidden">
               <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
               <span className="relative z-10 flex items-center">
                 EXPLORE NABTURA SMARTCARE <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CONVERSION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="pt-24 pb-12 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[#09110E]"></div>
        <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center opacity-40 grayscale-[50%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#09110E] via-[#09110E]/70 to-[#09110E]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#09110E]/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-nabtura-light-green/5 mix-blend-overlay"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 uppercase text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            WHAT COULD <br className="hidden sm:block" />YOUR SPACE GROW?
          </h2>

          <p className="font-bold tracking-widest uppercase text-xs mb-8 text-gray-400">Choose a starting point:</p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-16">
            {['I HAVE A SPACE', 'I WANT MICROGREENS FOR MY BUSINESS', 'I WANT TO START A MICROGREENS BUSINESS', "I'M EXPLORING POSSIBILITIES"].map(point => (
              <Link key={point} href="/contact" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-nabtura-light-green/50 text-gray-300 hover:text-white px-6 py-4 rounded-full font-bold tracking-widest text-[10px] sm:text-xs uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(134,239,172,0.3)] hover:-translate-y-1">
                {point}
              </Link>
            ))}
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-nabtura-light-green text-black hover:bg-white px-8 sm:px-9 py-4 rounded-full font-extrabold tracking-widest text-sm uppercase shadow-[0_0_30px_rgba(134,239,172,0.4)] hover:shadow-[0_0_50px_rgba(134,239,172,0.6)] transition-all duration-300 hover:scale-105 group">
              PLAN MY MICROGREENS SYSTEM
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center text-gray-400 font-bold tracking-widest uppercase text-[10px] hover:text-white transition-colors group/link">
              SHOW US YOUR SPACE <ArrowRight className="ml-2 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 text-gray-500 text-xs font-medium tracking-wider">
            WhatsApp | +971 56 9300075 | info@nabtura.com
          </div>
        </div>
      </motion.section>

    </main>
  );
}

