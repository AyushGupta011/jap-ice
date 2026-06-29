export const SITE_CONFIG = {
  brand: {
    name: "フロスティ・スクープ", // Frosty Scoops
    tagline: "手作りの愛を込めて", // Made with love
    description: "厳選された素材と濃厚な味わい、そして至福のクリーミーさで作られた手作りアイスクリームをご堪能ください。", // Indulge in our handcrafted ice cream...
  },
  contact: {
    address: "〒100-0005 東京都千代田区丸の内1-1-1", // Example Japanese address
    phone: "+81 3-1234-5678",
    email: "hello@frostyscoops.jp",
    hours: {
      weekdays: "月-金: 10:00 - 21:00",
      weekends: "土-日: 09:00 - 22:00",
    }
  },
  social: {
    instagram: "https://instagram.com/frostyscoops",
    twitter: "https://twitter.com/frostyscoops",
    facebook: "https://facebook.com/frostyscoops",
  },
  navigation: [
    { label: "ホーム", href: "/" }, // Home
    { label: "フレーバー", href: "/#flavours" }, // Flavours
    { label: "私たちについて", href: "/about" }, // About Us
    { label: "お問い合わせ", href: "/contact" }, // Contact Us
  ],
  footerLinks: [
    { label: "私たちについて", href: "/about" }, // About Us
    { label: "お問い合わせ", href: "/contact" },
    { label: "プライバシーポリシー", href: "/privacy" }, // Privacy Policy
    { label: "利用規約", href: "/terms" } // Terms of Use
  ]
};

export const FLAVOURS = [
  {
    id: "berry-duo",
    name: "ベリーデュオ・デライト", // BERRY DUO DELIGHT
    description: "ジューシーなイチゴと甘いブルーベリーの爽やかなフルーツブレンド。", // A refreshing fruity blend...
    price: "¥500",
    image: "/images/flavours/berry.png"
  },
  {
    id: "cocoa-midnight",
    name: "ココア・ミッドナイト", // COCOA MIDNIGHT
    description: "最高級カコアで作られた、究極の贅沢を味わえる深みのあるベルベットのようなアイスクリーム。", // A deep, velvety ice cream...
    price: "¥600",
    image: "/images/flavours/cocoa.png"
  },
  {
    id: "mango-sunshine",
    name: "マンゴー・サンシャイン", // MANGO SUNSHINE
    description: "完熟した黄金色のマンゴーを使用し、明るく爽やかなひとすくい。", // Made with ripe, golden mangoes...
    price: "¥600",
    image: "/images/flavours/mango.png"
  },
  {
    id: "pistachio-bliss",
    name: "ピスタチオ・ブリス", // PISTACHIO BLISS
    description: "ローストピスタチオで作られた、シルクのようになめらかなプレミアムピスタチオアイスクリーム。", // A silky, premium pistachio...
    price: "¥800",
    image: "/images/flavours/pistachio.png"
  },
  {
    id: "mint-frost",
    name: "ミントフロスト・スワール", // MINT FROST SWIRL
    description: "繊細な甘さとクールな後味が特徴の爽やかなミントアイスクリーム。", // A refreshing mint ice cream...
    price: "¥800",
    image: "/images/flavours/mint.png"
  },
  {
    id: "oreo-crust",
    name: "オレオ・クッキークラスト", // OREO COOKIE CRUST
    description: "クリーミーなバニラベースに砕いたオレオクッキーをブレンドした完璧な一口。", // Creamy vanilla-free base...
    price: "¥900",
    image: "/images/flavours/oreo.png"
  }
];
