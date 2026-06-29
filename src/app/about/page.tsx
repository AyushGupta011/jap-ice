"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/config";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wider drop-shadow-sm">
          私たちについて
        </h1>
        
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg space-y-6 text-[#4a2e35] text-lg leading-relaxed">
          <p>
            {SITE_CONFIG.brand.name}へようこそ。私たちは、一杯のアイスクリームが笑顔と幸せをもたらすと信じています。
          </p>
          <p>
            {SITE_CONFIG.brand.description}
          </p>
          <p>
            最高品質の素材のみを使用し、人工香料や着色料は一切使用していません。一口ごとに、私たちの情熱と愛を感じていただけるはずです。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
