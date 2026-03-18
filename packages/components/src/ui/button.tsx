import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "gradient";
type ButtonSize = "sm" | "md";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ds-primary text-white hover:bg-ds-primaryHover focus-visible:ring-ds-primary/20 shadow-panel",
  secondary:
    "border border-ds-border bg-white text-ds-ink hover:bg-ds-surfaceAlt focus-visible:ring-ds-primary/20 shadow-panel",
  ghost:
    "text-ds-textMuted hover:bg-ds-surfaceAlt hover:text-ds-ink focus-visible:ring-ds-primary/20",
  danger:
    "border border-ds-danger/15 bg-white text-ds-danger hover:bg-ds-dangerSoft focus-visible:ring-ds-danger/20 shadow-panel",
  gradient:
    "bg-[linear-gradient(90deg,#a78bfa_0%,#ec4899_55%,#f00056_100%)] text-white hover:opacity-95 focus-visible:ring-ds-primary/20 shadow-panel",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 rounded-ds px-3.5 text-sm font-medium",
  md: "h-11 rounded-lg px-4 text-sm font-semibold",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leading?: ReactNode;
  trailing?: ReactNode;
};

export function Button({
  className,
  variant = "secondary",
  size = "md",
  leading,
  trailing,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {leading}
      <span>{children}</span>
      {trailing}
    </button>
  );
}
