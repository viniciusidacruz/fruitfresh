import { Meta, StoryObj } from "@storybook/react";
import { TextPasswordComponent } from ".";
import { IComponentParams } from "./types";

export default {
  title: "Components/TextPassword",
  component: TextPasswordComponent,
} as Meta;
export const Default: StoryObj<IComponentParams> = {
  args: {
    label: "Password",
    disabled: true,
  },
};
