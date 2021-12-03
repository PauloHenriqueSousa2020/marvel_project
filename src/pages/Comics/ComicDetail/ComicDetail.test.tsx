import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../testUtils/renderWithTheme";
import ComicDetail from "./ComicDetail";

xdescribe("ComicsPage", () => {
  test("Should render ComicsPage correctly", async() => {
    renderWithTheme(<ComicDetail />);
  })
})