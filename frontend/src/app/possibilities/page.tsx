import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import PossibilitiesGallery from "@/components/possibilities/PossibilitiesGallery";

export const revalidate = 0; // Fetch fresh data on each request

const fallbackPossibilities = [
  { 
    name: "Smart Villa Garden", 
    situation: "High-end luxury property lacking modern ecological features.",
    idea: "A glowing, futuristic green tech garden.",
    solutions: "Automated hydroponics, mood-lit vertical farming, water reclamation.",
    benefits: "Luxury aesthetics, fresh home produce, increased property value.", 
    image: "/images/possibilities/possibility_villa_garden_1788259031083.webp" 
  },
  { 
    name: "Forest Restaurant", 
    situation: "Standard dining room lacking atmosphere.",
    idea: "Dine surrounded by dense indoor tropical trees and glowing moss.",
    solutions: "Living walls, indoor climate control, botanical ambient lighting.",
    benefits: "Unique dining experience, natural air purification, premium branding.", 
    image: "/images/possibilities/possibility_forest_restaurant_1788259046486.webp" 
  },
  { 
    name: "Green School", 
    situation: "Disconnect between students and food sources.",
    idea: "Educate the next generation with indoor vertical farming.",
    solutions: "Educational hydroponic systems, interactive grow panels.",
    benefits: "Hands-on learning, fresh cafeteria food, eco-awareness.", 
    image: "/images/possibilities/possibility_green_school_1788259063374.webp" 
  },
  { 
    name: "Productive Rooftop", 
    situation: "Underutilized, barren urban roof space.",
    idea: "Advanced aeroponic growing towers overlooking the city.",
    solutions: "Wind-resistant aeroponics, smart irrigation, lightweight infrastructure.",
    benefits: "Localized food supply, urban cooling, profitable space utilization.", 
    image: "/images/possibilities/possibility_productive_rooftop_1788259076379.webp" 
  },
  { 
    name: "Urban Oasis", 
    situation: "Concrete-heavy, heat-trapping city environments.",
    idea: "A lush, towering green oasis with cooling water features.",
    solutions: "Vertical forests, misting systems, bio-filtration.",
    benefits: "Reduced heat island effect, community well-being, striking architecture.", 
    image: "/images/possibilities/possibility_urban_oasis_1788259090378.webp" 
  },
  { 
    name: "Smart Greenhouse Investment", 
    situation: "Need for scalable, high-yield agriculture investments.",
    idea: "High-tech facilities with glowing crops and robotics.",
    solutions: "AI-driven climate control, robotic harvesting, precision agriculture.",
    benefits: "High ROI, year-round yields, minimal resource waste.", 
    image: "/images/possibilities/possibility_smart_greenhouse_1788259107781.webp" 
  },
  { 
    name: "Microgreen Restaurant", 
    situation: "High costs and spoilage of premium ingredients.",
    idea: "Chefs harvest microgreens directly from glowing dining walls.",
    solutions: "In-restaurant micro-farms, harvest-on-demand tech.",
    benefits: "Ultimate freshness, zero transport emissions, visual appeal.", 
    image: "/images/possibilities/possibility_microgreen_restaurant_1788259126207.webp" 
  },
  { 
    name: "Water-Smart Resort", 
    situation: "High water consumption in hospitality.",
    idea: "Bioluminescent pools and advanced purification displays.",
    solutions: "Closed-loop water recycling, aesthetic bio-filters.",
    benefits: "Eco-tourism appeal, massive water savings, mesmerizing aesthetics.", 
    image: "/images/possibilities/possibility_water_resort_1788259143543.webp" 
  },
  { 
    name: "Edible Corporate Campus", 
    situation: "Uninspiring office parks causing employee fatigue.",
    idea: "Courtyards surrounded by fruit-bearing vertical gardens.",
    solutions: "Corporate farming, relaxing biophilic design, employee harvest programs.",
    benefits: "Improved mental health, talent retention, corporate sustainability.", 
    image: "/images/possibilities/possibility_corporate_campus_1788259157723.webp" 
  },
  { 
    name: "Desert-to-Green Transformation", 
    situation: "Arid, unusable desert land.",
    idea: "A thriving green ecosystem turning sand into life.",
    solutions: "Sub-surface smart irrigation, drought-resistant soil tech, solar desalination.",
    benefits: "Land reclamation, food security in extreme climates, eco-restoration.", 
    image: "/images/possibilities/possibility_desert_transformation_1788259170943.webp" 
  },
];

export default async function PossibilitiesPage() {
  let possibilities = [];
  try {
    const res = await fetchAPI("/possibilities?populate=*");
    if (res.data && res.data.length > 0) {
      possibilities = res.data;
    }
  } catch (error) {
    console.error("Failed to fetch possibilities", error);
  }

  // Use fallback if no dynamic possibilities found
  const displayPossibilities = possibilities.length > 0 ? possibilities : fallbackPossibilities;

  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero 
        eyebrow="POSSIBILITIES"
        headline="IMAGINE WHAT YOUR SPACE COULD BECOME"
        tagline="The NABTURA Possibility Gallery."
        bgImageUrl="/possibility_urban_oasis_1788160434157.webp"
        accentColor="text-nabtura-sand"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PossibilitiesGallery items={displayPossibilities} />

        <div className="mt-24 bg-overlay backdrop-blur-xl/50 border border-divider rounded-[3rem] p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-content mb-6">Have a different location in mind?</h3>
          <p className="text-content-muted text-lg font-light mb-8">
            Tell us about your space. We assess the situation, develop the idea, and engineer the NABTURA solution.
          </p>
          <Link href="/contact" className="inline-flex items-center text-black bg-nabtura-green hover:bg-nabtura-light-green px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all shadow-lg">
            SHOW US YOUR LOCATION
            <ArrowRight className="ml-3 w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}

