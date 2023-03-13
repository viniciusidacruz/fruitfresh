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
      <LogoComponent />
    </IntlProvider>
  </BrowserRouter>
);
