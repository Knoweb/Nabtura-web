"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import FeatureGrid from "@/components/audience/FeatureGrid";
import ProcessFlow from "@/components/audience/ProcessFlow";
import HighlightSection from "@/components/audience/HighlightSection";
import { Leaf, Utensils, Sprout, Trees, Droplets, Heart, Sparkles } from "lucide-react";

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
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans">
      <SolutionHero
        eyebrow="NABTURA FOR HOTELS & RESORTS"
        headline={<>TURN GREEN <br className="hidden sm:block" />INTO AN EXPERIENCE.</>}
        tagline="Beautiful. Productive. Memorable. Intelligent."
        description="NABTURA helps hotels and resorts create green environments that can enhance the guest experience, food experience, landscape and use of water."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-green"
      />

      {/* 2. WHAT COULD YOU CREATE? */}
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

      {/* 3. FROM GROWING TO THE GUEST */}
      <div className="border-t border-white/5 bg-gradient-to-b from-transparent to-nabtura-green/5">
        <ProcessFlow
          headline={<>GROW.<br/>SERVE.<br/>EXPERIENCE.</>}
          description="Growing can become part of the hospitality story. Bring food closer. Bring nature closer."
          steps={["GROW", "HARVEST", "KITCHEN", "PLATE", "EXPERIENCE"]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 4. WATER + GREEN */}
      <div className="border-t border-white/5">
        <HighlightSection
          headline={<>BEAUTIFUL GREEN <br className="hidden md:block"/>NEEDS SMARTER WATER.</>}
          description={<>NABTURA Smart Irrigation can connect landscape requirements with more intelligent water delivery, monitoring and management.<br/><br/><span className="text-white font-bold tracking-widest uppercase">EVERY DROP HAS VALUE.</span></>}
          ctaText="EXPLORE SMART IRRIGATION"
          ctaLink="/solutions/smart-irrigation"
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 5. SUPPORTING THE PROJECT */}
      <div className="border-t border-white/5 bg-gradient-to-b from-nabtura-green/5 to-transparent">
        <FeatureGrid
          headline={<>FROM PLANTS <br className="hidden md:block"/>TO PERFORMANCE.</>}
          features={[
            { title: "NABTURA NURSERY SOLUTIONS", description: "Project-specific plant sourcing, nursery coordination, preparation and supply." },
            { title: "NABTURA SMARTCARE", description: "Ongoing care, monitoring, management and optimization." }
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
        submitButtonText="CREATE MY HOSPITALITY GREEN CONCEPT →"
      />
    </main>
  );
}
