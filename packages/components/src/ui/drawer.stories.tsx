import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeamCreationDrawer } from "./drawer";

const meta = {
  title: "Components/Overlays/Team Creation Drawer",
  component: TeamCreationDrawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TeamCreationDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-ds-canvas p-6">
      <TeamCreationDrawer />
    </div>
  ),
};
