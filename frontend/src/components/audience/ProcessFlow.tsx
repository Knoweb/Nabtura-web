import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProcessFlowProps {
  headline: React.ReactNode;
  description?: string;
  steps: string[];
  accentColor?: string;
}

export default function ProcessFlow({ headline, description, steps, accentColor = "text-nabtura-green" }: ProcessFlowProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative z-10 text-center">
      <div className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-tight">
          {headline}
        </h2>
        {description && (
          <p className="text-gray-400 font-light text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`bg-white/5 border border-white/10 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm`}
            >
              <span className={`text-sm md:text-base font-extrabold tracking-widest uppercase text-white`}>
                {step}
              </span>
            </motion.div>
            
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }}
              >
                <ArrowRight className={`w-5 h-5 ${accentColor}`} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
