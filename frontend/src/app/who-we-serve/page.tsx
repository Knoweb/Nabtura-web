"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Utensils,
  Sprout,
  Trees,
  Droplets,
  Leaf,
  Tractor,
  Map,
  Lightbulb,
  Hotel,
  Coffee,
  Briefcase,
  Building,
  GraduationCap,
  Landmark,
  Users,
  CheckCircle2,
  Compass,
  Sparkles
} from "lucide-react";
import SolutionHero from "@/components/solutions/SolutionHero";

interface RoleOption {
  id: string;
  label: string;
  category: string;
  title: string;
  description: string;
  solutions: string[];
  models: string[];
  ctaText: string;
  ctaLink: string;
  contactParam: string;
}

const ROLE_OPTIONS: RoleOption[] = [
  {
    id: "grower",
    label: "I'M A GROWER / FARM",
    category: "Growers & Farms",
    title: "High-Yield, Controlled Growing Environments",
    description: "Purpose-built greenhouse structures, advanced hydroponics, and precision irrigation designed to maximize yield and conserve water in arid climates.",
    solutions: ["Smart Greenhouses", "Smart Irrigation", "Growing Systems", "SmartCare Support"],
    models: ["We Create. You Operate.", "We Create. We Manage."],
    ctaText: "EXPLORE GROWERS & FARMS",
    ctaLink: "/who-we-serve/growers-farms",
    contactParam: "grower-farm"
  },
  {
    id: "landowner",
    label: "I'M A LANDOWNER",
    category: "Landowners",
    title: "Transform Undeveloped Land Into Productive Value",
    description: "Assess ecological potential, soil and water conditions, and commercial viability to turn raw desert acreage or parcels into thriving green assets.",
    solutions: ["Desert Greening", "Smart Greenhouses", "Environmental Projects", "Site Infrastructure"],
    models: ["We Create. You Operate.", "We Create. We Manage."],
    ctaText: "EXPLORE LANDOWNER POSSIBILITIES",
    ctaLink: "/who-we-serve/landowners",
    contactParam: "landowner"
  },
  {
    id: "developer",
    label: "I'M A DEVELOPER",
    category: "Property Developers",
    title: "Integrated Green Infrastructure for Sustainable Developments",
    description: "Elevate master-planned communities, residential towers, and commercial developments with smart irrigation, urban micro-forests, and edible landscapes.",
    solutions: ["Urban Forests", "Landscapes", "Smart Irrigation", "Water Management"],
    models: ["We Advise. You Develop.", "We Create. We Manage."],
    ctaText: "EXPLORE DEVELOPER SOLUTIONS",
    ctaLink: "/who-we-serve/developers",
    contactParam: "developer"
  },
  {
    id: "hotel",
    label: "I REPRESENT A HOTEL / RESORT",
    category: "Hotels & Resorts",
    title: "Memorable Green Guest Experiences & Farm-to-Table Freshness",
    description: "Signature resort gardens, chef microgreen displays, dining forests, and intelligent water management tailored to luxury hospitality.",
    solutions: ["Resort Landscapes", "Chef Gardens", "Smart Microgreens", "Smart Irrigation"],
    models: ["We Create. We Manage.", "We Create. You Operate."],
    ctaText: "EXPLORE HOSPITALITY SOLUTIONS",
    ctaLink: "/who-we-serve/hotels-resorts",
    contactParam: "hospitality"
  },
  {
    id: "restaurant",
    label: "I REPRESENT A RESTAURANT / F&B BUSINESS",
    category: "Restaurants & F&B",
    title: "Hyper-Local Fresh Produce & Distinctive Green Ambience",
    description: "Harvest microgreens, herbs, and specialty greens within meters of your kitchen. Transform patios and dining spaces into vibrant green escapes.",
    solutions: ["Smart Microgreens", "Dining Forest", "Herb Stations", "Smart Irrigation"],
    models: ["We Create. You Operate.", "We Create. We Manage."],
    ctaText: "EXPLORE F&B SOLUTIONS",
    ctaLink: "/who-we-serve/restaurants-fb",
    contactParam: "restaurant-fb"
  },
  {
    id: "corporate",
    label: "I REPRESENT A BUSINESS / INSTITUTION",
    category: "Corporate & Institutions",
    title: "Biophilic Workplaces, Campus Greening & Wellness Environments",
    description: "Improve occupant wellness, employee productivity, and corporate sustainability metrics with living green installations and smart water systems.",
    solutions: ["Corporate Green Retreat", "Smart Irrigation", "Urban Oasis", "Environmental Projects"],
    models: ["We Advise. You Develop.", "We Create. We Manage."],
    ctaText: "EXPLORE INSTITUTIONAL & DEVELOPMENT SOLUTIONS",
    ctaLink: "/who-we-serve/developers",
    contactParam: "corporate"
  },
  {
    id: "homeowner",
    label: "I'M A HOMEOWNER",
    category: "Homes & Villas",
    title: "Fresh Home Growing & Intelligent Private Landscapes",
    description: "Bespoke residential greenhouses, kitchen gardens, and water-conserving villa landscapes designed around how you live and dine.",
    solutions: ["Smart Home Greenhouse", "Kitchen & Edible Gardens", "Villa Landscapes", "Smart Irrigation"],
    models: ["We Create. You Operate.", "We Create. We Manage."],
    ctaText: "EXPLORE HOME & VILLA SOLUTIONS",
    ctaLink: "/who-we-serve/homes-villas",
    contactParam: "homeowner"
  },
  {
    id: "entrepreneur",
    label: "I'M AN ENTREPRENEUR",
    category: "Entrepreneurs",
    title: "Commercial Green Businesses & High-Return Agro-Ventures",
    description: "Rapid-to-market indoor microgreen production, specialized high-value crops, and scalable modular agriculture concepts with proven economics.",
    solutions: ["Smart Microgreens", "Smart Greenhouses", "Productive Green", "SmartCare"],
    models: ["We Advise. You Develop.", "We Create. You Operate."],
    ctaText: "EXPLORE ENTREPRENEUR OPPORTUNITIES",
    ctaLink: "/who-we-serve/investors-partners",
    contactParam: "entrepreneur"
  },
  {
    id: "investor",
    label: "I'M AN INVESTOR / PARTNER",
    category: "Investors & Partners",
    title: "Strategic Investment in Controlled-Environment Agri-Tech",
    description: "Capital deployment into high-growth food security, desert greening, environmental offsets, and water technology infrastructure in the GCC and beyond.",
    solutions: ["Commercial Agriculture", "Desert Greening", "Water Intelligence", "Joint Ventures"],
    models: ["We Advise. You Develop.", "We Create. We Manage."],
    ctaText: "EXPLORE PARTNERSHIP OPPORTUNITIES",
    ctaLink: "/who-we-serve/investors-partners",
    contactParam: "investor"
  },
  {
    id: "not_sure",
    label: "I'M NOT SURE YET",
    category: "Exploration",
    title: "Personalized Green Consultation & Site Feasibility",
    description: "Not sure which solution fits your site, budget, or climate? Our engineering team will review your objectives and map out optimal pathways.",
    solutions: ["Site Evaluation", "Climate Analysis", "Feasibility Study", "Custom Concept"],
    models: ["We Advise. You Develop."],
    ctaText: "START A CONVERSATION WITH AN EXPERT",
    ctaLink: "/contact?inquiry=feasibility",
    contactParam: "general"
  }
];

export default function WhoWeServePage() {
  const [selectedRole, setSelectedRole] = useState<string>("grower");
  const activeRoleData = ROLE_OPTIONS.find((r) => r.id === selectedRole) || ROLE_OPTIONS[0];

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans relative">
      {/* 1. HERO */}
      <SolutionHero
        eyebrow="WHO WE SERVE"
        headline={
          <>
            <span>DIFFERENT NEEDS.</span> <br className="hidden sm:block" />
            <span>SMARTER GREEN POSSIBILITIES.</span>
          </>
        }
        tagline="NABTURA works with people, businesses and organizations looking to grow food, manage water, create green or transform environments."
        description="Find where you fit—and explore what NABTURA could create with you."
        bgImageUrl="/images/greenhouse.jpg"
        accentColor="text-nabtura-green"
      />

      {/* QUICK JUMP STICKY NAV BAR */}
      <div className="sticky top-20 z-40 bg-nabtura-slate/90 backdrop-blur-xl border-y border-white/10 py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none text-xs">
          <div className="flex items-center gap-2 sm:gap-3 flex-nowrap shrink-0">
            <Link
              href="#growers"
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-nabtura-light-green/20 hover:text-nabtura-light-green text-gray-300 font-bold uppercase tracking-wider transition-all whitespace-nowrap border border-white/5 hover:border-nabtura-light-green/40"
            >
              GROWERS & LAND
            </Link>
            <Link
              href="#hospitality"
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-nabtura-green/20 hover:text-nabtura-green text-gray-300 font-bold uppercase tracking-wider transition-all whitespace-nowrap border border-white/5 hover:border-nabtura-green/40"
            >
              HOSPITALITY & F&B
            </Link>
            <Link
              href="#developers"
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-nabtura-sand/20 hover:text-nabtura-sand text-gray-300 font-bold uppercase tracking-wider transition-all whitespace-nowrap border border-white/5 hover:border-nabtura-sand/40"
            >
              DEVELOPERS & CITIES
            </Link>
            <Link
              href="#homes"
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-nabtura-blue/20 hover:text-nabtura-blue text-gray-300 font-bold uppercase tracking-wider transition-all whitespace-nowrap border border-white/5 hover:border-nabtura-blue/40"
            >
              HOMES & VILLAS
            </Link>
            <Link
              href="#investors"
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/20 hover:text-white text-gray-300 font-bold uppercase tracking-wider transition-all whitespace-nowrap border border-white/5 hover:border-white/30"
            >
              INVESTORS & PARTNERS
            </Link>
          </div>

          <Link
            href="#path-finder"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nabtura-light-green text-nabtura-slate font-extrabold uppercase tracking-widest hover:bg-nabtura-green transition-all shadow-[0_0_15px_rgba(74,222,128,0.3)] whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            FIND YOUR PATH
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-20 lg:px-24 py-16 space-y-28 relative">
        {/* 2. GROWERS, LANDOWNERS & ENTREPRENEURS */}
        <motion.section
          id="growers"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative pt-6 scroll-mt-36"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-light-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-light-green/5 border border-nabtura-light-green/20 mb-8 shadow-[0_0_15px_rgba(74,222,128,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-light-green animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-light-green">
                GROWERS, LANDOWNERS & ENTREPRENEURS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
                TURN RESOURCES INTO{" "}
              </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-nabtura-light-green drop-shadow-[0_0_25px_rgba(74,222,128,0.3)]">
                OPPORTUNITY.
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">
                Whether you already grow, have land, or want to start something new,
              </span>{" "}
              NABTURA can help explore the right growing or green opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Growers & Farms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-light-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/growers-farms"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View GROWERS & FARMS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/uae_smart_greenhouse.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-light-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-light-green/10 border border-nabtura-light-green/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300">
                  <Tractor className="w-6 h-6 text-nabtura-light-green" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-light-green transition-all duration-300 drop-shadow-md break-words">
                  GROWERS & FARMS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mb-8 transition-colors duration-300">
                  Improve or develop smarter growing environments.
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 group-hover:border-nabtura-light-green/30 transition-colors duration-500">
                <p className="text-nabtura-light-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  SOLUTIONS :
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Smart Greenhouses
                  </span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Smart Irrigation
                  </span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Growing Systems
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Landowners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-light-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/landowners"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View LANDOWNERS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/dubai-landscapes.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-light-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-light-green/10 border border-nabtura-light-green/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300">
                  <Map className="w-6 h-6 text-nabtura-light-green" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-light-green transition-all duration-300 drop-shadow-md break-words">
                  LANDOWNERS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mb-8 transition-colors duration-300">
                  Explore what your land could grow, become or support.
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 group-hover:border-nabtura-light-green/30 transition-colors duration-500">
                <p className="text-nabtura-light-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  SOLUTIONS :
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Smart Greenhouses
                  </span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Desert Greening
                  </span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Environmental Projects
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Entrepreneurs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-light-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/investors-partners"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View ENTREPRENEURS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-light-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-light-green/10 border border-nabtura-light-green/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300">
                  <Lightbulb className="w-6 h-6 text-nabtura-light-green" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-light-green transition-all duration-300 drop-shadow-md break-words">
                  ENTREPRENEURS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mb-8 transition-colors duration-300">
                  Turn a growing idea into a potential business opportunity.
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10 group-hover:border-nabtura-light-green/30 transition-colors duration-500">
                <p className="text-nabtura-light-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  SOLUTIONS :
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Smart Microgreens
                  </span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Smart Greenhouses
                  </span>
                  <span className="bg-white/5 border border-nabtura-light-green/40 shadow-[0_0_10px_rgba(74,222,128,0.15)] px-3 py-1.5 rounded-md text-xs font-bold tracking-widest text-white uppercase group-hover:border-nabtura-light-green/60 transition-all">
                    Productive Green
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link
              href="/who-we-serve/growers-farms"
              className="group relative inline-flex items-center gap-3 bg-nabtura-light-green border border-nabtura-light-green rounded-full py-2 px-7 hover:bg-nabtura-green hover:border-nabtura-green transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(74,222,128,0.25)] hover:shadow-[0_0_30px_rgba(74,222,128,0.45)] z-10"
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-xs relative z-10">
                EXPLORE YOUR OPPORTUNITY
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-light-green transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 3. HOSPITALITY, F&B & BUSINESS */}
        <motion.section
          id="hospitality"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative pt-6 scroll-mt-36"
        >
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-nabtura-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-green/5 border border-nabtura-green/20 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-green animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-green">
                HOSPITALITY, F&B & CORPORATE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
                MAKE ENVIRONMENT PART OF{" "}
              </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-nabtura-green drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                THE EXPERIENCE.
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">
                NABTURA can bring growing, landscape, water and green experiences closer
              </span>{" "}
              to the places where people stay, dine, work and visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Hotels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:border-nabtura-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/hotels-resorts"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View HOTELS & RESORTS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/landscapes.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-green/10 border border-nabtura-green/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
                  <Hotel className="w-6 h-6 text-nabtura-green" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-green transition-all duration-300 drop-shadow-md break-words">
                  HOTELS & RESORTS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Create memorable green experiences—from landscapes and chef gardens to fresh growing and intelligent irrigation.
                </p>
              </div>
            </motion.div>

            {/* Restaurants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:border-nabtura-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/restaurants-fb"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View RESTAURANTS & F&B</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/before_microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-green/10 border border-nabtura-green/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
                  <Coffee className="w-6 h-6 text-nabtura-green" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-green transition-all duration-300 drop-shadow-md break-words">
                  RESTAURANTS & F&B
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Grow closer to the kitchen or transform outdoor spaces into distinctive dining environments.
                </p>
              </div>
            </motion.div>

            {/* Corporate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:border-nabtura-green/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/investors-partners"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View BUSINESSES & CORPORATE</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/dubai-water.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-green/10 border border-nabtura-green/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-nabtura-green" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-green transition-all duration-300 drop-shadow-md break-words">
                  BUSINESSES & CORPORATE
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Turn workplaces and properties into greener, more engaging environments.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:border-nabtura-green/30 transition-all duration-500 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nabtura-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p className="text-nabtura-green/80 text-xs font-bold tracking-[0.2em] uppercase mb-5 relative z-10">
              POSSIBLE CONCEPTS :
            </p>
            <div className="flex flex-wrap items-center gap-2.5 relative z-10">
              {[
                "Chef Garden",
                "Smart Microgreens",
                "Dining Forest",
                "Resort Landscape",
                "Corporate Green Retreat",
                "Edible Landscape"
              ].map((concept, i) => (
                <span
                  key={i}
                  className="bg-white/5 border border-nabtura-green/30 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-widest text-white uppercase hover:bg-nabtura-green/20 hover:border-nabtura-green/60 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-default"
                >
                  {concept}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link
              href="/who-we-serve/hotels-resorts"
              className="group relative inline-flex items-center gap-3 bg-nabtura-green border border-nabtura-green rounded-full py-2 px-7 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] z-10"
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-xs relative z-10">
                EXPLORE BUSINESS & HOSPITALITY POSSIBILITIES
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-green transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 4. DEVELOPERS, INSTITUTIONS & COMMUNITIES */}
        <motion.section
          id="developers"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative pt-6 scroll-mt-36"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-nabtura-sand/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-sand/5 border border-nabtura-sand/20 mb-8 shadow-[0_0_15px_rgba(251,146,60,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-sand animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-sand">
                DEVELOPERS, INSTITUTIONS & COMMUNITIES
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
                BUILD GREEN INTO{" "}
              </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-nabtura-sand drop-shadow-[0_0_25px_rgba(251,146,60,0.3)]">
                THE PLACE.
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">
                NABTURA can integrate green thinking into developments,
              </span>{" "}
              institutions and shared environments from the beginning—or help transform existing spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Property Developers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/developers"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View PROPERTY DEVELOPERS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-sand/10 border border-nabtura-sand/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-300">
                  <Building className="w-6 h-6 text-nabtura-sand" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md break-words leading-snug mb-3">
                  PROPERTY DEVELOPERS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Integrate landscapes, smart irrigation, productive green and green experiences into developments.
                </p>
              </div>
            </motion.div>

            {/* Schools & Universities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/developers"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View SCHOOLS & UNIVERSITIES</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/before_courtyard.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-sand/10 border border-nabtura-sand/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-nabtura-sand" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md break-words leading-snug mb-3">
                  SCHOOLS & UNIVERSITIES
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Create environments where people can grow, learn and experience nature.
                </p>
              </div>
            </motion.div>

            {/* Government & Institutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/developers"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View GOVERNMENT & INSTITUTIONS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/uae_water_tech.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-sand/10 border border-nabtura-sand/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-300">
                  <Landmark className="w-6 h-6 text-nabtura-sand" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md break-words leading-snug mb-3">
                  GOVERNMENT & INSTITUTIONS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Explore project-specific green, water and environmental interventions.
                </p>
              </div>
            </motion.div>

            {/* Communities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-sand/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(251,146,60,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/developers"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View COMMUNITIES</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/before_arid.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-sand/10 border border-nabtura-sand/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-300">
                  <Users className="w-6 h-6 text-nabtura-sand" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-nabtura-sand transition-all duration-300 drop-shadow-md break-words leading-snug mb-3">
                  COMMUNITIES
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Create shared green environments designed for people and place.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group hover:border-nabtura-sand/30 transition-all duration-500 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-nabtura-sand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <p className="text-nabtura-sand/80 text-xs font-bold tracking-[0.2em] uppercase mb-5 relative z-10">
              POSSIBLE CONCEPTS :
            </p>
            <div className="flex flex-wrap items-center gap-2.5 relative z-10 mb-6">
              {[
                "Learning Garden",
                "Smart Growing Lab",
                "Community Forest",
                "Urban Oasis",
                "Green Infrastructure",
                "Water-Smart Landscape"
              ].map((concept, i) => (
                <span
                  key={i}
                  className="bg-white/5 border border-nabtura-sand/30 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-widest text-white uppercase hover:bg-nabtura-sand/20 hover:border-nabtura-sand/60 hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all cursor-default"
                >
                  {concept}
                </span>
              ))}
            </div>

            <div className="border-t border-white/10 group-hover:border-nabtura-sand/30 transition-colors duration-500 pt-4 relative z-10">
              <p className="text-gray-400 font-light text-sm italic">
                Project-specific planting requirements can also be supported through NABTURA Nursery Solutions.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link
              href="/who-we-serve/developers"
              className="group relative inline-flex items-center gap-3 bg-nabtura-sand border border-nabtura-sand rounded-full py-2 px-7 hover:bg-orange-400 hover:border-orange-400 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(251,146,60,0.25)] hover:shadow-[0_0_30px_rgba(251,146,60,0.45)] z-10"
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-xs relative z-10">
                EXPLORE INSTITUTIONAL & DEVELOPMENT SOLUTIONS
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-sand transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 5. HOMES & VILLAS */}
        <motion.section
          id="homes"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative pt-6 scroll-mt-36"
        >
          <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-nabtura-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-blue/5 border border-nabtura-blue/20 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-nabtura-blue animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-blue">
                HOMES & VILLAS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
                BRING SMART GREEN{" "}
              </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-nabtura-blue drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                HOME.
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">Your home can be more than landscaped.</span> It can grow food, use water intelligently and become a greener place to live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Smart Home Greenhouse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/homes-villas"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View SMART HOME GREENHOUSE</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/greenhouse.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-blue/10 border border-nabtura-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <Home className="w-6 h-6 text-nabtura-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md break-words">
                  SMART HOME GREENHOUSE
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">
                  Grow fresh food at home.
                </p>
              </div>
            </motion.div>

            {/* Kitchen & Edible Gardens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/homes-villas"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View KITCHEN & EDIBLE GARDENS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/before_microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-blue/10 border border-nabtura-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <Utensils className="w-6 h-6 text-nabtura-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md break-words">
                  KITCHEN & EDIBLE GARDENS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">
                  Make part of your landscape productive.
                </p>
              </div>
            </motion.div>

            {/* Home Microgreens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/homes-villas"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View HOME MICROGREENS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/microgreens.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-blue/10 border border-nabtura-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <Sprout className="w-6 h-6 text-nabtura-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md break-words">
                  HOME MICROGREENS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">
                  Fresh growing in compact spaces.
                </p>
              </div>
            </motion.div>

            {/* Landscapes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/homes-villas"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View LANDSCAPES</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/before_landscapes.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-blue/10 border border-nabtura-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <Trees className="w-6 h-6 text-nabtura-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md break-words">
                  LANDSCAPES
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">
                  Create green spaces around how you live.
                </p>
              </div>
            </motion.div>

            {/* Smart Irrigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:border-nabtura-blue/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/homes-villas"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View SMART IRRIGATION</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/dubai-water.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-nabtura-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-nabtura-blue/10 border border-nabtura-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <Droplets className="w-6 h-6 text-nabtura-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-nabtura-blue transition-all duration-300 drop-shadow-md break-words">
                  SMART IRRIGATION
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-2 transition-colors duration-300">
                  Manage garden water more intelligently.
                </p>
              </div>
            </motion.div>

            {/* Glow Feature Tile */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-white/[0.03] to-nabtura-blue/[0.1] border border-nabtura-blue/30 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(59,130,246,0.15)] group backdrop-blur-xl relative overflow-hidden"
            >
              <Link
                href="/who-we-serve/homes-villas"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View HOMES & VILLAS</span>
              </Link>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-nabtura-blue/40 blur-[50px] animate-pulse pointer-events-none z-0"
                style={{ animationDuration: "3s" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-nabtura-blue/20 via-transparent to-transparent opacity-50"></div>
              <h3 className="text-2xl font-black tracking-normal text-white uppercase drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10 group-hover:scale-105 transition-transform duration-500">
                GROW FRESH. <br />
                AT HOME.
              </h3>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link
              href="/who-we-serve/homes-villas"
              className="group relative inline-flex items-center gap-3 bg-nabtura-blue border border-nabtura-blue rounded-full py-2 px-7 hover:bg-blue-400 hover:border-blue-400 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] z-10"
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-xs relative z-10">
                EXPLORE HOME & VILLA POSSIBILITIES
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-nabtura-blue transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>

        {/* 6. INVESTORS & PARTNERS */}
        <motion.section
          id="investors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative pt-6 scroll-mt-36"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <div className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/20 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-300">
                INVESTORS & PARTNERS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
                GREEN CAN BECOME{" "}
              </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                AN OPPORTUNITY.
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-4">
              <span className="text-white font-medium">
                NABTURA also works with those looking beyond a conventional project.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Investors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:border-white/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/investors-partners"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View INVESTORS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/dubai-greenhouse.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold tracking-normal text-white mb-3 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 drop-shadow-md">
                  INVESTORS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Explore opportunities around smart agriculture, growing, green infrastructure and related concepts.
                </p>
              </div>
            </motion.div>

            {/* Strategic Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:border-white/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/investors-partners"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View STRATEGIC PARTNERS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/uae_green_city.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold tracking-normal text-white mb-3 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 drop-shadow-md">
                  STRATEGIC PARTNERS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Explore ways to combine capabilities, technology, markets or project opportunities.
                </p>
              </div>
            </motion.div>

            {/* Architects / Consultants / Contractors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:border-white/40 transition-all duration-500 shadow-2xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-2"
            >
              <Link
                href="/who-we-serve/investors-partners"
                className="absolute inset-0 z-50 rounded-[2rem] outline-none cursor-pointer"
              >
                <span className="sr-only">View PARTNERS</span>
              </Link>
              <div className="absolute inset-0 bg-[url('/images/uae_water_tech.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 z-0 scale-100 group-hover:scale-110 mix-blend-lighten"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold tracking-normal text-white mb-3 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 drop-shadow-md">
                  ARCHITECTS • CONSULTANTS • CONTRACTORS
                </h3>
                <p className="text-gray-300 font-light text-base leading-relaxed mt-4 transition-colors duration-300">
                  Bring NABTURA capabilities into wider project teams where relevant.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <Link
              href="/who-we-serve/investors-partners"
              className="group relative inline-flex items-center gap-3 bg-white border border-white rounded-full py-2 px-7 hover:bg-gray-200 hover:border-gray-200 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] z-10"
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="flex items-center text-[#050a08] font-extrabold tracking-widest uppercase text-xs relative z-10">
                EXPLORE INVESTMENT & PARTNERSHIPS
                <span className="ml-3 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shadow-inner text-[#050a08]">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </motion.section>
      </div>

      {/* 7. FIND YOUR NABTURA PATH (INTERACTIVE PATH FINDER) */}
      <section
        id="path-finder"
        className="py-24 relative overflow-hidden border-t border-white/10 mt-20 scroll-mt-24"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/nabtura_path_bg.jpg')" }}
        ></div>

        {/* Dark Overlays for Readability */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#050a08]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-[#050A08]"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-nabtura-green/10 blur-[150px] z-0 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-nabtura-light-green/10 border border-nabtura-light-green/30 mb-6 shadow-[0_0_15px_rgba(74,222,128,0.15)] backdrop-blur-md">
            <Compass className="w-4 h-4 text-nabtura-light-green animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-nabtura-light-green">
              FIND YOUR NABTURA PATH
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            WHAT ARE YOU LOOKING TO ACHIEVE?
          </h2>

          <p className="text-gray-300 text-base md:text-lg font-light max-w-2xl mx-auto mb-12">
            Select your sector or interest to reveal tailored recommendations and immediate next steps.
          </p>

          {/* Interactive Role Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
            {ROLE_OPTIONS.map((option) => {
              const isSelected = selectedRole === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedRole(option.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-lg backdrop-blur-md cursor-pointer border ${
                    isSelected
                      ? "bg-nabtura-light-green text-nabtura-slate border-nabtura-light-green shadow-[0_0_20px_rgba(74,222,128,0.4)] scale-105"
                      : "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-nabtura-slate" />}
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Tailored Recommendation Card */}
          <AnimatePresence mode="wait">
            {activeRoleData && (
              <motion.div
                key={activeRoleData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto text-left bg-nabtura-slate/80 border border-nabtura-light-green/30 p-8 sm:p-10 rounded-[2rem] backdrop-blur-2xl shadow-[0_0_50px_rgba(74,222,128,0.12)] mb-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-light-green/10 rounded-full blur-[70px] pointer-events-none"></div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-nabtura-light-green bg-nabtura-light-green/10 border border-nabtura-light-green/20 px-3.5 py-1 rounded-full">
                    {activeRoleData.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    RECOMMENDED SOLUTIONS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">
                  {activeRoleData.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {activeRoleData.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      SOLUTIONS :
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeRoleData.solutions.map((sol, i) => (
                        <span
                          key={i}
                          className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-xs font-medium text-white"
                        >
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      ENGAGEMENT MODELS :
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeRoleData.models.map((mod, i) => (
                        <span
                          key={i}
                          className="bg-nabtura-light-green/10 border border-nabtura-light-green/30 px-3 py-1 rounded-md text-xs font-medium text-nabtura-light-green"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href={activeRoleData.ctaLink}
                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 bg-nabtura-light-green border border-nabtura-light-green rounded-full py-3 px-8 hover:bg-nabtura-green hover:border-nabtura-green transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.25)] text-[#050a08] font-extrabold tracking-widest uppercase text-xs"
                  >
                    {activeRoleData.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?interest=${activeRoleData.contactParam}`}
                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 bg-white/5 border border-white/20 rounded-full py-3 px-8 hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-white font-bold tracking-widest uppercase text-xs"
                  >
                    START A CONVERSATION
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Dual Global Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link
              href="/solutions"
              className="group relative inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-3 px-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10"
            >
              <span className="flex items-center text-white font-bold tracking-widest uppercase text-xs sm:text-sm relative z-10">
                FIND NABTURA FOR ME
                <span className="ml-4 w-7 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shadow-inner text-white">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 bg-nabtura-green/20 border border-nabtura-green/40 rounded-full py-3 px-8 hover:bg-nabtura-green hover:text-nabtura-slate transition-all duration-500 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] z-10"
            >
              <span className="flex items-center text-nabtura-light-green group-hover:text-nabtura-slate font-extrabold tracking-widest uppercase text-xs sm:text-sm relative z-10">
                START A CONVERSATION
                <span className="ml-4 w-7 h-5 rounded-full bg-nabtura-light-green/20 group-hover:bg-nabtura-slate group-hover:text-nabtura-light-green flex items-center justify-center transition-colors shadow-inner text-nabtura-light-green">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
