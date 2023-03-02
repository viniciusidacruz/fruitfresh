import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ELEMENTS_PATHS } from "./paths";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {ELEMENTS_PATHS.map((page) => (
          <Route path={page.path} key={page.id} element={page.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
