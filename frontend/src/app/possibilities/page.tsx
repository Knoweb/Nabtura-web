import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";

export const revalidate = 0; // Fetch fresh data on each request

const fallbackPossibilities = [
  { name: "Smart Villa Garden", desc: "Live green. Grow at home.", image: "/possibility_villa_garden_1788160281633.jpg" },
  { name: "Forest Restaurant", desc: "Make green part of the dining experience.", image: "/possibility_forest_restaurant_1788160295877.jpg" },
  { name: "Green School", desc: "Learning surrounded by nature.", image: "/possibility_green_school_1788160313277.jpg" },
  { name: "Productive Rooftop", desc: "Put unused space to work.", image: "/possibility_productive_rooftop_1788160358894.jpg" },
  { name: "Urban Oasis", desc: "Create a place to pause.", image: "/possibility_urban_oasis_1788160434157.jpg" },
  { name: "Smart Greenhouse Investment", desc: "Turn space into production.", image: "/possibility_smart_greenhouse_1788160454551.jpg" },
  { name: "Microgreen Restaurant", desc: "Grown here. Served here.", image: "/possibility_microgreen_restaurant_1788160519287.jpg" },
  { name: "Water-Smart Resort", desc: "Make nature part of the stay.", image: "/possibility_water_smart_resort_1788160534313.jpg" },
  { name: "Edible Corporate Campus", desc: "Work. Grow. Connect.", image: "/possibility_edible_corporate_campus_1788160553884.jpg" },
  { name: "Desert-to-Green Transformation", desc: "Turn challenging land into possibility.", image: "/possibility_desert_to_green_1788160571631.jpg" },
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
        bgImageUrl="/possibility_urban_oasis_1788160434157.jpg"
        accentColor="text-nabtura-sand"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPossibilities.map((item: any, i: number) => {
            const isDynamic = item.id !== undefined;
            const name = isDynamic ? (item.name || item.Name) : item.name;
            const desc = isDynamic ? (item.desc || item.Desc) : item.desc;
            
            // Handle image extraction based on Strapi response
            let imageUrl = isDynamic ? null : item.image;
            if (isDynamic) {
              const imageObj = item.image || item.Image;
              if (imageObj && imageObj.url) {
                imageUrl = imageObj.url.startsWith('http') ? imageObj.url : `http://localhost:1337${imageObj.url}`;
              }
            }

            return (
            <Link href="/contact" key={i} className="block group">
              <div className="bg-nabtura-slate border border-divider rounded-3xl group-hover:border-nabtura-green transition-colors relative overflow-hidden flex flex-col h-full cursor-pointer">
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden shrink-0 bg-black/50">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={name || "Possibility Image"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-nabtura-slate via-nabtura-slate/20 to-transparent z-10" />
                </div>
                
                {/* Content Container */}
                <div className="p-8 pt-4 flex-1 flex flex-col relative z-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-nabtura-green/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-nabtura-green/10 transition-colors" />
                  <p className="text-nabtura-green text-xs font-bold tracking-[0.2em] uppercase mb-4">NABTURA Concept</p>
                  <h3 className="text-2xl font-bold text-content mb-3">{name}</h3>
                  <p className="text-content-muted font-light mb-8">{desc}</p>
                  <div className="mt-auto">
                    <span className="text-sm font-bold text-content group-hover:text-nabtura-light-green tracking-widest uppercase flex items-center transition-colors">
                      Talk to Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

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

