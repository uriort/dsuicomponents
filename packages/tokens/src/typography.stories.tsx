import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Typography",
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  {
    name: "Page title",
    token: "text-xl / 30px, semibold",
    className: "text-[30px] font-semibold leading-[36px]",
    sample: "Deeper Signals design system",
  },
  {
    name: "Section title",
    token: "text-lg / 20px, semibold",
    className: "text-lg font-semibold leading-[28px]",
    sample: "Token definition",
  },
  {
    name: "Body",
    token: "text-sm / 14px, regular",
    className: "text-sm font-normal leading-[20px]",
    sample: "Track registrations, assessments, campaigns, teams and learning across this account.",
  },
  {
    name: "Body medium",
    token: "text-sm / 14px, medium",
    className: "text-sm font-medium leading-[20px]",
    sample: "Manage account-wide settings and options.",
  },
  {
    name: "Meta label",
    token: "text-xs / 12px, semibold",
    className: "text-xs font-semibold uppercase tracking-[0.06em] leading-[16px]",
    sample: "All time",
  },
];

export const Scale: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-[30px] font-semibold leading-[36px] text-ds-ink">Typography</h1>
        <p className="max-w-3xl text-sm text-ds-textMuted">
          The product primarily uses a compact sans-serif scale with strong emphasis on 14px body text, 20px section
          headings, and 30px page titles.
        </p>
      </div>

      <div className="overflow-hidden rounded-panel border border-ds-border bg-white shadow-panel">
        <div className="grid grid-cols-[180px_180px_1fr] gap-4 border-b border-ds-border bg-ds-surfaceAlt px-5 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-ds-textSoft">
          <div>Role</div>
          <div>Token</div>
          <div>Preview</div>
        </div>
        {rows.map((row) => (
          <div key={row.name} className="grid grid-cols-[180px_180px_1fr] gap-4 border-b border-ds-border px-5 py-5 last:border-b-0">
            <div className="text-sm font-semibold text-ds-ink">{row.name}</div>
            <div className="font-mono text-xs text-ds-textMuted">{row.token}</div>
            <div className={row.className}>{row.sample}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};
