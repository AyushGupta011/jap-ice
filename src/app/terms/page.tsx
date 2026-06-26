"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/config";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wider drop-shadow-sm">
          利用規約
        </h1>
        
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg space-y-6 text-[#4a2e35]">
          <h2 className="text-2xl font-bold text-[#9f3455]">1. 適用範囲</h2>
          <p>
            本規約は、お客様が{SITE_CONFIG.brand.name}のウェブサイトおよびサービスを利用する際のすべての事項に適用されます。
          </p>

          <h2 className="text-2xl font-bold text-[#9f3455]">2. サービスの利用</h2>
          <p>
            お客様は、本規約および適用される法令に従ってサービスを利用するものとします。不正な目的での利用は固く禁じられています。
          </p>

          <h2 className="text-2xl font-bold text-[#9f3455]">3. 免責事項</h2>
          <p>
            当ウェブサイトの情報は予告なく変更される場合があります。当社は、情報の正確性や完全性についていかなる保証も行いません。
          </p>
          
          <p className="text-sm opacity-70 mt-8">
            最終更新日: {new Date().toLocaleDateString("ja-JP")}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
