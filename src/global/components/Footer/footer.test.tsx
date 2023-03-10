import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FooterComponent } from ".";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

describe("FooterComponent", () => {
  const makeSut = () => {
    return (
      <BrowserRouter>
        <IntlProvider locale="pt-br">
          <FooterComponent />
        </IntlProvider>
      </BrowserRouter>
    );
  };
  it("should render elements", () => {
    const { getByTestId } = render(makeSut());

    const listColunCompany = getByTestId("list-colunCompany");
    const listColunHelp = getByTestId("list-colunHelp");
    const listColunOlineStore = getByTestId("list-colunOlineStore");
    const listColunSubscribe = getByTestId("list-colunSubscribe");
    const titleColunCompany = getByTestId("title-colunCompany");
    const titleColunHelp = getByTestId("title-colunHelp");
    const titleColunOnlineStore = getByTestId("title-colunOnlineStore");
    const titleColunSubscribe = getByTestId("title-colunSubscribe");
    const inputColunSubscribe = getByTestId("input-colunSubscribe ");
    const buttonColunSubscribe = getByTestId("button-colunSubscribe");
    const linksColunSubscribe = getByTestId("links-colunSubscribe");
    const iconFacebookColunSubscribe = getByTestId(
      "iconFacebook-colunSubscribe"
    );
    const iconInstagramColunSubscribe = getByTestId(
      "iconInstagram-colunSubscribe"
    );

    expect(listColunCompany).toBeInTheDocument();
    expect(listColunHelp).toBeInTheDocument();
    expect(listColunOlineStore).toBeInTheDocument();
    expect(listColunSubscribe).toBeInTheDocument();
    expect(titleColunCompany).toBeInTheDocument();
    expect(titleColunHelp).toBeInTheDocument();
    expect(titleColunOnlineStore).toBeInTheDocument();
    expect(titleColunSubscribe).toBeInTheDocument();
    expect(inputColunSubscribe).toBeInTheDocument();
    expect(buttonColunSubscribe).toBeInTheDocument();
    expect(linksColunSubscribe).toBeInTheDocument();
    expect(iconFacebookColunSubscribe).toBeInTheDocument();
    expect(iconInstagramColunSubscribe).toBeInTheDocument();
  });
});
