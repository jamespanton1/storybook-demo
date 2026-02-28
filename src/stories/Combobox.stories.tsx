import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "@/components/ui/combobox";

const frameworks = [
  { label: "Next.js", value: "next.js" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt.js", value: "nuxt.js" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

const meta = {
  title: "UI/Combobox",
  component: Combobox,
  args: {
    options: frameworks,
    placeholder: "Select framework",
    searchPlaceholder: "Search frameworks...",
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "next.js",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "astro",
  },
};

export const EmptyState: Story = {
  args: {
    options: [],
    emptyMessage: "No frameworks available.",
  },
};
