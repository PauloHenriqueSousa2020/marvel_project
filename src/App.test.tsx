
import { renderWithTheme } from "./testUtils/renderWithTheme";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App Page", () => {
  test("Should render App correctly", async () => {
    renderWithTheme(<App />);

    expect(await screen.findByText("MARVEL")).toHaveStyle({
      color: "#000000"
    });

    userEvent.click(await screen.findByTestId("switch"));
    
    expect(await screen.findByText("MARVEL")).toHaveStyle({
      color: "#FFFFFF"
    });

    userEvent.click(await screen.findByTestId("switch"));
  });
})