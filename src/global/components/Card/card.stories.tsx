import { Meta, StoryObj } from "@storybook/react";
import { CardComponent } from ".";
import { IcomponentParams } from "./types";

export default {
  title: "Components/Card",
  component: CardComponent,
} as Meta;

export const Default: StoryObj<IcomponentParams> = {
  args: {
    price: "R$ 3,90",
    discount: "-10%",
    description: "Preço por kg",
    priceDiscount: "R$ 3,50",
    title: "Maça Red",
    image:
      "https://superprix.vteximg.com.br/arquivos/ids/207526-600-600/Maca-Red.png?v=637855424537770000",
    href: "",
    target: "",
    category: "Frutas",
    favorite: false,
  },
};
