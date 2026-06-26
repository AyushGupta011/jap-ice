"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/config";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wider drop-shadow-sm">
          プライバシーポリシー
        </h1>
        
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg space-y-6 text-[#4a2e35]">
          <h2 className="text-2xl font-bold text-[#9f3455]">1. 情報の収集</h2>
          <p>
            {SITE_CONFIG.brand.name}は、サービスの提供や改善のために、お客様の個人情報を収集する場合があります。
          </p>

          <h2 className="text-2xl font-bold text-[#9f3455]">2. 情報の使用</h2>
          <p>
            収集した情報は、お問い合わせへの対応、注文の処理、および新商品やサービスに関する情報提供の目的でのみ使用されます。
          </p>

          <h2 className="text-2xl font-bold text-[#9f3455]">3. 情報の保護</h2>
          <p>
            お客様の個人情報を保護するため、適切な安全対策を講じ、不正アクセスや漏洩の防止に努めます。
          </p>
          
          <p className="text-sm opacity-70 mt-8">
            最終更新日: {new Date().toLocaleDateString("ja-JP")}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
