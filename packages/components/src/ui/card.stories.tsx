import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

const meta = {
  title: "Components/Surfaces/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    className: "p-5 w-[360px]",
    children: (
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-ds-ink">Account settings</h3>
        <p className="text-sm text-ds-textMuted">Manage account-wide settings and options.</p>
      </div>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dense: Story = {
  args: {
    className: "p-4 w-[280px]",
    children: (
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.04em] text-ds-textSoft">All time</p>
        <p className="text-sm font-medium text-ds-textMuted">Total users</p>
        <p className="text-[32px] font-semibold leading-none text-ds-ink">4,232</p>
      </div>
    ),
  },
};
