import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="w-full max-w-md rounded-lg border border-line bg-white p-8 shadow-soft">
      <div className="mb-8">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-lg font-bold text-white">
          SP
        </div>
        <p className="text-sm font-medium text-brand-700">Authentication ready</p>
        <h1 className="mt-2 text-2xl font-semibold text-ink">Sign in to StayMaster Pro</h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          This route is prepared for a future authentication provider and role-based access control.
        </p>
      </div>

      <form className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-ink">Email address</span>
          <input
            type="email"
            placeholder="manager@hotel.com"
            className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Password</span>
          <input
            type="password"
            placeholder="Enter password"
            className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
          />
        </label>
        <button
          type="button"
          className="w-full rounded-lg bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Preview the workspace from{" "}
        <Link href="/dashboard" className="font-medium text-brand-700">
          the dashboard
        </Link>
        .
      </p>
    </section>
  );
}
