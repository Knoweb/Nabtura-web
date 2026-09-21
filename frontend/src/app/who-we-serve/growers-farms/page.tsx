"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import FeatureGrid from "@/components/audience/FeatureGrid";
import ProcessFlow from "@/components/audience/ProcessFlow";
import HighlightSection from "@/components/audience/HighlightSection";
import { Sprout, Tractor, Leaf, Settings, Factory, Trees } from "lucide-react";

export default function GrowersFarmsPage() {
  const options: SelectorOption[] = [
    { id: "have-crop", title: "I Have A Crop", description: "I have a crop", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Sprout className="w-5 h-5" /> },
    { id: "have-farm", title: "I Have A Farm", description: "I have a farm", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Tractor className="w-5 h-5" /> },
    { id: "have-land", title: "I Have Land", description: "I have land", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Trees className="w-5 h-5" /> },
    { id: "want-greenhouse", title: "Want Greenhouse", description: "I want a greenhouse", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Factory className="w-5 h-5" /> },
    { id: "upgrade-system", title: "Upgrade System", description: "I want to upgrade a growing system", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Settings className="w-5 h-5" /> },
    { id: "explore-opportunity", title: "Explore Opportunity", description: "I'm exploring a growing opportunity", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Leaf className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans">
      <SolutionHero
        eyebrow="NABTURA FOR GROWERS & FARMS"
        headline={<>GROW SMARTER. <br className="hidden sm:block" />GROW WITH GREATER CONTROL.</>}
        tagline="Growing systems designed around crop, environment and objective."
        description="NABTURA connects growing technology, irrigation, monitoring and ongoing support around what you want to grow."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-green"
      />

      {/* 2. START WITH THE CROP */}
      <HighlightSection
        headline={<>THE SYSTEM <br className="hidden md:block"/>FOLLOWS THE CROP.</>}
        description={<>The crop should help determine the growing environment and system—not the other way around.<br/><br/><span className="text-white font-bold tracking-widest uppercase">CROP • CLIMATE • WATER • LOCATION • SCALE • MARKET</span></>}
        ctaText="EXPLORE SMART GREENHOUSES"
        ctaLink="/solutions/smart-greenhouses"
        accentColor="text-nabtura-green"
      />

      {/* 3. GROWING OPTIONS */}
      <div className="border-t border-white/5 bg-gradient-to-b from-transparent to-nabtura-green/5">
        <FeatureGrid
          eyebrow="DIFFERENT CROPS. DIFFERENT SYSTEMS."
          headline={<>GROWING OPTIONS</>}
          description="Depending on the project, growing approaches may include:"
          features={[
            { title: "HYDROPONICS", description: "" },
            { title: "AEROPONICS", description: "" },
            { title: "AQUAPONICS", description: "" },
            { title: "SOIL / COCO", description: "" },
            { title: "HYBRID SYSTEMS", description: "" },
            { title: "MICROGREENS", description: "" }
          ]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 4. WATER + TECHNOLOGY */}
      <div className="border-t border-white/5">
        <ProcessFlow
          headline={<>KNOW MORE. <br/>CONTROL MORE.</>}
          description="Connect growing with: SMART IRRIGATION • SENSORS • MONITORING • AUTOMATION • ALERTS • DATA"
          steps={["SENSE", "MONITOR", "ANALYZE", "CONTROL", "OPTIMIZE"]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 5. KEEP IT PERFORMING */}
      <div className="border-t border-white/5 bg-gradient-to-b from-nabtura-green/5 to-transparent">
        <HighlightSection
          headline={<>GROWING DOESN&apos;T <br className="hidden md:block"/>STOP AT COMMISSIONING.</>}
          description="NABTURA SmartCare can provide ongoing support for relevant growing environments and systems."
          ctaText="EXPLORE NABTURA SMARTCARE"
          ctaLink="/solutions/smart-care"
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 6. FINAL CONVERSION */}
      <MiniSelector 
        headline="WHAT DO YOU WANT TO GROW?"
        subheadline="Discuss my growing project."
        options={options}
        accentColor="text-nabtura-green"
        bgGradient="from-nabtura-green/10"
        submitButtonText="DISCUSS MY GROWING PROJECT"
      />
    </main>
  );
}

