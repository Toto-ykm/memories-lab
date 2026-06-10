export function ProductVisual({
  name,
  tier,
  finish = "crystal",
  className = ""
}: {
  name: string;
  tier: string;
  finish?: string;
  className?: string;
}) {
  const shapeClass = ({
    crystal: "aspect-[4/5] w-[62%] max-w-72 rounded-xl border-white/55 bg-white/22",
    glass: "aspect-[5/4] w-[68%] max-w-80 rounded-lg border-white/50 bg-white/18",
    panel: "aspect-[4/3] w-[74%] max-w-80 rounded-md border-[#d8bf83]/70 bg-[#fffaf0]/22",
    drinkware: "aspect-[3/4] w-[48%] max-w-56 rounded-[2rem] border-white/45 bg-white/20",
    coaster: "aspect-square w-[58%] max-w-60 rounded-2xl border-[#d8bf83]/70 bg-white/18"
  } as Record<string, string>)[finish] || "aspect-[4/5] w-[62%] max-w-72 rounded-xl border-white/55 bg-white/22";

  return (
    <div className={`relative overflow-hidden rounded-lg bg-[#2f261f] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(255,244,207,0.55),transparent_32%),linear-gradient(135deg,#2f261f,#8a683f_54%,#f4ead9)]" />
      <div className="absolute inset-x-8 bottom-8 h-20 rounded-[50%] bg-black/18 blur-xl" />
      <div className="relative grid min-h-full place-items-center p-8">
        <div className={`relative border shadow-[0_30px_90px_rgba(33,25,20,0.42)] backdrop-blur-sm ${shapeClass}`}>
          <div className="absolute inset-5 rounded-md border border-[#d8bf83]/60 bg-[#fffaf0]/72" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a77a3f]/35" />
          <div className="absolute bottom-12 left-1/2 h-3 w-28 -translate-x-1/2 rounded-full bg-[#d8bf83]/75" />
        </div>
        <div className="absolute bottom-7 left-7 right-7 rounded-md border border-white/20 bg-[#211914]/55 p-4 text-white backdrop-blur">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8bf83]">{tier}</p>
          <p className="mt-1 font-serif text-xl font-semibold">{name}</p>
          <p className="mt-2 text-xs text-white/62">商品写真を差し替える前提の高級モックアップエリア</p>
        </div>
      </div>
    </div>
  );
}
