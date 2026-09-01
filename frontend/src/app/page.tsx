import Hero from "@/components/home/Hero";
import GlobalAnimatedBackground from "@/components/home/GlobalAnimatedBackground";

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
      <div className="global-bg-wrapper relative z-10">
        <Challenge />
        <Difference blogs={latestBlogs} />
        <FeaturedSolutions />
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

