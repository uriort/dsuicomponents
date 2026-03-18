import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";

const meta = {
  title: "Components/Feedback/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Beta",
    variant: "soft",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["beta", "soft", "success", "danger"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Beta: Story = {
  args: {
    variant: "beta",
    children: "Beta",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "+112.5%",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete",
  },
};
