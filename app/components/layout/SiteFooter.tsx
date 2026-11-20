import { Container } from "@/components/common/Container";
import { publicNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="bg-meadow-950 py-12 text-white">
      <Container className="grid gap-10 md:grid-cols-3">
        <div><p className="font-serif text-2xl">{siteConfig.shortName}</p><p className="mt-4 max-w-sm text-sm leading-6 text-white/70">{siteConfig.description}</p></div>
        <div><p className="font-semibold">Quick Links</p><div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">{publicNavigation.slice(1).map((item)=><Link key={item.to} to={item.to} className="hover:text-white">{item.label}</Link>)}</div></div>
        <div><p className="font-semibold">Contact</p><p className="mt-4 text-sm text-white/70">{siteConfig.phone}</p><p className="mt-1 text-sm text-white/70">{siteConfig.email}</p><p className="mt-4 text-xs text-white/50">Naperville · LaGrange · Bolingbrook</p></div>
      </Container>
      <Container className="mt-10 border-t border-white/15 pt-6 text-xs text-white/50">© 2026 Meadowbrook Rehabilitation. All rights reserved.</Container>
    </footer>
  );
}
