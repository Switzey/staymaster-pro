import Link from "next/link";
import { Bell, Search, ShieldCheck } from "lucide-react";

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-app/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <label className="relative block max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search guests, bookings, rooms"
              className="w-full rounded-lg border border-line bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            />
          </label>
        </div>

        <Link
          href="/login"
          className="hidden items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-ink transition hover:border-brand-500 hover:text-brand-700 sm:inline-flex"
        >
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Auth preview
        </Link>

        <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-muted transition hover:border-brand-500 hover:text-brand-700">
          <span className="sr-only">Notifications</span>
          <Bell className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="hidden items-center gap-3 rounded-lg bg-white px-3 py-2 sm:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-xs font-bold text-brand-700">
            SM
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Front Desk</p>
            <p className="text-xs text-muted">Workspace</p>
          </div>
        </div>
      </div>
    </header>
  );
}
