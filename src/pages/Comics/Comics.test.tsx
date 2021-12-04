import params from "../../service/global";

import { renderWithTheme } from "../../testUtils/renderWithTheme";

import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Comics from "./Comics";

import MockAdapter from "axios-mock-adapter";
import api from "../../service/api";

import { RESPONSE_COMICS_MOCK, SEARCH_COMICS_MOCK } from "../../testUtils/Mocks/comics";

const mockApi = new MockAdapter(api);

interface RenderComponentParams {
  isEmptyResponse: boolean;
};

const renderComponent = async ({ isEmptyResponse }: RenderComponentParams) => {
  mockApi
    .onGet(`https://gateway.marvel.com/v1/public/comics`)
    .reply(200,
      isEmptyResponse
        ? []
        : RESPONSE_COMICS_MOCK
    );

  await waitFor(async () => {
    renderWithTheme(<Comics />);
  });
};

describe("ComicsPage", () => {
  test("Should render ComicsPage with data", async () => {
    await renderComponent({ isEmptyResponse: false })

    await screen.findByRole('img', { name: /marvel previews/i });
    await screen.findByText(/marvel previews/i);

    await screen.findByRole('img', { name: /startling stories/i });
    await screen.findByText(/startling stories/i);

    await screen.findByRole('img', { name: /ant man/i });
    await screen.findByText(/ant man/i);

    await screen.findByRole('img', { name: /gun theory/i });
    await screen.findByText(/gun theory/i);

    expect(await screen.findAllByText(/ver detalhes/i)).toHaveLength(4);
  });

  test("Should render ComicsPage without data", async () => {
    await renderComponent({ isEmptyResponse: true });

    await screen.findByRole('heading', { name: /nenhum quadrinho foi encontrado na busca\./i });
  });

  test("Should search Comics correctly", async () => {
    await renderComponent({ isEmptyResponse: false })

    userEvent.type(
      await screen.findByPlaceholderText("Busque um quadrinho pelo nome"),
      "Marvel"
    );

    let data = {};
    mockApi.onGet(`https://gateway.marvel.com/v1/public/comics`).reply((config) => {
      data = config.params;
      return [200, SEARCH_COMICS_MOCK];
    });

    await waitFor(
      () => {
        expect(data).toEqual({
          apikey: params.apikey,
          hash: params.hash,
          limit: 20,
          offset: 0,
          titleStartsWith: "Marvel",
          ts: params.ts
        });
      },
      {
        timeout: 1500,
      }
    );

    userEvent.click(
      await screen.findByRole('button', { name: /limpar/i })
    );

    mockApi.onGet(`https://gateway.marvel.com/v1/public/comics`).reply((config) => {
      data = config.params;
      return [200, RESPONSE_COMICS_MOCK];
    });

    await waitFor(
      () => {
        expect(data).toEqual({
          apikey: params.apikey,
          hash: params.hash,
          limit: 20,
          offset: 0,
          ts: params.ts
        });
      },
      {
        timeout: 1500,
      }
    );
  });

  test("Should select comics and see details correctly", async () => {
    await renderComponent({ isEmptyResponse: false });

    const comic = await screen.findByRole('img', { name: /marvel previews/i });
    userEvent.click(comic);
    userEvent.click(comic);

    const seeDetails = await screen.findAllByText(/ver detalhes/i);
    userEvent.click(seeDetails[0]);

    expect(await screen.findByRole('button', { name: /fechar/i })).toBeInTheDocument();

    userEvent.click(await screen.findByRole('button', { name: /fechar/i }));

    expect(screen.queryByRole('button', { name: /fechar/i })).not.toBeInTheDocument();
  });
})