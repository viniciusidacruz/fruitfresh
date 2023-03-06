import { Meta, StoryObj } from "@storybook/react";
import { AvatarComponent } from ".";
import { IComponentParams } from "./types";

export default {
  title: "Components/Avatar",
  component: AvatarComponent,
} as Meta;

export const Default: StoryObj<IComponentParams> = {
  args: {
    isprofilesquare: true,
    label: "Vinicius",
    alt: "Texto alternativo para testes",
    src: "https://avatars.githubusercontent.com/u/84112057?v=4",
  },
};
