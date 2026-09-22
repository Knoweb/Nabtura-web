"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Leaf } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEnquiry, EnquiryType } from "@/context/EnquiryContext";

const INTEREST_OPTIONS: { label: string; enquiryType: EnquiryType }[] = [
  { label: "Grow Food", enquiryType: "grow_food" },
  { label: "Grow At Home", enquiryType: "grow_food_home" },
  { label: "Manage Water", enquiryType: "water" },
  { label: "Create a Green Space", enquiryType: "green_space" },
  { label: "Create a Green Experience", enquiryType: "green_space" },
  { label: "Green Land", enquiryType: "green_space" },
  { label: "Solve an Environmental Challenge", enquiryType: "challenge" },
  { label: "Invest or Partner", enquiryType: "investment" },
  { label: "I'm Not Sure", enquiryType: "not_sure" },
];

export default function WhatNabturaDoes() {
  const router = useRouter();
  const { setEnquiryState } = useEnquiry();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<{ label: string; enquiryType: EnquiryType } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = () => {
    if (selected) {
      setEnquiryState({
        type: selected.enquiryType,
        adaptiveAnswer: {},
      });
      router.push("/contact");
    }
  };

  return (
    <section className="relative z-30">
      
      {/* Floating Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24 mb-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#eef4f0] rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#d6e3dc] relative z-40"
        >
          {/* Left part */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-[#d6e3dc]">
              <Leaf className="w-6 h-6 text-[#1A4D2E]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-lg leading-tight">What are you looking to do?</span>
              <span className="text-gray-600 text-sm">Tell us what you're interested in and we'll take you to the right place.</span>
            </div>
          </div>
          
          {/* Middle part - Input */}
          <div className="flex-1 w-full md:w-auto relative" ref={dropdownRef}>
            <div 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between bg-white rounded-lg px-4 py-3 w-full border border-[#d6e3dc] cursor-pointer select-none hover:border-[#b8cbbd] transition-colors shadow-sm"
            >
              <span className={`text-sm ${selected ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                {selected ? selected.label : "I'm interested in..."}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  <div className="max-h-60 overflow-y-auto py-1">
                    {INTEREST_OPTIONS.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelected(option);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-[#f2f4f1] hover:text-[#0B3B24] transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Button */}
          <button 
            onClick={handleNavigate}
            disabled={!selected}
            className={`px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 shrink-0 transition-all w-full md:w-auto justify-center ${
              selected 
                ? "bg-[#0B3B24] hover:bg-[#0B3B24]/90 text-white cursor-pointer shadow-md" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Take Me There
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Right part - Cursive text */}
          <div className="hidden lg:flex items-center border-l border-gray-300 pl-6 h-12">
            <p className="font-serif italic text-[#1A4D2E]/80 text-lg leading-tight -rotate-2">
              A greener<br/>tomorrow starts<br/>with a conversation.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
