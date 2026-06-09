import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "法人向け記念品",
  description: "卒園記念、周年記念、表彰品、ノベルティ向けの高級オーダーメイド記念品。",
  openGraph: {
    title: "法人向け記念品 | Memories Lab",
    description: "法人・団体向けに品格ある記念品を小ロットからご提案します。"
  }
};

export default function BusinessPage() {
  return (
    <main>
      <PageHero
        eyebrow="BUSINESS"
        title="法人向け記念品"
        lead="卒園記念、周年記念、表彰品、ノベルティまで。配布して終わりではなく、手元に残したくなる品格ある記念品をご提案します。"
        breadcrumbs={[{ label: "法人向け記念品" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            ["卒園記念", "園名、年度、集合写真を入れたフォトパネルやコースターで、保護者にも喜ばれる記念品へ。"],
            ["周年記念", "会社ロゴや周年年数を品よく配置し、来賓や社員へ贈れる高級感ある記念品へ。"],
            ["表彰品", "受賞名、氏名、日付を入れ、棚やデスクに飾りやすいクリスタルブロックやガラス時計へ。"],
            ["ノベルティ", "安価に見えない配布品として、ロゴ入りコースターやタンブラーをご提案します。"]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-4 leading-8 text-[#584735]">{text}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
          <h2 className="font-serif text-3xl font-semibold">法人問い合わせ</h2>
          <p className="mt-5 leading-8 text-white/76">
            数量、希望納期、ロゴ有無、個別名入れの有無をお知らせください。用途に応じて商品、仕様、見積もりの方向性をご案内します。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={site.lineUrl} className="rounded-full bg-[#d8bf83] px-7 py-4 text-center text-sm font-bold text-[#352c23]">LINEで法人相談</Link>
            <Link href="/contact" className="rounded-full border border-white/35 px-7 py-4 text-center text-sm font-bold">メールフォームへ</Link>
          </div>
        </div>
      </section>
      <CTA title="法人・団体の記念品相談はこちら" />
    </main>
  );
}
