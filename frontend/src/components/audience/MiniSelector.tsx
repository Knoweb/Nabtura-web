"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEnquiry, EnquiryType } from "@/context/EnquiryContext";

export interface SelectorOption {
  id: string;
  title: string;
  description: string;
  enquiryType: EnquiryType;
  adaptiveAnswer?: Record<string, string>;
  icon: React.ReactNode;
}

interface MiniSelectorProps {
  headline?: string;
  subheadline?: string;
  options: SelectorOption[];
  accentColor?: string; // e.g. "text-nabtura-green", "text-nabtura-sand"
  bgGradient?: string; // e.g. "from-nabtura-green/10"
  submitButtonText?: string;
  submitHref?: string;
}

export default function MiniSelector({ 
  headline = "START YOUR PROJECT", 
  subheadline = "What would you like to build or transform?",
  options,
  accentColor = "text-nabtura-green",
  bgGradient = "from-nabtura-green/10",
  submitButtonText = "CONTINUE TO CONTACT",
  submitHref = "/contact"
}: MiniSelectorProps) {
  const router = useRouter();
  const { setEnquiryState } = useEnquiry();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isRouting, setIsRouting] = useState(false);

  const handleSelect = (option: SelectorOption) => {
    setSelectedId(option.id);
  };

  const handleContinue = () => {
    if (!selectedId) return;
    const option = options.find((o) => o.id === selectedId);
    if (!option) return;

    setIsRouting(true);

    // Set the global state so it's carried forward to the contact page
    setEnquiryState({
      type: option.enquiryType,
      adaptiveAnswer: option.adaptiveAnswer || {},
    });

    // Short delay for visual feedback before routing
    setTimeout(() => {
      router.push(submitHref);
    }, 600);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className={`absolute inset-0 bg-gradient-to-b ${bgGradient} via-transparent to-transparent opacity-50`}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-white/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 tracking-tight">
            {headline}
          </h2>
          <p className="text-gray-400 font-light text-lg">
            {subheadline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            
            return (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] text-left relative p-7 rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] ${
                  isSelected 
                    ? "bg-[#0c1f15]/80 border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.1)] ring-1 ring-white/20" 
                    : "bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/5 hover:shadow-2xl"
                }`}
              >
                {/* Radio Circle Indicator */}
                <div className={`absolute top-7 right-7 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isSelected 
                    ? `border-white bg-white`
                    : "border-gray-500 group-hover:border-white/80"
                }`}>
                  <Check className={`w-3.5 h-3.5 transition-opacity duration-300 ${isSelected ? "opacity-100 text-black" : "opacity-0"}`} strokeWidth={3} />
                </div>
                
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 border transition-colors ${
                  isSelected ? "bg-white/10 border-white/30" : "bg-black/20 border-white/10 group-hover:bg-white/5"
                } ${accentColor}`}>
                  {option.icon}
                </div>
                
                <h3 className={`text-lg font-bold uppercase mb-2 transition-colors ${isSelected ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                  {option.title}
                </h3>
                <p className={`text-sm font-light mt-auto transition-colors pr-8 ${isSelected ? "text-gray-300" : "text-gray-500 group-hover:text-gray-400"}`}>
                  {option.description}
                </p>
                
                {isSelected && (
                  <motion.div 
                    layoutId="outline" 
                    className="absolute inset-0 border border-white/30 rounded-3xl pointer-events-none" 
                    initial={false} 
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            disabled={!selectedId || isRouting}
            className={`group relative inline-flex items-center gap-3 font-bold uppercase tracking-widest text-sm py-4 px-10 rounded-full transition-all duration-300 ${
              !selectedId 
                ? "bg-white/10 text-gray-500 cursor-not-allowed border border-white/5" 
                : "bg-white text-black hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            } ${isRouting ? "opacity-70 cursor-wait scale-95" : ""}`}
          >
            {isRouting ? (
              <span className="flex items-center gap-2">
                ROUTING... <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
              </span>
            ) : (
              <>
                {submitButtonText}
                <ArrowRight className={`w-4 h-4 transition-transform ${selectedId ? "group-hover:translate-x-1" : ""}`} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
