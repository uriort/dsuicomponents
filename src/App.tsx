import {
  Badge,
  Breadcrumb,
  Button,
  Card,
  ChartGrid,
  DataTable,
  TeamCreationDrawer,
  SearchInput,
  SectionTitle,
  SegmentedControl,
  Sidebar,
  StatCard,
  Topbar,
} from "@deepersignals/components";
import { auditSummary, campaignRows, teamRows, userRows } from "@/data/audit";
import { Download, Filter, Plus, SlidersHorizontal } from "lucide-react";

const usageStats = [
  { eyebrow: "All time", label: "Total users", value: "4,232" },
  { eyebrow: "All time", label: "Total completed assessments", value: "3,438" },
  { eyebrow: "All time", label: "Total campaigns", value: "227" },
  { eyebrow: "All time", label: "Total teams", value: "106" },
  { label: "Registrations", value: "17", delta: "112.5%" },
  { label: "Completed assessments", value: "6" },
  { label: "Active campaigns", value: "0" },
  { label: "Teams", value: "1" },
];

function TokenList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <Card className="p-5">
      <h3 className="mb-3 text-base font-semibold">{title}</h3>
      <ul className="space-y-2 text-sm text-ds-textMuted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ds-canvas text-ds-ink">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Topbar />
          <main className="space-y-10 px-6 py-6 lg:px-7">
            <section className="space-y-5">
              <Breadcrumb current="Design system extraction" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h1 className="text-xl font-semibold lg:text-[30px] lg:leading-[36px]">
                      Deeper Signals design system
                    </h1>
                    <Badge variant="beta">Audit derived</Badge>
                  </div>
                  <p className="max-w-3xl text-sm text-ds-textMuted lg:text-base">
                    This standalone repository reverse-engineers the staging app into reusable Tailwind tokens and
                    composable React components, based only on the authenticated UI patterns observed across the product.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="secondary" leading={<Download className="size-4" />}>
                    Download audit
                  </Button>
                  <Button variant="primary" leading={<Plus className="size-4" />}>
                    Create component
                  </Button>
                </div>
              </div>
              <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
                <Card className="overflow-hidden">
                  <div className="border-b border-ds-border px-5 py-4">
                    <SectionTitle
                      title="Audit coverage"
                      description="Primary authenticated routes and interaction patterns captured in-browser with Playwright."
                    />
                  </div>
                  <div className="grid gap-6 p-5 md:grid-cols-2">
                    {auditSummary.componentCategories.map((group) => (
                      <div key={group.name}>
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.06em] text-ds-textSoft">
                          {group.name}
                        </h3>
                        <ul className="space-y-2 text-sm text-ds-textMuted">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card className="p-5">
                  <SectionTitle
                    title="Pages reviewed"
                    description="Authenticated pages sampled from the staging navigation and supporting flows."
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {auditSummary.pagesAudited.map((page) => (
                      <Badge key={page}>{page}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </section>

            <section className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <SectionTitle
                  title="Token definition"
                  description="Colors, typography, spacing, radii, and shadows extracted from repeated visual primitives."
                />
                <div className="flex items-center gap-3">
                  <Button variant="secondary" size="sm" leading={<Filter className="size-4" />}>
                    Filter
                  </Button>
                  <Button variant="secondary" size="sm" leading={<SlidersHorizontal className="size-4" />}>
                    Tailwind config
                  </Button>
                </div>
              </div>
              <div className="grid gap-5 xl:grid-cols-4">
                <TokenList title="Color tokens" items={auditSummary.tokens.colors} />
                <TokenList title="Typography scale" items={auditSummary.tokens.typography} />
                <TokenList title="Spacing system" items={auditSummary.tokens.spacing} />
                <TokenList title="Primitives" items={[...auditSummary.tokens.radius, ...auditSummary.tokens.shadows]} />
              </div>
            </section>

            <section className="space-y-5">
              <SectionTitle
                title="Usage Hub components"
                description="Shell, stat cards, badges, range control, and chart panels extracted from the usage analytics screen."
              />
              <Card className="p-5">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <h2 className="text-[30px] font-semibold leading-[36px]">Usage Hub</h2>
                      <Badge variant="beta">Beta</Badge>
                    </div>
                    <p className="max-w-xl text-sm text-ds-textMuted">
                      Track registrations, assessments, campaigns, teams and learning across this account.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-ds-textMuted">2026-03-12 – 2026-03-18</span>
                    <div className="rounded-lg border border-ds-border bg-white px-4 py-2 text-sm font-medium shadow-panel">
                      Last 7 days
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {usageStats.map((stat) => (
                    <StatCard key={stat.label} eyebrow={stat.eyebrow} label={stat.label} value={stat.value} delta={stat.delta} />
                  ))}
                </div>
                <div className="mt-5">
                  <ChartGrid />
                </div>
              </Card>
            </section>

            <section className="grid gap-5 xl:grid-cols-2">
              <DataTable
                title="All Users"
                primaryAction="Create admin"
                filters={[
                  "All users",
                  "Core Drivers",
                  "Core Values",
                  "Core Logical Reasoning (Beta)",
                  "Core Verbal Reasoning",
                ]}
                showMyViews
                columns={[
                  { key: "email", label: "Email" },
                  { key: "firstName", label: "First name" },
                  { key: "lastName", label: "Last name" },
                  { key: "status", label: "Status" },
                  { key: "tags", label: "Tags" },
                ]}
                rows={userRows}
              />
              <div className="space-y-5">
                <DataTable
                  title="Campaigns"
                  primaryAction="New invite campaign"
                  filters={["All", "Develop", "Hire", "My campaigns", "Archived"]}
                  columns={[
                    { key: "name", label: "Name" },
                    { key: "type", label: "Campaign type" },
                    { key: "tags", label: "Tags" },
                    { key: "libraries", label: "Library names" },
                  ]}
                  rows={campaignRows}
                />
              </div>
            </section>

            <section className="space-y-5">
              <SectionTitle
                title="Team workflows"
                description="Table, segmented filters, search patterns, and the multi-step right-hand creation drawer."
              />
              <div className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
                <Card className="p-5">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-[30px] font-semibold leading-[36px]">Teams</h2>
                    <div className="flex gap-2">
                      <Button variant="secondary">Download team scores</Button>
                      <Button variant="secondary">New team</Button>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <SegmentedControl items={["All", "Custom", "System"]} active="All" />
                    <div className="w-full max-w-[270px]">
                      <SearchInput placeholder="Search" />
                    </div>
                  </div>
                  <Card className="overflow-hidden">
                    <table className="min-w-full border-collapse text-left text-sm">
                      <thead className="bg-ds-surfaceAlt text-xs uppercase tracking-[0.06em] text-ds-textSoft">
                        <tr>
                          <th className="w-10 px-4 py-3">
                            <input type="checkbox" className="size-4 rounded border-ds-border" />
                          </th>
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3">Created at</th>
                          <th className="px-4 py-3">Manager</th>
                          <th className="px-4 py-3">Managed by</th>
                          <th className="px-4 py-3">Members count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamRows.map((team) => (
                          <tr key={`${team.name}-${team.createdAt}`} className="border-t border-ds-border">
                            <td className="px-4 py-3"><input type="checkbox" className="size-4 rounded border-ds-border" /></td>
                            <td className="px-4 py-3">{team.name}</td>
                            <td className="px-4 py-3">{team.createdAt}</td>
                            <td className="px-4 py-3">{team.manager}</td>
                            <td className="px-4 py-3">{team.managedBy}</td>
                            <td className="px-4 py-3">{team.members}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                </Card>
                <TeamCreationDrawer />
              </div>
            </section>

            <section className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
              <Card className="p-5">
                <SectionTitle
                  title="Settings patterns"
                  description="Section rail, list rows, tertiary edit actions, and a destructive account action."
                />
                <div className="mt-5 grid gap-4 md:grid-cols-[180px_1fr]">
                  <div className="space-y-2">
                    {[
                      "Account settings",
                      "Assessments",
                      "Campaigns, users and teams",
                      "Data Management",
                      "Translation Management",
                      "Personalization",
                      "Integrations & API",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={
                          index === 0
                            ? "rounded-lg bg-slate-200 px-3 py-2 text-sm font-medium text-ds-ink"
                            : "px-3 py-2 text-sm font-medium text-ds-textMuted"
                        }
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <Card className="p-5">
                      <SectionTitle
                        title="Account settings"
                        description="Manage account-wide settings and options."
                      />
                      <div className="mt-5 space-y-4">
                        {[
                          ["Account activations", "Activate integrations, subscription features and assign connected libraries to the account."],
                          ["Usage & Billing", "View your current usage, costs, and billing details in one place."],
                          ["Manage roles and permissions", "Create and edit users roles."],
                        ].map(([title, text]) => (
                          <div key={title} className="flex items-start justify-between gap-4 border-t border-ds-border pt-4 first:border-t-0 first:pt-0">
                            <div>
                              <p className="font-semibold">{title}</p>
                              <p className="text-sm text-ds-textMuted">{text}</p>
                            </div>
                            <Button variant="secondary" size="sm">Edit</Button>
                          </div>
                        ))}
                      </div>
                    </Card>
                    <Card className="flex items-start justify-between gap-4 p-5">
                      <div>
                        <p className="font-semibold">Delete account</p>
                        <p className="text-sm text-ds-textMuted">This is a permanent action that cannot be reversed.</p>
                      </div>
                      <Button variant="danger" size="sm">Delete</Button>
                    </Card>
                  </div>
                </div>
              </Card>

              <Card className="p-5">
                <SectionTitle
                  title="Component usage"
                  description="The design system is organized for production reuse rather than one-off screenshots."
                />
                <div className="mt-5 grid gap-4 text-sm text-ds-textMuted">
                  <div>
                    <p className="font-semibold text-ds-ink">Suggested file structure</p>
                    <pre className="mt-2 overflow-auto rounded-lg bg-slate-950 px-4 py-4 text-xs text-slate-100">
{`src/
  components/
    ui/
      badge.tsx
      breadcrumb.tsx
      button.tsx
      card.tsx
      chart-card.tsx
      data-table.tsx
      drawer.tsx
      input.tsx
      segmented-control.tsx
      sidebar.tsx
      stat-card.tsx
      topbar.tsx
  data/
    audit.ts
  lib/
    cn.ts
  App.tsx
  index.css
tailwind.config.js`}
                    </pre>
                  </div>
                  <div>
                    <p className="font-semibold text-ds-ink">Component examples</p>
                    <p className="mt-2"><code>{'<Button variant="primary">Create admin</Button>'}</code></p>
                    <p><code>{'<SearchInput placeholder="Search" />'}</code></p>
                    <p><code>{'<StatCard eyebrow="All time" label="Total users" value="4,232" />'}</code></p>
                    <p><code>{'<SegmentedControl items={["All", "Custom", "System"]} active="All" />'}</code></p>
                    <p><code>{'<DataTable title="Teams" columns={columns} rows={rows} />'}</code></p>
                    <p><code>{'<TeamCreationDrawer />'}</code></p>
                  </div>
                </div>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
