import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-[#9f3455] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-wider mb-2">フロスティ・スクープ</span>
            <span className="text-sm opacity-80">{SITE_CONFIG.brand.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-center md:text-left text-sm opacity-90 leading-relaxed">
            {SITE_CONFIG.brand.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {SITE_CONFIG.footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-pink-300 transition-colors text-sm">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col items-center md:items-end gap-2 text-sm opacity-90">
          <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-pink-300 transition-colors">
            {SITE_CONFIG.contact.email}
          </a>
          <p>{SITE_CONFIG.contact.phone}</p>
          <div className="flex gap-4 mt-4">
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              IG
            </a>
            <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              TW
            </a>
            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              FB
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-xs opacity-70">
        &copy; {new Date().getFullYear()} {SITE_CONFIG.brand.name}. 無断複写・転載を禁じます。
      </div>
    </footer>
  );
}
