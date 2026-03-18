import type { Meta, StoryObj } from "@storybook/react-vite";
import { SegmentedControl } from "./segmented-control";

const meta = {
  title: "Components/Forms/Segmented Control",
  component: SegmentedControl,
  tags: ["autodocs"],
  args: {
    items: ["All", "Custom", "System"],
    active: "All",
  },
  argTypes: {
    items: { control: "object" },
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AlternateActive: Story = {
  args: {
    active: "Custom",
  },
};

export const ExtendedSet: Story = {
  args: {
    items: ["Dashboard", "Core Drivers", "Core Values", "Career Interests", "More"],
    active: "Dashboard",
  },
};
