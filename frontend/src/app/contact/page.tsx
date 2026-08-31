"use client";

import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, MapPin, TrendingUp, Lightbulb, Globe2, MessageSquare, Phone, Mail, MessageCircle } from "lucide-react";

const enquiryTypes = [
  { icon: MapPin, title: "I have a location to transform", color: "text-nabtura-green", border: "hover:border-nabtura-green" },
  { icon: TrendingUp, title: "I want to invest / partner", color: "text-nabtura-sand", border: "hover:border-nabtura-sand" },
  { icon: Lightbulb, title: "I need a specific solution", color: "text-nabtura-light-green", border: "hover:border-nabtura-light-green" },
  { icon: Globe2, title: "Discuss an environmental project", color: "text-nabtura-blue", border: "hover:border-nabtura-blue" },
  { icon: MessageSquare, title: "General Enquiry / Media", color: "text-gray-400", border: "hover:border-gray-400" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <SolutionHero 
        eyebrow="CONTACT NABTURA"
        headline="START A CONVERSATION."
        tagline="How can we help you grow?"
        bgImageUrl="/smart_greenhouse_mockup_1788109457162.jpg"
        accentColor="text-white"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Enquiry Router */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">What would you like to discuss?</h2>
            <div className="space-y-4">
              {enquiryTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <button key={i} className={`w-full flex items-center justify-between bg-nabtura-slate border border-white/5 p-6 rounded-2xl group transition-all ${type.border}`}>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                        <Icon className={`w-5 h-5 ${type.color}`} />
                      </div>
                      <span className="text-white font-bold text-lg">{type.title}</span>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${type.color} opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Direct Contact & Form placeholder */}
          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Direct Contact</h3>
              <div className="space-y-6 mb-12">
                <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-nabtura-green transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-nabtura-green transition-colors">
                    <MessageCircle className="w-5 h-5 text-nabtura-green" />
                  </div>
                  <span className="font-bold text-lg tracking-wide">WhatsApp Us</span>
                </a>
                <a href="tel:+971569300075" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="font-light text-lg tracking-wide">+971 56 9300075</span>
                </a>
                <a href="mailto:info@nabtura.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="font-light text-lg tracking-wide">info@nabtura.com</span>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-2">Corporate Entity</p>
              <p className="text-gray-300 font-light">INFORGRID FZC<br/>United Arab Emirates</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
