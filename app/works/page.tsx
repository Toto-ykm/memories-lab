import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { workCategories, works } from "@/lib/site";

export const metadata: Metadata = {
  title: "制作事例",
  description: "出産祝い、敬老の日、結婚記念日、卒園記念、法人記念品の制作事例。",
  openGraph: {
    title: "制作事例 | Memories Lab",
    description: "高級オーダーメイド家族ギフトの制作事例をカテゴリ別に紹介します。"
  }
};

export default function WorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="WORKS"
        title="制作事例"
        lead="ご家族の節目や法人の記念品として選ばれた制作例を、カテゴリ別にご覧いただけます。"
        breadcrumbs={[{ label: "制作事例" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8">
          {workCategories.map((category) => (
            <div key={category}>
              <h2 className="font-serif text-3xl font-semibold text-[#352c23]">{category}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {works.filter((work) => work.category === category).map((work) => (
                  <article key={work.title} className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-7 shadow-soft">
                    <p className="text-sm font-bold tracking-[0.18em] text-[#a77a3f]">{work.product}</p>
                    <h3 className="mt-4 font-serif text-2xl font-semibold leading-9 text-[#352c23]">{work.title}</h3>
                    <p className="mt-4 leading-7 text-[#584735]">
                      写真の選定から文字入れまで、贈る相手に合わせて落ち着いた印象に整えました。
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
