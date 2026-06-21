"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hotel } from "lucide-react";
import { navigationItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-line bg-white px-5 py-6 lg:flex lg:flex-col">
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white">
          <Hotel className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-base font-semibold text-ink">StayMaster Pro</p>
          <p className="text-xs font-medium text-muted">Hospitality management</p>
        </div>
      </Link>

      <nav className="mt-8 flex-1 space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-app hover:text-ink",
                isActive && "bg-brand-50 text-brand-700"
              )}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="rounded-lg border border-line bg-app p-4">
        <p className="text-sm font-semibold text-ink">Front desk mode</p>
        <p className="mt-2 text-xs leading-5 text-muted">
          Prepared for role-aware workflows, daily shift handovers, and secure team access.
        </p>
      </div>
    </aside>
  );
}
