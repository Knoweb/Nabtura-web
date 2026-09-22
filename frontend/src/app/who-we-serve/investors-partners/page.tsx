"use client";

import React from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import MiniSelector, { SelectorOption } from "@/components/audience/MiniSelector";
import HighlightSection from "@/components/audience/HighlightSection";
import { Handshake, Map, Lightbulb, Briefcase, Users, LayoutDashboard, Compass, Rocket } from "lucide-react";

export default function InvestorsPartnersPage() {
  const options: SelectorOption[] = [
    { id: "invest-ag", title: "Invest in Agriculture", description: "Explore commercial growing investments.", enquiryType: "investment", adaptiveAnswer: {}, icon: <Briefcase className="w-5 h-5" /> },
    { id: "invest-green", title: "Invest in Green Projects", description: "Explore large-scale environmental projects.", enquiryType: "investment", adaptiveAnswer: {}, icon: <Map className="w-5 h-5" /> },
    { id: "strategic-partnership", title: "Strategic Partnership", description: "Explore a technology or capability partnership.", enquiryType: "investment", adaptiveAnswer: {}, icon: <Handshake className="w-5 h-5" /> },
    { id: "project-collaboration", title: "Project Collaboration", description: "Collaborate on a specific development.", enquiryType: "challenge", adaptiveAnswer: {}, icon: <Users className="w-5 h-5" /> },
    { id: "not-sure", title: "I'm Not Sure What I Need", description: "", enquiryType: "not_sure", adaptiveAnswer: {}, icon: <Lightbulb className="w-5 h-5" /> },
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
        headline="WHAT ARE YOU LOOKING TO DO?"
        subheadline="What do you bring?"
        options={options}
        accentColor="text-nabtura-green"
        bgGradient="from-transparent"
        submitButtonText="EXPLORE OPPORTUNITIES →"
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

