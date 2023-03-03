import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { DefaultLayoutComponent } from ".";

describe("DefaultLayoutComponent", () => {
  it("should render elements in layout", () => {
    const { getByTestId } = render(<DefaultLayoutComponent />);

    const headerElement = getByTestId("header-element");
    const footerElement = getByTestId("footer-element");

    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});
