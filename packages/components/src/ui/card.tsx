import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-panel border border-ds-border bg-white shadow-panel",
        className,
      )}
      {...props}
    />
  );
}

export function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold text-ds-ink">{title}</h2>
      {description ? <p className="text-sm text-ds-textMuted">{description}</p> : null}
    </div>
  );
}
