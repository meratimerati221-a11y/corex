"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1120] to-black" />

      {/* Glow 1 */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 150, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute left-20 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[140px]"
      />

      {/* Glow 2 */}
      <motion.div
        animate={{
          x: [0, -150, 120, 0],
          y: [0, 180, -120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute right-20 top-40 h-[380px] w-[380px] rounded-full bg-blue-500/15 blur-[140px]"
      />

      {/* Glow 3 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -120, 80, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-10 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[130px]"
      />

    </div>
  );
}