
import { renderWithTheme } from "../../testUtils/renderWithTheme";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Layout from "./";

describe("Layout Component", () => {
  test("Should render Layout and change theme correctly", async () => {
    const handleSwitchTheme = jest.fn();

    renderWithTheme(<Layout handleSwitchTheme={handleSwitchTheme} children={<></>} />);
    
    await screen.findByText(/marvel/i)
    userEvent.click(await screen.findByTestId("switch"));

    expect(handleSwitchTheme).toHaveBeenCalled();
  });
})