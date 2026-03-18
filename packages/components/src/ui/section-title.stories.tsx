import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTitle } from "./card";

const meta = {
  title: "Components/Surfaces/Section Title",
  component: SectionTitle,
  tags: ["autodocs"],
  args: {
    title: "Token definition",
    description: "Colors, typography, spacing, radii, and shadows extracted from repeated visual primitives.",
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: {
    title: "Account settings",
    description: undefined,
  },
};
