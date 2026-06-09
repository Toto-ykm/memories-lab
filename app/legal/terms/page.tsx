import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Memories Labの利用規約。",
  openGraph: {
    title: "利用規約 | Memories Lab",
    description: "Memories Labのサービス利用に関する規約です。"
  }
};

const sections = [
  ["適用", "本規約は、Memories Labが提供するオーダーメイドギフト制作サービスの利用条件を定めるものです。"],
  ["注文", "お客様は、商品内容、写真、文字情報、納期等を確認したうえで注文するものとします。"],
  ["制作物", "写真・文字等の素材は、お客様が正当な権利を有するものをご提出ください。"],
  ["支払い", "代金、送料、支払い方法は、注文時または見積時に提示する内容に従うものとします。"],
  ["キャンセル", "オーダーメイド商品の性質上、制作開始後のキャンセルは原則としてお受けできません。"],
  ["返品・交換", "お客様都合による返品・交換はお受けできません。不良・破損がある場合は速やかにご連絡ください。"],
  ["免責", "天災、配送遅延、通信障害等の不可抗力により生じた損害について、当ブランドは責任を負いかねます。"],
  ["規約変更", "本規約は、必要に応じて予告なく変更される場合があります。"]
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="TERMS"
        title="利用規約"
        lead="Memories Labをご利用いただく前にご確認ください。"
        breadcrumbs={[{ label: "利用規約" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#fffaf0] p-8 shadow-soft">
          {sections.map(([title, text]) => (
            <section key={title} className="border-b border-[#d8bf83]/35 py-6 last:border-b-0">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-3 leading-8 text-[#584735]">{text}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
