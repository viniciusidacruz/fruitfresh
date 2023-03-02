import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export function DefaultLayoutComponent() {
  return (
    <Fragment>
      <header data-testid="header-element">Header</header>

      <Outlet />

      <footer data-testid="footer-element">Footer</footer>
    </Fragment>
  );
}
