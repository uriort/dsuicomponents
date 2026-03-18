import type { Meta, StoryObj } from "@storybook/react-vite";
import { Topbar } from "./topbar";

const meta = {
  title: "Components/Navigation/Topbar",
  component: Topbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-[120px] bg-ds-canvas">
      <Topbar />
    </div>
  ),
};
