import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "./input";

const meta = {
  title: "Components/Forms/Search Input",
  component: SearchInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Search",
    disabled: false,
    invalid: false,
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <SearchInput {...args} />
    </div>
  ),
};

export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: "campaign",
  },
  render: (args) => (
    <div className="w-[320px]">
      <SearchInput {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="w-[320px]">
      <SearchInput {...args} />
    </div>
  ),
};
