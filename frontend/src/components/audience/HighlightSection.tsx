import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HighlightSectionProps {
  headline: React.ReactNode;
  description?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  accentColor?: string;
}

export default function HighlightSection({ headline, description, ctaText, ctaLink, accentColor = "text-nabtura-green" }: HighlightSectionProps) {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10 text-center flex justify-center">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter leading-none drop-shadow-2xl">
          {headline}
        </h2>
        
        {description && (
          <div className="text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
            {description}
          </div>
        )}

        {ctaText && ctaLink && (
          <Link href={ctaLink} className={`inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full ${accentColor} hover:bg-white/10 hover:text-white hover:border-white/30 transition-all text-sm font-bold tracking-widest uppercase group shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
            {ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </motion.div>
    </section>
  );
}
