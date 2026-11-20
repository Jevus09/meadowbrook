import { Outlet } from "react-router";
import { AnnouncementBar } from "./AnnouncementBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
