import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../../Footer";

export function DefaultLayoutComponent() {
  return (
    <Fragment>
      <header data-testid="header-element">Header</header>

      <Outlet />

      <footer data-testid="footer-element">
        <FooterComponent />
      </footer>
    </Fragment>
  );
}
