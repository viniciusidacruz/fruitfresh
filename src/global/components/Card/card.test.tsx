import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CardComponent } from ".";

describe("CardComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(
      <CardComponent
        price={""}
        description={""}
        title={""}
        image={""}
        href={""}
        target={""}
        favorite={false}
      />
    );
    const groupELement = getByTestId("group-element");
    const buttonDeletElement = getByTestId("buttonDelet-element");
    const iconTrashElement = getByTestId("iconTrash-element");
    const discountElement = getByTestId("discount-element");
    const linkElement = getByTestId("link-element");
    const imageElement = getByTestId("image-element");
    const titleElement = getByTestId("title-element");
    const categorysElement = getByTestId("categorys-element");
    const descriptionElement = getByTestId("description-element");
    const priceElement = getByTestId("price-element");
    const buttonAddElement = getByTestId("buttonAdd-element");
    const buttonFavoriteElement = getByTestId("buttonFavorite-element");

    expect(groupELement).toBeInTheDocument();
    expect(buttonDeletElement).toBeInTheDocument();
    expect(iconTrashElement).toBeInTheDocument();
    expect(discountElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(categorysElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(buttonAddElement).toBeInTheDocument();
    expect(buttonFavoriteElement).toBeInTheDocument;
  });

  it("must be able to check whether or not category exists", () => {
    const categoryElement = "Categoria";
    const unknownElement = "Desconhecido";

    const { getByTestId, queryByTestId } = render(
      <CardComponent
        price={""}
        description={""}
        title={""}
        image={""}
        href={""}
        target={""}
        favorite={false}
        category={categoryElement || unknownElement}
      />
    );

    const categorysElement = getByTestId("categorys-element");
    const category = queryByTestId("category-element");
    const unknown = queryByTestId("unknown-element");

    expect(categorysElement).toBeInTheDocument();
    if (category) {
      expect(category).toHaveTextContent(categoryElement);
    } else if (unknown) {
      expect(unknown).toHaveTextContent(unknownElement);
    } else {
      throw new Error(
        "Either categoryElement or unknownElement must be present."
      );
    }
  });
  it("should be able to change icon", () => {
    const { getByTestId } = render(
      <CardComponent
        price={""}
        description={""}
        title={""}
        image={""}
        href={""}
        target={""}
        favorite={false}
      />
    );
    const buttonFavoriteElement = getByTestId("buttonFavorite-element");
    const iconHeartFullElement = getByTestId("iconHeart-element");

    expect(iconHeartFullElement).toBeInTheDocument();

    fireEvent.click(buttonFavoriteElement);

    const iconHeartElement = getByTestId("iconHeartFull-element");

    expect(iconHeartElement).toBeInTheDocument();
  });
});
