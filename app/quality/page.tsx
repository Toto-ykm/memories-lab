import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "品質保証",
  description: "Memories Labの品質保証、検品、破損・不良時の対応について。",
  openGraph: {
    title: "品質保証 | Memories Lab",
    description: "高級ギフトブランドとしての検品と安心対応。"
  }
};

export default function QualityPage() {
  return (
    <main>
      <PageHero
        eyebrow="QUALITY GUARANTEE"
        title="品質保証"
        lead="大切な贈答品だからこそ、見た目の美しさ、文字内容、梱包状態まで丁寧に確認します。"
        breadcrumbs={[{ label: "品質保証" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            ["制作前確認", "写真、文字、日付、用途を確認し、贈答品として違和感のない構成へ整えます。"],
            ["仕上がり検品", "傷、汚れ、文字内容、全体の見え方を確認し、ギフトとしての品質を守ります。"],
            ["梱包品質", "配送時の破損を防ぐため、商品に応じた梱包とギフト仕様を整えます。"],
            ["不良時対応", "到着時の破損や明らかな不良がある場合は、内容確認のうえ適切に対応します。"]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-4 leading-8 text-[#584735]">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
