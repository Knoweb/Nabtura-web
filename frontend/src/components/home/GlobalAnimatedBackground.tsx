"use client";

import { motion } from "framer-motion";

export default function GlobalAnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-[#020504]">
      {/* Dynamic Gradient Base */}
      <motion.div
        className="absolute inset-0 opacity-80"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: "linear-gradient(-45deg, #020504, #061c0e, #010a05, #0a2e17)",
          backgroundSize: "300% 300%",
        }}
      />
      
      {/* Huge Slow Moving Waves for the Entire Screen Background */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        {/* Giant Wave 1 (Moves left, very slow) */}
        <motion.svg
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] w-[200%] h-[120vh] fill-nabtura-green/20"
          viewBox="0 0 2880 1000"
          preserveAspectRatio="none"
        >
          <path d="M0,400 Q360,100 720,400 T1440,400 Q1800,100 2160,400 T2880,400 L2880,1000 L0,1000 Z" />
        </motion.svg>

        {/* Giant Wave 2 (Moves right, extremely slow) */}
        <motion.svg
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] w-[200%] h-[150vh] fill-emerald-500/20"
          viewBox="0 0 2880 1000"
          preserveAspectRatio="none"
        >
           <path d="M0,600 Q360,900 720,600 T1440,600 Q1800,900 2160,600 T2880,600 L2880,1000 L0,1000 Z" />
        </motion.svg>
      </div>
    </div>
  );
}
