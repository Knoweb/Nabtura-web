"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEnquiry } from "@/context/EnquiryContext";

const MICROGREENS = [
  "RADISH", "BROCCOLI", "PEA SHOOTS", "SUNFLOWER", "MUSTARD", 
  "RED CABBAGE", "KALE", "ARUGULA / ROCKET", "BASIL", "CORIANDER", 
  "RED AMARANTH", "BEET", "SWISS CHARD", "SHISO", "SORREL", 
  "OTHER / I'D LIKE TO EXPLORE"
];

const LOCATIONS = [
  "Restaurant", "Hotel / Resort", "Commercial Growing Facility", 
  "School / Institution", "Home", "Other"
];

const PURPOSES = [
  "Grow for My Restaurant / Hotel", "Commercial Production", 
  "Own Use", "Learning / Education", "Home Growing", "I'm Exploring"
];

export default function MicrogreensExplorer() {
  const router = useRouter();
  const { setEnquiryState } = useEnquiry();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("");

  const toggleCrop = (crop: string) => {
    setSelectedCrops(prev => 
      prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedCrops.length > 0) setStep(2);
    else if (step === 2 && location) setStep(3);
    else if (step === 3 && purpose) {
      // Setup context for contact page
      setEnquiryState({
        type: location === "Home" || purpose === "Home Growing" ? "grow_food_home" : "grow_food",
        adaptiveAnswer: {
          q1: selectedCrops.join(", "),
          q2: purpose,
          q3: location
        }
      });
      router.push("/contact#router");
    }
  };

  return (
    <div className="bg-nabtura-slate border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
      {/* Background Ambient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-green/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="text-center mb-10 relative z-10 border-b border-white/10 pb-8">
        <h2 className="text-xs tracking-[0.3em] font-bold text-nabtura-green uppercase mb-4">MICROGREENS EXPLORER</h2>
        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">EXPLORE WHAT<br/>YOU CAN GROW.</h3>
        <p className="text-gray-400 text-lg font-light">Small crops. Fresh possibilities. Select what interests you.</p>
      </div>

      <div className="relative z-10 min-h-[300px]">
        {step > 1 && (
          <button onClick={() => setStep(step - 1 as any)} className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4" /> BACK
          </button>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6">STEP 01 — SELECT MICROGREENS</h4>
            <div className="flex flex-wrap gap-3">
              {MICROGREENS.map(crop => (
                <button
                  key={crop}
                  onClick={() => toggleCrop(crop)}
                  className={`px-5 py-3 rounded-xl border text-xs font-bold tracking-widest uppercase transition-all ${selectedCrops.includes(crop) ? 'border-nabtura-green bg-nabtura-green/10 text-nabtura-green shadow-[0_0_15px_rgba(46,204,113,0.15)]' : 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'}`}
                >
                  {crop}
                </button>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={handleNext}
                disabled={selectedCrops.length === 0}
                className="bg-nabtura-green text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                CONTINUE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6">STEP 02 — LOCATION / USER</h4>
            <h5 className="text-2xl font-black text-white uppercase tracking-tight mb-8">WHERE WOULD YOU LIKE TO GROW?</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOCATIONS.map(loc => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className={`p-6 rounded-xl border text-sm font-bold tracking-widest uppercase transition-all ${location === loc ? 'border-nabtura-green bg-nabtura-green/10 text-nabtura-green' : 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'}`}
                >
                  {loc}
                </button>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={handleNext}
                disabled={!location}
                className="bg-nabtura-green text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                CONTINUE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6">STEP 03 — PURPOSE</h4>
            <h5 className="text-2xl font-black text-white uppercase tracking-tight mb-8">WHAT IS YOUR OBJECTIVE?</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PURPOSES.map(p => (
                <button
                  key={p}
                  onClick={() => setPurpose(p)}
                  className={`p-6 rounded-xl border text-sm font-bold tracking-widest uppercase transition-all ${purpose === p ? 'border-nabtura-green bg-nabtura-green/10 text-nabtura-green' : 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'}`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={handleNext}
                disabled={!purpose}
                className="bg-nabtura-green text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_0_20px_rgba(46,204,113,0.2)]"
              >
                CREATE ENQUIRY <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
