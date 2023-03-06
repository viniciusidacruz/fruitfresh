import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ButtonComponent } from ".";

describe("ButtonComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(
      <ButtonComponent
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        }
        text="Add to Cart"
      />
    );
    const buttonElement = getByTestId("button-element");
    const iconElement = getByTestId("icon-element");
    const textElement = getByTestId("text-element");

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
  it("should render elements", () => {
    const { getByTestId, debug } = render(
      <ButtonComponent
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        }
        text="Add to Cart"
        disable
      />
    );
    const buttonElement = getByTestId("button-element");
    const disabledElement = getByTestId("buttonClassName-element");
    expect(buttonElement).toBeInTheDocument();
    expect(disabledElement).toBeInTheDocument();
  });
});
