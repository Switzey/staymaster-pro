"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 py-2 shadow-soft backdrop-blur lg:hidden">
      <div className="flex gap-2 overflow-x-auto">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-20 flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 text-xs font-medium text-muted transition",
                isActive && "bg-brand-50 text-brand-700"
              )}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
