"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SITE_CONFIG, FLAVOURS } from "@/data/config";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroIceCreamRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!heroIceCreamRef.current || !containerRef.current) return;

    // Reset initial state to ensure Tailwind transforms don't conflict
    gsap.set(heroIceCreamRef.current, { xPercent: -50, yPercent: -50 });

    const getPagePos = (elementId: string, defaultTop: string, defaultLeft: string) => {
      const el = document.getElementById(elementId);
      if (!el || !containerRef.current) return { top: defaultTop, left: defaultLeft };
      const rect = el.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      return {
        top: (rect.top - containerRect.top + rect.height / 2) + "px",
        left: (rect.left - containerRect.left + rect.width / 2) + "px",
      };
    };

    // Create a timeline that spans across the sections
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true, // Recalculate function values on resize
      }
    });

    const getCenterY = (id: string) => {
       const el = document.getElementById(id);
       if (!el) return 0;
       const rect = el.getBoundingClientRect();
       return rect.top + rect.height / 2;
    };

    const getDist = (id1: string, id2: string) => {
       return Math.abs(getCenterY(id2) - getCenterY(id1)) || window.innerHeight;
    };

    const getRemaining = () => {
       if (!containerRef.current) return 0;
       const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
       const d1 = getDist('hero', 'story-top-circle');
       const d2 = getDist('story-top-circle', 'flavour-card-1');
       const d3 = getDist('flavour-card-1', 'combo-center-spot');
       const d4 = getDist('combo-center-spot', 'contact');
       return Math.max(0, totalScroll - (d1 + d2 + d3 + d4));
    };

    const isMobile = window.innerWidth < 768;

    // Move to Story section (section 2) - Landing in the top circle
    tl.to(heroIceCreamRef.current, {
      top: () => getPagePos('story-top-circle', '150vh', '30%').top,
      left: () => getPagePos('story-top-circle', '150vh', '30%').left,
      scale: isMobile ? 0.6 : 0.4, // Responsive scaling
      rotation: 0,
      ease: "none",
      duration: () => getDist('hero', 'story-top-circle')
    });

    // Move to Flavours section (section 3) - Visit Card 1 (Cocoa)
    tl.to(heroIceCreamRef.current, {
      top: () => getPagePos('flavour-card-1', '250vh', '70%').top,
      left: () => getPagePos('flavour-card-1', '250vh', '70%').left,
      scale: isMobile ? 0.8 : 0.45, // Much bigger on mobile to match the card!
      rotation: 0,
      ease: "none",
      duration: () => getDist('story-top-circle', 'flavour-card-1')
    });

    // Move to Combo section (section 4)
    tl.to(heroIceCreamRef.current, {
      top: () => getPagePos('combo-center-spot', '350vh', '50%').top,
      left: () => getPagePos('combo-center-spot', '350vh', '50%').left,
      scale: isMobile ? 1.0 : 0.85,
      rotation: 0,
      ease: "none",
      zIndex: 15, // Slip between front and back elements if needed
      duration: () => getDist('flavour-card-1', 'combo-center-spot')
    });

    // Move to Contact section (section 5)
    tl.to(heroIceCreamRef.current, {
      top: "calc(100% - 200px)", // Bottom right of the entire page
      left: "100%",
      xPercent: -60, 
      scale: 1,
      rotation: -15,
      ease: "none",
      duration: () => getDist('combo-center-spot', 'contact')
    });

    // Pad the end of the timeline to ensure 1:1 pixel scroll mapping
    tl.to({}, { duration: () => getRemaining() });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Global Flying Ice Cream */}
      <img 
        ref={heroIceCreamRef}
        src="/images/flavours/cocoa-removebg-preview.png" 
        alt="Strawberry Ice Cream" 
        className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[300px] md:w-[450px] lg:w-[600px] pointer-events-none drop-shadow-2xl"
        style={{ transformOrigin: "center center" }}
      />

      <HeroSection />
      <StorySection />
      <FlavoursSection />
      <ComboSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 w-full"
      >
        <h2 className="text-xl md:text-2xl text-white font-medium mb-4 drop-shadow-md">
          美味しくてクリーミー
        </h2>
        <h1 className="text-[3.8rem] leading-[1.1] md:text-[10rem] font-black text-white/90 tracking-tighter md:leading-none mb-4 uppercase mix-blend-overlay w-full px-2">
          アイスクリーム
        </h1>
        <p className="text-white text-base md:text-xl font-medium drop-shadow-md">
          - 手作りの愛を込めて -
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-24 md:bottom-20 left-4 right-4 md:left-20 md:right-auto md:max-w-[200px] z-10 flex flex-col items-center text-center md:items-start md:text-left"
      >
        <p className="text-sm text-[#9f3455] font-medium mb-4">
          {SITE_CONFIG.brand.description}
        </p>
        <button className="bg-[#9f3455] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#9f3455]/30 hover:bg-[#862b46] transition-colors">
          今すぐ購入
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-20 md:-translate-x-0 md:left-auto md:right-20 bg-white/40 backdrop-blur-md p-3 rounded-full flex items-center gap-4 shadow-lg z-10 whitespace-nowrap"
      >
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-white flex justify-center items-center overflow-hidden">
             <img src="https://i.pravatar.cc/100?img=1" alt="user" />
          </div>
          <div className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white flex justify-center items-center overflow-hidden">
             <img src="https://i.pravatar.cc/100?img=2" alt="user" />
          </div>
          <div className="w-10 h-10 rounded-full bg-pink-400 border-2 border-white flex justify-center items-center overflow-hidden">
             <img src="https://i.pravatar.cc/100?img=3" alt="user" />
          </div>
        </div>
        <span className="text-[#9f3455] font-bold text-sm pr-2">100+</span>
      </motion.div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="w-full min-h-screen flex items-center py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative h-[500px]">
          {/* Top Circle */}
          <motion.div 
            id="story-top-circle"
            whileHover={{ scale: 1.05 }}
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#9f3455] shadow-2xl flex items-center justify-center"
          >
             {/* Curved Text SVG */}
             <svg viewBox="0 0 320 320" className="absolute w-[320px] h-[320px] pointer-events-none -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-visible">
               <path id="curve1" d="M 160, 10 a 150,150 0 1,1 0,300 a 150,150 0 1,1 0,-300" fill="transparent" />
               <text className="text-sm font-bold tracking-[0.2em] fill-white/80 uppercase">
                 <textPath href="#curve1" startOffset="18%" textAnchor="middle">100% 手作り</textPath>
               </text>
             </svg>
          </motion.div>
          
          {/* Bottom Circle */}
          <motion.div 
             whileHover={{ scale: 1.05 }}
             className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-[#f8b4c4] shadow-2xl flex items-center justify-center"
          >
             {/* Ice Cream Image */}
             <img src="/images/flavours/berry-bg.png" alt="No Artificial Flavours Berry Ice Cream" className="absolute z-10 w-[120%] h-[120%] max-w-none object-contain translate-x-2 -translate-y-7 drop-shadow-2xl pointer-events-none" />
             {/* Curved Text SVG */}
             <svg viewBox="0 0 280 280" className="absolute w-[280px] h-[280px] pointer-events-none -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-visible">
               <path id="curve2" d="M 140, 10 a 130,130 0 1,0 0,260 a 130,130 0 1,0 0,-260" fill="transparent" />
               <text className="text-sm font-bold tracking-[0.1em] fill-white/90 uppercase">
                 <textPath href="#curve2" startOffset="38%" textAnchor="middle">人工香料不使用</textPath>
               </text>
             </svg>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider drop-shadow-sm"
          >
            私たちのストーリー
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/90 space-y-4"
          >
            <p>
              フロスティ・スクープ（Frosty Scoops）は、本当に特別だと感じられるアイスクリームを作りたいというシンプルな夢から始まりました。新鮮なフルーツとリッチでクリーミーなベースを使った少量のレシピから始まったものは、情熱と創造性に基づくブランドへと成長しました。
            </p>
            <p>
              アイスクリームを混ぜる方法から提供する方法に至るまで、私たちは心温まる、喜びにあふれた、紛れもなく特別な瞬間を作り出すことに焦点を当てています。
            </p>
            <button className="mt-8 bg-[#9f3455] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#862b46] transition-colors">
              私たちの魔法を味わう 
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FlavoursSection() {
  return (
    <section id="flavours" className="w-full min-h-screen py-20 px-6 md:px-20 bg-white/10">
       <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-bold text-white mb-20 uppercase tracking-wider drop-shadow-sm"
          >
            フレーバー
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10">
             {FLAVOURS.slice(0, 4).map((flavour, i) => (
                <div key={flavour.id} className="bg-[#fcf0f2] rounded-3xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                   <div id={`flavour-card-${i}`} className="w-full md:w-48 h-48 bg-[#eebbcc] rounded-2xl flex items-center justify-center relative flex-shrink-0 overflow-visible">
                      {/* Leave index 1 (Cocoa) empty for the floating hero image to land in! */}
                      {i !== 1 && (
                        <img src={flavour.image.replace('.png', '-bg.png')} alt={flavour.name} className="w-[120%] h-[120%] max-w-none object-contain drop-shadow-lg" />
                      )}
                   </div>
                   <div className="flex-1 py-2">
                      <h3 className="text-lg font-bold text-[#9f3455] mb-2 uppercase">{flavour.name}</h3>
                      <p className="text-xs text-[#4a2e35]/70 mb-6 leading-relaxed">{flavour.description}</p>
                      <div className="flex items-center justify-between">
                         <span className="text-lg font-bold text-[#9f3455]">{flavour.price}</span>
                         <div className="flex gap-2">
                           <button className="bg-[#9f3455] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#862b46] transition-colors">
                             カートに追加
                           </button>
                           <button className="bg-[#9f3455] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#862b46] transition-colors">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                           </button>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

function ComboSection() {
  return (
    <section id="combo" className="w-full min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-20 lg:gap-32 relative">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-5/12 z-10 relative flex flex-col items-start text-left pl-0 lg:pl-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 uppercase tracking-wider drop-shadow-md leading-tight"
          >
            夢のコンボを<br/>作ろう
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/95 text-xl lg:text-2xl mb-10 max-w-lg font-medium drop-shadow-sm"
          >
            クリーミーなフレーバーをミックスして、自分だけの完璧なカップを作りましょう。お好きなスクープをお選びください。
          </motion.p>
          <motion.button 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="bg-[#9f3455] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#862b46] transition-transform hover:scale-105"
          >
            カップを作る 
          </motion.button>
        </div>
        
        {/* Right Side - Giant Ice Creams */}
        <div className="w-full md:w-7/12 flex justify-end items-center pr-0 lg:pr-10">
            <div className="relative w-full max-w-[700px] xl:max-w-[900px] aspect-square mt-16 md:mt-0">
               {/* Curved Dotted Lines SVG */}
               <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                     <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.8)" />
                     </marker>
                  </defs>
                  {/* Top Left Line */}
                  <path d="M 5 15 Q 15 35 30 35" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" strokeDasharray="1.5,1.5" markerEnd="url(#arrow)" />
                  {/* Bottom Left Line */}
                  <path d="M 15 85 Q 25 70 35 65" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" strokeDasharray="1.5,1.5" markerEnd="url(#arrow)" />
                  {/* Bottom Right Line */}
                  <path d="M 85 85 Q 75 70 65 65" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5" strokeDasharray="1.5,1.5" markerEnd="url(#arrow)" />
               </svg>

               {/* Static Ice Creams (Left and Right) - Scaled hugely to compensate for image padding */}
               <img src="/images/flavours/mint-cone-bg.png" alt="Mint Ice Cream" className="absolute left-[-15%] top-[0%] w-[85%] -rotate-[15deg] z-10 drop-shadow-2xl pointer-events-none" />
               <img src="/images/flavours/blueberry-cone-bg.png" alt="Blueberry Ice Cream" className="absolute right-[-15%] top-[0%] w-[85%] rotate-[15deg] z-10 drop-shadow-2xl pointer-events-none" />
               
               {/* Center Spot for the Floating Hero Image */}
               <div id="combo-center-spot" className="absolute left-1/2 top-[35%] -translate-x-1/2 w-4 h-4 z-20"></div>

               {/* Pointers */}
               <div className="absolute left-[5%] top-[5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-30">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/30">🎨</div>
                  <span className="text-white text-sm font-extrabold tracking-wide drop-shadow-lg whitespace-nowrap bg-[#9f3455]/40 px-3 py-1 rounded-full backdrop-blur-sm">トッピングを追加</span>
               </div>
               
               <div className="absolute left-[10%] top-[90%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-30">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/30">🥄</div>
                  <span className="text-white text-sm font-extrabold tracking-wide drop-shadow-lg whitespace-nowrap bg-[#9f3455]/40 px-3 py-1 rounded-full backdrop-blur-sm">スクープを選ぶ</span>
               </div>
               
               <div className="absolute left-[90%] top-[90%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-30">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/30">✨</div>
                  <span className="text-white text-sm font-extrabold tracking-wide drop-shadow-lg whitespace-nowrap bg-[#9f3455]/40 px-3 py-1 rounded-full backdrop-blur-sm">お楽しみください</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col py-20 px-6 md:px-20 bg-[#9f3455]/10">
       <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider drop-shadow-sm">
            フレーバーのご案内
          </h2>
          <p className="text-white/90 text-sm md:text-base">
            ニュースレターに登録すると、毎月のフレーバーのインスピレーション、限定割引、各バッチに込められた工芸の裏側を受け取ることができます。甘い世界へのバックステージパスです。
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 max-w-md mx-auto">
             <input type="email" placeholder="メールアドレス" className="flex-1 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 outline-none text-[#9f3455] placeholder-[#9f3455]/60" />
             <button className="bg-[#9f3455] text-white px-8 py-3 rounded-full font-bold hover:bg-[#862b46] transition-colors">
               登録する
             </button>
          </div>
       </div>

       <div className="max-w-6xl mx-auto w-full mt-20 relative">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16 uppercase tracking-wider drop-shadow-sm">
            お問い合わせ
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12">
             <div className="w-full md:w-1/2 flex flex-col gap-8">
                <p className="text-[#9f3455] font-medium leading-relaxed">
                  フレーバーに関するご質問、カスタムオーダーのご相談、または単に挨拶したい場合でも、メッセージをお送りください。担当チームができるだけ早くお返事いたします。
                </p>
                
                <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 flex flex-col gap-6 shadow-lg">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#9f3455]/20 rounded-full flex items-center justify-center text-[#9f3455]">📍</div>
                      <span className="text-[#9f3455] font-medium">{SITE_CONFIG.contact.address}</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#9f3455]/20 rounded-full flex items-center justify-center text-[#9f3455]">🕒</div>
                      <span className="text-[#9f3455] font-medium whitespace-pre-line">
                         {SITE_CONFIG.contact.hours.weekdays + "\n" + SITE_CONFIG.contact.hours.weekends}
                      </span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#9f3455]/20 rounded-full flex items-center justify-center text-[#9f3455]">📞</div>
                      <span className="text-[#9f3455] font-medium">{SITE_CONFIG.contact.phone}</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#9f3455]/20 rounded-full flex items-center justify-center text-[#9f3455]">✉️</div>
                      <span className="text-[#9f3455] font-medium">{SITE_CONFIG.contact.email}</span>
                   </div>
                </div>
             </div>

             <div className="w-full md:w-1/2">
                <form className="bg-white/40 backdrop-blur-md rounded-3xl p-8 flex flex-col gap-4 shadow-lg relative z-10">
                   <div>
                      <label className="block text-[#9f3455] text-sm font-bold mb-2">お名前</label>
                      <input type="text" placeholder="お名前を入力してください" className="w-full bg-white/50 rounded-full px-6 py-3 outline-none text-[#9f3455] placeholder-[#9f3455]/60" />
                   </div>
                   <div>
                      <label className="block text-[#9f3455] text-sm font-bold mb-2">メールアドレス</label>
                      <input type="email" placeholder="返信用のメールアドレス" className="w-full bg-white/50 rounded-full px-6 py-3 outline-none text-[#9f3455] placeholder-[#9f3455]/60" />
                   </div>
                   <div>
                      <label className="block text-[#9f3455] text-sm font-bold mb-2">件名</label>
                      <input type="text" placeholder="ご用件を入力してください" className="w-full bg-white/50 rounded-full px-6 py-3 outline-none text-[#9f3455] placeholder-[#9f3455]/60" />
                   </div>
                   <div>
                      <label className="block text-[#9f3455] text-sm font-bold mb-2">メッセージ</label>
                      <textarea rows={4} placeholder="こちらにメッセージを入力してください..." className="w-full bg-white/50 rounded-3xl px-6 py-4 outline-none text-[#9f3455] placeholder-[#9f3455]/60 resize-none"></textarea>
                   </div>
                   <div className="flex justify-end mt-4">
                      <button type="submit" className="bg-[#9f3455] text-white px-8 py-3 rounded-full font-bold hover:bg-[#862b46] transition-colors">
                        メッセージを送信
                      </button>
                   </div>
                </form>
             </div>
          </div>
       </div>
    </section>
  );
}
