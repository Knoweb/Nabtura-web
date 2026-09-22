"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import FeatureGrid from "@/components/audience/FeatureGrid";
import ProcessFlow from "@/components/audience/ProcessFlow";
import HighlightSection from "@/components/audience/HighlightSection";
import { Trees, Leaf, Sparkles, Sprout, Map, Sun } from "lucide-react";

export default function LandownersPage() {
  const options: SelectorOption[] = [
    { id: "grow", title: "Grow", description: "Explore smart agriculture.", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Sprout className="w-5 h-5" /> },
    { id: "green", title: "Green", description: "Transform land into a green environment.", enquiryType: "green_space", adaptiveAnswer: {}, icon: <Trees className="w-5 h-5" /> },
    { id: "develop", title: "Develop", description: "Explore a project opportunity.", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Sparkles className="w-5 h-5" /> },
    { id: "invest-collaborate", title: "Invest / Collaborate", description: "Explore an investment or partnership model.", enquiryType: "investment", adaptiveAnswer: {}, icon: <Map className="w-5 h-5" /> },
    { id: "transform", title: "Transform", description: "Explore another environmental opportunity.", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Sun className="w-5 h-5" /> },
    { id: "not-sure", title: "I'm Not Sure", description: "", enquiryType: "not_sure", adaptiveAnswer: {}, icon: <Leaf className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans">
      <SolutionHero
        eyebrow="NABTURA FOR LANDOWNERS"
        headline={<>WHAT COULD <br className="hidden sm:block" />YOUR LAND BECOME?</>}
        tagline="Grow. Green. Develop. Transform."
        description="NABTURA helps explore how land could support smart agriculture, productive green environments or other purpose-built green opportunities."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-green"
      />

      {/* 2. START WITH THE LAND */}
      <HighlightSection
        headline={<>UNDERSTAND <br className="hidden md:block"/>BEFORE YOU DEVELOP.</>}
        description={<>Every site is different. NABTURA considers:<br/><br/><span className="text-white font-bold tracking-widest uppercase">LOCATION • CLIMATE • WATER • LAND • ACCESS • OBJECTIVE • MARKET</span><br/><br/>Start with what the land can support.</>}
        accentColor="text-nabtura-green"
      />

      {/* 3. WHAT COULD YOU CREATE? */}
      <div className="border-t border-white/5 bg-gradient-to-b from-transparent to-nabtura-green/5">
        <FeatureGrid
          eyebrow="LAND CAN HOLD MORE THAN ONE POSSIBILITY."
          headline={<>WHAT COULD YOU CREATE?</>}
          features={[
            { title: "SMART GREENHOUSE", description: "Commercial growing.", icon: <Sun className="w-8 h-8" /> },
            { title: "PRODUCTIVE GREEN", description: "Combine growing and green environments.", icon: <Leaf className="w-8 h-8" /> },
            { title: "DESERT GREENING", description: "Transform suitable arid or challenging land.", icon: <Trees className="w-8 h-8" /> },
            { title: "URBAN FOREST", description: "Create a nature-rich environment.", icon: <Trees className="w-8 h-8" /> },
            { title: "ENVIRONMENTAL PROJECT", description: "Develop a project-specific response to the site.", icon: <Sparkles className="w-8 h-8" /> },
            { title: "CUSTOM OPPORTUNITY", description: "Explore a concept around the land and objective.", icon: <Map className="w-8 h-8" /> }
          ]}
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 4. WATER MATTERS */}
      <div className="border-t border-white/5">
        <ProcessFlow
          headline={<>START WITH <br/>THE RESOURCE.</>}
          description="Water availability, quality, delivery and management can influence what is appropriate for the land."
          steps={["SOURCE", "STORAGE", "FILTRATION", "CONTROL", "DISTRIBUTION", "USE"]}
          accentColor="text-nabtura-green"
        />
        <div className="pb-24">
          <HighlightSection
            headline=""
            ctaText="EXPLORE SMART IRRIGATION"
            ctaLink="/solutions/smart-irrigation"
            accentColor="text-nabtura-green"
          />
        </div>
      </div>

      {/* 5. LAND + OPPORTUNITY */}
      <div className="border-t border-white/5 bg-gradient-to-b from-nabtura-green/5 to-transparent">
        <HighlightSection
          headline={<>HAVE LAND? <br className="hidden md:block"/>EXPLORE WHAT COULD WORK.</>}
          description={<>A land opportunity may involve the landowner, an investor, a project partner—or a combination.<br/><br/><span className="text-white font-bold tracking-widest uppercase">LAND • CAPITAL • TECHNOLOGY • CAPABILITY • MARKET</span></>}
          ctaText="EXPLORE INVESTMENT & PARTNERSHIPS"
          ctaLink="/who-we-serve/investors-partners"
          accentColor="text-nabtura-green"
        />
      </div>

      {/* 6. FINAL CONVERSION */}
      <MiniSelector 
        headline="WHAT COULD YOUR LAND BECOME?"
        subheadline="Tell us where it is, approximately how large it is and what you're considering. A photo, location plan or site information can help start the conversation."
        options={options}
        accentColor="text-nabtura-green"
        bgGradient="from-nabtura-green/10"
        submitButtonText="EXPLORE MY LAND →"
      />
    </main>
  );
}

