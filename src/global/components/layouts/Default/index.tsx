import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export function DefaultLayoutComponent() {
  return (
    <Fragment>
      <header>Header</header>

      <Outlet />

      <footer>Footer</footer>
    </Fragment>
  );
}
