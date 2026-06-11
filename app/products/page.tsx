import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ProductImage } from "@/components/ProductImage";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "商品一覧",
  description:
    "Memories Labの商品一覧。クリスタルグラス、ガラス時計、クリスタルブロック、ガラスフォトフレーム、ビールジョッキ、ギフトセットまでご覧いただけます。",
  openGraph: {
    title: "商品一覧 | Memories Lab",
    description: "オーダーメイド家族ギフトの商品一覧です。"
  }
};

const tiers = ["Premium", "Standard", "Entry", "Gift Set", "Business"];

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="PRODUCTS"
        title="商品一覧"
        lead="贈る相手、飾る場所、記念日の重みまで考えて選べる、Memories Labのオーダーメイドギフトです。"
        breadcrumbs={[{ label: "商品一覧" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12">
          {tiers.map((tier) => {
            const tierProducts = products.filter((product) => product.tier === tier);
            if (tierProducts.length === 0) return null;
            return (
              <div key={tier}>
                <h2 className="font-serif text-3xl font-semibold text-[#352c23]">{tier}</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {tierProducts.map((product) => (
                    <article key={product.slug} className="group rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-5 shadow-soft transition hover:-translate-y-1">
                      <ProductImage product={product} className="aspect-[4/3]" />
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
            );
          })}
        </div>
      </section>
      <CTA />
    </main>
  );
}
