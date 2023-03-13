import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { IntlProvider } from "react-intl";

import { LogoComponent } from ".";
import { render } from "@testing-library/react";

const makeSut = () => {
  return (
    <BrowserRouter>
      <IntlProvider locale="pt-br">
        <LogoComponent />
      </IntlProvider>
    </BrowserRouter>
  );
};

describe("LogoComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(makeSut());

    const linkElement = getByTestId("link-element");
    const imageElement = getByTestId("image-element");
    const labelElement = getByTestId("label-element");

    expect(linkElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
