import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type BadgeVariant = "beta" | "soft" | "success" | "danger";

const badgeStyles: Record<BadgeVariant, string> = {
  beta: "bg-ds-beta text-white",
  soft: "bg-slate-100 text-ds-textMuted",
  success: "bg-ds-successSoft text-ds-success",
  danger: "bg-ds-dangerSoft text-ds-danger",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "soft", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.02em]",
        badgeStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
