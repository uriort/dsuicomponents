import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./data-table";

const columns = [
  { key: "email", label: "Email" },
  { key: "firstName", label: "First name" },
  { key: "lastName", label: "Last name" },
  { key: "status", label: "Status" },
  { key: "tags", label: "Tags" },
];

const rows = [
  {
    email: "incognito_1759700849@deepersignals.com",
    firstName: "Incognito",
    lastName: "",
    status: "Anonymous",
    tags: "",
  },
  {
    email: "varduhi+analyticsAdmin@deepersignals.com",
    firstName: "Varduhi",
    lastName: "analyticsAdmin",
    status: "Active Admin",
    tags: "Admin",
  },
  {
    email: "sara.marijic.tr@gmail.com",
    firstName: "Incognito",
    lastName: "",
    status: "Anonymous",
    tags: "",
  },
];

const meta = {
  title: "Components/Data Display/Data Table",
  component: DataTable,
  tags: ["autodocs"],
  args: {
    title: "All Users",
    primaryAction: "Create admin",
    columns,
    rows,
    filters: ["All users", "Core Drivers", "Core Values"],
    showMyViews: true,
  },
  argTypes: {
    columns: { control: "object" },
    rows: { control: "object" },
    filters: { control: "object" },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="min-h-screen bg-ds-canvas p-6">
      <DataTable {...args} />
    </div>
  ),
};

export const WithoutViews: Story = {
  args: {
    showMyViews: false,
    primaryAction: undefined,
    filters: ["All", "Active", "Archived"],
    title: "Campaigns",
  },
  render: (args) => (
    <div className="min-h-screen bg-ds-canvas p-6">
      <DataTable {...args} />
    </div>
  ),
};
