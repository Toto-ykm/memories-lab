import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "写真提出ガイド",
  description: "写真入り高級ギフトを美しく仕上げるための写真選び、提出方法、注意点をご案内します。",
  openGraph: {
    title: "写真提出ガイド | Memories Lab",
    description: "スマートフォン写真でも上品に仕上げるためのポイントをご案内します。"
  }
};

const guideItems = [
  {
    title: "おすすめの写真",
    text: "明るく、主役の表情が分かりやすく、できるだけ高解像度の写真がおすすめです。自然な笑顔や家族らしい一枚は、記念品として長く愛されます。"
  },
  {
    title: "避けたい写真",
    text: "暗すぎる写真、顔が小さすぎる写真、強い加工が入った写真は仕上がりに影響します。迷う場合は複数枚をお送りください。"
  },
  {
    title: "複数写真の場合",
    text: "主役にしたい写真を決めたうえで、候補写真を数枚お送りいただくと、商品に合わせた最適な配置をご提案しやすくなります。"
  },
  {
    title: "提出方法",
    text: "メール添付、クラウド共有などでご提出いただけます。容量が大きい場合は、お問い合わせ時にご相談ください。"
  }
];

export default function PhotoGuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="PHOTO GUIDE"
        title="写真提出ガイド"
        lead="写真の選び方で、ギフトの印象は大きく変わります。高級感を保つためのポイントをご案内します。"
        breadcrumbs={[{ label: "写真提出ガイド" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {guideItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{item.title}</h2>
              <p className="mt-4 leading-8 text-[#584735]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
