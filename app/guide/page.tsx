import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "ご利用ガイド",
  description: "Memories Labの注文方法、写真提出方法、制作フロー、発送までの流れ。",
  openGraph: {
    title: "ご利用ガイド | Memories Lab",
    description: "高級オーダーメイド家族ギフトのご注文からお届けまで。"
  }
};

const guides = [
  {
    title: "注文方法",
    text: "商品ページまたはお問い合わせページから、LINE公式・メールフォームでご相談ください。用途、納期、ご希望商品を伺います。"
  },
  {
    title: "写真提出方法",
    text: "スマートフォン写真、スキャン画像、クラウド共有などに対応します。画質を確認し、最適な写真を一緒に選びます。"
  },
  {
    title: "制作フロー",
    text: "ヒアリング後、文字内容と写真をもとにデザイン案を作成します。確認・修正後に制作へ進行します。"
  },
  {
    title: "発送までの流れ",
    text: "完成後に検品し、ギフト仕様で梱包します。ご自宅宛て、または贈り先への直送もご相談いただけます。"
  }
];

export default function GuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="GUIDE"
        title="ご利用ガイド"
        lead="初めての方にも安心してご注文いただけるよう、相談からお届けまでの流れを丁寧にご案内します。"
        breadcrumbs={[{ label: "ご利用ガイド" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {guides.map((guide, index) => (
            <article key={guide.title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <p className="font-serif text-3xl text-[#a77a3f]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-[#352c23]">{guide.title}</h2>
              <p className="mt-4 leading-8 text-[#584735]">{guide.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
