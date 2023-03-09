import { TiShoppingCart } from "react-icons/ti";
import { Meta, StoryObj } from "@storybook/react";

import { ButtonComponent } from ".";
import { IComponentParams } from "./types";

export default {
  title: "Components/Button",
  component: ButtonComponent,
} as Meta;

export const Default: StoryObj<IComponentParams> = {
  args: {
    icon: <TiShoppingCart />,

    text: "Add to Cart",
    disabled: false,
    isLoading: false,
  },
};
