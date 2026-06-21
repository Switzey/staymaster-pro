import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import type { ModulePage } from "@/lib/modules";

type ModulePlaceholderProps = {
  module: ModulePage;
};

export function ModulePlaceholder({ module }: ModulePlaceholderProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={module.eyebrow}
        title={module.title}
        description={module.description}
        actionLabel={module.actionLabel}
      />

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-brand-700">Module foundation</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">{module.title} workspace</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{module.placeholder}</p>
            </div>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Ready for build-out
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {module.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 rounded-lg border border-line bg-app p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                <p className="text-sm leading-6 text-muted">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-medium text-brand-700">Next layer</p>
          <h2 className="mt-2 text-lg font-semibold text-ink">Planned capabilities</h2>
          <div className="mt-6 space-y-3">
            {module.nextSteps.map((step) => (
              <div key={step} className="flex items-center justify-between gap-3 rounded-lg border border-line px-4 py-3">
                <span className="text-sm text-ink">{step}</span>
                <ArrowRight className="h-4 w-4 text-muted" aria-hidden="true" />
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
