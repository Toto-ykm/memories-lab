import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ProductImage } from "@/components/ProductImage";
import { StructuredData } from "@/components/StructuredData";
import { getProduct, getScene, giftScenes, sceneArticles, site } from "@/lib/site";

export function generateStaticParams() {
  return giftScenes.map((scene) => ({ slug: scene.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scene = getScene(slug);
  if (!scene) return {};
  return {
    title: scene.title,
    description: `${scene.title}におすすめのオーダーメイド家族ギフト。${scene.keywords}`,
    keywords: scene.keywords.split(" "),
    openGraph: {
      title: `${scene.title} | Memories Lab`,
      description: scene.description
    }
  };
}

export default async function GiftScenePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scene = getScene(slug);
  if (!scene) notFound();

  const article = sceneArticles[scene.slug];
  const recommended = scene.recommended.map((productSlug) => getProduct(productSlug)).filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${scene.title}におすすめのオーダーメイド家族ギフト`,
    description: scene.description,
    keywords: scene.keywords,
    author: { "@type": "Organization", name: site.name }
  };

  return (
    <main>
      <StructuredData data={jsonLd} />
      <PageHero
        eyebrow="GIFT SCENE"
        title={scene.title}
        lead={scene.description}
        breadcrumbs={[{ label: "ギフトシーン", href: "/gift-scenes" }, { label: scene.title }]}
      />

      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">POINT</p>
            <h2 className="mt-5 font-serif text-3xl font-semibold">このページでわかること</h2>
            <ul className="mt-6 space-y-4 text-white/78">
              <li>・なぜ{scene.title}に写真入りギフトが喜ばれるのか</li>
              <li>・おすすめ商品と選び方</li>
              <li>・失敗しない写真、文字、納期の考え方</li>
              <li>・注文前によくある質問</li>
            </ul>
          </aside>
          <article className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-8 shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">WHY IT WORKS</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23]">なぜ{scene.title}に喜ばれるのか</h2>
            <div className="mt-6 space-y-5 leading-9 text-[#584735]">
              {article.why.map((text) => <p key={text}>{text}</p>)}
              <p>
                特に大切なのは、贈る相手の生活に自然に残ることです。棚に飾るもの、毎日使うもの、職場で目に入るものなど、使われる場面まで考えて選ぶと、ギフトは一度きりの贈り物ではなく、長く記憶を呼び戻す存在になります。Memories Labでは、相談の段階で用途や写真の雰囲気を伺い、百貨店品質を感じられる落ち着いた仕上がりへ整えます。
              </p>
              <p>
                既製品では伝えきれない感謝や祝福を、名前、日付、写真、短い言葉にまとめられる点も魅力です。華美に見せるのではなく、素材と余白で品よく見せることで、富裕層ファミリーや法人のお客様にも贈りやすい一品になります。
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f4ead9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">RECOMMEND</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">おすすめ商品</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {recommended.map((product) => product && (
              <Link key={product.slug} href={`/products/${product.slug}`} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-5 shadow-soft">
                <ProductImage product={product} className="aspect-[4/3]" />
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[#352c23]">{product.name}</h3>
                <p className="mt-2 font-bold text-[#a77a3f]">{product.price}</p>
                <p className="mt-4 leading-7 text-[#584735]">{product.summary}</p>
                <span className="mt-5 inline-flex w-full justify-center rounded-full bg-[#a77a3f] px-5 py-3 text-sm font-bold text-white">
                  この商品を見る
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-lg bg-[#fffaf0] p-8 shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">HOW TO CHOOSE</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23]">選び方</h2>
            <div className="mt-6 space-y-5 leading-8 text-[#584735]">
              {article.howToChoose.map((text) => <p key={text}>{text}</p>)}
            </div>
          </article>
          <article className="rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">AVOID MISTAKES</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold">失敗しないポイント</h2>
            <div className="mt-6 space-y-5 leading-8 text-white/76">
              {article.avoidMistakes.map((text) => <p key={text}>{text}</p>)}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f4ead9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-[#fffaf0] p-7 shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">WORK SAMPLE</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23]">制作事例</h2>
            <p className="mt-5 leading-8 text-[#584735]">
              {scene.title}の用途に合わせて、写真の構図、文字量、素材の見せ方を調整します。記念日らしい華やかさを出しながらも、派手すぎず、住まいや職場に長く置ける上品なデザインを大切にしています。
            </p>
          </div>
          <figure className="rounded-lg bg-white/70 p-7 shadow-soft">
            <blockquote className="font-serif text-xl leading-9 text-[#352c23]">“{scene.voice}”</blockquote>
            <figcaption className="mt-6 text-sm font-bold text-[#a77a3f]">匿名のお客様</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">よくある質問</h2>
          <div className="mt-10 divide-y divide-[#d8bf83]/45 rounded-lg bg-[#fffaf0] px-6 shadow-soft">
            {article.faqs.map(([q, a]) => (
              <details key={q} className="py-6">
                <summary className="cursor-pointer font-bold text-[#352c23]">{q}</summary>
                <p className="mt-4 leading-7 text-[#584735]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTA title={`${scene.title}のギフト相談はこちら`} />
    </main>
  );
}
