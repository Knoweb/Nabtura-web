import SolutionHero from "@/components/solutions/SolutionHero";
import Link from "next/link";
import { Sprout, Droplets, TreePine, Globe2, ArrowRight } from "lucide-react";

const solutionCategories = [
  {
    title: "GROW FOOD",
    icon: Sprout,
    color: "text-nabtura-light-green",
    borderColor: "hover:border-nabtura-light-green",
    description: "Intelligent solutions for fresh food production in any environment.",
    imageSrc: "/images/greenhouse.jpg",
    links: [
      { name: "Smart Greenhouses", href: "/solutions/smart-greenhouses", desc: "Climate-controlled growing spaces." },
      { name: "Smart Microgreens", href: "/solutions/smart-microgreens", desc: "Compact indoor nutrient-dense farming." }
    ]
  },
  {
    title: "MANAGE WATER",
    icon: Droplets,
    color: "text-nabtura-blue",
    borderColor: "hover:border-nabtura-blue",
    description: "Every drop has value. Smart water management and irrigation.",
    imageSrc: "/images/landscapes.jpg",
    links: [
      { name: "Smart Irrigation", href: "/solutions/smart-irrigation", desc: "Precision water delivery systems." }
    ]
  },
  {
    title: "CREATE GREEN",
    icon: TreePine,
    color: "text-nabtura-green",
    borderColor: "hover:border-nabtura-green",
    description: "Bring purposeful greenery into increasingly built environments.",
    imageSrc: "/images/dubai-landscapes.jpg",
    links: [
      { name: "Landscapes", href: "/solutions/landscapes", desc: "Beautiful, productive outdoor spaces." },
      { name: "Urban Forests", href: "/solutions/urban-forests", desc: "Dense green spaces in the city." },
      { name: "Desert Greening", href: "/solutions/desert-greening", desc: "Transforming arid land into life." }
    ]
  },
  {
    title: "TRANSFORM ENVIRONMENTS",
    icon: Globe2,
    color: "text-nabtura-sand",
    borderColor: "hover:border-nabtura-sand",
    description: "Large scale environmental impact and restoration projects.",
    imageSrc: "/images/microgreens.jpg",
    links: [
      { name: "Environmental Projects", href: "/solutions/environmental-projects", desc: "Strategic natural transformations." }
    ]
  }
];

export default function SolutionsDirectoryPage() {
  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero 
        eyebrow="ALL SOLUTIONS"
        headline="OUR CAPABILITIES."
        tagline="Explore how we grow food, manage water, and create green spaces."
        bgImageUrl="/images/dubai-landscapes.jpg"
        accentColor="text-nabtura-green"
      />

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {solutionCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div key={i} className={`relative overflow-hidden group border border-white/10 rounded-[3rem] transition-colors ${category.borderColor}`}>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.imageSrc})` }}
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

                <div className="relative z-10 p-10 h-full flex flex-col">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center border border-white/10 backdrop-blur-md">
                      <Icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-widest uppercase text-white shadow-black drop-shadow-md">{category.title}</h2>
                      <p className="text-gray-300 mt-2 text-sm max-w-md drop-shadow-md">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-auto">
                    {category.links.map((link, j) => (
                      <Link 
                        key={j} 
                        href={link.href}
                        className="group/link block bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-black/70 hover:border-white/30 transition-all"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className={`font-bold text-lg text-gray-100 group-hover/link:${category.color} transition-colors`}>{link.name}</h3>
                            <p className="text-sm text-gray-400 mt-1">{link.desc}</p>
                          </div>
                          <ArrowRight className={`w-5 h-5 text-gray-500 group-hover/link:${category.color} group-hover/link:translate-x-2 transition-all`} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
