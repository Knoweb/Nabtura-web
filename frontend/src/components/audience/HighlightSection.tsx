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
    <section className="py-24 max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter leading-none">
          {headline}
        </h2>
        
        {description && (
          <div className="text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
            {description}
          </div>
        )}

        {ctaText && ctaLink && (
          <Link href={ctaLink} className={`inline-flex items-center gap-3 ${accentColor} hover:text-white transition-colors text-sm font-bold tracking-widest uppercase group`}>
            {ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </motion.div>
    </section>
  );
}
