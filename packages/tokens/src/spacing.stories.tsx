import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Spacing",
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const spacingScale = [
  { label: "1", px: 4, className: "w-1" },
  { label: "2", px: 8, className: "w-2" },
  { label: "3", px: 12, className: "w-3" },
  { label: "4", px: 16, className: "w-4" },
  { label: "5", px: 20, className: "w-5" },
  { label: "6", px: 24, className: "w-6" },
  { label: "8", px: 32, className: "w-8" },
];

export const Scale: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-[30px] font-semibold leading-[36px] text-ds-ink">Spacing</h1>
        <p className="max-w-3xl text-sm text-ds-textMuted">
          The extracted interface relies on a tight spacing rhythm with 4px as the base and most layouts stepping
          through 8, 12, 16, 20, 24, and 32px.
        </p>
      </div>

      <div className="rounded-panel border border-ds-border bg-white p-5 shadow-panel">
        <div className="space-y-4">
          {spacingScale.map((space) => (
            <div key={space.label} className="grid grid-cols-[80px_100px_1fr] items-center gap-4">
              <div className="text-sm font-semibold text-ds-ink">{space.label}</div>
              <div className="font-mono text-xs text-ds-textMuted">{space.px}px</div>
              <div className="flex items-center gap-3">
                <div className={`h-3 rounded-pill bg-ds-primary ${space.className}`} />
                <div className="h-px flex-1 bg-ds-border" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
