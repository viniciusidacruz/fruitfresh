import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { IntlProvider } from "react-intl";

import { LogoComponent } from ".";
import { render } from "@testing-library/react";

const makeSut = () => {
  return (
    <BrowserRouter>
      <IntlProvider locale="pt-br">
        <LogoComponent
          href="/"
          alternativeText="Imagem de uma melancia cortada ao meio"
          image="./logo.png"
          label="FruitFresh"
        />
      </IntlProvider>
    </BrowserRouter>
  );
};

describe("LogoComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(makeSut());

    const groupElement = getByTestId("group-element");
    const linkElement = getByTestId("link-element");
    const imageElement = getByTestId("image-element");
    const labelElement = getByTestId("label-element");

    expect(groupElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
