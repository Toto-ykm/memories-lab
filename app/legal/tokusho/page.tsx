import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "Memories Labの特定商取引法に基づく表記です。",
  openGraph: {
    title: "特定商取引法に基づく表記 | Memories Lab",
    description: "販売事業者、所在地、お支払い方法、返品・交換・キャンセル等について記載しています。"
  }
};

const rows = [
  ["販売事業者", "LifeCraft Lab"],
  ["運営責任者", "平野 美子"],
  ["所在地", "東京都渋谷区東3丁目16番3号 エフ・ニッセイ恵比寿ビル4階"],
  ["電話番号", "請求があった場合、遅滞なく開示いたします。"],
  ["メールアドレス", "info@lifecraft-lab.com"],
  ["販売価格", "各商品ページに記載しております。"],
  ["商品代金以外の必要料金", "銀行振込の場合の振込手数料、インターネット接続にかかる通信費等"],
  ["お支払い方法", "クレジットカード決済、銀行振込"],
  ["お支払い時期", "ご注文時にお支払いいただきます。"],
  [
    "商品の引渡時期",
    "ご入金確認後、制作を開始いたします。通常7〜14営業日以内に発送いたします。受注状況や繁忙期により前後する場合があります。"
  ],
  [
    "返品・交換・キャンセルについて",
    "当店の商品は、お客様からご提供いただいた写真を使用して制作するオーダーメイド商品です。そのため、制作開始後のお客様都合による返品・交換・キャンセルはお受けできません。"
  ],
  [
    "不良品・破損品について",
    "商品到着後7日以内にご連絡ください。商品の破損、不良、当店の制作ミスが確認された場合は、内容を確認のうえ再制作または交換対応をいたします。"
  ],
  ["お問い合わせ窓口", "info@lifecraft-lab.com"]
];

export default function TokushoPage() {
  return (
    <main>
      <PageHero
        eyebrow="LEGAL"
        title="特定商取引法に基づく表記"
        lead="Memories Labの販売条件、返品・交換・キャンセル、お問い合わせ窓口について記載しています。"
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
