"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import FeatureGrid from "@/components/audience/FeatureGrid";
import ProcessFlow from "@/components/audience/ProcessFlow";
import HighlightSection from "@/components/audience/HighlightSection";
import GlobalAnimatedBackground from "@/components/home/GlobalAnimatedBackground";
import { Leaf, Utensils, Sprout, Trees, Droplets, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function HotelsResortsPage() {
  const options: SelectorOption[] = [
    { id: "enhance-landscape", title: "Enhance Landscape", description: "I want to enhance the landscape", enquiryType: "green_space", adaptiveAnswer: { q1: "Resort/Hotel", q3: "Aesthetic Landscape" }, icon: <Trees className="w-5 h-5" /> },
    { id: "grow-kitchen", title: "Grow For Kitchen", description: "I want to grow for the kitchen", enquiryType: "grow_food", adaptiveAnswer: { q2: "Grow for My Restaurant / Hotel", q3: "Restaurant" }, icon: <Utensils className="w-5 h-5" /> },
    { id: "dining-experience", title: "Green Dining", description: "I want to create a green dining experience", enquiryType: "green_space", adaptiveAnswer: { q1: "Resort/Hotel", q3: "Other" }, icon: <Sparkles className="w-5 h-5" /> },
    { id: "wellness-experience", title: "Wellness Experience", description: "I want to create a wellness / green experience", enquiryType: "plants", adaptiveAnswer: { q1: "Commercial" }, icon: <Heart className="w-5 h-5" /> },
    { id: "manage-water", title: "Manage Water", description: "I want to manage water smarter", enquiryType: "water", adaptiveAnswer: { q1: "Commercial Property" }, icon: <Droplets className="w-5 h-5" /> },
    { id: "transform-space", title: "Transform Space", description: "I have a space I want to transform", enquiryType: "general", adaptiveAnswer: {}, icon: <Leaf className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen pt-20 overflow-hidden font-sans">
      <SolutionHero
        eyebrow="NABTURA FOR HOTELS & RESORTS"
        headline={<>TURN GREEN <br className="hidden sm:block" />INTO AN EXPERIENCE.</>}
        tagline="Beautiful. Productive. Memorable. Intelligent."
        description="NABTURA helps hotels and resorts create green environments that can enhance the guest experience, food experience, landscape and use of water."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-green"
      >
        <button 
          onClick={() => {
            window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 bg-nabtura-green text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)]"
        >
          EXPLORE THE POSSIBILITIES <ArrowRight className="w-4 h-4 rotate-90" />
        </button>
      </SolutionHero>

      {/* Ambient background for the whole page (Static blurred ones removed, using Animated Background) */}
      <GlobalAnimatedBackground />

      {/* 2. WHAT COULD YOU CREATE? */}
      <div className="-mt-10 relative z-20">
        <FeatureGrid
          eyebrow="WHAT COULD YOU CREATE?"
          headline={<>GREEN CAN BECOME <br className="hidden md:block"/>PART OF THE EXPERIENCE.</>}
          features={[
            { title: "RESORT LANDSCAPES", description: "Create distinctive green environments.", icon: <Trees className="w-8 h-8" /> },
            { title: "CHEF GARDENS", description: "Grow herbs, vegetables and selected produce closer to the kitchen.", icon: <Utensils className="w-8 h-8" /> },
            { title: "SMART MICROGREENS", description: "Fresh microgreens grown close to where they are served.", icon: <Sprout className="w-8 h-8" /> },
            { title: "EDIBLE LANDSCAPES", description: "Bring productive planting into the guest environment.", icon: <Leaf className="w-8 h-8" /> },
            { title: "DINING FORESTS", description: "Create dining experiences surrounded by nature.", icon: <Sparkles className="w-8 h-8" /> },
            { title: "WELLNESS GARDENS", description: "Green spaces designed around relaxation and wellbeing.", icon: <Heart className="w-8 h-8" /> },
            { title: "URBAN OASES", description: "Transform suitable spaces into immersive green environments.", icon: <Trees className="w-8 h-8" /> }
          ]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 3. FROM GROWING TO THE GUEST */}
      <div className="relative z-10 -mt-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nabtura-green/5 to-transparent pointer-events-none -z-10" />
        <ProcessFlow
          headline={<>GROW.<br/>SERVE.<br/>EXPERIENCE.</>}
          description="Growing can become part of the hospitality story. Bring food closer. Bring nature closer."
          steps={[
            { title: "GROW", icon: <Sprout /> },
            { title: "HARVEST", icon: <Leaf /> },
            { title: "KITCHEN", icon: <Utensils /> },
            { title: "PLATE", icon: <Heart /> },
            { title: "EXPERIENCE", icon: <Sparkles /> }
          ]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 4. WATER + GREEN */}
      <div className="relative z-20 -mt-8">
        <HighlightSection
          headline={<>BEAUTIFUL GREEN <br className="hidden md:block"/>NEEDS SMARTER WATER.</>}
          description={<>NABTURA Smart Irrigation can connect landscape requirements with more intelligent water delivery, monitoring and management.<br/><br/><span className="text-white font-bold tracking-widest uppercase">EVERY DROP HAS VALUE.</span></>}
          ctaText="EXPLORE SMART IRRIGATION"
          ctaLink="/solutions/smart-irrigation"
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 5. SUPPORTING THE PROJECT */}
      <div className="relative z-10 -mt-8">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-nabtura-green/5 to-transparent pointer-events-none -z-10" />
        <FeatureGrid
          headline={<>FROM PLANTS <br className="hidden md:block"/>TO PERFORMANCE.</>}
          features={[
            { 
              title: "NABTURA NURSERY SOLUTIONS", 
              description: "Project-specific plant sourcing, nursery coordination, preparation and supply.",
              image: "/images/dubai-greenhouse.jpg",
              ctaText: "EXPLORE NURSERY SOLUTIONS",
              ctaLink: "/capabilities/nursery-solutions" 
            },
            { 
              title: "NABTURA SMARTCARE", 
              description: "Ongoing care, monitoring, management and optimization.",
              image: "/images/uae_smart_greenhouse.jpg",
              ctaText: "EXPLORE SMARTCARE",
              ctaLink: "/capabilities/smartcare" 
            }
          ]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 6. CREATE YOUR CONCEPT */}
      <MiniSelector 
        headline="WHAT COULD YOUR PROPERTY BECOME?"
        subheadline="Create your hospitality green concept."
        options={options}
        accentColor="text-nabtura-green"
        bgGradient="from-nabtura-green/10"
        submitButtonText="CREATE MY HOSPITALITY GREEN CONCEPT"
      />
    </main>
  );
}
