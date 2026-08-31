import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function EnvironmentalProjectsPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero 
        eyebrow="TRANSFORM ENVIRONMENTS"
        headline="ENVIRONMENTAL PROJECTS"
        tagline="Environmental challenges need purpose-built solutions."
        bgImageUrl="/smart_landscapes_mockup_1788109519811.jpg"
        accentColor="text-nabtura-light-green"
      />

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Tell Us the Challenge
          </h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed">
            Not every environmental problem fits into a standard category. Potential project areas can be introduced carefully without overstating current capability. We evaluate, engineer, and manage bespoke solutions.
          </p>
        </div>

        {/* Workflow */}
        <div className="bg-nabtura-slate border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-nabtura-green/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col gap-8 relative z-10">
            {[
              { title: "NABTURA assesses it" },
              { title: "Develops the concept" },
              { title: "Identifies required disciplines" },
              { title: "Engineers the solution" },
              { title: "Implements & manages where appropriate" }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-nabtura-green transition-colors">
                  <span className="text-gray-500 font-bold group-hover:text-nabtura-light-green">0{i+1}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-300 group-hover:text-white transition-colors">{step.title}</h4>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/10 flex justify-center">
            <Link href="/contact" className="group inline-flex items-center text-white bg-white/5 hover:bg-nabtura-green hover:text-black border border-white/10 px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase transition-all shadow-lg">
              DISCUSS AN ENVIRONMENTAL PROJECT
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
