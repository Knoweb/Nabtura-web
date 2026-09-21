"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Droplets, MapPin, Building2, Cpu, Settings, Activity, BarChart3, ShieldCheck, CheckCircle, RefreshCw, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 400]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#020A05] text-white overflow-hidden font-sans pt-20">

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 pt-20 pb-12 border-b border-white/5 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 opacity-40"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[url('/images/uae_smart_greenhouse.jpg')] bg-cover bg-center"></div>
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020A05] via-[#020A05]/70 to-[#020A05]/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-xs md:text-sm tracking-[0.4em] text-nabtura-green font-bold mb-6 uppercase drop-shadow-md">
            About Nabtura
          </motion.h2>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-normal mb-5 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            INTELLIGENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-emerald-400">GREEN</span> SOLUTIONS.<br />
            BUILT TO WORK.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Smart agriculture. Intelligent water. Purposeful green.
          </motion.p>

          <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
            NABTURA creates and connects solutions that help people, businesses and communities grow food, manage water, create green and transform environments.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link href="#who-we-are" className="group inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Discover Nabtura</span>
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. WHO WE ARE */}
      <section id="who-we-are" className="py-16 md:py-24 relative border-b border-white/5 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="relative z-10"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-md">GREEN.</span><br />
                <span className="text-white">MADE SMARTER.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="w-24 h-1 bg-gradient-to-r from-green-500 to-transparent mb-6"></motion.div>

              <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-gray-200 leading-tight mb-5">
                NABTURA is a UAE-based smart agriculture and intelligent green solutions brand.
              </motion.p>

              <motion.p variants={fadeUp} className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8">
                We bring together agriculture, water, plants, technology and project delivery to create solutions designed around the environment in which they need to work.
              </motion.p>

              <motion.div variants={fadeUp} className="group relative p-6 md:p-8 rounded-[2rem] bg-[#04160A]/80 backdrop-blur-xl border border-white/5 hover:border-green-500/30 transition-colors shadow-2xl overflow-hidden mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-green-400 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                    <span>GROW FOOD</span>
                    <span className="text-white/20 hidden sm:inline">|</span>
                    <span>MANAGE WATER</span>
                    <span className="text-white/20 hidden sm:inline">|</span>
                    <span>CREATE GREEN</span>
                  </div>
                  <p className="text-white font-black tracking-widest text-xl md:text-2xl uppercase">
                    WE MAKE IT WORK.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-lg ml-auto aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 group-hover:border-green-500/30 transition-colors duration-500 pointer-events-none" />
              <Image
                src="/possibility_urban_oasis_1788160434157.jpg"
                alt="Green Smart Environment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="py-6 md:py-10 relative bg-green-950/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020A05] via-[#020A05]/80 to-[#020A05]/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4">Our Approach</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black">
              SMART. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">CONTROLLED.</span> ADAPTED.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SMART", icon: Cpu, desc: "Use technology, monitoring, automation and data where they create meaningful value.", color: "from-blue-500", glow: "bg-blue-500", text: "text-blue-400" },
              { title: "CONTROLLED", icon: ShieldCheck, desc: "Create greater control over growing and operating conditions where the environment allows.", color: "from-green-500", glow: "bg-green-500", text: "text-green-400" },
              { title: "ADAPTED", icon: MapPin, desc: "Design around the location, climate, water, plant or crop, purpose and commercial objective.", color: "from-yellow-500", glow: "bg-yellow-500", text: "text-yellow-400" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                className="bg-[#051A0D]/80 backdrop-blur-xl border border-green-900/30 hover:border-green-500/30 rounded-[2rem] p-10 group transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,100,0.1)] relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.glow}/10 blur-[50px] rounded-full group-hover:${item.glow}/20 transition-colors duration-500`}></div>

                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className={`shrink-0 w-10 h-10 bg-gradient-to-br ${item.color}/10 to-transparent border border-${item.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500`}>
                    <item.icon className={`w-5 h-5 ${item.text} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-white tracking-widest uppercase">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed font-light relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="inline-block px-10 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white tracking-wide shadow-inner">
              The solution follows the environment—<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 font-bold">not the other way around.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. TECHNOLOGY + NATURE */}
      <section className="py-6 md:py-10 relative border-y border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.p variants={fadeUp} className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Technology + Nature</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black leading-tight mb-8">
                CONNECTING TECHNOLOGY<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-md">WITH WHAT GROWS.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-300 leading-relaxed mb-8">
                Technology should help us understand, manage and improve the environments we create.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
                From smart growing and irrigation to environmental monitoring and ongoing care, NABTURA integrates technology where it can help create better visibility, better decisions and better performance.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="bg-[#04160A]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10 py-4 group/pipeline w-max mx-auto">
                {/* Vertical glowing pipeline base */}
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent overflow-hidden">
                  {/* Moving Light */}
                  <motion.div
                    animate={{ top: ["-20%", "120%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,1)]"
                  />
                </div>

                <div className="flex flex-col space-y-8 relative z-10">
                  {[
                    { text: "SENSE", icon: Activity },
                    { text: "MONITOR", icon: BarChart3 },
                    { text: "ANALYZE", icon: Cpu },
                    { text: "CONTROL", icon: Settings },
                    { text: "AUTOMATE", icon: RefreshCw },
                    { text: "OPTIMIZE", icon: Leaf }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center group/item relative z-10 cursor-default">
                      {/* Glowing dot on the pipeline */}
                      <div className="absolute left-[20px] w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover/item:opacity-100 group-hover/item:shadow-[0_0_10px_rgba(52,211,153,1)] transition-opacity duration-300 z-20"></div>

                      <div className="w-12 h-12 bg-[#020A05] border border-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-emerald-500/10 group-hover/item:border-emerald-500/50 group-hover/item:shadow-[0_0_30px_rgba(52,211,153,0.3)] transition-all duration-500 shadow-xl relative z-10">
                        <step.icon className="w-5 h-5 text-gray-500 group-hover/item:text-emerald-400 transition-colors duration-500" />
                      </div>

                      <span className="ml-8 text-lg font-black tracking-[0.2em] text-gray-500 group-hover/item:text-white group-hover/item:translate-x-3 transition-all duration-500 uppercase">
                        {step.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE CREATE */}
      <section className="py-6 md:py-10 relative bg-[#020A05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-20 text-center">
            <motion.p variants={fadeUp} className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">What We Create</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase">
              ONE CONNECTED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-md">GREEN ECOSYSTEM.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-xl text-gray-400 font-light max-w-2xl mx-auto">NABTURA operates across seven core businesses:</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "GROW FOOD", items: ["Smart Greenhouses", "Smart Microgreens"], icon: Leaf,
                borderGlow: "hover:border-emerald-500/40",
                shadowGlow: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
                bgGlow: "group-hover:bg-emerald-500/15 bg-emerald-500/5",
                iconBg: "bg-emerald-500/10 border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
                iconColor: "text-emerald-400",
                lineGlow: "via-emerald-500",
                bulletGlow: "group-hover/item:bg-emerald-400 group-hover/item:shadow-[0_0_10px_rgba(52,211,153,0.8)]"
              },
              {
                title: "MANAGE WATER", items: ["Smart Irrigation"], icon: Droplets,
                borderGlow: "hover:border-blue-500/40",
                shadowGlow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]",
                bgGlow: "group-hover:bg-blue-500/15 bg-blue-500/5",
                iconBg: "bg-blue-500/10 border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
                iconColor: "text-blue-400",
                lineGlow: "via-blue-500",
                bulletGlow: "group-hover/item:bg-blue-400 group-hover/item:shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              },
              {
                title: "CREATE GREEN", items: ["Landscapes", "Urban Forests", "Desert Greening"], icon: Building2,
                borderGlow: "hover:border-green-500/40",
                shadowGlow: "hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)]",
                bgGlow: "group-hover:bg-green-500/15 bg-green-500/5",
                iconBg: "bg-green-500/10 border-green-500/20 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]",
                iconColor: "text-green-400",
                lineGlow: "via-green-500",
                bulletGlow: "group-hover/item:bg-green-400 group-hover/item:shadow-[0_0_10px_rgba(74,222,128,0.8)]"
              },
              {
                title: "TRANSFORM ENVIRONMENTS", items: ["Environmental Projects"], icon: Globe,
                borderGlow: "hover:border-yellow-500/40",
                shadowGlow: "hover:shadow-[0_20px_40px_rgba(234,179,8,0.15)]",
                bgGlow: "group-hover:bg-yellow-500/15 bg-yellow-500/5",
                iconBg: "bg-yellow-500/10 border-yellow-500/20 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
                iconColor: "text-yellow-400",
                lineGlow: "via-yellow-500",
                bulletGlow: "group-hover/item:bg-yellow-400 group-hover/item:shadow-[0_0_10px_rgba(250,204,21,0.8)]"
              },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                className={`group relative h-full flex flex-col bg-[#04160A]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 ${pillar.borderGlow} transition-all duration-500 ${pillar.shadowGlow} overflow-hidden`}
              >
                {/* Glowing Top Line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent ${pillar.lineGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-40 h-40 ${pillar.bgGlow} blur-[60px] rounded-full transition-colors duration-500`}></div>

                <div className="relative z-10 flex-grow">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} border flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-black tracking-widest text-white mb-6 uppercase leading-snug">{pillar.title}</h3>

                  <ul className="space-y-4">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-center text-sm font-medium tracking-wide group/item cursor-default">
                        <span className={`w-1.5 h-1.5 rounded-full bg-white/20 mr-4 ${pillar.bulletGlow} transition-all duration-300`} />
                        <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Support Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#020A05]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 md:p-14 mb-16 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] group hover:border-emerald-500/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />

            <h3 className="text-xs font-bold tracking-[0.4em] text-gray-500 uppercase mb-12 text-center relative z-10 flex items-center justify-center">
              <span className="w-12 h-px bg-white/10 mr-4"></span>
              SUPPORTED BY
              <span className="w-12 h-px bg-white/10 ml-4"></span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto">
              <motion.div 
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#04160A]/50 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group/support"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 flex items-center justify-center mb-6 group-hover/support:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(52,211,153,0.1)]">
                  <Activity className="w-7 h-7 text-emerald-400 group-hover/support:text-emerald-300 transition-colors" />
                </div>
                <h4 className="text-xl font-black text-white mb-4 tracking-widest uppercase group-hover/support:text-emerald-400 transition-colors">NABTURA SMARTCARE</h4>
                <p className="text-gray-400 leading-relaxed font-light">Ongoing care, monitoring, management and optimization to ensure long-term success.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#04160A]/50 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group/support"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 flex items-center justify-center mb-6 group-hover/support:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(52,211,153,0.1)]">
                  <Building2 className="w-7 h-7 text-emerald-400 group-hover/support:text-emerald-300 transition-colors" />
                </div>
                <h4 className="text-xl font-black text-white mb-4 tracking-widest uppercase group-hover/support:text-emerald-400 transition-colors">NABTURA NURSERY</h4>
                <p className="text-gray-400 leading-relaxed font-light">Project-focused plant sourcing, nursery coordination, preparation and supply.</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-500 text-black font-black tracking-widest text-xs uppercase hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:scale-105 duration-300">
              EXPLORE NABTURA SOLUTIONS <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BUILT FOR CHALLENGING ENVIRONMENTS */}
      <section className="pt-6 md:pt-5 pb-6 md:pb-6 relative bg-[#020A05] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/images/dubai-landscapes.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020A05] via-[#020A05]/80 to-[#020A05]/40"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#04160A] to-transparent pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center bg-[#04160A]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase relative z-10"
            >
              BASED IN THE UAE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-md">BUILT FOR WIDER MARKETS.</span>
            </motion.h2>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-4 text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto relative z-10">
              <motion.p variants={fadeUp}>
                The UAE provides a powerful environment for developing smarter approaches to growing, water and green development.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400">
                NABTURA starts by understanding the conditions, resources and objectives of each project—then develops the solution around them.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="mt-10 inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-8 py-3 backdrop-blur-xl shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:border-yellow-500/40 hover:bg-yellow-500/20 transition-all duration-300 relative z-10 cursor-default"
            >
              <p className="text-yellow-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase flex flex-col md:flex-row items-center gap-3">
                <span>BASED IN THE UAE.</span>
                <span className="hidden md:inline text-yellow-500/50">•</span>
                <span>DESIGNED FOR CHALLENGING ENVIRONMENTS.</span>
                <span className="hidden md:inline text-yellow-500/50">•</span>
                <span>BUILT FOR WIDER MARKETS.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. INFORGRID FZC & 8. OUR DIRECTION */}
      <section className="pt-10 md:pt-12 pb-10 md:pb-12 relative border-t border-white/5 bg-[#020A05] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* INFORGRID */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="bg-[#04160A]/80 backdrop-blur-2xl border border-white/5 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] group hover:border-yellow-500/30 transition-colors duration-500 flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-yellow-500/15 transition-colors duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,179,8,0.15)] group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-7 h-7 text-yellow-500" />
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">INFORGRID FZC</p>
                <h3 className="text-2xl lg:text-3xl font-black mb-6 leading-tight uppercase">
                  <span className="text-white">NABTURA IS A BUSINESS OF</span><br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-md">INFORGRID FZC</span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-transparent mb-6"></div>
                <p className="text-gray-300 leading-relaxed font-light mb-4 text-lg">
                  INFORGRID FZC provides the corporate platform behind NABTURA in the UAE.
                </p>
                <p className="text-gray-400 leading-relaxed font-light mb-8">
                  Through NABTURA, the business focuses on developing opportunities across smart agriculture, intelligent water management, green environments and related environmental solutions.
                </p>
                <p className="inline-block px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase shadow-inner">
                  LOCAL FOUNDATION. WIDER OPPORTUNITY.
                </p>
              </div>
            </motion.div>

            {/* OUR DIRECTION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3">Our Direction</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 uppercase leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-md">GREEN CAN</span><br />
                <span className="text-white">DO MORE.</span>
              </h3>

              <ul className="space-y-2.5 text-base md:text-lg text-gray-300 font-light mb-8">
                {[
                  "Food can be grown closer to where it is needed.",
                  "Water can be managed more intelligently.",
                  "Land and spaces can become greener, more productive and more valuable.",
                  "Technology can help green environments perform better.",
                  "And new ideas can create new opportunities."
                ].map((item, i) => (
                  <li key={i} className="flex items-center bg-[#0a111c]/50 px-4 py-3.5 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-colors group">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-4 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 rounded-[2rem] bg-gradient-to-r from-[#0a111c] to-transparent border border-white/5">
                <p className="text-sm font-bold text-white tracking-[0.1em] uppercase leading-relaxed">
                  For people. For business. For communities.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">For the environments we share.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION */}
      <section className="py-6 md:py-10 relative bg-[#04160A] border-t border-white/5 overflow-hidden text-center">
        <motion.div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[url('/images/uae_water_tech.jpg')] bg-cover bg-center"></div>
        </motion.div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#04160A] via-[#04160A]/80 to-[#04160A]/40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight uppercase"
          >
            WHAT COULD WE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 drop-shadow-md">CREATE TOGETHER?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you have a project, space, land, business idea, technology, partnership or investment opportunity, start the conversation with NABTURA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact" className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 text-black font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(250,204,21,0.3)]">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center">
                Start a Conversation <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-10 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500"
          >
            <Link href="/solutions" className="hover:text-white transition-colors flex items-center justify-center group">
              Explore Our Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work-with-nabtura" className="hover:text-white transition-colors flex items-center justify-center group">
              Work With Nabtura <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
