import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TextPasswordComponent } from ".";

describe("TextpasswordComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(<TextPasswordComponent />);

    const groupELement = getByTestId("group-element");
    const inputElement = getByTestId("input-element");
    const iconElement = getByTestId("icon-element");

    expect(groupELement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it("should render with correct label", () => {
    const { getByTestId } = render(<TextPasswordComponent label="password" />);

    const labelElement = getByTestId("label-element");

    expect(labelElement).toHaveTextContent("password");
  });

  it("should be able to change icon and input type", () => {
    const { getByTestId } = render(<TextPasswordComponent />);

    const iconElement = getByTestId("icon-element");
    const iconlineEyeInvisible = getByTestId("iconline-eye-invisible");

    expect(iconlineEyeInvisible).toBeInTheDocument();

    fireEvent.click(iconElement);

    const iconlineEye = getByTestId("iconline-eye");

    expect(iconlineEye).toBeInTheDocument();
  });
});