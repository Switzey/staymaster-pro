type StatCardProps = {
  label: string;
  value: string;
  detail: string;
  trend: string;
};

export function StatCard({ label, value, detail, trend }: StatCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <p className="text-sm font-medium text-muted">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-3xl font-semibold text-ink">{value}</p>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {trend}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{detail}</p>
    </article>
  );
}
