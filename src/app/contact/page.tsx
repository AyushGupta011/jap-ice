"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/config";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wider drop-shadow-sm">
          お問い合わせ (Contact Us)
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-lg space-y-8">
            <h2 className="text-2xl font-bold text-[#9f3455]">ご連絡先情報</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#9f3455]/70 font-bold mb-1">住所</p>
                <p className="text-[#4a2e35]">{SITE_CONFIG.contact.address}</p>
              </div>
              <div>
                <p className="text-sm text-[#9f3455]/70 font-bold mb-1">電話番号</p>
                <p className="text-[#4a2e35]">{SITE_CONFIG.contact.phone}</p>
              </div>
              <div>
                <p className="text-sm text-[#9f3455]/70 font-bold mb-1">メールアドレス</p>
                <p className="text-[#4a2e35]">{SITE_CONFIG.contact.email}</p>
              </div>
              <div>
                <p className="text-sm text-[#9f3455]/70 font-bold mb-1">営業時間</p>
                <p className="text-[#4a2e35] whitespace-pre-line">
                  {SITE_CONFIG.contact.hours.weekdays + "\n" + SITE_CONFIG.contact.hours.weekends}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-lg">
             <form className="flex flex-col gap-6">
                <div>
                  <label className="block text-[#9f3455] text-sm font-bold mb-2">お名前</label>
                  <input type="text" className="w-full bg-white/50 rounded-full px-6 py-3 outline-none text-[#9f3455]" />
                </div>
                <div>
                  <label className="block text-[#9f3455] text-sm font-bold mb-2">メール</label>
                  <input type="email" className="w-full bg-white/50 rounded-full px-6 py-3 outline-none text-[#9f3455]" />
                </div>
                <div>
                  <label className="block text-[#9f3455] text-sm font-bold mb-2">メッセージ</label>
                  <textarea rows={5} className="w-full bg-white/50 rounded-3xl px-6 py-4 outline-none text-[#9f3455] resize-none"></textarea>
                </div>
                <button type="submit" className="bg-[#9f3455] text-white px-8 py-3 rounded-full font-bold hover:bg-[#862b46] transition-colors self-end">
                  送信する (Send)
                </button>
             </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
