"use client";

import { motion } from "framer-motion";

export default function FluidWaves() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background base tone */}
      <div className="absolute inset-0 bg-[#020A05]/80 pointer-events-none -z-10"></div>
      
      {/* Wave 1 - Deep Emerald Fluid Wave */}
      <motion.svg
        className="absolute -bottom-10 left-0 w-[200vw] h-[55vh] fill-emerald-500/20 pointer-events-none"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <path d="M0,160 C480,320 960,0 1440,160 C1920,320 2400,0 2880,160 L2880,320 L0,320 Z" />
      </motion.svg>
      
      {/* Wave 2 - Cyan/Teal Aqua Wave */}
      <motion.svg
        className="absolute -bottom-6 left-0 w-[200vw] h-[45vh] fill-teal-400/20 mix-blend-screen pointer-events-none"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 28,
        }}
      >
        <path d="M0,224 C480,64 960,320 1440,160 C1920,0 2400,256 2880,160 L2880,320 L0,320 Z" />
      </motion.svg>

      {/* Wave 3 - Glowing Green Crest */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200vw] h-[35vh] fill-nabtura-green/25 mix-blend-screen pointer-events-none"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 38,
        }}
      >
        <path d="M0,96 C480,256 960,64 1440,224 C1920,384 2400,192 2880,224 L2880,320 L0,320 Z" />
      </motion.svg>
      
      {/* Floating fluid glowing blobs */}
      <motion.div
        className="absolute top-[18%] left-[8%] w-[42vw] h-[42vw] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[45%] right-[8%] w-[36vw] h-[36vw] bg-teal-500/15 rounded-full blur-[110px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[72%] left-[20%] w-[32vw] h-[32vw] bg-green-400/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
