import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Slider",
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
