import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "納期について",
  description: "Memories Labの制作納期、急ぎ注文、法人注文の納期相談について。",
  openGraph: {
    title: "納期について | Memories Lab",
    description: "記念日に間に合わせるための注文タイミングと納期目安。"
  }
};

export default function DeliveryPage() {
  return (
    <main>
      <PageHero
        eyebrow="DELIVERY"
        title="納期について"
        lead="通常はデザイン確定後2〜3週間程度を目安にしています。記念日が決まっている場合は早めのご相談がおすすめです。"
        breadcrumbs={[{ label: "納期について" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl rounded-lg bg-[#fffaf0] p-8 shadow-soft">
          {[
            ["1. ご相談", "用途、数量、希望納期を確認します。"],
            ["2. 写真・文字確定", "制作に使う写真、名前、日付、メッセージを確定します。"],
            ["3. デザイン確認", "内容確認後、修正が必要な場合は調整します。"],
            ["4. 制作・発送", "商品制作、検品、梱包を行い発送します。"]
          ].map(([title, text]) => (
            <div key={title} className="border-b border-[#d8bf83]/35 py-6 last:border-b-0">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-3 leading-8 text-[#584735]">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA title="記念日が近い場合も、まずはご相談ください。" />
    </main>
  );
}
