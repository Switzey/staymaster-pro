import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";

export function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-app">
      <Sidebar />
      <div className="lg:pl-72">
        <TopNavbar />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 pb-28 sm:px-6 lg:px-8 lg:pb-10">
          {children}
        </main>
        <MobileNavigation />
      </div>
    </div>
  );
}
