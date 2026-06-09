import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { faqItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description: "納期、送料、写真サイズ、修正回数、支払い方法、返品、キャンセルなどのよくあるご質問。",
  openGraph: {
    title: "FAQ | Memories Lab",
    description: "高級オーダーメイド家族ギフトの注文前によくある質問をまとめました。"
  }
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return (
    <main>
      <StructuredData data={faqJsonLd} />
      <PageHero
        eyebrow="FAQ"
        title="よくあるご質問"
        lead="納期、送料、写真の提出、修正、返品・キャンセルなど、注文前に確認いただきたい内容をまとめました。"
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl divide-y divide-[#d8bf83]/45 rounded-lg bg-[#fffaf0] px-6 shadow-soft">
          {faqItems.map(([question, answer]) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#352c23]">
                {question}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#d8bf83] text-[#a77a3f] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-[#584735]">{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
