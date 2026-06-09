import Link from "next/link";
import { site } from "@/lib/site";

export function CTA({
  title = "大切な方へ、品格ある記念の贈りものを。",
  text = "商品選びや写真の選定から丁寧にご案内します。LINE公式またはメールフォームよりお気軽にご相談ください。"
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
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={site.lineUrl} className="inline-flex items-center justify-center rounded-full bg-[#a77a3f] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#8c6533]">
            LINE公式で相談する
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#a77a3f] px-8 py-4 text-sm font-bold text-[#a77a3f] transition hover:bg-[#fffaf0]">
            メールフォームへ
          </Link>
        </div>
      </div>
    </section>
  );
}
