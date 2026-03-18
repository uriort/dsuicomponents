import { tokenDocumentation } from "@deepersignals/tokens";

export const auditSummary = {
  pagesAudited: [
    "Login",
    "Dashboard",
    "All Users",
    "Campaigns",
    "Teams",
    "Analytics",
    "Usage Hub",
    "Settings",
    "Team creation drawer",
  ],
  componentCategories: [
    {
      name: "Layout",
      items: ["Left rail sidebar", "Top search bar", "Content canvas", "Page sections", "Right-side drawer"],
    },
    {
      name: "Navigation",
      items: ["Sidebar items", "Breadcrumbs", "Section tabs", "Segmented filters", "Pagination", "More-actions trigger"],
    },
    {
      name: "Data display",
      items: ["Stat cards", "Summary KPI tiles", "Entity cards", "Tag pills", "Tables", "Chart panels", "Key-value setting rows"],
    },
    {
      name: "Inputs",
      items: ["Search fields", "Text inputs", "Combobox/select fields", "Checkboxes", "Date-range select"],
    },
    {
      name: "Actions",
      items: ["Primary CTAs", "Secondary outline buttons", "Ghost actions", "Destructive button", "Gradient assistant CTA"],
    },
    {
      name: "Feedback",
      items: ["BETA badge", "Positive delta pill", "Loading spinner", "Disabled next state", "Overlay backdrop"],
    },
  ],
  tokens: tokenDocumentation,
};

export const userRows = [
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
    tags: "",
  },
  {
    email: "sara.marijic.tr@gmail.com",
    firstName: "Incognito",
    lastName: "",
    status: "Anonymous",
    tags: "",
  },
];

export const campaignRows = [
  {
    name: "QA shubham new dev cmpgn1",
    type: "DEVELOPMENT",
    tags: "dawdwad",
    libraries: "Core Drivers",
  },
  {
    name: "Test 123",
    type: "DEVELOPMENT",
    tags: "Test, Test123",
    libraries: "Core Drivers",
  },
  {
    name: "meta hire",
    type: "HIRING",
    tags: "NYU Coaching Summit",
    libraries: "Core Drivers",
  },
];

export const teamRows = [
  {
    name: "tester QA",
    createdAt: "March 12, 2026 05:16:37 PM",
    manager: "shubham rohila",
    managedBy: "shubham@deepersignals.com",
    members: "20",
  },
  {
    name: "Test Team",
    createdAt: "March 11, 2026 07:19:09 AM",
    manager: "Shoieb Rahman",
    managedBy: "shoieb@deepersignals.com",
    members: "4",
  },
  {
    name: "Finance",
    createdAt: "March 09, 2026 04:47:45 PM",
    manager: "Olivia Garcia",
    managedBy: "olivia@company.com",
    members: "2",
  },
];
