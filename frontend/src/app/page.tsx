import Hero from "@/components/home/Hero";
import Challenge from "@/components/home/Challenge";
import Difference from "@/components/home/Difference";
import FeaturedSolutions from "@/components/home/FeaturedSolutions";
import WhoWeServe from "@/components/home/WhoWeServe";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenge />
      <Difference />
      <FeaturedSolutions />
      <WhoWeServe />
      {/* Remaining sections will be added here */}
    </>
  );
}
