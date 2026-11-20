import type { IconType } from "react-icons";

export function StatCard({ label, value, icon: Icon, note }: { label: string; value: string | number; icon: IconType; note: string }) {
  return (
    <div className="soft-card rounded-2xl bg-white p-5">
      <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-sage-100 text-meadow-900"><Icon /></div><p className="text-sm font-semibold text-neutral-700">{label}</p></div>
      <p className="mt-5 font-serif text-4xl font-semibold text-meadow-950">{value}</p>
      <p className="mt-2 text-xs text-neutral-500">{note}</p>
    </div>
  );
}
