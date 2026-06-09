import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "商品一覧",
  description: "Premium、Standard、Entryに分類したMemories Labの高級オーダーメイドギフト一覧。",
  openGraph: {
    title: "商品一覧 | Memories Lab",
    description: "ガラス・クリスタル・フォトギフトを上質なオーダーメイドで。"
  }
};

const tiers = ["Premium", "Standard", "Entry"];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="PRODUCTS"
        title="商品一覧"
        lead="ご家族への節目の贈りものから法人記念品まで、品格と温かさを両立した商品ラインをご用意しています。"
        breadcrumbs={[{ label: "商品一覧" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8">
          {tiers.map((tier) => (
            <div key={tier}>
              <h2 className="font-serif text-3xl font-semibold text-[#352c23]">{tier}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.filter((product) => product.tier === tier).map((product) => (
                  <article key={product.slug} className="group rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-5 shadow-soft transition hover:-translate-y-1">
                    <ProductVisual name={product.name} tier={product.tier} finish={product.visual} className="aspect-[4/3]" />
                    <div className="p-2 pt-6">
                    <p className="text-sm font-bold tracking-[0.22em] text-[#a77a3f]">{product.tier}</p>
                    <h3 className="mt-4 font-serif text-2xl font-semibold text-[#352c23]">{product.name}</h3>
                    <p className="mt-3 font-bold text-[#a77a3f]">{product.price}</p>
                    <p className="mt-4 leading-7 text-[#584735]">{product.summary}</p>
                    <Link href={`/products/${product.slug}`} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#a77a3f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#8c6533]">
                      詳細を見る
                    </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
