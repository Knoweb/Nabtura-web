"use client";

import { motion } from "framer-motion";

export default function GlobalAnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        backgroundImage: "linear-gradient(-45deg, #020504, #061c0e, #010a05, #0a2e17)",
        backgroundSize: "300% 300%",
      }}
    />
  );
}
