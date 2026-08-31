import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, MapPin, Building2, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero 
        eyebrow="ABOUT NABTURA"
        headline="BASED IN THE UAE. BUILT TO THINK BEYOND IT."
        tagline="Engineering green solutions for challenging environments."
        bgImageUrl="/possibility_smart_greenhouse_1788160454551.jpg"
        accentColor="text-nabtura-sand"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-content mb-8">Our Philosophy</h2>
            <p className="text-content-muted text-xl font-light leading-relaxed mb-6">
              Our UAE base places us close to some of the world’s most demanding challenges in climate, water management, food production, and urban greening. 
            </p>
            <p className="text-content-muted text-xl font-light leading-relaxed mb-8">
              That experience shapes how we approach every location. We believe that integrating nature into the built environment requires more than traditional landscaping; it requires a deep integration of engineering, science, and practical delivery.
            </p>
            
            <div className="bg-nabtura-slate border-l-4 border-nabtura-sand p-6 rounded-r-2xl">
              <p className="text-nabtura-sand font-bold tracking-widest text-sm uppercase">
                NABTURA is the green technology brand developed and powered by INFORGRID FZC.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-overlay border border-divider p-8 rounded-3xl">
              <MapPin className="text-nabtura-green w-8 h-8 mb-4" />
              <h4 className="text-content font-bold mb-2 tracking-wide">UAE Based</h4>
              <p className="text-content-muted text-sm font-light">Engineered in an environment that demands intelligence and efficiency.</p>
            </div>
            <div className="bg-overlay border border-divider p-8 rounded-3xl">
              <Lightbulb className="text-nabtura-blue w-8 h-8 mb-4" />
              <h4 className="text-content font-bold mb-2 tracking-wide">Science & Engineering</h4>
              <p className="text-content-muted text-sm font-light">Data-driven decisions for water, climate, and plant health.</p>
            </div>
            <div className="bg-overlay border border-divider p-8 rounded-3xl sm:col-span-2">
              <Building2 className="text-nabtura-sand w-8 h-8 mb-4" />
              <h4 className="text-content font-bold mb-2 tracking-wide">INFORGRID FZC</h4>
              <p className="text-content-muted text-sm font-light mb-6">The corporate platform supporting NABTURA's delivery, combining robust project execution with technological innovation.</p>
              <Link href="/contact" className="text-nabtura-sand hover:text-content font-bold tracking-widest text-xs uppercase flex items-center transition-colors">
                Contact INFORGRID FZC <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

