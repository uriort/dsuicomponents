import { Home } from "lucide-react";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Home className="size-4 text-ds-textMuted" />
      <span className="font-semibold text-ds-primary">{current}</span>
    </div>
  );
}
