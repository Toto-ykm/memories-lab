import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Memories Labへのお問い合わせ。LINE公式またはメールフォームよりご相談ください。",
  openGraph: {
    title: "お問い合わせ | Memories Lab",
    description: "商品選び、写真の選定、法人注文などお気軽にご相談ください。"
  }
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT"
        title="お問い合わせ"
        lead="商品選び、写真の選定、納期、法人注文など、まだ具体的に決まっていない段階でもお気軽にご相談ください。"
        breadcrumbs={[{ label: "お問い合わせ" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg bg-[#352c23] p-8 text-[#fffaf0] shadow-soft">
            <h2 className="font-serif text-3xl font-semibold">LINE公式で相談</h2>
            <p className="mt-5 leading-8 text-white/76">
              写真を送りながら相談したい方、商品選びに迷っている方はLINE公式が便利です。
            </p>
            <Link href={site.lineUrl} className="mt-8 inline-flex rounded-full bg-[#d8bf83] px-7 py-4 text-sm font-bold text-[#352c23]">
              LINE公式を開く
            </Link>
          </aside>
          <form action={site.mailUrl} method="post" encType="text/plain" className="rounded-lg border border-[#d8bf83]/45 bg-[#fffaf0] p-8 shadow-soft">
            <h2 className="font-serif text-3xl font-semibold text-[#352c23]">メールフォーム</h2>
            <div className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-[#352c23]">
                お名前
                <input className="rounded-md border border-[#d8bf83]/55 bg-white px-4 py-3 font-normal" name="name" placeholder="例：山田 花子" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#352c23]">
                メールアドレス
                <input className="rounded-md border border-[#d8bf83]/55 bg-white px-4 py-3 font-normal" type="email" name="email" placeholder="example@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#352c23]">
                ご相談内容
                <textarea className="min-h-40 rounded-md border border-[#d8bf83]/55 bg-white px-4 py-3 font-normal" name="message" placeholder="ご希望商品、用途、納期などをご記入ください。" />
              </label>
              <button type="submit" className="rounded-full bg-[#a77a3f] px-8 py-4 text-center text-sm font-bold text-white">
                メールフォームとして送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
