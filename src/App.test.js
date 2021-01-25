import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<App />", () => {
  it("affiche une ardoise vierge", () => {
    const app = render(<App />);

    const participants = app.getByTestId("participants");
    expect(participants).toHaveTextContent(
      "Aucun participant"
    );

    const depenses = app.getByTestId("depenses");
    expect(depenses).toHaveTextContent("Aucune dépense");

    const creances = app.getByTestId("creances");
    expect(creances).toHaveTextContent("Aucune créance");
  });
});
