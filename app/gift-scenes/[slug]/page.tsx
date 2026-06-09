import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
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
    description: `${scene.title}におすすめの高級オーダーメイド家族ギフト。${scene.keywords}`,
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
    headline: `${scene.title}におすすめの高級オーダーメイドギフト`,
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
            <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">SEARCH INTENT</p>
            <h2 className="mt-5 font-serif text-3xl font-semibold">このページで分かること</h2>
            <ul className="mt-6 space-y-4 text-white/78">
              <li>・なぜ{scene.title}に写真入りギフトが喜ばれるのか</li>
              <li>・高級感を損なわない商品の選び方</li>
              <li>・失敗しない写真、文字、納期の考え方</li>
              <li>・おすすめ商品と注文前のよくある質問</li>
            </ul>
          </aside>
          <article className="prose max-w-none rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-8 shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">WHY IT WORKS</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23]">なぜ{scene.title}に喜ばれるのか</h2>
            <div className="mt-6 space-y-5 leading-9 text-[#584735]">
              {article.why.map((text) => <p key={text}>{text}</p>)}
              <p>
                大切なのは、写真を単なる印刷物として扱わないことです。贈る相手の暮らし、飾る場所、見る頻度、家族との距離感まで考えると、選ぶべき商品や文字量は変わります。Memories Labでは、安価なオーダーグッズのように派手な装飾で目立たせるのではなく、素材、余白、文字のバランスで上質さを出します。
              </p>
              <p>
                そのため、富裕層のご家庭や法人の贈答でも違和感のない、落ち着いた印象に仕上げやすいのが特徴です。記念日が過ぎたあとも飾り続けられること、相手の住まいに自然になじむこと、そして見るたびに家族の記憶がよみがえること。この三つを満たすギフトは、価格以上の満足につながります。
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
                <ProductVisual name={product.name} tier={product.tier} finish={product.visual} className="aspect-[4/3]" />
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
              <p>
                迷った場合は、贈る相手が「飾るもの」を喜ぶか、「使うもの」を喜ぶかで考えると選びやすくなります。格式を出すならPremium、暮らしになじませるならStandard、気軽に気持ちを届けるならEntryが目安です。
              </p>
            </div>
          </article>
          <article className="rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">AVOID MISTAKES</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold">失敗しないポイント</h2>
            <div className="mt-6 space-y-5 leading-8 text-white/76">
              {article.avoidMistakes.map((text) => <p key={text}>{text}</p>)}
              <p>
                また、納期に余裕を持つことも大切です。写真の確認、文字内容の調整、デザイン確認を丁寧に行うほど、仕上がりの満足度は高まります。記念日が決まっている場合は、早めのご相談をおすすめします。
              </p>
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
              {scene.title}の用途に合わせ、写真の余白や文字量を整え、贈答品として品よく見えるレイアウトに仕上げます。高級ホテルや百貨店ギフト売場に並んでも違和感のない、落ち着いた色味と素材感を意識します。
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
      <CTA title={`${scene.title}のご相談はこちら`} />
    </main>
  );
}
