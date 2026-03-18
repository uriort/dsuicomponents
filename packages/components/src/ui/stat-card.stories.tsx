import type { Meta, StoryObj } from "@storybook/react-vite";
import { Users } from "lucide-react";
import { StatCard } from "./stat-card";

const meta = {
  title: "Components/Data Display/Stat Card",
  component: StatCard,
  tags: ["autodocs"],
  args: {
    eyebrow: "All time",
    label: "Total users",
    value: "4,232",
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDelta: Story = {
  args: {
    eyebrow: undefined,
    label: "Registrations",
    value: "17",
    delta: "112.5%",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Total users",
    value: "4,232",
    eyebrow: "All time",
    icon: <Users className="size-5 text-ds-textSoft" />,
  },
};
