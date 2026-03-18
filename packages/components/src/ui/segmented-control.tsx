import { cn } from "../lib/cn";

export function SegmentedControl({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="inline-flex items-center rounded-lg bg-slate-100 p-1">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={cn(
            "rounded-ds px-3 py-1.5 text-sm font-medium transition",
            item === active ? "bg-white text-ds-ink shadow-panel" : "text-ds-textMuted hover:text-ds-ink",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
