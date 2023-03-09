import { IntlProvider } from "react-intl";
import { PrismicProvider } from "@prismicio/react";

import { AppRoutes } from "@configs/routes";
import { client } from "@configs/libs/prismic";
import { CMSProvider } from "@contexts/CMSContext";

export function App() {
  return (
    <PrismicProvider client={client}>
      <CMSProvider>
        <IntlProvider locale="pt-br">
          <AppRoutes />
        </IntlProvider>
      </CMSProvider>
    </PrismicProvider>
  );
}
