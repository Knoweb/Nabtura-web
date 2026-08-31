import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, CheckCircle2, Search, Pickaxe, Droplets, Leaf, Settings, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function DesertGreeningPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero 
        eyebrow="CREATE GREEN"
        headline="DESERT GREENING"
        tagline="Where others see arid land, we see possibility."
        bgImageUrl="/smart_landscapes_mockup_1788109519811.jpg"
        accentColor="text-nabtura-sand"
      />

      {/* The Challenge & Applications */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-content mb-8">
              The Challenge
            </h2>
            <p className="text-content-muted text-xl font-light leading-relaxed mb-8">
              Transforming desert land into productive or purposeful green space requires overcoming extreme heat, poor soil quality, high salinity, and water scarcity. Conventional landscaping fails here. Success requires deep engineering, scientific plant selection, and absolute precision in water management.
            </p>
          </div>
          
          <div className="bg-nabtura-slate p-12 rounded-[3rem] border border-divider">
            <h3 className="text-2xl font-bold text-content mb-6">Key Applications</h3>
            <ul className="space-y-4">
              {["Real Estate Developments", "Remote Hospitality / Eco-Resorts", "Municipalities", "Private Landowners", "Infrastructure Corridors", "Environmental Initiatives"].map((app) => (
                <li key={app} className="flex items-center gap-4 text-content-muted">
                  <CheckCircle2 className="text-nabtura-sand w-5 h-5 shrink-0" />
                  <span className="text-lg font-light">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Structured Approach */}
      <section className="py-24 bg-nabtura-slate border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-content mb-6">Our Engineered Approach</h2>
            <p className="text-content-muted text-xl font-light max-w-3xl mx-auto">We do not fight the environment; we engineer solutions that adapt to it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Site Assessment", desc: "Topographical, soil, and hydrological analysis." },
              { icon: Pickaxe, title: "Soil Strategy", desc: "Developing the growing medium, structural amendments, and salinity management." },
              { icon: Droplets, title: "Water Strategy", desc: "Sourcing, desalination (if required), storage, and ultra-efficient delivery design." },
              { icon: Leaf, title: "Plant Selection", desc: "Choosing drought-tolerant, hyper-arid native or adaptive species." },
              { icon: Settings, title: "Establishment", desc: "Micro-climate creation (windbreaks/shading) and careful phased planting." },
              { icon: ShieldCheck, title: "Monitoring", desc: "Sensors tracking soil moisture and plant stress." },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="bg-overlay backdrop-blur-xl border border-divider p-8 rounded-3xl hover:border-nabtura-sand/50 transition-colors">
                  <Icon className="text-nabtura-sand w-8 h-8 mb-6" />
                  <h4 className="text-content font-bold text-lg mb-3 tracking-wide">{step.title}</h4>
                  <p className="text-content-muted font-light text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link href="/contact" className="group inline-flex items-center text-black bg-nabtura-sand hover:bg-yellow-500 px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all shadow-lg shadow-nabtura-sand/20">
              SHOW US THE LAND
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

