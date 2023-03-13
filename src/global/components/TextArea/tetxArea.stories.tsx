import { Meta, StoryObj } from "@storybook/react";

import { TextAreaComponent } from ".";
import { IComponentParams } from "./types";

export default {
  title: "Components/TextArea",
  component: TextAreaComponent,
} as Meta;

export const Default: StoryObj<IComponentParams> = {
  args: {
    label: "Project Description",
    placeholder: "Digite sua mensagem",
    disabled: false,
  },
};
