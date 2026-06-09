import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "写真提出ガイド",
  description: "写真入り高級ギフトを美しく仕上げるための写真選び、提出方法、注意点。",
  openGraph: {
    title: "写真提出ガイド | Memories Lab",
    description: "スマートフォン写真でも上品に仕上げるためのポイント。"
  }
};

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
          {[
            ["おすすめの写真", "明るく、主役の表情が分かりやすく、できるだけ高解像度の写真がおすすめです。"],
            ["避けたい写真", "暗すぎる写真、顔が小さすぎる写真、強い加工が入った写真は仕上がりに影響します。"],
            ["複数写真の場合", "主役を決め、写真点数を絞ることで余白が生まれ、上品に見えます。"],
            ["提出方法", "LINE公式で送付できます。クラウド共有やメール添付も内容に応じて相談可能です。"]
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
