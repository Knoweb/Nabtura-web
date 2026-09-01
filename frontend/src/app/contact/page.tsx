"use client";

import { useState } from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, MapPin, TrendingUp, Lightbulb, Globe2, MessageSquare, Phone, Mail, MessageCircle, X } from "lucide-react";
import { submitEnquiry } from "@/lib/api";

const enquiryTypes = [
  { icon: MapPin, title: "I have a location to transform", color: "text-nabtura-green", border: "hover:border-nabtura-green", id: "location" },
  { icon: TrendingUp, title: "I want to invest / partner", color: "text-nabtura-sand", border: "hover:border-nabtura-sand", id: "invest" },
  { icon: Lightbulb, title: "I need a specific solution", color: "text-nabtura-light-green", border: "hover:border-nabtura-light-green", id: "solution" },
  { icon: Globe2, title: "Discuss an environmental project", color: "text-nabtura-blue", border: "hover:border-nabtura-blue", id: "environmental" },
  { icon: MessageSquare, title: "General Enquiry / Media", color: "text-content-muted", border: "hover:border-gray-400", id: "general" },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitEnquiry({ ...formData, enquiryType: selectedType || "general" });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-transparent pt-20">
      <SolutionHero
        eyebrow="CONTACT NABTURA"
        headline="START A CONVERSATION"
        tagline="How can we help you grow?"
        bgImageUrl="/possibility_smart_greenhouse_1788160454551.jpg"
        accentColor="text-content"
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Enquiry Form Area */}
          <div>
            {!selectedType ? (
              <>
                <h2 className="text-3xl font-bold text-content mb-8">What would you like to discuss?</h2>
                <div className="space-y-4">
                  {enquiryTypes.map((type, i) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full flex items-center justify-between bg-nabtura-slate border border-divider p-6 rounded-2xl group transition-all ${type.border}`}
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-full bg-overlay backdrop-blur-xl flex items-center justify-center border border-divider group-hover:border-divider transition-colors">
                            <Icon className={`w-5 h-5 ${type.color}`} />
                          </div>
                          <span className="text-content font-bold text-lg">{type.title}</span>
                        </div>
                        <ArrowRight className={`w-5 h-5 ${type.color} opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all`} />
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="bg-nabtura-slate p-8 rounded-[2rem] border border-divider">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-content">Let's Discuss</h2>
                    <p className="text-nabtura-green mt-2 font-bold tracking-widest text-sm uppercase">
                      {enquiryTypes.find(t => t.id === selectedType)?.title}
                    </p>
                  </div>
                  <button onClick={() => setSelectedType(null)} className="text-content-muted hover:text-content transition-colors">
                    <X size={24} />
                  </button>
                </div>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-nabtura-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <ArrowRight className="text-black w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-content mb-2">Message Sent</h3>
                    <p className="text-content-muted">We will be in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold tracking-widest uppercase text-content-muted mb-2">Name</label>
                      <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-overlay backdrop-blur-xl border border-divider rounded-xl p-4 text-content focus:outline-none focus:border-nabtura-green transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold tracking-widest uppercase text-content-muted mb-2">Email</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-overlay backdrop-blur-xl border border-divider rounded-xl p-4 text-content focus:outline-none focus:border-nabtura-green transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold tracking-widest uppercase text-content-muted mb-2">Phone</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-overlay backdrop-blur-xl border border-divider rounded-xl p-4 text-content focus:outline-none focus:border-nabtura-green transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold tracking-widest uppercase text-content-muted mb-2">Message</label>
                      <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full bg-overlay backdrop-blur-xl border border-divider rounded-xl p-4 text-content focus:outline-none focus:border-nabtura-green transition-colors"></textarea>
                    </div>

                    {status === "error" && <p className="text-red-500 text-sm font-bold">Failed to send message. Please try again.</p>}

                    <button type="submit" disabled={status === "loading"} className="w-full bg-nabtura-green text-black font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-nabtura-light-green transition-colors disabled:opacity-50">
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Direct Contact & Form placeholder */}
          <div className="bg-overlay p-10 rounded-[3rem] border border-divider flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-content mb-8">Direct Contact</h3>
              <div className="space-y-6 mb-12">
                <a href="#" className="flex items-center gap-4 text-content-muted hover:text-nabtura-green transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-overlay backdrop-blur-xl border border-divider flex items-center justify-center group-hover:border-nabtura-green transition-colors">
                    <MessageCircle className="w-5 h-5 text-nabtura-green" />
                  </div>
                  <span className="font-bold text-lg tracking-wide">WhatsApp Us</span>
                </a>
                <a href="tel:+971569300075" className="flex items-center gap-4 text-content-muted hover:text-content transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-overlay backdrop-blur-xl border border-divider flex items-center justify-center group-hover:border-white transition-colors">
                    <Phone className="w-5 h-5 text-content-muted" />
                  </div>
                  <span className="font-light text-lg tracking-wide">+971 56 9300075</span>
                </a>
                <a href="mailto:info@nabtura.com" className="flex items-center gap-4 text-content-muted hover:text-content transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-overlay backdrop-blur-xl border border-divider flex items-center justify-center group-hover:border-white transition-colors">
                    <Mail className="w-5 h-5 text-content-muted" />
                  </div>
                  <span className="font-light text-lg tracking-wide">info@nabtura.com</span>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-divider">
              <p className="text-content-muted text-sm font-bold tracking-widest uppercase mb-2">Corporate Entity</p>
              <p className="text-content-muted font-light mb-6">INFORGRID FZC<br />Sharjah Publishing City, United Arab Emirates</p>

              {/* Map Embed Tile */}
              <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-divider group relative">
                <iframe
                  src="https://maps.google.com/maps?q=Sharjah%20Publishing%20City%20Free%20Zone&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full absolute inset-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

