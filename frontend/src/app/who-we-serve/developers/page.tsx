"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import FeatureGrid from "@/components/audience/FeatureGrid";
import ProcessFlow from "@/components/audience/ProcessFlow";
import { Trees, Droplets, Leaf, Sprout, Sparkles, Building, Briefcase } from "lucide-react";

export default function DevelopersPage() {
  const options: SelectorOption[] = [
    { id: "residential", title: "Residential", description: "Residential", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Building className="w-5 h-5" /> },
    { id: "commercial", title: "Commercial", description: "Commercial", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Briefcase className="w-5 h-5" /> },
    { id: "hospitality", title: "Hospitality", description: "Hospitality", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Sparkles className="w-5 h-5" /> },
    { id: "mixed-use", title: "Mixed-Use", description: "Mixed-Use", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Building className="w-5 h-5" /> },
    { id: "community", title: "Community", description: "Community", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Trees className="w-5 h-5" /> },
    { id: "other", title: "Other", description: "Other", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Leaf className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans">
      <SolutionHero
        eyebrow="NABTURA FOR DEVELOPERS"
        headline={<>BUILD GREEN <br className="hidden sm:block" />INTO THE DEVELOPMENT.</>}
        tagline="Landscape. Water. Nature. Technology."
        description="NABTURA works with developers and project teams to integrate purposeful green solutions into residential, commercial, hospitality and mixed-use environments."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-yellow"
      />

      {/* 2. GREEN AS PART OF THE PROJECT */}
      <FeatureGrid
        eyebrow="DON'T ADD GREEN AT THE END."
        headline={<>GREEN AS PART <br className="hidden md:block"/>OF THE PROJECT</>}
        description="Consider green, planting and water as connected elements of the development."
        features={[
          { title: "LANDSCAPES", description: "Purposeful green environments.", icon: <Trees className="w-8 h-8" /> },
          { title: "SMART IRRIGATION", description: "Intelligent water delivery and management.", icon: <Droplets className="w-8 h-8" /> },
          { title: "URBAN FORESTS", description: "Nature-rich spaces and green experiences.", icon: <Trees className="w-8 h-8" /> },
          { title: "PRODUCTIVE GREEN", description: "Edible and growing environments where appropriate.", icon: <Leaf className="w-8 h-8" /> },
          { title: "ENVIRONMENTAL PROJECTS", description: "Project-specific environmental interventions.", icon: <Sparkles className="w-8 h-8" /> }
        ]}
        accentColor="text-nabtura-yellow"
      />

      {/* 3. CREATE MORE FROM SPACE */}
      <div className="border-t border-white/5 bg-gradient-to-b from-transparent to-nabtura-yellow/5">
        <FeatureGrid
          eyebrow="CREATE MORE FROM SPACE"
          headline={<>WHAT COULD THE <br className="hidden md:block"/>DEVELOPMENT INCLUDE?</>}
          features={[
            { title: "GREEN GATEWAYS", description: "" },
            { title: "URBAN OASES", description: "" },
            { title: "COMMUNITY FORESTS", description: "" },
            { title: "EDIBLE LANDSCAPES", description: "" },
            { title: "GREEN COURTYARDS", description: "" },
            { title: "PRODUCTIVE ROOFTOPS", description: "" },
            { title: "SMART GROWING SPACES", description: "" },
            { title: "WATER-SMART LANDSCAPES", description: "" }
          ]}
          accentColor="text-nabtura-yellow"
        />
      </div>

      {/* 4. PLANTS + WATER + TECHNOLOGY */}
      <div className="border-t border-white/5">
        <ProcessFlow
          headline={<>CONNECT THE <br/>GREEN SYSTEM.</>}
          description=""
          steps={["PLANTS", "WATER", "MONITORING", "CARE"]}
          accentColor="text-nabtura-yellow"
        />
        
        <FeatureGrid
          headline={""}
          features={[
            { title: "NABTURA NURSERY SOLUTIONS", description: "Support project-specific plant requirements." },
            { title: "NABTURA SMART IRRIGATION", description: "Connect water delivery to planting requirements." },
            { title: "NABTURA SMARTCARE", description: "Support ongoing performance after delivery." }
          ]}
          accentColor="text-nabtura-yellow"
        />
      </div>

      {/* 5. WORK WITH THE PROJECT TEAM */}
      <div className="border-t border-white/5 bg-gradient-to-b from-nabtura-yellow/5 to-transparent">
        <ProcessFlow
          headline={<>FROM CONCEPT <br/>TO ESTABLISHMENT.</>}
          description="NABTURA can work alongside: DEVELOPERS • ARCHITECTS • CONSULTANTS • CONTRACTORS • OPERATORS"
          steps={["UNDERSTAND", "DESIGN", "COORDINATE", "DELIVER", "ESTABLISH"]}
          accentColor="text-nabtura-yellow"
        />
      </div>

      {/* 6. FINAL CONVERSION */}
      <MiniSelector 
        headline="WHAT ARE YOU DEVELOPING?"
        subheadline="Discuss my development."
        options={options}
        accentColor="text-nabtura-yellow"
        bgGradient="from-nabtura-yellow/10"
        submitButtonText="DISCUSS MY DEVELOPMENT"
      />
    </main>
  );
}

