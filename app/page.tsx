import Link from "next/link";
import { CTA } from "@/components/CTA";
import { HeroProductSlider } from "@/components/HeroProductSlider";
import { ProductImage } from "@/components/ProductImage";
import { StructuredData } from "@/components/StructuredData";
import { faqItems, giftScenes, products, site } from "@/lib/site";

const ranking = ["crystal-glass", "glass-clock", "glass-photo-frame", "beer-mug"];

const flow = [
  ["01", "商品を選ぶ", "用途や価格帯から、候補商品を確認します。"],
  ["02", "LINEで相談", "写真、納期、贈る相手を共有いただきます。"],
  ["03", "見せ方を提案", "文字量や写真の配置を整えた案をご確認いただきます。"],
  ["04", "制作・お届け", "ギフトとして美しく届く状態で仕上げます。"]
];

const promises = [
  "写真を詰め込みすぎず、余白と素材感で品よく見せます。",
  "家族向け、祖父母向け、法人向けで文面と見せ方を変えます。",
  "LINEで写真を送りながら、初めての方にもわかりやすく進めます。"
];

export default function Home() {
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description
  };

  return (
    <main>
      <StructuredData data={webSiteJsonLd} />
      <section className="bg-[#211914] px-5 py-12 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid min-h-[76vh] max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-[#f0d99d]">Luxury custom family gifts</p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] sm:text-7xl lg:text-8xl">Memories Lab</h1>
            <p className="mt-6 font-serif text-2xl font-medium leading-relaxed text-[#fff4d8] sm:text-4xl">
              大切な瞬間を、未来へ残す。
            </p>
            <p className="mt-7 max-w-2xl text-base leading-9 text-white/86 sm:text-lg">
              子どもの成長、家族の笑顔、人生の節目を、世界にひとつだけの高級オーダーメイドギフトとして仕立てます。安価なグッズではなく、贈る相手の暮らしに長く残る百貨店品質の記念品へ。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-[#d8bf83] px-8 py-4 text-sm font-bold text-[#211914] shadow-soft transition hover:bg-[#efd79a]">
                商品を見る
              </Link>
              <Link href={site.lineUrl} className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#352c23]">
                LINEで相談する
              </Link>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 text-center backdrop-blur-sm">
              {["写真相談", "名入れ対応", "ギフト包装"].map((item) => (
                <div key={item} className="bg-[#211914]/45 px-3 py-4 text-xs font-semibold tracking-[0.08em] text-[#fff4d8] sm:text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <HeroProductSlider />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">SHOPPING GUIDE</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#352c23] sm:text-5xl">
              まずは、贈る目的から選べます。
            </h2>
            <p className="mt-6 leading-8 text-[#584735]">
              Memories Labは、商品単体を並べるだけのショップではありません。贈る相手、記念日の意味、飾る場所、使う場面に合わせて、ふさわしい商品へ進める専門店です。
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {giftScenes.slice(0, 6).map((scene) => (
              <Link key={scene.slug} href={`/gift-scenes/${scene.slug}`} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-6 shadow-soft transition hover:-translate-y-1">
                <h3 className="font-serif text-2xl font-semibold text-[#352c23]">{scene.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#584735]">{scene.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ead9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">FEATURED GIFTS</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">おすすめ商品</h2>
            </div>
            <Link href="/products" className="font-bold text-[#a77a3f]">すべての商品を見る</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ranking.map((slug, index) => {
              const product = products.find((item) => item.slug === slug);
              if (!product) return null;
              return (
                <Link key={slug} href={`/products/${slug}`} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-5 shadow-soft">
                  <ProductImage product={product} label={`PICK ${index + 1}`} className="aspect-[4/3]" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-[#352c23]">{product.name}</h3>
                  <p className="mt-2 font-bold text-[#a77a3f]">{product.price}</p>
                  <p className="mt-4 leading-7 text-[#584735]">{product.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">BRAND STORY</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">家族の記憶を、品格ある贈り物へ。</h2>
          </div>
          <div className="space-y-6 leading-8 text-[#584735] lg:col-span-2">
            <p>
              写真は、時間が経つほど価値を増す家族の資産です。Memories Labは、その写真を安価なプリント品として扱うのではなく、節目にふさわしい素材と見せ方で整え、長く飾れるギフトとして届けます。
            </p>
            <p>
              高級感70%、親しみやすさ30%。大切にしているのは、豪華に見せることではなく、受け取る方が毎日の暮らしの中で自然に愛せる上品さです。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#352c23] px-5 py-20 text-[#fffaf0] sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">ORDER FLOW</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">相談からお届けまで</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {flow.map(([num, title, text]) => (
              <article key={num} className="rounded-lg border border-white/14 bg-white/[0.06] p-6">
                <p className="font-serif text-3xl text-[#d8bf83]">{num}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-white/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {promises.map((text) => (
            <article key={text} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">QUALITY</p>
              <p className="mt-4 leading-8 text-[#584735]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4ead9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">よくある質問</h2>
          <div className="mt-10 divide-y divide-[#d8bf83]/50 rounded-lg bg-[#fffaf0] px-6 shadow-soft">
            {faqItems.slice(0, 5).map(([q, a]) => (
              <details key={q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#352c23]">
                  {q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#d8bf83] text-[#a77a3f] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-7 text-[#584735]">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="font-bold text-[#a77a3f]">FAQをすべて見る</Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
