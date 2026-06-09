import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { giftScenes } from "@/lib/site";

export const metadata: Metadata = {
  title: "ギフトシーン",
  description: "敬老の日、出産祝い、誕生日、結婚記念日、卒園・卒業、父の日、母の日、法人記念品におすすめの高級家族ギフト。",
  openGraph: {
    title: "ギフトシーン | Memories Lab",
    description: "贈る目的別に、上質なオーダーメイドギフトをご提案します。"
  }
};

export default function GiftScenesPage() {
  return (
    <main>
      <PageHero
        eyebrow="GIFT SCENES"
        title="ギフトシーン"
        lead="家族の節目、季節の贈りもの、法人の記念品まで。目的に合わせて、ふさわしい商品と見せ方をご提案します。"
        breadcrumbs={[{ label: "ギフトシーン" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {giftScenes.map((scene) => (
            <Link key={scene.slug} href={`/gift-scenes/${scene.slug}`} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft transition hover:-translate-y-1">
              <p className="text-xs font-bold tracking-[0.22em] text-[#a77a3f]">SCENE</p>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-[#352c23]">{scene.title}</h2>
              <p className="mt-4 leading-7 text-[#584735]">{scene.description}</p>
              <p className="mt-5 text-sm font-bold text-[#a77a3f]">{scene.keywords}</p>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
