import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Team name",
    placeholder: "Team name",
    hint: "Use a descriptive label for the team.",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextField: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <Input {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    error: "Team name is required.",
    hint: undefined,
    defaultValue: "Growth",
  },
  render: (args) => (
    <div className="w-[360px]">
      <Input {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Operations",
  },
  render: (args) => (
    <div className="w-[360px]">
      <Input {...args} />
    </div>
  ),
};
