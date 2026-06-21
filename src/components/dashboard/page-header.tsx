import { Button } from "@/components/ui/button";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
};

export function PageHeader({ eyebrow, title, description, actionLabel }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold text-brand-700">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink">{title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{description}</p>
      </div>
      {actionLabel ? (
        <Button className="w-full md:w-auto">
          {actionLabel}
        </Button>
      ) : null}
    </header>
  );
}
