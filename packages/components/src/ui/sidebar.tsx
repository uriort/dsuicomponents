import {
  Activity,
  BarChart3,
  Briefcase,
  FolderKanban,
  Home,
  Library,
  Settings,
  Users,
  Waves,
} from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { SearchInput } from "./input";
import { cn } from "../lib/cn";

const navItems = [
  { label: "Dashboard", icon: Home, active: false },
  { label: "All users", icon: Users, active: false },
  { label: "Campaigns", icon: FolderKanban, active: false },
  { label: "Teams", icon: Briefcase, active: false },
  { label: "Libraries", icon: Library, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Usage Hub", icon: Waves, active: true, beta: true },
  { label: "Settings", icon: Settings, active: false },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[232px] shrink-0 flex-col border-r border-ds-border bg-ds-sidebar lg:flex">
      <div className="flex h-[54px] items-center justify-between px-5">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ds-textMuted">Deeper Signals</div>
        <div className="size-5 rounded border border-ds-border bg-white" />
      </div>
      <div className="flex flex-1 flex-col px-3 pb-4">
        <div className="mb-4 mt-4 flex items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-panel">
          <div className="grid size-6 place-items-center rounded-ds bg-slate-100 text-xs font-bold text-ds-textMuted">DS</div>
          <div className="text-sm font-semibold text-ds-ink">Deeper Signals</div>
        </div>
        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon, active, beta }) => (
            <a
              key={label}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                active ? "bg-slate-200/80 text-ds-ink" : "text-ds-textMuted hover:bg-white hover:text-ds-ink",
              )}
              href="#"
            >
              <Icon className="size-4" />
              <span>{label}</span>
              {beta ? <Badge variant="beta" className="ml-auto px-1.5">Beta</Badge> : null}
            </a>
          ))}
        </nav>
        <div className="mt-6 border-t border-ds-border pt-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-ds-textSoft">Favorite campaigns</div>
          <SearchInput placeholder="Search" className="mb-3 h-9 rounded-lg bg-slate-50 shadow-none" />
          <div className="space-y-1">
            {["awdwad", "efesf", "ergregt"].map((item) => (
              <div key={item} className="flex items-center gap-2 px-2 py-1 text-sm text-ds-ink">
                <div className="grid size-4 place-items-center rounded bg-[#ffe38a] text-[10px]">⌘</div>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto space-y-3 pt-6">
          <div className="space-y-2 text-sm text-ds-textMuted">
            <div>Developer Corner</div>
            <div>Account</div>
            <div>English</div>
          </div>
          <Button variant="secondary" className="w-full">Switch to Deeper self</Button>
          <Button variant="gradient" className="w-full rounded-pill">
            <Activity className="size-4" />
            Chat with Sola
            <Badge variant="beta" className="bg-white/20">Beta</Badge>
          </Button>
        </div>
      </div>
    </aside>
  );
}
