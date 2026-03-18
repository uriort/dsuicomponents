import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function Input({ className, label, hint, error, disabled, ...props }: InputProps) {
  const invalid = Boolean(error || props["aria-invalid"]);

  return (
    <label className="grid gap-2 text-sm font-medium text-ds-ink">
      {label ? <span>{label}</span> : null}
      <input
        className={cn(
          "h-11 rounded-ds border border-ds-border bg-white px-3 text-sm text-ds-ink shadow-panel outline-none transition placeholder:text-ds-textSoft focus:border-ds-primary focus:shadow-focus disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-ds-textSoft",
          invalid && "border-ds-danger text-ds-danger placeholder:text-ds-danger/60 focus:border-ds-danger focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]",
          className,
        )}
        disabled={disabled}
        {...props}
      />
      {error ? <span className="text-sm font-normal text-ds-danger">{error}</span> : null}
      {!error && hint ? <span className="text-sm font-normal text-ds-textMuted">{hint}</span> : null}
    </label>
  );
}

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function SearchInput({ className, invalid = false, disabled, ...props }: SearchInputProps) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ds-textMuted" />
      <input
        className={cn(
          "h-11 w-full rounded-lg border border-ds-border bg-white pl-10 pr-3 text-sm text-ds-ink shadow-panel outline-none transition placeholder:text-ds-textSoft focus:border-ds-primary focus:shadow-focus disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-ds-textSoft",
          invalid && "border-ds-danger focus:border-ds-danger focus:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]",
          className,
        )}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}
