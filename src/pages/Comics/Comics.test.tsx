import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../testUtils/renderWithTheme";
import Comics from "./Comics";

import MockAdapter from "axios-mock-adapter";
import api from "../../service/api";

const mockApi = new MockAdapter(api);

mockApi
  .onGet(`https://gateway.marvel.com/v1/public/comics`)
  .reply(200, { data: { results: []}});

describe("ComicsPage", () => {
  test("Should render ComicsPage correctly", async() => {
    renderWithTheme(<Comics />);

    await screen.findByText("Busque os quadrinhos da Marvel");
  })
})