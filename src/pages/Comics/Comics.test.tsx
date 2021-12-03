import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "../../testUtils/renderWithTheme";
import Comics from "./Comics";

import MockAdapter from "axios-mock-adapter";
import api from "../../service/api";

import { COMICS_RESPONSE_MOCK } from "../../testUtils/Mocks/comics";

const mockApi = new MockAdapter(api);

interface RenderComponentParams {
  isEmptyResponse: boolean;
};

/* mockApi.onGet(`https://gateway.marvel.com/v1/public/comics`).reply(200, COMICS_RESPONSE_MOCK); */

const renderComponent = async ({ isEmptyResponse }: RenderComponentParams) => {
  mockApi
    .onGet(`https://gateway.marvel.com/v1/public/comics`)
    .reply(200,
      isEmptyResponse
        ? []
        : COMICS_RESPONSE_MOCK
    );

  await waitFor(async() => {
    renderWithTheme(<Comics />);
  });
};

describe("ComicsPage", () => {
  test("Should render ComicsPage with data", async () => {
    await renderComponent({ isEmptyResponse: false })

  })

  test("Should render ComicsPage without data", async () => {
    await renderComponent({ isEmptyResponse: true })

  })
})