import Pagination from "./index";
import { renderWithTheme } from "../../testUtils/renderWithTheme";

import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

describe("Pagination Component", () => {
  it("should render Pagination with offSet 0", async () => {
    const setOffset = jest.fn();

    renderWithTheme(<Pagination limit={20} totalPages={20} offset={0} setOffset={setOffset} />);
    await screen.findByRole('button', { name: "1" })
    await screen.findByRole('button', { name: "9" })

    userEvent.click(await screen.findByRole('button', { name: /9/i }));
  });

  it("should render Pagination with offSet 200", async () => {
    const setOffset = jest.fn();

    renderWithTheme(<Pagination limit={20} totalPages={20} offset={200} setOffset={setOffset} />);
    
    expect(screen.queryByRole('button', { name: "1" })).not.toBeInTheDocument();
    await screen.findByRole('button', { name: "10" });

    userEvent.click(await screen.findByRole('button', { name: /10/i }));
  });

  it("should render Pagination with offSet 380", async () => {
    const setOffset = jest.fn();

    renderWithTheme(<Pagination limit={20} totalPages={20} offset={380} setOffset={setOffset} />);

    expect(screen.queryByRole('button', { name: "10" })).not.toBeInTheDocument();
    await screen.findByRole('button', { name: "20" });
    expect(screen.queryByRole('button', { name: "21" })).not.toBeInTheDocument();
  });
});
