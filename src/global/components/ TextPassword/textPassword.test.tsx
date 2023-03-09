import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TextPasswordComponent } from ".";

describe("TextPasswordComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(<TextPasswordComponent />);

    const groupELement = getByTestId("group-element");
    const inputElement = getByTestId("input-element");
    const ButtonElement = getByTestId("button-element");

    expect(groupELement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(ButtonElement).toBeInTheDocument();
  });

  it("should render with correct label", () => {
    const { getByTestId } = render(<TextPasswordComponent label="password" />);

    const labelElement = getByTestId("label-element");

    expect(labelElement).toHaveTextContent("password");
  });

  it("should be able to change icon and input type", () => {
    const { getByTestId } = render(<TextPasswordComponent />);

    const ButtonElement = getByTestId("button-element");
    const iconLineEyeInvisible = getByTestId("iconLine-eye-invisible");

    expect(iconLineEyeInvisible).toBeInTheDocument();

    fireEvent.click(ButtonElement);

    const iconLineEye = getByTestId("iconLine-eye");

    expect(iconLineEye).toBeInTheDocument();
  });
});
