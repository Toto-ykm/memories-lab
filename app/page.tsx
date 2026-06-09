import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { ProductVisual } from "@/components/ProductVisual";
import { StructuredData } from "@/components/StructuredData";
import { faqItems, giftScenes, products, site, works } from "@/lib/site";

const tiers = ["Premium", "Standard", "Entry"];

const steps = [
  "LINEまたはフォームで相談",
  "写真・文字内容を送付",
  "デザイン案を確認",
  "職人仕上げで制作",
  "ギフト仕様でお届け"
];

const voices = [
  {
    name: "60代女性・東京都",
    text: "高級感があり、家族の記念品として長く飾れる仕上がりでした。LINEで相談できたのも安心でした。"
  },
  {
    name: "40代男性・神奈川県",
    text: "父の退職祝いに選びました。落ち着いた雰囲気で、贈る側としても誇らしいギフトになりました。"
  },
  {
    name: "50代女性・兵庫県",
    text: "写真の見せ方まで丁寧に提案していただき、想像以上に品のある記念品になりました。"
  }
];

const ranking = ["glass-clock", "crystal-block", "glass-photo-frame"];

const process = [
  ["01", "ヒアリング", "用途、贈る相手、飾る場所、納期を確認し、最適な商品を提案します。"],
  ["02", "写真確認", "明るさ、解像度、表情を確認し、高級感を損なわない見せ方を整えます。"],
  ["03", "デザイン制作", "余白、文字量、素材感を意識し、百貨店品質にふさわしいレイアウトへ。"],
  ["04", "仕上げ・検品", "完成後に見え方を確認し、ギフトとして美しく届くよう丁寧に梱包します。"]
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
      <section className="relative min-h-[94vh] overflow-hidden bg-[#211914] text-white">
        <Image
          src="/images/hero.svg"
          alt="高級な家族ギフトのクリスタルブロック"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,15,12,0.86)_0%,rgba(38,29,22,0.68)_42%,rgba(38,29,22,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(251,247,238,1))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(94vh-84px)] max-w-7xl items-center px-5 pb-24 pt-10 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-[#f0d99d]">
              Luxury family memorial gifts
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-normal sm:text-7xl lg:text-8xl">
              Memories Lab
            </h1>
            <p className="mt-6 font-serif text-2xl font-medium leading-relaxed text-[#fff4d8] sm:text-4xl">
              大切な瞬間を、未来へ残す。
            </p>
            <p className="mt-7 max-w-2xl text-base leading-9 text-white/86 sm:text-lg">
              家族の記念日、節目のお祝い、感謝の贈りものを、上質なガラスとクリスタルに刻むオーダーメイドギフトブランドです。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.lineUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#d8bf83] px-8 py-4 text-sm font-bold text-[#211914] shadow-soft transition hover:bg-[#efd79a]"
              >
                LINE公式で相談する
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#352c23]"
              >
                商品ラインを見る
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 text-center backdrop-blur-sm">
              {["名入れ対応", "ギフト包装", "事前相談"].map((item) => (
                <div key={item} className="bg-[#211914]/45 px-3 py-4 text-xs font-semibold tracking-[0.08em] text-[#fff4d8] sm:text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">ABOUT</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#352c23] sm:text-5xl">
              家族の記憶を、邸宅にふさわしい品格へ。
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-[#584735] sm:text-lg">
            <p>
              Memories Labは、写真や名前、記念日、短いメッセージを美しく編集し、ガラス・クリスタルの記念品として仕立てる高級ギフトブランドです。
            </p>
            <p>
              華美に飾るのではなく、素材の透明感、余白、文字の佇まいで魅せること。ご家族の大切な節目を、上質な暮らしに自然に残る一品へ昇華します。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">BRAND STORY</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#352c23] sm:text-5xl">
              写真を、家族の資産になる贈りものへ。
            </h2>
            <div className="mt-7 space-y-5 leading-8 text-[#584735]">
              <p>
                子どもの成長、家族の笑顔、人生の節目。何気なく撮った写真ほど、時間が経つにつれて価値を増していきます。
              </p>
              <p>
                Memories Labは、その記憶を安価な写真グッズではなく、住まいに長く残せる高級オーダーメイドギフトとして仕立てるブランドです。
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">PROMISE</p>
            <p className="mt-5 font-serif text-2xl leading-10">
              派手さより品格を。安さより記憶の残り方を。贈ったあとも暮らしの中で愛される一品を目指します。
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#f4ead9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">PRODUCTS</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">
                商品ライン
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-[#584735]">
              ご両親への節目の贈りもの、記念日、法人ギフトにも選びやすい価格帯でご用意しています。
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a77a3f]">{tier}</p>
                <p className="mt-4 min-h-14 leading-7 text-[#584735]">
                  {tier === "Premium" ? "大切な節目にふさわしい、重厚感のある記念品。" : tier === "Standard" ? "住まいに自然になじむ、上質で贈りやすい定番。" : "日常の中で思い出に触れられる、気軽なギフト。"}
                </p>
                <div className="mt-7 space-y-4">
                  {products.filter((product) => product.tier === tier).map((item) => (
                    <Link href={`/products/${item.slug}`} key={item.name} className="flex items-baseline justify-between gap-4 border-t border-[#d8bf83]/35 pt-4">
                      <h3 className="font-serif text-xl font-semibold text-[#352c23]">{item.name}</h3>
                      <p className="shrink-0 font-bold text-[#a77a3f]">{item.price}</p>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">GIFT RANKING</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">ギフトランキング</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ranking.map((slug, index) => {
              const product = products.find((item) => item.slug === slug);
              if (!product) return null;
              return (
                <Link key={slug} href={`/products/${slug}`} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-5 shadow-soft">
                  <ProductVisual name={product.name} tier={`No.${index + 1}`} className="aspect-[4/3]" />
                  <p className="mt-5 text-sm font-bold tracking-[0.24em] text-[#a77a3f]">RANK {index + 1}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#352c23]">{product.name}</h3>
                  <p className="mt-3 leading-7 text-[#584735]">{product.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="works" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-lg shadow-soft">
            <Image src="/images/works.svg" alt="制作事例" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">WORKS</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">制作事例</h2>
            <div className="mt-8 space-y-4">
              {works.slice(0, 3).map((work, index) => (
                <Link href="/works" key={work.title} className="block rounded-lg border border-[#d8bf83]/45 bg-white/55 p-5">
                  <p className="text-sm font-bold text-[#a77a3f]">Case {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-2 font-serif text-xl leading-8 text-[#352c23]">{work.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#352c23] px-5 py-20 text-[#fffaf0] sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">CRAFT PROCESS</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">制作工程</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([num, title, text]) => (
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
          <div className="lg:col-span-1">
            <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">QUALITY</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">品質へのこだわり</h2>
          </div>
          <div className="grid gap-5 lg:col-span-2">
            {["写真の明るさや色味を確認し、素材に合う見え方へ整えます。", "文字量を抑え、余白を活かすことで百貨店ギフトらしい品格を保ちます。", "ギフト包装と検品を行い、贈り物として美しく届く状態を目指します。"].map((text) => (
              <div key={text} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-6 shadow-soft">
                <p className="leading-8 text-[#584735]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">GIFT SCENES</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">ギフトシーン</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {giftScenes.map((scene) => (
              <Link key={scene.slug} href={`/gift-scenes/${scene.slug}`} className="rounded-lg border border-[#d8bf83]/40 bg-[#fbf7ee] p-5 transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-[#352c23]">{scene.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#584735]">{scene.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">WHY CHOOSE US</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">選ばれる理由</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["高級感のある見せ方", "素材、余白、文字配置を整え、安価な写真グッズに見えない仕上がりへ。"],
              ["相談しやすい導線", "LINE公式で写真を送りながら相談でき、初めてでも迷わず進められます。"],
              ["法人・家族どちらも対応", "個人の記念日から法人記念品まで、用途に合わせて品格を調整します。"]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
                <h3 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h3>
                <p className="mt-4 leading-7 text-[#584735]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="bg-[#352c23] px-5 py-20 text-[#fffaf0] sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">ORDER FLOW</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">ご注文の流れ</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/14 bg-white/[0.06] p-5">
                <p className="font-serif text-3xl text-[#d8bf83]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-lg font-bold leading-7">{step}</h3>
                <div className="gold-line mt-5 h-px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["安心保証", "破損・不良が確認された場合は、到着後のご連絡内容を確認し適切に対応します。"],
            ["デザイン確認", "制作前に文字内容や写真配置を確認できるため、贈答品として安心です。"],
            ["納期相談", "記念日に間に合わせたい場合は、LINE公式で事前に納期をご相談いただけます。"]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fbf7ee] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-4 leading-7 text-[#584735]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">VOICES</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">お客様の声</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {voices.map((voice) => (
              <figure key={voice.name} className="rounded-lg bg-white/70 p-7 shadow-soft">
                <blockquote className="font-serif text-xl leading-9 text-[#352c23]">“{voice.text}”</blockquote>
                <figcaption className="mt-6 text-sm font-bold text-[#a77a3f]">{voice.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f4ead9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#352c23] sm:text-5xl">よくあるご質問</h2>
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
