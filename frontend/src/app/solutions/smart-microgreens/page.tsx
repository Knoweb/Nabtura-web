import SolutionHero from "@/components/solutions/SolutionHero";
import { CheckCircle2, ArrowRight, ChefHat, Building, Store, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function SmartMicrogreensPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero 
        eyebrow="GROW FOOD"
        headline="SMART MICROGREENS"
        tagline="Small spaces. Smart growing. Fresh possibilities."
        bgImageUrl="/smart_microgreens_mockup_1788109487031.jpg"
        accentColor="text-nabtura-light-green"
      />

      {/* Hospitality Concept */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-divider text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-content uppercase leading-tight mb-8">
          GROWN HERE. <br className="md:hidden" />
          <span className="text-nabtura-light-green">HARVESTED HERE.</span> <br className="md:hidden" />
          SERVED HERE.
        </h2>
        <p className="text-xl md:text-2xl font-light text-content-muted max-w-3xl mx-auto mb-12">
          Grow closer to where food is used. A highly commercial, visually distinct solution that turns unused indoor spaces into fresh production hubs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["WE BUILD. YOU GROW.", "WE BUILD. WE MANAGE.", "WE GROW. YOU HARVEST."].map((model) => (
            <div key={model} className="bg-nabtura-slate border border-divider p-6 rounded-2xl">
              <h4 className="text-nabtura-light-green font-bold tracking-widest text-sm uppercase">{model}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Structure & How it works */}
      <section className="py-24 bg-nabtura-slate border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-content mb-6">Why Smart Microgreen Growing?</h3>
              <p className="text-content-muted text-lg font-light leading-relaxed mb-8">
                Microgreens are high-value, nutrient-dense crops that can be grown in tightly controlled indoor environments. Our systems eliminate the need for arable land, relying on precise lighting, water, and nutrient delivery to produce ultra-fresh greens right where they are needed.
              </p>
              
              <h4 className="text-xl font-bold text-content mb-4">Controlled Indoor Environment</h4>
              <ul className="space-y-4 mb-8">
                {["Automated LED lighting spectrums", "Vertical racking for space efficiency", "Automated climate and humidity", "Smart water recirculation"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-content-muted">
                    <CheckCircle2 className="text-nabtura-green w-5 h-5 shrink-0" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-overlay backdrop-blur-xl/50 border border-divider p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-content mb-8">Who Is It For?</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Restaurants", icon: ChefHat },
                  { title: "Hotels", icon: Building },
                  { title: "Entrepreneurs", icon: ArrowRight },
                  { title: "Retail/Food", icon: Store },
                  { title: "Schools", icon: GraduationCap },
                  { title: "Institutions", icon: Building },
                ].map((audience, i) => {
                  const Icon = audience.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-overlay flex items-center justify-center group-hover:bg-nabtura-green/20 transition-colors">
                        <Icon className="w-5 h-5 text-content-muted group-hover:text-nabtura-light-green" />
                      </div>
                      <span className="text-content font-bold tracking-wide">{audience.title}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-12 pt-8 border-t border-divider text-center">
                <Link href="/contact" className="group inline-flex items-center text-content bg-overlay hover:bg-nabtura-green hover:text-black px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all">
                  Start Your Project
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

