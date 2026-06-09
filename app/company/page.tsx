import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "会社概要",
  description: "Memories Labのブランドストーリーと会社概要。",
  openGraph: {
    title: "会社概要 | Memories Lab",
    description: "大切な瞬間を、未来へ残す。Memories Labのブランドストーリー。"
  }
};

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        eyebrow="COMPANY"
        title="会社概要"
        lead="家族の記憶を、暮らしの中で長く愛されるギフトとして残すために。Memories Labの想いをご紹介します。"
        breadcrumbs={[{ label: "会社概要" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
            <p className="text-sm font-bold tracking-[0.24em] text-[#d8bf83]">BRAND STORY</p>
            <h2 className="mt-5 font-serif text-3xl font-semibold">写真を、贈答品の品格へ。</h2>
            <p className="mt-6 leading-8 text-white/76">
              子どもの成長、家族の笑顔、人生の節目。日々の写真には、時間が経つほど価値を増す記憶があります。Memories Labは、その記憶を安価なグッズではなく、贈る人の想いと受け取る人の暮らしにふさわしいギフトとして仕立てます。
            </p>
          </div>
          <div className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-8 shadow-soft">
            <h2 className="font-serif text-3xl font-semibold text-[#352c23]">概要</h2>
            <dl className="mt-6 grid gap-4 text-[#584735]">
              <div className="grid gap-1 border-b border-[#d8bf83]/35 pb-4 sm:grid-cols-[140px_1fr]">
                <dt className="font-bold text-[#352c23]">ブランド名</dt>
                <dd>Memories Lab</dd>
              </div>
              <div className="grid gap-1 border-b border-[#d8bf83]/35 pb-4 sm:grid-cols-[140px_1fr]">
                <dt className="font-bold text-[#352c23]">事業内容</dt>
                <dd>オーダーメイドギフト、記念品、法人向け贈答品の企画・制作</dd>
              </div>
              <div className="grid gap-1 border-b border-[#d8bf83]/35 pb-4 sm:grid-cols-[140px_1fr]">
                <dt className="font-bold text-[#352c23]">所在地</dt>
                <dd>東京都内 事業準備中</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[140px_1fr]">
                <dt className="font-bold text-[#352c23]">お問い合わせ</dt>
                <dd>LINE公式またはメールフォームより受付</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
