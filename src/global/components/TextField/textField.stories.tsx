import { Meta, StoryObj } from "@storybook/react";
import { AiOutlineUser } from "react-icons/ai";

import { TextFieldComponent } from ".";
import { IComponentParams } from "./types";

export default {
  title: "Components/TextField",
  component: TextFieldComponent,
} as Meta;

export const Default: StoryObj<IComponentParams> = {
  args: {
    label: "Text Field",
    icon: <AiOutlineUser color="#bfb9b9" />,
    disabled: false,
    message: "Erro inesperado",
  },
};
