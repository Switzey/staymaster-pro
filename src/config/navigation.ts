import {
  BarChart3,
  BedDouble,
  CalendarCheck,
  CreditCard,
  FileText,
  LayoutDashboard,
  LogIn,
  LogOut,
  Settings,
  UserCog,
  UsersRound,
  ClipboardCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Rooms", href: "/rooms", icon: BedDouble },
  { label: "Bookings", href: "/bookings", icon: CalendarCheck },
  { label: "Guests", href: "/guests", icon: UsersRound },
  { label: "Check-in", href: "/check-in", icon: LogIn },
  { label: "Check-out", href: "/check-out", icon: LogOut },
  { label: "Payments", href: "/payments", icon: CreditCard },
  { label: "Invoices", href: "/invoices", icon: FileText },
  { label: "Housekeeping", href: "/housekeeping", icon: ClipboardCheck },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Staff", href: "/staff", icon: UserCog },
  { label: "Settings", href: "/settings", icon: Settings },
];
