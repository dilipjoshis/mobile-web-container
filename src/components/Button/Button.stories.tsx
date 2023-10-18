import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Custom Button/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: ButtonProps) => (
  <Button data-testId="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  children: "Primary",
};
