import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ELEMENTS_PATHS } from "./paths";

import { DefaultLayoutComponent } from "@global/components";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayoutComponent />}>
          {ELEMENTS_PATHS.map((page) => (
            <Route path={page.path} key={page.id} element={page.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
