import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const possibilities = [
  { name: "Smart Villa Garden", desc: "Live green. Grow at home." },
  { name: "Forest Restaurant", desc: "Make green part of the dining experience." },
  { name: "Green School", desc: "Learning surrounded by nature." },
  { name: "Productive Rooftop", desc: "Put unused space to work." },
  { name: "Urban Oasis", desc: "Create a place to pause." },
  { name: "Smart Greenhouse Investment", desc: "Turn space into production." },
  { name: "Microgreen Restaurant", desc: "Grown here. Served here." },
  { name: "Water-Smart Resort", desc: "Make nature part of the stay." },
  { name: "Edible Corporate Campus", desc: "Work. Grow. Connect." },
  { name: "Desert-to-Green Transformation", desc: "Turn challenging land into possibility." },
];

export default function PossibilitiesPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero 
        eyebrow="POSSIBILITIES"
        headline="IMAGINE WHAT YOUR SPACE COULD BECOME."
        tagline="The NABTURA Possibility Gallery."
        bgImageUrl="/smart_landscapes_mockup_1788109519811.jpg"
        accentColor="text-nabtura-sand"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {possibilities.map((item, i) => (
            <div key={i} className="bg-nabtura-slate border border-white/5 p-8 rounded-3xl group hover:border-nabtura-green transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nabtura-green/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-nabtura-green/10 transition-colors" />
              <p className="text-nabtura-green text-xs font-bold tracking-[0.2em] uppercase mb-4">NABTURA Concept</p>
              <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
              <p className="text-gray-400 font-light mb-8">{item.desc}</p>
              <div className="mt-auto">
                <span className="text-sm font-bold text-white group-hover:text-nabtura-light-green tracking-widest uppercase flex items-center transition-colors">
                  Talk to Us <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white/5 backdrop-blur-xl/50 border border-white/10 rounded-[3rem] p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">Have a different location in mind?</h3>
          <p className="text-gray-400 text-lg font-light mb-8">
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
