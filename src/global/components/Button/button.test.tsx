import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ButtonComponent } from ".";

describe("ButtonComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(
      <ButtonComponent icon={<h1>test icon</h1>} text="Add to Cart" />
    );
    const buttonElement = getByTestId("button-element");
    const iconElement = getByTestId("icon-element");
    const textElement = getByTestId("text-element");

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it("should render isLoading", () => {
    const { getByTestId, debug } = render(
      <ButtonComponent icon={<h1>test icon</h1>} text="Add to Cart" isLoading />
    );
    const buttonElement = getByTestId("button-element");
    const loadingElement = getByTestId("loading-element");

    expect(buttonElement).toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
  });
});
