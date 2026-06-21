import { ArrowUpRight, CalendarCheck, ClipboardCheck, Hotel, ReceiptText } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";

const stats = [
  {
    label: "Occupancy",
    value: "68%",
    detail: "42 of 62 rooms occupied",
    trend: "12 arrivals today",
  },
  {
    label: "Available Rooms",
    value: "20",
    detail: "Ready across 5 room types",
    trend: "6 priority turnovers",
  },
  {
    label: "Expected Revenue",
    value: "$18.4k",
    detail: "Projected for this week",
    trend: "Invoices pending review",
  },
  {
    label: "Guest Requests",
    value: "14",
    detail: "Open service items",
    trend: "4 due before noon",
  },
];

const focusItems = [
  {
    title: "Morning arrivals",
    description: "Prepare VIP rooms, confirm ID checks, and assign welcome notes.",
    icon: CalendarCheck,
  },
  {
    title: "Housekeeping turns",
    description: "Coordinate occupied-clean rooms and high-priority maintenance checks.",
    icon: ClipboardCheck,
  },
  {
    title: "Billing review",
    description: "Review pending invoices before the evening front desk handover.",
    icon: ReceiptText,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Operational overview"
        title="Dashboard"
        description="A calm command center for reservations, arrivals, departures, rooms, service, and revenue visibility."
        actionLabel="Create booking"
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-brand-700">Property health</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">Today at a glance</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                Placeholder operations data for the first version of the StayMaster Pro workspace.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition hover:border-brand-500 hover:text-brand-700">
              View reports
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {focusItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-line bg-app p-5">
                <item.icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
              <Hotel className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-brand-700">StayMaster Pro</p>
              <h2 className="text-lg font-semibold text-ink">Foundation ready</h2>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-line p-4">
              <p className="text-sm font-semibold text-ink">Authentication-ready routing</p>
              <p className="mt-1 text-sm leading-6 text-muted">Auth and dashboard route groups are prepared for protected pages.</p>
            </div>
            <div className="rounded-lg border border-line p-4">
              <p className="text-sm font-semibold text-ink">Prisma and PostgreSQL</p>
              <p className="mt-1 text-sm leading-6 text-muted">Core hospitality entities are modeled without payment gateway logic.</p>
            </div>
            <div className="rounded-lg border border-line p-4">
              <p className="text-sm font-semibold text-ink">Reusable UI shell</p>
              <p className="mt-1 text-sm leading-6 text-muted">Sidebar, top navbar, cards, and module placeholders are shared components.</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
