import { Button } from "@/components/common/Button";

export function AdminSectionPlaceholder({ title, description, action }: { title: string; description: string; action: string }) {
  return (
    <section className="soft-card rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center gap-5"><div className="mr-auto"><h2 className="font-serif text-3xl font-semibold text-meadow-950">{title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">{description}</p></div><Button type="button">{action}</Button></div>
      <div className="mt-8 grid min-h-64 place-items-center rounded-2xl border border-dashed border-black/10 bg-sage-50 text-center text-sm text-neutral-500">Backend wiring will be added when Supabase is connected.</div>
    </section>
  );
}
