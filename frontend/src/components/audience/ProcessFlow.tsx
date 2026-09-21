import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProcessFlowProps {
  headline: React.ReactNode;
  description?: string;
  steps: (string | { title: string; icon?: React.ReactNode })[];
  accentColor?: string;
}

export default function ProcessFlow({ headline, description, steps, accentColor = "text-nabtura-green" }: ProcessFlowProps) {
  // Add a fallback color hex for the animations if accentColor uses Tailwind classes
  // Typically text-nabtura-green corresponds to #00ff9d or #2ecc71 in this project.
  const accentHex = accentColor.includes("nabtura-green") ? "#2ecc71" : "#ffffff";

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10 text-center">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[200px] bg-gradient-to-r from-nabtura-green/10 via-transparent to-nabtura-green/10 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="mb-20 max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-6 tracking-tight leading-tight">
          {headline}
        </h2>
        {description && (
          <p className="text-gray-400 font-light text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 z-10">
        {/* Connecting Line (Background) */}
        <div className="hidden md:block absolute top-10 left-10 right-10 h-[2px] bg-white/10 z-0 overflow-hidden rounded-full">
          {/* Infinite Flowing Energy Pulse */}
          <motion.div
            animate={{ x: ["-100%", "400%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "linear",
              repeatDelay: 0.5
            }}
            className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-80"
          />
        </div>
        
        {/* Connecting Line (Foreground Animated) */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="hidden md:block absolute top-10 left-10 right-10 h-[2px] bg-gradient-to-r from-white/10 via-white/30 to-white/10 z-0 origin-left"
        />

        <div className={`grid grid-cols-2 gap-10 md:gap-4 relative z-10 ${steps.length === 5 ? 'md:grid-cols-5' : steps.length === 4 ? 'md:grid-cols-4' : steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-6'}`}>
          {steps.map((stepData, idx) => {
            const isString = typeof stepData === "string";
            const stepName = isString ? stepData : stepData.title;
            const stepIcon = isString ? null : stepData.icon;

            return (
              <div key={idx} className="flex flex-col items-center group cursor-default">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-full bg-[#0a0a0a] border-2 border-white/10 group-hover:border-white/50 flex items-center justify-center mb-6 transition-all duration-500 relative"
                >
                  {/* Synchronized Glowing Ring */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0px 0px 0px 0px rgba(46,204,113,0)",
                        "0px 0px 30px 5px rgba(46,204,113,0.3)",
                        "0px 0px 0px 0px rgba(46,204,113,0)",
                        "0px 0px 0px 0px rgba(46,204,113,0)",
                      ],
                      borderColor: [
                        "rgba(255,255,255,0)",
                        "rgba(46,204,113,1)",
                        "rgba(255,255,255,0)",
                        "rgba(255,255,255,0)",
                      ]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: 0.75 + (idx * 0.4),
                      times: [0, 0.1, 0.4, 1],
                      ease: "easeInOut"
                    }}
                    className="absolute inset-[-2px] rounded-full border-2"
                  />

                  {/* Inner glowing dot (hover) */}
                  <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-500 scale-75 group-hover:scale-100" />
                  
                  {/* Synchronized Icon Color */}
                  <motion.div
                    animate={{ color: ["#6b7280", accentHex, "#6b7280", "#6b7280"] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: 0.75 + (idx * 0.4),
                      times: [0, 0.1, 0.4, 1],
                      ease: "easeInOut"
                    }}
                    className="relative z-10 flex items-center justify-center text-gray-500 group-hover:!text-white transition-colors duration-500"
                  >
                    {stepIcon ? (
                      <div className="w-8 h-8 flex items-center justify-center">{stepIcon}</div>
                    ) : (
                      <span className="text-xl font-bold">{idx + 1}</span>
                    )}
                  </motion.div>
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors duration-300 text-center"
                >
                  {stepName}
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
