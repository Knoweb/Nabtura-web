"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEnquiry } from "@/context/EnquiryContext";

const INTERESTS = [
  "TOMATOES & VINES", "LEAFY GREENS", "HERBS", "BERRIES", 
  "MICROGREENS", "FLOWERS", "SPECIALTY CROPS", "I'D LIKE TO EXPLORE"
];

const PURPOSES = [
  "Commercial Production", "Retail / Farm Shop", 
  "Hospitality / Resort", "Research / Education", "I'm Exploring"
];

const CLIMATES = [
  "Desert / Arid Climate", "Tropical / Humid", 
  "Temperate / Mild", "Urban / Indoor", "Not Sure Yet"
];

export default function WhatCanIGrow() {
  const router = useRouter();
  const { setEnquiryState } = useEnquiry();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [purpose, setPurpose] = useState("");
  const [climate, setClimate] = useState("");

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedInterests.length > 0) setStep(2);
    else if (step === 2 && purpose) setStep(3);
    else if (step === 3 && climate) {
      setEnquiryState({
        type: "grow_food",
        adaptiveAnswer: {
          q1: selectedInterests.join(", "),
          q2: purpose,
          q3: climate
        }
      });
      router.push("/contact#router");
    }
  };

  return (
    <div className="bg-nabtura-slate border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nabtura-green/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center mb-10 relative z-10 border-b border-white/10 pb-8">
        <h2 className="text-xs tracking-[0.3em] font-bold text-nabtura-green uppercase mb-4">SMART GREENHOUSES EXPLORER</h2>
        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">WHAT CAN I GROW?</h3>
        <p className="text-gray-400 text-lg font-light">The right environment makes anything possible. Tell us what you envision.</p>
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
            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6">STEP 01 — SELECT INTERESTS</h4>
            <div className="flex flex-wrap gap-3">
              {INTERESTS.map(interest => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-5 py-3 rounded-xl border text-xs font-bold tracking-widest uppercase transition-all ${selectedInterests.includes(interest) ? 'border-nabtura-green bg-nabtura-green/10 text-nabtura-green shadow-[0_0_15px_rgba(46,204,113,0.15)]' : 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'}`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={handleNext}
                disabled={selectedInterests.length === 0}
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
            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6">STEP 02 — PURPOSE</h4>
            <h5 className="text-2xl font-black text-white uppercase tracking-tight mb-8">WHY ARE YOU GROWING?</h5>
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
            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6">STEP 03 — LOCATION</h4>
            <h5 className="text-2xl font-black text-white uppercase tracking-tight mb-8">WHERE IS YOUR PROJECT?</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLIMATES.map(c => (
                <button
                  key={c}
                  onClick={() => setClimate(c)}
                  className={`p-6 rounded-xl border text-sm font-bold tracking-widest uppercase transition-all ${climate === c ? 'border-nabtura-green bg-nabtura-green/10 text-nabtura-green' : 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={handleNext}
                disabled={!climate}
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
