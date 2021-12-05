import App from "./App";

import { renderWithTheme } from "./testUtils/renderWithTheme";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import light from "./styles/themes/light";

const Component = () => {
  localStorage.setItem("theme", JSON.stringify(light));

  return (<App />);
}

describe("App Page", () => {
  test("Should render App with localStorage set correctly", async () => {
    renderWithTheme(<Component />);

    expect(await screen.findByText("MARVEL")).toHaveStyle({
      color: "#000000"
    });

    userEvent.click(await screen.findByTestId("switch"));
    
    expect(await screen.findByText("MARVEL")).toHaveStyle({
      color: "#FFFFFF"
    });

    userEvent.click(await screen.findByTestId("switch"));
  });

  test("Should render App without localStorage set correctly", async () => {
    localStorage.clear();
    renderWithTheme(<App />);


  });
})