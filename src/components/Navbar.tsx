"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex items-center justify-between bg-transparent transition-all duration-300">
      <div className="flex items-center gap-2 z-50">
        <Link href="/" className="flex flex-col items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/40">
             <span className="text-lg md:text-xl">🍦</span>
          </div>
          <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#9f3455] mt-1 text-center leading-tight">フロスティ<br/>スクープ</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center bg-white/30 backdrop-blur-md rounded-full px-2 py-1 shadow-sm">
        {SITE_CONFIG.navigation.map((item, idx) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/50 ${idx === 0 ? "bg-white text-[#9f3455]" : "text-[#9f3455]"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-3">
       
      </div>

      {/* Mobile Hamburger Toggle */}
      <div className="md:hidden flex items-center z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-[#9f3455]"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#f8b4c4]/95 backdrop-blur-lg flex flex-col items-center py-6 gap-4 shadow-xl border-t border-white/20 md:hidden"
          >
            {SITE_CONFIG.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[#9f3455] font-bold text-lg hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
