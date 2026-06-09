import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="mx-auto max-w-7xl px-5 pt-8 text-xs text-[#7c6a55] sm:px-8" aria-label="パンくずリスト">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-[#a77a3f]">TOP</Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#a77a3f]">{item.label}</Link>
            ) : (
              <span className="text-[#352c23]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
