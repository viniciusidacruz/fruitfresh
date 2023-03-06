import { useContext } from "react";

import { CMSContext } from "@contexts/CMSContext";

export function useCMS() {
  return useContext(CMSContext);
}
