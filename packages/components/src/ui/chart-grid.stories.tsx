import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChartGrid } from "./chart-card";

const meta = {
  title: "Components/Data Display/Chart Grid",
  component: ChartGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ChartGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-ds-canvas p-6">
      <div className="max-w-6xl">
        <ChartGrid />
      </div>
    </div>
  ),
};
