import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { modulePages } from "@/lib/modules";

export default function SettingsPage() {
  return <ModulePlaceholder module={modulePages.settings} />;
}
