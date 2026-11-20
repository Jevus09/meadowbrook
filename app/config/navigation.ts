import type { IconType } from "react-icons";
import {
  FiBell,
  FiFileText,
  FiHome,
  FiImage,
  FiInbox,
  FiLayers,
  //FiMegaphone,
  FiSettings,
  FiCalendar,
} from "react-icons/fi";




export const publicNavigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services"},
  { label: "Locations", to: "/location"},
  { label: "Success Stories", to: "/success-stories" },
  { label: "Join the Team", to: "https://www.indeed.com/cmp/Meadowbrook-Manor-1", external: true },
  { label: "News & Events", to: "/news" },
  //{ label: "Contact", to: "/contact" },
  { label: "Schedule a Tour", to:'/contact', variant: "button", icon: FiCalendar,},
] as const;

export type AdminNavItem = { label: string; to: string; icon: IconType };

export const adminNavigation: AdminNavItem[] = [
  { label: "Dashboard", to: "/admin", icon: FiHome },
  { label: "Posts", to: "/admin/posts", icon: FiFileText },
  { label: "Announcements", to: "/admin/announcements", icon: FiLayers },
  { label: "Banner Manager", to: "/admin/banners", icon: FiBell },
  { label: "Gallery", to: "/admin/gallery", icon: FiImage },
  { label: "Media Library", to: "/admin/media", icon: FiLayers },
  { label: "Inquiries", to: "/admin/inquiries", icon: FiInbox },
  { label: "Settings", to: "/admin/settings", icon: FiSettings },
];


