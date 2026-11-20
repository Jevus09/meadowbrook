import { FiBell, FiSearch } from "react-icons/fi";
import { Outlet } from "react-router";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#f7f5ef]">
      <AdminSidebar />
      <div className="min-w-0 flex-1">
        <header className="flex min-h-20 items-center gap-4 border-b border-black/5 bg-white px-5 sm:px-8">
          <div><h1 className="font-serif text-2xl font-semibold text-meadow-950">Admin Dashboard</h1><p className="text-xs text-neutral-500">Content management for Meadowbrook Rehabilitation</p></div>
          <div className="ml-auto hidden max-w-sm flex-1 items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-neutral-400 md:flex"><FiSearch /> Search content...</div>
          <button className="grid size-10 place-items-center rounded-xl border border-black/10 bg-white"><FiBell /></button>
          <div className="grid size-10 place-items-center rounded-full bg-sage-100 font-semibold text-meadow-950">A</div>
        </header>
        <main className="p-5 sm:p-8"><Outlet /></main>
      </div>
    </div>
  );
}
