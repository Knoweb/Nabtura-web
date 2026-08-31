import SolutionHero from "@/components/solutions/SolutionHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SmartGreenhousesPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20">
      <SolutionHero 
        eyebrow="GROW FOOD"
        headline="SMART GREENHOUSES"
        tagline="Controlled environments for smarter food production."
        bgImageUrl="/smart_greenhouse_mockup_1788109457162.jpg"
        accentColor="text-nabtura-light-green"
      />

      {/* Why Controlled Growing */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Why Controlled Growing?
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-8">
              Conventional agriculture struggles in extreme climates. Our smart greenhouses create an optimal, isolated environment where every factor—climate, water, and nutrients—is managed to maximize yield and quality, regardless of the harsh conditions outside.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-nabtura-green font-bold text-2xl mb-2">365</h4>
                <p className="text-gray-400 text-sm tracking-widest uppercase">Days of Production</p>
              </div>
              <div className="bg-black/50 p-6 rounded-2xl border border-white/5">
                <h4 className="text-nabtura-green font-bold text-2xl mb-2">-90%</h4>
                <p className="text-gray-400 text-sm tracking-widest uppercase">Water Usage</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {["SMART", "CONTROLLED", "ADAPTED"].map((pillar) => (
              <div key={pillar} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-nabtura-green transition-colors">
                <h3 className="text-xl font-bold text-white tracking-widest uppercase mb-2">{pillar}</h3>
                <p className="text-gray-400 text-sm">
                  {pillar === "SMART" && "Technology supports better visibility, decisions and operation through sensors and automation."}
                  {pillar === "CONTROLLED" && "We create and manage the exact conditions required for peak growing performance."}
                  {pillar === "ADAPTED" && "Solutions developed around your location, climate, purpose, and commercial objective."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How the Smart Greenhouse Works</h2>
            <p className="text-gray-400 text-xl font-light">An integrated ecosystem of intelligent components.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Growing Systems", desc: "Hydroponics, Aquaponics, and Aeroponics." },
              { title: "Climate Management", desc: "Automated cooling, heating, and humidity control." },
              { title: "Water & Fertigation", desc: "Precision delivery of nutrients and recycled water." },
              { title: "Sensors & Cloud", desc: "24/7 monitoring, weather station integration, and remote alerts." }
            ].map((feature, i) => (
              <div key={i} className="bg-nabtura-slate border border-white/5 p-8 rounded-3xl">
                <div className="w-12 h-12 bg-nabtura-green/20 rounded-full flex items-center justify-center mb-6 text-nabtura-green font-bold text-xl">0{i+1}</div>
                <h4 className="text-white font-bold text-lg mb-3 tracking-wide">{feature.title}</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What can you grow & Who is it for */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">What Can You Grow?</h3>
            <ul className="space-y-4">
              {["Leafy Greens & Microgreens", "Vine Crops (Tomatoes, Cucumbers)", "Berries & Strawberries", "Herbs & Medicinal Plants"].map((item) => (
                <li key={item} className="flex items-center gap-4 text-gray-300">
                  <CheckCircle2 className="text-nabtura-green w-5 h-5" />
                  <span className="text-lg font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Who Is It For?</h3>
            <div className="flex flex-wrap gap-3">
              {["Investors", "Commercial Farms", "Developers", "Government", "Retailers", "Hotels"].map((audience) => (
                <span key={audience} className="px-4 py-2 rounded-full bg-black border border-white/20 text-gray-300 text-sm font-bold tracking-widest uppercase">
                  {audience}
                </span>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link href="/contact" className="group inline-flex items-center text-nabtura-green font-bold tracking-widest uppercase text-sm">
                Project Enquiry
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
