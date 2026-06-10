import Image from "next/image";
import { ProductVisual } from "@/components/ProductVisual";
import type { Product } from "@/lib/site";

export function ProductImage({
  product,
  label,
  className = ""
}: {
  product: Product;
  label?: string;
  className?: string;
}) {
  if (!product.image) {
    return <ProductVisual name={product.name} tier={label ?? product.tier} finish={product.visual} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden rounded-lg bg-[#2f261f] shadow-soft ${className}`}>
      <Image
        src={product.image}
        alt={`${product.name}の高級商品モックアップ`}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
        priority={product.slug === "crystal-block"}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,25,20,0)_45%,rgba(33,25,20,0.58)_100%)]" />
      <div className="absolute bottom-5 left-5 right-5 rounded-md border border-white/20 bg-[#211914]/62 p-4 text-white backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8bf83]">{label ?? product.tier}</p>
        <p className="mt-1 font-serif text-xl font-semibold">{product.name}</p>
      </div>
    </div>
  );
}
