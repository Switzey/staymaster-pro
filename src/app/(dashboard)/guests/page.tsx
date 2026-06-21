import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";
import { modulePages } from "@/lib/modules";

export default function GuestsPage() {
  return <ModulePlaceholder module={modulePages.guests} />;
}
