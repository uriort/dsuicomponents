import type { Preview } from "@storybook/react-vite";
import "../packages/styles/src/index.css";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      if (context.parameters.layout === "fullscreen") {
        return <Story />;
      }

      return (
        <div className="min-h-screen bg-ds-canvas p-6">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f7f8fc" },
        { name: "surface", value: "#ffffff" },
        { name: "sidebar", value: "#f5f7fb" },
      ],
    },
    options: {
      storySort: {
        order: [
          "Foundations",
          ["Colors", "Typography", "Spacing", "Primitives"],
          "Components",
          ["Actions", "Forms", "Navigation", "Surfaces", "Data Display", "Feedback", "Overlays"],
        ],
      },
    },
  },
};

export default preview;
