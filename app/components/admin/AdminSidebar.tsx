import { NavLink } from "react-router";
import { adminNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils/cn";

export function AdminSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 bg-meadow-950 p-5 text-white lg:block">
      <div className="mb-10 px-3 pt-2">
        <p className="font-serif text-2xl">Meadowbrook</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/55">Administration</p>
      </div>
      <nav className="space-y-1">
        {adminNavigation.map(({ label, to, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === "/admin"} className={({ isActive }) => cn("flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white", isActive && "bg-white/12 text-white")}>
            <Icon className="text-lg" />{label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
