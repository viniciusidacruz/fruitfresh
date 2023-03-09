import { Meta } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import { CardComponent } from ".";

export default {
  title: "Components/Card",
  component: CardComponent,
} as Meta;

export const Default = () => (
  <BrowserRouter>
    <IntlProvider locale="pt-br">
      <CardComponent
        href=""
        price={3.9}
        discount={5}
        title="Maça Red"
        favorite={false}
        category="Frutas"
        alternativeText="Imagem de duas maçãs inteiras e uma cortada ao meio"
        image="https://superprix.vteximg.com.br/arquivos/ids/207526-600-600/Maca-Red.png?v=637855424537770000"
        description="lorem ipsum dolor sit amet, consectetur adipis text, sed diam nonumy eirmod tempor  invidunt ut labore et dolore magna aliquy consectetur adipis text, sed diam nonumy eirmod tempor  invidunt ut labore et dolore magna aliquy"
      />
    </IntlProvider>
  </BrowserRouter>
);
