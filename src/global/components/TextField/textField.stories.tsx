import { Meta, StoryObj } from "@storybook/react";
import { AiOutlineUser } from "react-icons/ai";

import { TextFieldComponent } from ".";
import { IcomponentParams } from "./types";

export default {
  title: "TextFieldComponent",
  component: TextFieldComponent,
} as Meta;

export const Default: StoryObj<IcomponentParams> = {
  args: {
    label: "Text Field",
    icon: <AiOutlineUser />,
    disabled: false,
  },
};
