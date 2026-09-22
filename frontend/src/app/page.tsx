import Hero from "@/components/home/Hero";
import GlobalAnimatedBackground from "@/components/home/GlobalAnimatedBackground";
import MiniSelector from "@/components/audience/MiniSelector";
import { Sprout, Home, Droplets, Leaf, Sparkles, Trees, ShieldAlert, Building2, HelpCircle } from "lucide-react";

export const revalidate = 0;
import Challenge from "@/components/home/Challenge";
import Difference from "@/components/home/Difference";
import FeaturedSolutions from "@/components/home/FeaturedSolutions";
import Ecosystem from "@/components/home/Ecosystem";
import WhoWeServe from "@/components/home/WhoWeServe";
import GreenWhereItMatters from "@/components/home/GreenWhereItMatters";
import SpaceTransformation from "@/components/home/SpaceTransformation";
import SmartGrowing from "@/components/home/SmartGrowing";
import WaterIntelligence from "@/components/home/WaterIntelligence";
import GrowingGreen from "@/components/home/GrowingGreen";
import HowWeWork from "@/components/home/HowWeWork";
import Investment from "@/components/home/Investment";
import WeMakeItWork from "@/components/home/WeMakeItWork";
import UAECredibility from "@/components/home/UAECredibility";
import FinalCTA from "@/components/home/FinalCTA";
import { fetchAPI } from "@/lib/api";

import NurserySolutionsBanner from "@/components/home/NurserySolutionsBanner";
import SolutionsSelector from "@/components/home/SolutionsSelector";

export default async function Home() {
  let latestBlogs = [];
  try {
    const res = await fetchAPI("/blogs?populate=*&pagination[limit]=5&sort[0]=publishedAt:desc");
    if (res && res.data) {
      latestBlogs = res.data;
    }
  } catch (error) {
    console.warn("Failed to fetch latest blogs for home page slider", error);
  }

  return (
    <>
      <Hero />
      <SolutionsSelector />
      <div className="global-bg-wrapper relative z-10">
        <section className="py-20 relative z-10 bg-black/40 border-y border-white/5 backdrop-blur-xl">
          <div className="max-w-[90rem] mx-auto px-6">
            <MiniSelector
              headline="WHAT ARE YOU LOOKING TO DO?"
              subheadline="Choose what you're interested in and we'll take you to the right place."
              submitButtonText="TAKE ME THERE →"
              options={[
                { id: "grow-food", title: "Grow Food", description: "", enquiryType: "grow_food", icon: <Sprout className="w-5 h-5" /> },
                { id: "grow-home", title: "Grow Food at Home", description: "", enquiryType: "grow_food", icon: <Home className="w-5 h-5" /> },
                { id: "manage-water", title: "Manage Water", description: "", enquiryType: "smart_irrigation", icon: <Droplets className="w-5 h-5" /> },
                { id: "green-space", title: "Create a Green Space", description: "", enquiryType: "green_space", icon: <Leaf className="w-5 h-5" /> },
                { id: "green-exp", title: "Create a Green Experience", description: "", enquiryType: "green_space", icon: <Sparkles className="w-5 h-5" /> },
                { id: "green-land", title: "Green Land", description: "", enquiryType: "green_space", icon: <Trees className="w-5 h-5" /> },
                { id: "env-challenge", title: "Solve an Environmental Challenge", description: "", enquiryType: "challenge", icon: <ShieldAlert className="w-5 h-5" /> },
                { id: "invest", title: "Invest or Partner", description: "", enquiryType: "investment", icon: <Building2 className="w-5 h-5" /> },
                { id: "not-sure", title: "I'm Not Sure", description: "", enquiryType: "not_sure", icon: <HelpCircle className="w-5 h-5" /> }
              ]}
            />
          </div>
        </section>
        <Challenge />
        <Difference blogs={latestBlogs} />
        <FeaturedSolutions />
        <NurserySolutionsBanner />
        <Ecosystem />
        <WhoWeServe />
        <GreenWhereItMatters />
        <SpaceTransformation />
        <SmartGrowing />
        <WaterIntelligence />
        <GrowingGreen />
        <HowWeWork />
        <Investment />
        <WeMakeItWork />
        <UAECredibility />
        <FinalCTA />
      </div>
    </>
  );
}

