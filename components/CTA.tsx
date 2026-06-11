import Link from "next/link";

export function CTA({
  title = "大切な方へ、品格のある記念ギフトを。",
  text = "商品選び、写真選び、納期の確認まで丁寧にご案内します。商品についてのご質問、お見積り、ご注文前のご相談はメールにて承っております。"
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">CONTACT</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#352c23] sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#584735]">{text}</p>
        <p className="mt-4 font-bold text-[#a77a3f]">info@lifecraft-lab.com</p>
        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#a77a3f] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#8c6533]">
            メールでお問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
