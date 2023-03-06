import { PrismicProvider } from "@prismicio/react";

import { AppRoutes } from "@configs/routes";
import { client } from "@configs/libs/prismic";
import { CMSProvider } from "@contexts/CMSContext";

export function App() {
  return (
    <PrismicProvider client={client}>
      <CMSProvider>
        <AppRoutes />
      </CMSProvider>
    </PrismicProvider>
  );
}
