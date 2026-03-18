import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Primitives",
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadiiAndShadows: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-[30px] font-semibold leading-[36px] text-ds-ink">Primitives</h1>
        <p className="max-w-3xl text-sm text-ds-textMuted">
          Border radius and elevation stay restrained across the system: small action corners, slightly softer panels,
          and a subtle single-step shadow.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-ds-ink">Radii</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded border border-ds-border bg-white p-5 shadow-panel">
            <div className="mb-3 h-16 rounded bg-ds-primarySoft" />
            <p className="text-sm font-semibold text-ds-ink">4px</p>
            <p className="font-mono text-xs text-ds-textMuted">rounded</p>
          </div>
          <div className="rounded-ds border border-ds-border bg-white p-5 shadow-panel">
            <div className="mb-3 h-16 rounded-ds bg-ds-primarySoft" />
            <p className="text-sm font-semibold text-ds-ink">6px</p>
            <p className="font-mono text-xs text-ds-textMuted">rounded-ds</p>
          </div>
          <div className="rounded-panel border border-ds-border bg-white p-5 shadow-panel">
            <div className="mb-3 h-16 rounded-panel bg-ds-primarySoft" />
            <p className="text-sm font-semibold text-ds-ink">12px</p>
            <p className="font-mono text-xs text-ds-textMuted">rounded-panel</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-ds-ink">Shadows</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-panel border border-ds-border bg-white p-5 shadow-panel">
            <p className="text-sm font-semibold text-ds-ink">Panel shadow</p>
            <p className="mt-1 font-mono text-xs text-ds-textMuted">0 1px 2px rgba(16, 24, 40, 0.06)</p>
          </div>
          <div className="rounded-panel border border-ds-border bg-white p-5 shadow-focus">
            <p className="text-sm font-semibold text-ds-ink">Focus ring shadow</p>
            <p className="mt-1 font-mono text-xs text-ds-textMuted">0 0 0 3px rgba(240, 0, 86, 0.12)</p>
          </div>
        </div>
      </section>
    </div>
  ),
};
