import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageHero({
  title,
  lead,
  eyebrow,
  breadcrumbs
}: {
  title: string;
  lead: string;
  eyebrow: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold tracking-[0.24em] text-[#a77a3f]">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#352c23] sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#584735]">{lead}</p>
        </div>
      </section>
    </>
  );
}
