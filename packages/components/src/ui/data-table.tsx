import { MoreVertical, Plus } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { SearchInput } from "./input";
import { SegmentedControl } from "./segmented-control";
import { Badge } from "./badge";

type Column = { key: string; label: string };
type Row = Record<string, string>;

export function DataTable({
  title,
  primaryAction,
  columns,
  rows,
  filters,
  showMyViews,
}: {
  title: string;
  primaryAction?: string;
  columns: Column[];
  rows: Row[];
  filters?: string[];
  showMyViews?: boolean;
}) {
  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-ds-ink">{title}</h1>
        <div className="flex items-center gap-2">
          {primaryAction ? (
            <Button variant="primary" leading={<Plus className="size-4" />}>
              {primaryAction}
            </Button>
          ) : null}
          <Button variant="ghost" size="sm" className="px-2.5">
            <MoreVertical className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {filters ? <SegmentedControl items={filters} active={filters[0]} /> : null}
          <Button variant="secondary" size="sm">
            Edit columns
            <Badge className="ml-1">6</Badge>
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-full min-w-[240px] max-w-[280px]">
            <SearchInput placeholder="Search" />
          </div>
          {showMyViews ? (
            <Button variant="secondary" size="sm">
              My views
              <Badge className="ml-1">22</Badge>
            </Button>
          ) : null}
        </div>
      </div>
      <Card className="overflow-hidden">
        <div className="overflow-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-ds-surfaceAlt text-xs uppercase tracking-[0.06em] text-ds-textSoft">
              <tr>
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" className="size-4 rounded border-ds-border" />
                </th>
                {columns.map((column) => (
                  <th key={column.key} className="whitespace-nowrap px-4 py-3 font-semibold">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={`${row[columns[0].key]}-${index}`} className="border-t border-ds-border">
                  <td className="px-4 py-3 align-top">
                    <input type="checkbox" className="size-4 rounded border-ds-border" />
                  </td>
                  {columns.map((column) => (
                    <td key={column.key} className="whitespace-nowrap px-4 py-3 text-ds-ink">
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ds-border px-4 py-3 text-sm text-ds-textMuted">
          <p>Showing 1 to 10 of 12,378 results</p>
          <div className="flex items-center gap-2">
            <div className="rounded-lg border border-ds-border bg-white px-3 py-2 text-ds-ink shadow-panel">10</div>
            <div className="flex items-center gap-1">
              {["1", "2", "3", "4", "5"].map((page, index) => (
                <button
                  key={page}
                  type="button"
                  className={
                    index === 0
                      ? "grid size-8 place-items-center rounded-ds border border-ds-primary bg-ds-primarySoft text-ds-primary"
                      : "grid size-8 place-items-center rounded-ds text-ds-textMuted"
                  }
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
