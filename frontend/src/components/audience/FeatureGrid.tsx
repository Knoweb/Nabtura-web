import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  headline: React.ReactNode;
  description?: string;
  features: Feature[];
  accentColor?: string;
}

export default function FeatureGrid({ eyebrow, headline, description, features, accentColor = "text-nabtura-green" }: FeatureGridProps) {
  // Define diverse shining border styles for the cards
  const getCardStyle = (index: number) => {
    const styles = [
      "border-[#2ecc71]/40 shadow-[0_0_15px_rgba(46,204,113,0.2)] bg-gradient-to-br from-[#2ecc71]/5 to-transparent", // Green
      "border-[#3498db]/40 shadow-[0_0_15px_rgba(52,152,219,0.2)] bg-gradient-to-br from-[#3498db]/5 to-transparent", // Blue
      "border-[#f1c40f]/40 shadow-[0_0_15px_rgba(241,196,15,0.2)] bg-gradient-to-br from-[#f1c40f]/5 to-transparent", // Gold
      "border-[#9b59b6]/40 shadow-[0_0_15px_rgba(155,89,182,0.2)] bg-gradient-to-br from-[#9b59b6]/5 to-transparent", // Purple
      "border-[#e67e22]/40 shadow-[0_0_15px_rgba(230,126,34,0.2)] bg-gradient-to-br from-[#e67e22]/5 to-transparent", // Orange
      "border-[#1abc9c]/40 shadow-[0_0_15px_rgba(26,188,156,0.2)] bg-gradient-to-br from-[#1abc9c]/5 to-transparent", // Teal
      "border-[#e74c3c]/40 shadow-[0_0_15px_rgba(231,76,60,0.2)] bg-gradient-to-br from-[#e74c3c]/5 to-transparent", // Red
    ];
    return styles[index % styles.length];
  };

  const getHoverGlow = (index: number) => {
    const glows = [
      "hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] hover:border-[#2ecc71]/80",
      "hover:shadow-[0_0_30px_rgba(52,152,219,0.5)] hover:border-[#3498db]/80",
      "hover:shadow-[0_0_30px_rgba(241,196,15,0.5)] hover:border-[#f1c40f]/80",
      "hover:shadow-[0_0_30px_rgba(155,89,182,0.5)] hover:border-[#9b59b6]/80",
      "hover:shadow-[0_0_30px_rgba(230,126,34,0.5)] hover:border-[#e67e22]/80",
      "hover:shadow-[0_0_30px_rgba(26,188,156,0.5)] hover:border-[#1abc9c]/80",
      "hover:shadow-[0_0_30px_rgba(231,76,60,0.5)] hover:border-[#e74c3c]/80",
    ];
    return glows[index % glows.length];
  };

  const getColWidthClass = (len: number) => {
    if (len === 1) return "lg:w-[calc(100%)]";
    if (len === 2) return "lg:w-[calc(50%-12px)] max-w-2xl"; // wider boxes for 2 items
    if (len === 3) return "lg:w-[calc(33.333%-16px)]";
    return "lg:w-[calc(25%-18px)]"; // 4 items per row for larger lists
  };

  return (
    <section className="py-16 md:py-20 max-w-[90rem] mx-auto px-6 relative z-10">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-nabtura-green/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mb-12 text-center max-w-4xl mx-auto relative z-10">
        {eyebrow && (
          <p className={`${accentColor} text-xs font-bold tracking-[0.25em] uppercase mb-4`}>
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-tight">
          {headline}
        </h2>
        {description && (
          <p className="text-gray-400 font-light text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-6 relative z-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`w-full sm:w-[calc(50%-12px)] ${getColWidthClass(features.length)} border p-6 md:p-8 rounded-[2rem] hover:-translate-y-1 transition-all duration-300 flex flex-col backdrop-blur-md bg-[#050B08]/70 group ${getCardStyle(i)} ${getHoverGlow(i)}`}
          >
            {feature.icon && (
              <div className={`mb-6 w-14 h-14 rounded-full flex items-center justify-center bg-black/30 border border-white/10 group-hover:bg-white/10 transition-colors ${accentColor}`}>
                {feature.icon}
              </div>
            )}
            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">{feature.title}</h3>
            
            {feature.image && (
              <div className="relative w-full aspect-[21/9] mb-6 rounded-xl overflow-hidden shadow-inner border border-white/5 group-hover:border-white/20 transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            )}
            
            <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">{feature.description}</p>
            {feature.ctaText && feature.ctaLink && (
              <div className="pt-2">
                <Link href={feature.ctaLink} className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase opacity-80 hover:opacity-100 group-hover:translate-x-1 transition-all ${accentColor}`}>
                  {feature.ctaText} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
