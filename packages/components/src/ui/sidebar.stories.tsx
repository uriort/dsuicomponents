import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar } from "./sidebar";

const meta = {
  title: "Components/Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-ds-canvas">
      <Sidebar />
    </div>
  ),
};
