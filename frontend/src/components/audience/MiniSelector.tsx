"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            
            return (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left relative p-6 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col h-full ${
                  isSelected 
                    ? "bg-white/10 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                {isSelected && (
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent flex items-start justify-end p-3 rounded-bl-full ${accentColor}`}>
                    <Check className="w-5 h-5 drop-shadow-md" />
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 border transition-colors ${
                  isSelected ? "bg-white/10 border-white/30" : "bg-black/20 border-white/10"
                } ${accentColor}`}>
                  {option.icon}
                </div>
                
                <h3 className="text-xl font-bold uppercase mb-2 text-white">{option.title}</h3>
                <p className="text-sm text-gray-400 font-light mt-auto">{option.description}</p>
                
                {isSelected && (
                  <motion.div 
                    layoutId="outline" 
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl pointer-events-none" 
                    initial={false} 
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center"
            >
              <button
                onClick={handleContinue}
                disabled={isRouting}
                className={`group relative inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-widest text-sm py-3 px-8 rounded-full hover:bg-gray-200 transition-all ${isRouting ? "opacity-70 cursor-not-allowed scale-95" : ""}`}
              >
                {isRouting ? (
                  <span className="flex items-center gap-2">
                    ROUTING... <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></span>
                  </span>
                ) : (
                  <>
                    {submitButtonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
