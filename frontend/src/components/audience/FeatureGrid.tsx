import React from "react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureGridProps {
  eyebrow?: string;
  headline: React.ReactNode;
  description?: string;
  features: Feature[];
  accentColor?: string;
}

export default function FeatureGrid({ eyebrow, headline, description, features, accentColor = "text-nabtura-green" }: FeatureGridProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-16 text-center max-w-4xl mx-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors"
          >
            {feature.icon && (
              <div className={`mb-4 ${accentColor}`}>
                {feature.icon}
              </div>
            )}
            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">{feature.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
