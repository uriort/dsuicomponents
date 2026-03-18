import type { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { Card } from "./card";

export function StatCard({
  eyebrow,
  label,
  value,
  delta,
  icon,
}: {
  eyebrow?: string;
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
}) {
  return (
    <Card className="min-h-[88px] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.04em] text-ds-textSoft">{eyebrow}</p> : null}
          <p className="text-sm font-medium text-ds-textMuted">{label}</p>
          <div className="flex items-center gap-2">
            <span className="text-[2rem] font-semibold leading-none text-ds-ink">{value}</span>
            {delta ? (
              <span className="inline-flex items-center gap-1 rounded-pill bg-ds-successSoft px-2 py-1 text-xs font-semibold text-ds-success">
                <ArrowUp className="size-3" />
                {delta}
              </span>
            ) : null}
          </div>
        </div>
        {icon}
      </div>
    </Card>
  );
}
