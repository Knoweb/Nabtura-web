import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, Leaf, Building, Home, GraduationCap, Briefcase, Wrench } from "lucide-react";
import Link from "next/link";

export default function LandscapesPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <SolutionHero 
        eyebrow="CREATE GREEN"
        headline="LANDSCAPES"
        tagline="Green spaces designed to perform."
        bgImageUrl="/smart_landscapes_mockup_1788109519811.jpg"
        accentColor="text-nabtura-green"
      />

      {/* Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-white uppercase leading-tight mb-8">
          OUR LANDSCAPE <span className="text-nabtura-light-green">PHILOSOPHY</span>
        </h2>
        <p className="text-xl md:text-2xl font-light text-gray-400 max-w-4xl mx-auto mb-16">
          This is not conventional landscaping. We don't just plant greenery; we engineer living systems. Every NABTURA landscape is built on a foundation of intelligence: they are Smart, Water-Conscious, and Purposeful.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-nabtura-slate border border-white/5 p-8 rounded-3xl">
            <h4 className="text-white font-bold tracking-widest text-xl uppercase mb-4">Smart</h4>
            <p className="text-gray-400 font-light">Driven by data, sensors, and automated management to ensure health and longevity.</p>
          </div>
          <div className="bg-nabtura-slate border border-white/5 p-8 rounded-3xl">
            <h4 className="text-nabtura-blue font-bold tracking-widest text-xl uppercase mb-4">Water-Conscious</h4>
            <p className="text-gray-400 font-light">Integrated with precision irrigation that eliminates waste and values every drop.</p>
          </div>
          <div className="bg-nabtura-slate border border-white/5 p-8 rounded-3xl">
            <h4 className="text-nabtura-light-green font-bold tracking-widest text-xl uppercase mb-4">Purposeful</h4>
            <p className="text-gray-400 font-light">Designed to provide tangible value—whether it's shade, food, relaxation, or beauty.</p>
          </div>
        </div>
      </section>

      {/* Types of Landscapes */}
      <section className="py-24 bg-nabtura-slate border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Landscape Solutions</h2>
            <p className="text-gray-400 text-xl font-light">Tailored designs for specific commercial and residential needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building, title: "Commercial", desc: "Green spaces that enhance property value and corporate identity." },
              { icon: Briefcase, title: "Hospitality", desc: "Resort and hotel environments that create memorable guest experiences." },
              { icon: Home, title: "Residential / Villa", desc: "Premium outdoor living spaces managed intelligently." },
              { icon: Leaf, title: "Edible Landscapes", desc: "Beautiful environments that also produce fresh food and herbs." },
              { icon: GraduationCap, title: "Educational", desc: "Interactive green spaces that serve as living classrooms." },
              { icon: Building, title: "Corporate", desc: "Green retreats and courtyards that improve employee wellbeing." },
            ].map((type, i) => {
              const Icon = type.icon;
              return (
                <div key={i} className="bg-black/50 border border-white/5 p-8 rounded-3xl hover:border-nabtura-green/50 transition-colors group">
                  <Icon className="text-nabtura-green w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-lg mb-3 tracking-wide">{type.title}</h4>
                  <p className="text-gray-400 font-light text-sm">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery & Support */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-8">End-to-End Delivery</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
              
              {[
                { title: "Design", desc: "Conceptualizing purposeful green spaces." },
                { title: "Build", desc: "Expert implementation and engineering." },
                { title: "Manage", desc: "Ongoing operational oversight." },
                { title: "SmartCare", desc: "Technical maintenance and system monitoring." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black border border-nabtura-green flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-nabtura-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-gray-400 font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Supported by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nabtura-light-green to-nabtura-green">
                Smart Irrigation & Nursery Infrastructure
              </span>
            </h3>
            <p className="text-gray-400 text-xl font-light mb-12">
              Every landscape is powered by our proprietary smart irrigation networks and backed by our dedicated nursery support, ensuring your plants thrive from day one.
            </p>
            
            <Link href="/contact" className="group inline-flex items-center text-black bg-nabtura-green hover:bg-nabtura-light-green px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all shadow-lg shadow-nabtura-green/20">
              Transform My Space
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
