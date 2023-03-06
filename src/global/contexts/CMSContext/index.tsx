import { createContext } from "react";
import { useFirstPrismicDocument } from "@prismicio/react";

import { IContext, IPages, IProvider } from "./types";

export const CMSContext = createContext({} as IContext);

export function CMSProvider({ children }: IProvider) {
  const [document] = useFirstPrismicDocument();

  const pages: IPages = {
    home: document?.data,
  } as IPages;

  return (
    <CMSContext.Provider value={{ pages }}>{children}</CMSContext.Provider>
  );
}
