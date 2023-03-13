import { Meta } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import { LogoComponent } from ".";

export default {
  title: "Components/Logo",
  component: LogoComponent,
} as Meta;

export const Default = () => (
  <BrowserRouter>
    <IntlProvider locale="pt-br">
      <LogoComponent
        href="/home"
        alternativeText="Imagem de uma melancia cortada ao meio"
        image="./logo.png"
        label="Fruit Fresh"
      />
    </IntlProvider>
  </BrowserRouter>
);
