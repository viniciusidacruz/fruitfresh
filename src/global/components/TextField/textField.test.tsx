import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TextFieldComponent } from ".";

describe("TextFieldComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(<TextFieldComponent />);

    const groupELement = getByTestId("group-element");
    const inputElement = getByTestId("input-element");

    expect(groupELement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("should field icon to be null", () => {
    const { queryByTestId } = render(<TextFieldComponent />);

    const iconELement = queryByTestId("icon-element");

    expect(iconELement).toBeNull();
  });
});
