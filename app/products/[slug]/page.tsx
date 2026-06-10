import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { ProductImage } from "@/components/ProductImage";
import { StructuredData } from "@/components/StructuredData";
import { getProduct, productDetails, products, site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name}は${product.price}。${product.summary}`,
    openGraph: {
      title: `${product.name} | Memories Lab`,
      description: product.summary,
      images: product.image ? [product.image] : undefined
    }
  };
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const detail = productDetails[product.slug];
  const related = products
    .filter((item) => item.slug !== product.slug && (item.tier === product.tier || item.uses.some((use) => product.uses.includes(use))))
    .slice(0, 3);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "JPY",
      price: product.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <main>
      <StructuredData data={productJsonLd} />
      <Breadcrumbs items={[{ label: "商品一覧", href: "/products" }, { label: product.name }]} />
      <section className="px-5 py-14 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ProductImage product={product} label="MAIN VISUAL" className="aspect-[4/3]" />
          <div>
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">{product.tier}</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#352c23] sm:text-6xl">{product.name}</h1>
            <p className="mt-5 text-2xl font-bold text-[#a77a3f]">{product.price}</p>
            <p className="mt-6 text-lg leading-9 text-[#584735]">{product.summary}</p>
            <p className="mt-6 rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-5 font-serif text-xl leading-9 text-[#352c23]">
              {detail.emotional}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.lineUrl} className="rounded-full bg-[#a77a3f] px-8 py-4 text-center text-sm font-bold text-white">
                LINEで相談する
              </Link>
              <Link href="/contact" className="rounded-full border border-[#a77a3f] px-8 py-4 text-center text-sm font-bold text-[#a77a3f]">
                メールフォームへ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead9] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-4">
          {[
            ["価格", product.price],
            ["サイズ", product.size],
            ["納期", product.delivery],
            ["おすすめ対象", detail.target]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg bg-[#fffaf0] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-5 leading-8 text-[#584735]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-8 shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">PRODUCT VALUE</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23]">購入メリット</h2>
            <p className="mt-5 leading-9 text-[#584735]">{detail.merit}</p>
          </article>
          <article className="rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">GIFT DEMAND</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold">ギフト需要</h2>
            <p className="mt-5 leading-8 text-white/76">{detail.giftDemand}</p>
          </article>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">SCENE</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">利用シーン</h2>
            <p className="mt-6 leading-8 text-[#584735]">{detail.sceneLead}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {detail.sceneExamples.map((scene) => (
              <div key={scene} className="rounded-lg border border-[#d8bf83]/45 bg-white/70 p-5">
                <p className="font-serif text-xl font-semibold text-[#352c23]">{scene}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">DETAIL</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">特徴・制作事例・おすすめ用途</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7">
              <h3 className="font-serif text-2xl font-semibold text-[#352c23]">特徴</h3>
              <ul className="mt-5 space-y-3 text-[#584735]">
                {product.features.map((feature) => <li key={feature}>・{feature}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7">
              <h3 className="font-serif text-2xl font-semibold text-[#352c23]">おすすめ用途</h3>
              <ul className="mt-5 space-y-3 text-[#584735]">
                {product.uses.map((use) => <li key={use}>・{use}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7">
              <h3 className="font-serif text-2xl font-semibold text-[#352c23]">制作事例</h3>
              <p className="mt-5 leading-8 text-[#584735]">{product.caseText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="rounded-lg bg-[#fffaf0] p-8 shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">VOICE</p>
            <blockquote className="mt-5 font-serif text-2xl leading-10 text-[#352c23]">“{detail.voice}”</blockquote>
            <figcaption className="mt-6 text-sm font-bold text-[#a77a3f]">匿名のお客様</figcaption>
          </figure>
          <div className="rounded-lg bg-[#fffaf0] p-8 shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">FAQ</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23]">よくある質問</h2>
            <div className="mt-6 divide-y divide-[#d8bf83]/40">
              {detail.faqs.map(([q, a]) => (
                <details key={q} className="py-5">
                  <summary className="cursor-pointer font-bold text-[#352c23]">{q}</summary>
                  <p className="mt-3 leading-7 text-[#584735]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl font-semibold text-[#352c23]">関連商品</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="rounded-lg border border-[#d8bf83]/45 bg-[#fbf7ee] p-5">
                  <ProductImage product={item} className="mb-5 aspect-[4/3]" />
                  <p className="text-sm font-bold text-[#a77a3f]">{item.tier}</p>
                  <h3 className="mt-3 font-serif text-xl font-semibold">{item.name}</h3>
                  <p className="mt-2 font-bold text-[#a77a3f]">{item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CTA title={`${product.name}のご相談はこちら`} />
    </main>
  );
}
