"use client";

import { motion } from "framer-motion";

export default function FluidWaves() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-[#020504]/60 z-10"></div>
      
      {/* Wave 1 - Green */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200vw] h-[60vh] fill-nabtura-green/10"
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
        {/* Two identical paths side-by-side to create a seamless loop */}
        <path d="M0,160 C480,320 960,0 1440,160 C1920,320 2400,0 2880,160 L2880,320 L0,320 Z" />
      </motion.svg>
      
      {/* Wave 2 - Blue */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200vw] h-[50vh] fill-nabtura-blue/10 mix-blend-screen"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        <path d="M0,224 C480,64 960,320 1440,160 C1920,0 2400,256 2880,160 L2880,320 L0,320 Z" />
      </motion.svg>

      {/* Wave 3 - Sand */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200vw] h-[40vh] fill-nabtura-sand/5 mix-blend-screen"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        <path d="M0,96 C480,256 960,64 1440,224 C1920,384 2400,192 2880,224 L2880,320 L0,320 Z" />
      </motion.svg>
      
      {/* Floating fluid blobs */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-nabtura-green/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] bg-nabtura-blue/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
