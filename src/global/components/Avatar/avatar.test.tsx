import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AvatarComponent } from ".";

describe("AvatarComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(
      <AvatarComponent
        label="Vinicius"
        alt="Imagem para teste"
        src="https://avatars.githubusercontent.com/u/84112057?v=4"
      />
    );

    const groupELement = getByTestId("group-element");
    const avatarElement = getByTestId("avatar-element");
    const thumbnailElement = getByTestId("thumbnail-element");

    expect(groupELement).toBeInTheDocument();
    expect(avatarElement).toBeInTheDocument();
    expect(thumbnailElement).toBeInTheDocument();
  });

  it("should render with correct src and alt", () => {
    const { getByTestId } = render(
      <AvatarComponent
        isProfileSquare
        alt="Imagem para teste"
        src="https://avatars.githubusercontent.com/u/84112057?v=4"
      />
    );

    const avatarElement = getByTestId("thumbnail-element");

    expect(avatarElement).toHaveAttribute("alt", "Imagem para teste");
    expect(avatarElement).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/84112057?v=4"
    );
  });
});
