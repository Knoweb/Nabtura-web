"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import FeatureGrid from "@/components/audience/FeatureGrid";
import CircularFeatureGrid from "@/components/audience/CircularFeatureGrid";
import HighlightSection from "@/components/audience/HighlightSection";
import { Sprout, Utensils, Leaf, Sparkles, Trees, Droplets, Lightbulb } from "lucide-react";

import FloatingLines from "@/components/home/FloatingLines";

export default function RestaurantsFBPage() {
  const options: SelectorOption[] = [
    { id: "grow-microgreens", title: "Grow Microgreens", description: "I want to grow microgreens", enquiryType: "grow_food", adaptiveAnswer: {}, icon: <Sprout className="w-5 h-5" /> },
    { id: "chef-garden", title: "Chef Garden", description: "I want a chef garden", enquiryType: "grow_food", adaptiveAnswer: {}, icon: <Utensils className="w-5 h-5" /> },
    { id: "edible-landscape", title: "Edible Landscape", description: "I want an edible landscape", enquiryType: "green_space", adaptiveAnswer: {}, icon: <Leaf className="w-5 h-5" /> },
    { id: "dining-experience", title: "Green Dining", description: "I want a green dining experience", enquiryType: "green_space", adaptiveAnswer: {}, icon: <Sparkles className="w-5 h-5" /> },
    { id: "other-idea", title: "Other Idea", description: "I have another idea", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Lightbulb className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen pt-20 overflow-hidden font-sans relative">
      <div className="fixed inset-0 -z-20 bg-[#050B08]">
        <FloatingLines 
          enabledWaves={["top","middle","bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive={true}
          parallax={true}
          animationSpeed={1}
          linesGradient={['#2ecc71', '#061a12', '#145a32']}
        />
        {/* Dark overlay to dim the lines and make text readable */}
        <div className="absolute inset-0 bg-[#050B08]/70 pointer-events-none" />
      </div>

      <SolutionHero
        eyebrow="NABTURA FOR RESTAURANTS & F&B"
        headline={<>GROW.<br className="hidden sm:block" />SERVE.<br className="hidden sm:block" />EXPERIENCE.</>}
        tagline="Bring growing closer to the kitchen—and green closer to the customer."
        description="NABTURA creates smart growing and green concepts for restaurants, cafés and food businesses."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-green"
      >
        <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="px-8 py-4 bg-nabtura-green text-black font-bold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(46,204,113,0.4)]">
          EXPLORE THE POSSIBILITIES &darr;
        </button>
      </SolutionHero>

      {/* 2. GROW CLOSER */}
      <FeatureGrid
        eyebrow="GROWN HERE. HARVESTED HERE. SERVED HERE."
        headline={<>GROW CLOSER.</>}
        description="Smart growing can bring selected fresh produce closer to where food is prepared and served."
        features={[
          { title: "SMART MICROGREENS", description: "Compact growing close to the kitchen.", icon: <Sprout className="w-8 h-8" /> },
          { title: "CHEF GARDENS", description: "Grow selected herbs, vegetables and ingredients.", icon: <Utensils className="w-8 h-8" /> },
          { title: "SMART GROWING", description: "Explore growing systems designed around available space and purpose.", icon: <Trees className="w-8 h-8" /> }
        ]}
        accentColor="text-nabtura-green"
      />

      {/* 3. CREATE AN EXPERIENCE */}
      <div className="relative z-10 -mt-8">
        <CircularFeatureGrid
          headline={<>GREEN CAN BECOME <br className="hidden md:block"/>PART OF DINING.</>}
          description="Don't just add green. Give it a purpose."
          features={[
            { title: "EDIBLE LANDSCAPE", description: "Combine visual planting with selected productive plants.", icon: <Leaf />, bgImage: "/images/dubai-greenhouse.jpg" },
            { title: "DINING FOREST", description: "Create a dining environment immersed in green.", icon: <Sparkles />, bgImage: "/images/landscapes.jpg" },
            { title: "GREEN COURTYARD", description: "Transform outdoor or semi-outdoor spaces.", icon: <Trees />, bgImage: "/images/dubai-water.jpg" },
            { title: "CUSTOM GREEN CONCEPT", description: "Develop something around the restaurant, location and experience.", icon: <Utensils />, bgImage: "/images/microgreens.jpg" }
          ]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 4. WATER INTELLIGENTLY */}
      <div className="border-t border-white/5">
        <HighlightSection
          headline={<>EVERY DROP <br className="hidden md:block"/>HAS A JOB.</>}
          description="Smart irrigation can support chef gardens, edible landscapes and other green environments."
          ctaText="EXPLORE SMART IRRIGATION"
          ctaLink="/solutions/smart-irrigation"
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 5. FROM IDEA TO EXPERIENCE (FINAL CONVERSION) */}
      <MiniSelector 
        headline="WHAT DO YOU WANT TO CREATE?"
        subheadline="From Idea to Experience."
        options={options}
        accentColor="text-nabtura-green"
        bgGradient="from-nabtura-green/10"
        submitButtonText="CREATE MY RESTAURANT CONCEPT"
      />
    </main>
  );
}

