import SolutionHero from "@/components/solutions/SolutionHero";
import { CheckCircle2, ArrowRight, Droplets, Waves, CloudRain, Cpu, Activity, Smartphone } from "lucide-react";
import Link from "next/link";

export default function SmartIrrigationPage() {
  return (
    <main className="min-h-screen bg-nabtura-slate pt-20">
      <SolutionHero 
        eyebrow="MANAGE WATER"
        headline="SMART IRRIGATION"
        tagline="Every drop has a job."
        bgImageUrl="/smart_greenhouse_mockup_1788109457162.jpg"
        accentColor="text-nabtura-blue"
      />

      {/* The Challenge & Standalone Solution */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-content mb-8">
              The Water Challenge
            </h2>
            <p className="text-content-muted text-xl font-light leading-relaxed mb-8">
              In challenging climates, water is the most valuable and scarce resource. Conventional irrigation methods result in massive water loss through evaporation, runoff, and over-watering. NABTURA’s intelligent systems ensure that water is delivered precisely when and where it is needed, drastically reducing waste while improving plant health.
            </p>
            <div className="bg-nabtura-blue/10 border-l-4 border-nabtura-blue p-6 rounded-r-2xl">
              <h4 className="text-nabtura-blue font-bold tracking-widest text-sm uppercase mb-2">Available as a Standalone Solution</h4>
              <p className="text-content-muted font-light text-lg">
                You don't need a full NABTURA greenhouse or landscape to benefit. You can approach us purely to upgrade or install a world-class smart irrigation network.
              </p>
            </div>
          </div>
          
          <div className="bg-overlay backdrop-blur-xl/50 p-12 rounded-[3rem] border border-divider">
            <h3 className="text-2xl font-bold text-content mb-6">Applications</h3>
            <ul className="space-y-4">
              {["Agriculture", "Commercial Landscapes", "Urban Forests", "Hospitality / Resorts", "Premium Residential", "Desert Greening"].map((app) => (
                <li key={app} className="flex items-center gap-4 text-content-muted">
                  <CheckCircle2 className="text-nabtura-blue w-5 h-5 shrink-0" />
                  <span className="text-lg font-light">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Makes It Smart */}
      <section className="py-24 bg-transparent border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-content mb-6">What Makes Irrigation Smart?</h2>
            <p className="text-content-muted text-xl font-light">An ecosystem designed to sense, decide, and deliver.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "Precision Delivery", desc: "Drip lines and micro-sprinklers target the root zone directly, avoiding evaporation." },
              { icon: CloudRain, title: "Weather Data", desc: "Real-time meteorological integration stops watering when rain or high humidity is detected." },
              { icon: Activity, title: "Soil Sensors", desc: "Constant monitoring of soil moisture ensures watering only happens when the plant actually needs it." },
              { icon: Waves, title: "Zoning", desc: "Different plants have different needs. The network is divided into independent hydro-zones." },
              { icon: Cpu, title: "Automation", desc: "Algorithmic decision-making removes human error and ensures 24/7 reliability." },
              { icon: Smartphone, title: "Remote Control", desc: "Full visibility and control of the entire irrigation network from a mobile device or control room." },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-nabtura-slate border border-divider p-8 rounded-3xl hover:border-nabtura-blue/50 transition-colors group">
                  <div className="w-12 h-12 bg-nabtura-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-nabtura-blue/20 transition-colors">
                    <Icon className="text-nabtura-blue w-6 h-6" />
                  </div>
                  <h4 className="text-content font-bold text-lg mb-3 tracking-wide">{feature.title}</h4>
                  <p className="text-content-muted font-light text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link href="/contact" className="group inline-flex items-center text-content bg-overlay hover:bg-nabtura-blue hover:text-black px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all">
              Request an Irrigation Assessment
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

