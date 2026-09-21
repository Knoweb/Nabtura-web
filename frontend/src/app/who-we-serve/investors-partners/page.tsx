"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import HighlightSection from "@/components/audience/HighlightSection";
import { Handshake, Map, Lightbulb, Briefcase, Users, LayoutDashboard, Compass, Rocket } from "lucide-react";

export default function InvestorsPartnersPage() {
  const options: SelectorOption[] = [
    { id: "invest", title: "Invest", description: "I want to invest", enquiryType: "investment", adaptiveAnswer: {}, icon: <Briefcase className="w-5 h-5" /> },
    { id: "have-land", title: "Have Land", description: "I have land", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Map className="w-5 h-5" /> },
    { id: "have-technology", title: "Have Technology", description: "I have technology", enquiryType: "investment", adaptiveAnswer: {}, icon: <Lightbulb className="w-5 h-5" /> },
    { id: "have-product", title: "Have Product", description: "I have a product or solution", enquiryType: "investment", adaptiveAnswer: {}, icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "specialist-capability", title: "Specialist Capability", description: "I have specialist capability", enquiryType: "investment", adaptiveAnswer: {}, icon: <Users className="w-5 h-5" /> },
    { id: "market-access", title: "Market Access", description: "I have market access", enquiryType: "investment", adaptiveAnswer: {}, icon: <Compass className="w-5 h-5" /> },
    { id: "project-opportunity", title: "Project Opportunity", description: "I have a project opportunity", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Rocket className="w-5 h-5" /> },
    { id: "strategic-partner", title: "Strategic Partner", description: "I want to become a strategic partner", enquiryType: "investment", adaptiveAnswer: {}, icon: <Handshake className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-nabtura-slate pt-20 overflow-hidden font-sans">
      <SolutionHero
        eyebrow="NABTURA FOR INVESTORS & PARTNERS"
        headline={<>GROW THE OPPORTUNITY. <br className="hidden sm:block" />TOGETHER.</>}
        tagline="Capital. Land. Technology. Capability. Market."
        description="Explore opportunities to invest, develop, collaborate or bring complementary capabilities into the NABTURA ecosystem."
        bgImageUrl="/images/landscapes.jpg"
        accentColor="text-nabtura-green"
      />

      {/* 2. WHAT DO YOU BRING? (Using MiniSelector for grid selection) */}
      <MiniSelector 
        headline="START WITH WHAT YOU HAVE."
        subheadline="What do you bring?"
        options={options}
        accentColor="text-nabtura-green"
        bgGradient="from-transparent"
        submitButtonText="EXPLORE INVESTMENT & PARTNERSHIPS"
        submitHref="/investors-partners" // Or wherever the real investment page is
      />

      {/* 3. CONTINUE */}
      <div className="border-t border-white/5 bg-gradient-to-b from-nabtura-green/5 to-transparent pb-24">
        <HighlightSection
          headline={<>FIND THE RIGHT <br className="hidden md:block"/>WAY TO WORK TOGETHER.</>}
          description="Every opportunity is different. Explore how NABTURA can assess and develop investment, project and partnership opportunities."
          ctaText="EXPLORE INVESTMENT & PARTNERSHIPS"
          ctaLink="/investors-partners" // Update this if the link is different
          accentColor="text-nabtura-green"
        />
      </div>
    </main>
  );
}

