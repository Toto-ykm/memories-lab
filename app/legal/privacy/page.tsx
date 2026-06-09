import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Memories Labの個人情報保護方針。",
  openGraph: {
    title: "プライバシーポリシー | Memories Lab",
    description: "Memories Labにおける個人情報の取り扱いについて。"
  }
};

const sections = [
  ["取得する情報", "氏名、住所、電話番号、メールアドレス、写真、メッセージ内容、注文情報等を取得する場合があります。"],
  ["利用目的", "注文対応、商品制作、配送、問い合わせ対応、サービス改善、重要なお知らせのために利用します。"],
  ["写真データの取り扱い", "お預かりした写真は、注文商品の制作および確認連絡の目的でのみ使用します。"],
  ["第三者提供", "法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供しません。"],
  ["委託", "配送、決済、制作補助等に必要な範囲で業務委託先に情報を預ける場合があります。"],
  ["安全管理", "個人情報の漏えい、紛失、改ざんを防ぐため、適切な管理に努めます。"],
  ["開示・訂正・削除", "ご本人からの請求に応じ、法令に従って適切に対応します。"],
  ["お問い合わせ", "個人情報の取り扱いに関するお問い合わせは、お問い合わせページよりご連絡ください。"]
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="PRIVACY"
        title="プライバシーポリシー"
        lead="お客様の大切な写真と個人情報を、適切かつ丁寧に取り扱います。"
        breadcrumbs={[{ label: "プライバシーポリシー" }]}
      />
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#fffaf0] p-8 shadow-soft">
          {sections.map(([title, text]) => (
            <section key={title} className="border-b border-[#d8bf83]/35 py-6 last:border-b-0">
              <h2 className="font-serif text-2xl font-semibold text-[#352c23]">{title}</h2>
              <p className="mt-3 leading-8 text-[#584735]">{text}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
