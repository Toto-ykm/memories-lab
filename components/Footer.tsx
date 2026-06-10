import Link from "next/link";
import { giftScenes, navItems, products, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#2f261f] px-5 py-14 text-[#fffaf0] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-[0.08em]">{site.name}</p>
          <p className="mt-4 max-w-sm leading-7 text-white/72">{site.tagline}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={site.lineUrl} className="rounded-full bg-[#d8bf83] px-5 py-3 text-center text-sm font-bold text-[#2f261f]">
              LINE公式
            </Link>
            <Link href="/contact" className="rounded-full border border-white/35 px-5 py-3 text-center text-sm font-bold">
              メールフォーム
            </Link>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-bold text-[#d8bf83]">サイト</p>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
              <Link href="/quality">品質保証</Link>
              <Link href="/delivery">納期について</Link>
              <Link href="/photo-guide">写真提出ガイド</Link>
              <Link href="/company">会社概要</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-[#d8bf83]">商品</p>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {products.slice(0, 6).map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`}>{product.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-[#d8bf83]">ギフトシーン</p>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              {giftScenes.slice(0, 6).map((scene) => (
                <Link key={scene.slug} href={`/gift-scenes/${scene.slug}`}>{scene.title}</Link>
              ))}
              <Link href="/legal/terms">利用規約</Link>
              <Link href="/legal/privacy">プライバシーポリシー</Link>
              <Link href="/legal/tokusho">特定商取引法に基づく表記</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/12 pt-6 text-sm text-white/55">
        © 2026 Memories Lab. All rights reserved.
      </div>
    </footer>
  );
}
