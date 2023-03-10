import { BrowserRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CardComponent } from ".";
import { IntlProvider } from "react-intl";

const makeSut = () => {
  return (
    <BrowserRouter>
      <IntlProvider locale="pt-br">
        <CardComponent
          price={3.9}
          href="/products"
          favorite={false}
          inStock={true}
          category="Frutas"
          title="Nome do produto"
          alternativeText="Imagem de duas maçãs inteiras e uma cortada ao meio"
          description="Esse paragrafo servira para testes da descrição do produto"
          image="https://superprix.vteximg.com.br/arquivos/ids/207526-600-600/Maca-Red.png?v=637855424537770000"
        />
      </IntlProvider>
    </BrowserRouter>
  );
};

describe("CardComponent", () => {
  it("should render elements", () => {
    const { getByTestId, getByText } = render(makeSut());

    const categoryElement = getByText("Frutas");
    const linkElement = getByTestId("link-element");
    const groupElement = getByTestId("group-element");
    const imageElement = getByTestId("image-element");
    const titleElement = getByText("Nome do produto");
    const buttonAddElement = getByTestId("buttonAdd-element");
    const descriptionElement = getByText(
      "Esse paragrafo servira para testes da descrição do produto"
    );
    const buttonFavoriteElement = getByTestId("buttonFavorite-element");
    const inStockElement = getByText("Em estoque" || "Produto Indisponivel");

    expect(linkElement).toBeInTheDocument();
    expect(groupElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
    expect(buttonAddElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(buttonFavoriteElement).toBeInTheDocument();
    expect(inStockElement).toBeInTheDocument();
  });

  it("must be able to check whether or not category exists", () => {
    const { queryByText } = render(makeSut());

    const categoryElement = queryByText("Frutas");

    expect(categoryElement).toBeInTheDocument();
  });

  it("should be able to change icon", () => {
    const { getByTestId } = render(makeSut());

    const iconHeartFullElement = getByTestId("iconHeart-element");
    const buttonFavoriteElement = getByTestId("buttonFavorite-element");

    expect(iconHeartFullElement).toBeInTheDocument();

    fireEvent.click(buttonFavoriteElement);

    const iconHeartElement = getByTestId("iconHeartFull-element");

    expect(iconHeartElement).toBeInTheDocument();
  });

  it("should field discount to be null", () => {
    const { queryByTestId } = render(makeSut());

    const discountElement = queryByTestId("discount-element");

    expect(discountElement).toBeNull();
  });
});
