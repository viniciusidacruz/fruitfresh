import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TextAreaComponent } from ".";

describe("TextAreaComponent", () => {
  it("should render elements", () => {
    const { getByTestId } = render(
      <TextAreaComponent
        label="Project Description"
        placeholder=""
        disabled={false}
      />
    );

    const groupELement = getByTestId("group-element");
    const labelElement = getByTestId("label-element");
    const textAreaElement = getByTestId("textArea-element");

    expect(groupELement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(textAreaElement).toBeInTheDocument();
  });
});
