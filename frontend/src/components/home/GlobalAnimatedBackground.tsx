"use client";

import { motion } from "framer-motion";

export default function GlobalAnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-nabtura-slate">
      {/* Dynamic Gradient Base */}
      <motion.div
        className="absolute inset-0 opacity-100"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: "linear-gradient(-45deg, #0a1811, #0c2116, #091710, #102e1c)",
          backgroundSize: "400% 400%",
        }}
      />
      
      {/* Global Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center mix-blend-screen opacity-50">
        <motion.div 
          animate={{ 
            x: [0, 200, 0, -200, 0],
            y: [0, -100, 100, -100, 0],
            scale: [1, 1.5, 0.8, 1.5, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80vw] h-[80vh] bg-emerald-400/10 blur-[200px] rounded-full mix-blend-screen left-[-10vw] top-[-10vh]"
        />
        <motion.div 
          animate={{ 
            x: [0, -200, 0, 200, 0],
            y: [0, 100, -100, 100, 0],
            scale: [1, 1.4, 0.9, 1.4, 1]
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[70vw] h-[70vh] bg-[#15B876]/10 blur-[180px] rounded-full mix-blend-screen right-[-10vw] bottom-[-10vh]"
        />
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 50, 0],
            y: [0, 100, 50, -50, 0],
            scale: [1, 1.2, 1, 1.3, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[60vw] h-[60vh] bg-green-300/10 blur-[150px] rounded-full mix-blend-screen"
        />
      </div>

      {/* Global Animated Grid */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0px 0px", "0px 40px"],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px' 
        }}
      />
    </div>
  );
}
