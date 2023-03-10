import { Meta } from "@storybook/react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import { FooterComponent } from ".";

export default {
  title: "Components/Footer",
  component: FooterComponent,
} as Meta;

export const Default = () => (
  <BrowserRouter>
    <IntlProvider locale="pt-br">
      <FooterComponent />
    </IntlProvider>
  </BrowserRouter>
);
