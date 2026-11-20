import { FiArrowRight, FiX } from "react-icons/fi";

export function AnnouncementBar() {
  return (
    <div className="bg-meadow-950 text-white">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center gap-2 px-5 text-center text-xs sm:text-sm">
        <span className="font-semibold">Featured News:</span>
        <span>Meadowbrook updates and community announcements.</span>
        <span className="hidden items-center gap-1 underline underline-offset-4 sm:inline-flex">Learn More <FiArrowRight /></span>
        <FiX className="ml-auto shrink-0 opacity-70" aria-hidden="true" />
      </div>
    </div>
  );
}
