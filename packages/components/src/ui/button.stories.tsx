import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "./button";

const meta = {
  title: "Components/Actions/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Create component",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger", "gradient"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    leading: <Plus className="size-4" />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Download audit",
  },
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    children: "Chat with Sola",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "sm",
    children: "Delete",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    variant: "secondary",
    children: "Continue",
    trailing: <ArrowRight className="size-4" />,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Saving",
  },
};
