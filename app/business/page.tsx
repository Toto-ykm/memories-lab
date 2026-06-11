import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "法人向け記念品",
  description: "卒園記念、周年記念、表彰品、ノベルティ向けのオーダーメイド記念品をご提案します。",
  openGraph: {
    title: "法人向け記念品 | Memories Lab",
    description: "法人・団体向けに品格ある記念品を小ロットからご提案します。"
  }
};

const businessUses = [
  {
    title: "卒園記念",
    text: "園名、年度、集合写真を入れたフォトパネルや木製コースターで、保護者にも喜ばれる記念品へ仕立てます。"
  },
  {
    title: "周年記念",
    text: "会社ロゴや周年年数を品よく配置し、来賓や社員へ贈れる上質な記念品をご提案します。"
  },
  {
    title: "表彰品",
    text: "受賞者名、部門名、日付を入れ、デスクや棚に飾りやすいクリスタル記念品へ仕上げます。"
  },
  {
    title: "ノベルティ",
    text: "安価に見えない配布品として、ロゴ入り木製コースターやフォトパネルをご提案します。"
  }
];

export default function BusinessPage() {
  return (
    <main>
      <PageHero
        eyebrow="BUSINESS"
        title="法人向け記念品"
        lead="卒園記念、周年記念、表彰品、ノベルティまで。配って終わりではなく、手元に残したくなる品格ある記念品をご提案します。"
        breadcrumbs={[{ label: "法人向け記念品" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {businessUses.map((item) => (
            <article key={item.title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{item.title}</h2>
              <p className="mt-4 leading-8 text-[#584735]">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
          <h2 className="font-serif text-3xl font-semibold">法人問い合わせ</h2>
          <p className="mt-5 leading-8 text-white/76">
            数量、希望納期、ロゴ掲載や個別名入れの有無をお知らせください。用途に応じて商品、仕様、お見積りの方向性をご案内します。
          </p>
          <p className="mt-5 font-bold text-[#d8bf83]">info@lifecraft-lab.com</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#d8bf83] px-7 py-4 text-center text-sm font-bold text-[#352c23]">
            メールでお問い合わせ
          </Link>
        </div>
      </section>
      <CTA title="法人・団体の記念品相談はこちら" />
    </main>
  );
}
