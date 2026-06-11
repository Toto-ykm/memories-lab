"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { name: "ガラス時計", src: "/images/products/glass-clock-premium.png" },
  { name: "クリスタルブロック", src: "/images/products/crystal-block-premium.png" },
  { name: "ガラスフォトフレーム", src: "/images/products/glass-frame-premium.png" },
  { name: "クリスタルグラス（ペアセット）", src: "/images/products/crystal-glass-premium.png" },
  { name: "ビールジョッキ", src: "/images/products/beer-mug-premium.png" },
  { name: "フォトパネル", src: "/images/products/photo-panel-premium.png" },
  { name: "マグカップ", src: "/images/products/mug-premium.png" },
  { name: "木製コースター", src: "/images/products/wood-coaster-premium.png" }
];

export function HeroProductSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#2f261f] shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(240,217,157,0.35),transparent_34%),linear-gradient(135deg,#211914,#6e5434_58%,#f4ead9)]" />
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={`${slide.name}の商品画像`}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 44vw, 100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,25,20,0)_48%,rgba(33,25,20,0.62)_100%)]" />
        <div className="absolute bottom-8 left-8 right-8 rounded-md border border-white/20 bg-[#211914]/62 p-5 text-white backdrop-blur">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8bf83]">Signature Gift</p>
          <p className="mt-2 font-serif text-2xl font-semibold">{slides[active].name}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-2" aria-label="商品スライダーの現在位置">
        {slides.map((slide, index) => (
          <span
            key={slide.src}
            className={`block size-2.5 rounded-full transition ${
              active === index ? "bg-[#d8bf83]" : "bg-[#d8bf83]/35"
            }`}
            aria-label={active === index ? `${slide.name}を表示中` : slide.name}
          />
        ))}
      </div>
    </div>
  );
}
