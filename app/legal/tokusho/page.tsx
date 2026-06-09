import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "Memories Labの特定商取引法に基づく表記。",
  openGraph: {
    title: "特定商取引法に基づく表記 | Memories Lab",
    description: "日本のECサイトとして一般的な販売条件を掲載しています。"
  }
};

const rows = [
  ["販売業者", "Memories Lab"],
  ["運営責任者", "事業準備中"],
  ["所在地", "東京都内 事業準備中"],
  ["メールアドレス", "hello@memories-lab.example.com"],
  ["販売価格", "各商品ページに税込価格の目安を表示しています。正式価格は注文内容により確定します。"],
  ["商品代金以外の必要料金", "送料、振込手数料、オプション料金が発生する場合があります。"],
  ["支払い方法", "クレジットカード、銀行振込、オンライン決済を想定しています。"],
  ["支払い時期", "注文確定時または制作開始前にお支払いいただきます。"],
  ["引き渡し時期", "デザイン確定後、通常2〜3週間程度で発送します。"],
  ["返品・交換", "オーダーメイド商品のため、お客様都合による返品・交換はお受けできません。"],
  ["不良品対応", "商品到着後7日以内にご連絡ください。破損・不良を確認のうえ対応します。"],
  ["キャンセル", "制作開始後のキャンセルは原則お受けできません。"]
];

export default function TokushoPage() {
  return (
    <main>
      <PageHero
        eyebrow="LEGAL"
        title="特定商取引法に基づく表記"
        lead="Memories Labの販売条件について、一般的なECサイト表記として掲載しています。"
        breadcrumbs={[{ label: "特定商取引法に基づく表記" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-[#fffaf0] shadow-soft">
          <dl>
            {rows.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-[#d8bf83]/35 p-5 last:border-b-0 sm:grid-cols-[180px_1fr]">
                <dt className="font-bold text-[#352c23]">{label}</dt>
                <dd className="leading-7 text-[#584735]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
