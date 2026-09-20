"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import FeatureGrid from "@/components/audience/FeatureGrid";
import ProcessFlow from "@/components/audience/ProcessFlow";
import HighlightSection from "@/components/audience/HighlightSection";
import { Leaf, Sprout, Trees, Droplets, Home, LayoutDashboard } from "lucide-react";

export default function HomesVillasPage() {
  const options: SelectorOption[] = [
    { id: "grow-food", title: "Grow Food", description: "I want to grow food", enquiryType: "grow_food", adaptiveAnswer: {}, icon: <Sprout className="w-5 h-5" /> },
    { id: "home-greenhouse", title: "Home Greenhouse", description: "I want a home greenhouse", enquiryType: "challenge", adaptiveAnswer: {}, icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "landscape", title: "Landscape", description: "I want a landscape", enquiryType: "green_space", adaptiveAnswer: {}, icon: <Trees className="w-5 h-5" /> },
    { id: "smart-irrigation", title: "Smart Irrigation", description: "I want smart irrigation", enquiryType: "water", adaptiveAnswer: {}, icon: <Droplets className="w-5 h-5" /> },
    { id: "edible-garden", title: "Edible Garden", description: "I want an edible garden", enquiryType: "green_space", adaptiveAnswer: {}, icon: <Leaf className="w-5 h-5" /> },
    { id: "transform-outdoor", title: "Transform Outdoor", description: "I want to transform my outdoor space", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Home className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans">
      <SolutionHero
        eyebrow="NABTURA FOR HOMES & VILLAS"
        headline={<>LIVE GREENER. <br className="hidden sm:block" />GROW FRESHER.</>}
        tagline="Bring smart growing, intelligent water and purposeful green into your home."
        description="From growing fresh food to creating a greener outdoor environment, NABTURA can develop solutions around your space and how you want to use it."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-blue"
      />

      {/* 2. GROW AT HOME */}
      <FeatureGrid
        eyebrow="GROW FRESH. AT HOME."
        headline={<>GROW AT HOME</>}
        description="Create a growing space around what you want to grow and the space available. From a small growing space to a purpose-designed home greenhouse."
        features={[
          { title: "SMART HOME GREENHOUSE", description: "", icon: <LayoutDashboard className="w-8 h-8" /> },
          { title: "COMPACT HYDROPONICS", description: "", icon: <Sprout className="w-8 h-8" /> },
          { title: "HOME MICROGREENS", description: "", icon: <Leaf className="w-8 h-8" /> },
          { title: "KITCHEN GARDENS", description: "", icon: <Trees className="w-8 h-8" /> },
          { title: "EDIBLE GARDENS", description: "", icon: <Leaf className="w-8 h-8" /> }
        ]}
        accentColor="text-nabtura-blue"
      />

      {/* 3. CREATE YOUR GREEN SPACE */}
      <div className="border-t border-white/5 bg-gradient-to-b from-transparent to-nabtura-blue/5">
        <FeatureGrid
          eyebrow="MAKE GREEN PART OF HOME."
          headline={<>CREATE YOUR <br className="hidden md:block"/>GREEN SPACE</>}
          description="NABTURA Landscapes can combine beauty, purpose and planting around the way you live."
          features={[
            { title: "VILLA LANDSCAPES", description: "" },
            { title: "EDIBLE LANDSCAPES", description: "" },
            { title: "GREEN COURTYARDS", description: "" },
            { title: "KITCHEN GARDENS", description: "" },
            { title: "RELAXATION SPACES", description: "" }
          ]}
          accentColor="text-nabtura-blue"
        />
        <div className="pb-24">
          <HighlightSection
            headline=""
            ctaText="EXPLORE LANDSCAPES"
            ctaLink="/solutions/landscapes"
            accentColor="text-nabtura-blue"
          />
        </div>
      </div>

      {/* 4. WATER SMARTER */}
      <div className="border-t border-white/5">
        <ProcessFlow
          headline={<>BEAUTIFUL GREEN. <br/>INTELLIGENT WATER.</>}
          description="Smart irrigation can help deliver water according to the requirements of different planting areas."
          steps={["SENSE", "DECIDE", "DELIVER", "MONITOR", "OPTIMIZE"]}
          accentColor="text-nabtura-blue"
        />
        <div className="pb-24">
          <HighlightSection
            headline=""
            ctaText="EXPLORE SMART IRRIGATION"
            ctaLink="/solutions/smart-irrigation"
            accentColor="text-nabtura-blue"
          />
        </div>
      </div>

      {/* 5. ONE HOME. CONNECTED GREEN. */}
      <div className="border-t border-white/5 bg-gradient-to-b from-nabtura-blue/5 to-transparent">
        <HighlightSection
          headline={<>ONE HOME. <br className="hidden md:block"/>CONNECTED GREEN.</>}
          description={<>A home project can combine several NABTURA capabilities into one connected environment.<br/><br/><span className="text-white font-bold tracking-widest uppercase">HOME GROWING + LANDSCAPE + SMART IRRIGATION</span><br/><br/>Designed around your home. Adapted to your environment.</>}
          accentColor="text-nabtura-blue"
        />
      </div>

      {/* 6. FINAL CONVERSION */}
      <MiniSelector 
        headline="WHAT WOULD YOU LIKE AT HOME?"
        subheadline="Create my home green concept."
        options={options}
        accentColor="text-nabtura-blue"
        bgGradient="from-nabtura-blue/10"
        submitButtonText="CREATE MY HOME GREEN CONCEPT →"
      />
    </main>
  );
}

