import type { Meta, StoryObj } from "@storybook/react-vite";
import { designTokens } from "./index";

function getContrastColor(hex: string) {
  const normalized = hex.replace("#", "");
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? "#111827" : "#ffffff";
}

function ColorSwatch({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  const borderColor = value.toLowerCase() === "#ffffff" ? "#dfe3eb" : "transparent";
  const ink = getContrastColor(value);

  return (
    <div className="overflow-hidden rounded-panel border border-ds-border bg-white shadow-panel">
      <div
        className="flex h-28 w-full items-end justify-between p-4"
        style={{ background: value, boxShadow: `inset 0 0 0 1px ${borderColor}` }}
      >
        <span
          className="rounded-pill px-2 py-1 text-xs font-semibold uppercase tracking-[0.05em]"
          style={{ color: ink, background: "rgba(255,255,255,0.16)" }}
        >
          swatch
        </span>
        <span className="font-mono text-xs" style={{ color: ink }}>
          {value}
        </span>
      </div>
      <div className="space-y-1 p-4">
        <p className="text-sm font-semibold text-ds-ink">{name}</p>
        <p className="font-mono text-xs text-ds-textMuted">{value}</p>
      </div>
    </div>
  );
}

const meta = {
  title: "Foundations/Colors",
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {
  render: () => {
    const colors = designTokens.color;

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-[30px] font-semibold leading-[36px] text-ds-ink">Color system</h1>
          <p className="max-w-3xl text-sm text-ds-textMuted">
            Core product colors extracted from the authenticated Deeper Signals staging UI. These values feed both
            Tailwind utilities and CSS variables.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-ds-ink">Brand and semantic tokens</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ColorSwatch name="Primary" value={colors.primary} />
            <ColorSwatch name="Primary hover" value={colors.primaryHover} />
            <ColorSwatch name="Primary soft" value={colors.primarySoft} />
            <ColorSwatch name="Secondary" value={colors.secondary} />
            <ColorSwatch name="Success" value={colors.success} />
            <ColorSwatch name="Success soft" value={colors.successSoft} />
            <ColorSwatch name="Danger" value={colors.danger} />
            <ColorSwatch name="Danger soft" value={colors.dangerSoft} />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-ds-ink">Surface and text tokens</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ColorSwatch name="Canvas" value={colors.canvas} />
            <ColorSwatch name="Sidebar" value={colors.sidebar} />
            <ColorSwatch name="Surface" value={colors.surface} />
            <ColorSwatch name="Surface alt" value={colors.surfaceAlt} />
            <ColorSwatch name="Ink" value={colors.ink} />
            <ColorSwatch name="Muted text" value={colors.textMuted} />
            <ColorSwatch name="Soft text" value={colors.textSoft} />
            <ColorSwatch name="Border" value={colors.border} />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-ds-ink">Assistant gradient</h2>
          <div className="overflow-hidden rounded-panel border border-ds-border bg-white shadow-panel">
            <div
              className="h-24 w-full"
              style={{
                background: `linear-gradient(90deg, ${colors.gradientStart} 0%, ${colors.gradientMiddle} 55%, ${colors.gradientEnd} 100%)`,
              }}
            />
            <div className="space-y-1 p-4">
              <p className="text-sm font-semibold text-ds-ink">Sola CTA gradient</p>
              <p className="font-mono text-xs text-ds-textMuted">
                {colors.gradientStart} → {colors.gradientMiddle} → {colors.gradientEnd}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
