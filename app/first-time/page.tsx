import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "初めての方へ",
  description: "Memories Labを初めて利用する方へ。高級オーダーメイドギフトの選び方と注文前の安心ポイント。",
  openGraph: {
    title: "初めての方へ | Memories Lab",
    description: "商品選びから写真提出、納期相談まで丁寧にご案内します。"
  }
};

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
          {[
            ["商品が決まっていなくても相談可能", "用途、相手、予算、納期から最適な商品をご提案します。"],
            ["写真選びからサポート", "スマートフォン写真でも、仕上がりを確認しながら選定できます。"],
            ["高級感を損なわないデザイン", "余白と文字量を整え、百貨店品質に近い見え方を目指します。"]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-4 leading-8 text-[#584735]">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
          <h2 className="font-serif text-3xl font-semibold">迷ったら、まずはLINE公式へ。</h2>
          <p className="mt-5 leading-8 text-white/76">
            写真を送っていただければ、商品に適しているか、どのような仕上がりが向いているかをご案内できます。贈る相手に失礼のない品格を重視して、過度な装飾を避けたデザインをご提案します。
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#d8bf83] px-7 py-4 text-sm font-bold text-[#352c23]">相談窓口を見る</Link>
        </div>
      </section>
      <CTA />
    </main>
  );
}
