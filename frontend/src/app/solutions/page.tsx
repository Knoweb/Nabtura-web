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
        <div className="columns-1 lg:columns-2 gap-8 lg:gap-12">
          {solutionCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div key={i} className={`group bg-nabtura-slate border border-white/10 rounded-[2rem] overflow-hidden transition-all hover:border-white/20 break-inside-avoid mb-8 lg:mb-12 shadow-2xl`}>
                {/* Top Image Section */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${category.imageSrc})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nabtura-slate to-transparent" />
                  
                  {/* Icon floating on the image edge */}
                  <div className="absolute bottom-4 left-8 w-14 h-14 rounded-2xl bg-nabtura-slate/80 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl">
                    <Icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                </div>
                
                {/* Bottom Content Section */}
                <div className="p-8 pt-4">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold tracking-widest uppercase text-white mb-2">{category.title}</h2>
                    <p className="text-gray-400 text-base leading-relaxed">{category.description}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {category.links.map((link, j) => (
                      <Link 
                        key={j} 
                        href={link.href}
                        className="group/link flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                      >
                        <div>
                          <h3 className={`font-semibold text-lg text-gray-200 group-hover/link:${category.color} transition-colors`}>{link.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{link.desc}</p>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover/link:bg-white/10 transition-colors`}>
                          <ArrowRight className={`w-4 h-4 text-gray-400 group-hover/link:${category.color} transition-colors`} />
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
