import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8bf83]/25 bg-[#fbf7ee]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-serif text-xl font-semibold tracking-[0.08em] text-[#352c23]">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#584735] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#a77a3f]">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-[#a77a3f] px-5 py-2.5 text-white transition hover:bg-[#8c6533]">
            お問い合わせ
          </Link>
        </nav>
        <Link href="/contact" className="rounded-full border border-[#a77a3f] px-4 py-2 text-xs font-bold text-[#a77a3f] lg:hidden">
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}
