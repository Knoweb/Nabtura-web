import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, TreePine, Droplets, Wrench, ShieldCheck, Leaf } from "lucide-react";
import Link from "next/link";

export default function UrbanForestsPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <SolutionHero 
        eyebrow="CREATE GREEN"
        headline="URBAN FORESTS"
        tagline="Bring nature into the built environment."
        bgImageUrl="/smart_landscapes_mockup_1788109519811.jpg"
        accentColor="text-nabtura-green"
      />

      {/* Possibilities */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Not Just Generic Forestry</h2>
          <p className="text-gray-400 text-xl font-light">We organize our urban forests around distinct possibilities and purposes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { title: "Dining Forest", desc: "Dine within nature." },
            { title: "Learning Forest", desc: "A classroom without walls." },
            { title: "Community Forest", desc: "Create green for everyone." },
            { title: "Corporate Retreat", desc: "A greener place to work and recharge." },
            { title: "Hospitality Forest", desc: "Make nature part of the stay." },
            { title: "Urban Oasis", desc: "Create a place to pause in the city." },
            { title: "Micro-Forest", desc: "High-density biodiversity in small spaces." },
          ].map((type, i) => (
            <div key={i} className="bg-nabtura-slate border border-white/5 p-8 rounded-3xl hover:border-nabtura-green transition-colors">
              <h4 className="text-white font-bold text-lg mb-3 tracking-wide">{type.title}</h4>
              <p className="text-gray-400 font-light text-sm">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Strategy */}
      <section className="py-24 bg-nabtura-slate border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-12">How NABTURA Designs It</h3>
              <div className="space-y-8">
                {[
                  { icon: Leaf, title: "Plant Strategy", desc: "Selecting resilient, native, or adapted species that thrive together in high-density formations." },
                  { icon: Droplets, title: "Water Strategy", desc: "Deep-root smart irrigation systems designed to establish forests quickly while conserving water." },
                  { icon: Wrench, title: "Implementation", desc: "Soil remediation, micro-climate creation, and precision planting techniques." },
                  { icon: ShieldCheck, title: "Long-Term Management", desc: "Continuous monitoring of soil health, canopy growth, and irrigation efficiency." },
                ].map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 group-hover:border-nabtura-green transition-colors">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-nabtura-green transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-gray-400 font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-black/50 p-12 rounded-[3rem] border border-white/5 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">Why Create One?</h3>
              <ul className="space-y-4 text-gray-300 font-light text-lg mb-12">
                <li>• Reduce urban heat islands significantly.</li>
                <li>• Improve local air quality and biodiversity.</li>
                <li>• Increase property and development value.</li>
                <li>• Create unique, marketable public destinations.</li>
                <li>• Meet ESG and environmental sustainability goals.</li>
              </ul>
              
              <div className="pt-8 border-t border-white/10">
                <Link href="/contact" className="group inline-flex items-center text-nabtura-green font-bold tracking-widest uppercase text-sm">
                  Create Your Forest
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
