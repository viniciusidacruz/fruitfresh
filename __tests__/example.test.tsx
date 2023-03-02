import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Sum", () => {
  expect(1 + 1).toEqual(2);
});

describe("Test DOM", () => {
  it("should render heading level one", () => {
    const { getByText } = render(<h1>Hello World</h1>);

    const headingLevelOne = getByText("Hello World");

    expect(headingLevelOne).toBeInTheDocument();
  });
});
