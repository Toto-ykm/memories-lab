import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "初めての方へ",
  description: "Memories Labを初めて利用する方へ。商品選び、写真提出、注文前相談のポイントをご案内します。",
  openGraph: {
    title: "初めての方へ | Memories Lab",
    description: "商品選びから写真提出、納期相談まで丁寧にご案内します。"
  }
};

const points = [
  {
    title: "商品が決まっていなくても相談可能",
    text: "用途、贈る相手、ご予算、納期から最適な商品をご提案します。大切な贈り物だからこそ、迷う段階からご相談ください。"
  },
  {
    title: "写真選びからサポート",
    text: "スマートフォン写真でも、仕上がりを確認しながら選定できます。複数の候補写真がある場合も丁寧に確認します。"
  },
  {
    title: "高級感を損なわないデザイン",
    text: "写真と文字を詰め込みすぎず、百貨店ギフトのように余白と品格を大切にした仕上がりを目指します。"
  }
];

export default function FirstTimePage() {
  return (
    <main>
      <PageHero
        eyebrow="FIRST TIME"
        title="初めての方へ"
        lead="写真入りギフトが初めてでも、上質な贈答品として失礼のない仕上がりになるよう丁寧にご案内します。"
        breadcrumbs={[{ label: "初めての方へ" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {points.map((point) => (
            <article key={point.title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{point.title}</h2>
              <p className="mt-4 leading-8 text-[#584735]">{point.text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
          <h2 className="font-serif text-3xl font-semibold">迷ったら、まずはメールでご相談ください。</h2>
          <p className="mt-5 leading-8 text-white/76">
            商品についてのご質問、お見積り、ご注文前のご相談は info@lifecraft-lab.com へご連絡ください。
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#d8bf83] px-7 py-4 text-sm font-bold text-[#352c23]">
            お問い合わせはこちら
          </Link>
        </div>
      </section>
      <CTA />
    </main>
  );
}
